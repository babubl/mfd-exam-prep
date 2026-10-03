# MFD Exam Prep: NISM Series V-A

Free, open study material for the **NISM Series V-A: Mutual Fund Distributors Certification Examination** (workbook edition: March 2026, revised, reflecting the SEBI (Mutual Funds) Regulations, 2026).

**Open the site:** https://babubl.github.io/mfd-exam-prep/

One app, four tabs:

| Tab | What it has |
| --- | --- |
| **Home** | What NISM V-A is, the exam format, who needs it, the steps from exam to ARN, how distributors earn, and the syllabus by marks, all from the March 2026 workbook. A checklist card fills in from your progress. |
| **Learn** | One-line, exam-focused revision notes for all 12 chapters: numbers, limits, timelines, formulas and traps. Mark each chapter as revised, then jump straight to its practice questions. |
| **Practice** | 534 chapter-wise questions (about 25 per 5% of exam weight) and 5 full mock exams of 100 questions each, weighted like the real paper. Practice mode shows the answer after each question; exam mode runs a 2-hour timer and marks at the end. Retry only the ones you got wrong. |
| **Progress** | Estimated exam score (latest chapter scores weighted by exam marks), chapters revised, mock history, recent attempts, plus export/import of your progress. |

**Progress saves automatically**: answers, position in a test, the exam timer, scores and history are kept in your browser. Close the tab and come back later to carry on where you left off. To move to another device or browser, use **Export** and **Import** on the Progress tab.

The notes are also available as a single page ([notes.html](notes.html)) and as Markdown ([notes.md](notes.md)).

## Exam at a glance

100 questions × 1 mark · 2 hours · pass mark 50% · no negative marking.

| Ch | Chapter | Weight |
| --- | --- | --- |
| 1 | Investment Landscape | 8 |
| 2 | Concept and Role of a Mutual Fund | 6 |
| 3 | Legal Structure of Mutual Funds | 4 |
| 4 | Legal and Regulatory Framework | 10 |
| 5 | Scheme Related Information | 10 |
| 6 | Fund Distribution and Channel Management | 6 |
| 7 | NAV, TER and Pricing of Units | 8 |
| 8 | Taxation | 4 |
| 9 | Investor Services | 15 |
| 10 | Risk, Return and Performance of Funds | 7 |
| 11 | Mutual Fund Scheme Performance | 7 |
| 12 | Mutual Fund Scheme Selection | 15 |

## How it works

Plain static files, no build step and no server:

- `index.html`: the app (Learn, Practice, Progress)
- `data.js`: all questions (chapter drills and mocks)
- `notes.js`: chapter notes used by the Learn tab
- `notes.html` / `notes.md`: the same notes as a standalone page and as Markdown

Progress is stored only in the visitor's browser (localStorage). Nothing is sent to a server. To run locally, open `index.html` in a browser.

## Disclaimer

This is an independent study aid. It is not affiliated with, or endorsed by, NISM, SEBI or AMFI. All questions are original and written from the public workbook; actual exam questions and wording will differ. Regulations, limits and tax rates change often, so always check the current NISM workbook, SEBI circulars and the AMFI tax corner. The Chapter 8 tax rates (for redemptions from 23 July 2024) come from the AMFI tax corner, not the workbook.

Corrections are welcome: open an issue or a pull request.
