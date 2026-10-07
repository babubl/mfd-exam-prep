const fs=require('fs'), S=process.argv[2], OUT=process.argv[3];
let src=['maps-a.txt','maps-b.txt','maps-c.txt'].map(f=>fs.readFileSync(S+'/'+f,'utf8')).join('\n');
const ch3=fs.readFileSync(S+'/ch3.txt','utf8');
src=src.replace('@ch4','@ch3|3|4|Legal Structure of Mutual Funds|Every player in an Indian mutual fund, from SEBI and the sponsor down to CRISIL, CAMS and NMF-II.\n'+ch3+'\n\n@ch4');
const maps=[];
src.split(/^@/m).filter(x=>x.trim()).forEach(block=>{
  const lines=block.split('\n'); const [id,n,marks,title,sub]=lines.shift().split('|');
  const stack=[]; let root=null;
  lines.forEach((ln,i)=>{ if(!ln.trim()) return; const m=ln.match(/^( *)(.*)$/); const lvl=m[1].length/2;
    if(!Number.isInteger(lvl)) throw new Error(id+' bad indent line '+i+': '+ln);
    const node={n:m[2].trim()};
    if(lvl===0){ if(root) throw new Error(id+' two roots'); root=node; stack[0]=node; return; }
    const par=stack[lvl-1]; if(!par) throw new Error(id+' orphan: '+ln);
    (par.c=par.c||[]).push(node); stack[lvl]=node; stack.length=lvl+1; });
  const count=(d)=>1+(d.c||[]).reduce((a,x)=>a+count(x),0);
  console.log(id, 'branches', root.c.length, 'nodes', count(root));
  if(root.c.length>9) throw new Error(id+' >9 branches');
  maps.push({id,n:+n,marks:+marks,title,sub,root});
});
fs.writeFileSync(OUT,'/* Mind maps for every NISM V-A chapter (March 2026 workbook). Generated from indented outlines; each node is {n: label, c: children}. */\nwindow.MAPS='+JSON.stringify(maps)+';\n');
