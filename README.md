# MFD Exam Prep: NISM Series V-A

Free, open study material for the **NISM Series V-A: Mutual Fund Distributors Certification Examination** (workbook edition: November 2025, for exams from 15 January 2026).

**Open the site:** https://babubl.github.io/mfd-exam-prep/

| Page | What it has |
| --- | --- |
| [Practice drill](index.html) | 534 chapter-wise questions across all 12 chapters (about 25 per 5% of exam weight) and 5 full mock exams of 100 questions each, weighted like the real paper. Practice mode shows the answer after each question; exam mode runs a 2-hour timer and marks at the end. Results show a topic- or chapter-wise breakdown and let you retry only the questions you got wrong. |
| [Quick revision](notes.html) | One-line, exam-focused facts for every chapter: numbers, limits, timelines, formulas and common traps. Also available as [notes.md](notes.md). |

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

- `index.html`: the practice drill app
- `data.js`: all questions (chapter drills and mocks)
- `notes.html` / `notes.md`: revision notes

Scores are stored only in the visitor's browser (localStorage). To run locally, open `index.html` in a browser.

## Disclaimer

This is an independent study aid. It is not affiliated with, or endorsed by, NISM, SEBI or AMFI. All questions are original and written from the public workbook; actual exam questions and wording will differ. Regulations, limits and tax rates change often, so always check the current NISM workbook, SEBI circulars and the AMFI tax corner. The Chapter 8 tax rates (for redemptions from 23 July 2024) come from the AMFI tax corner, not the workbook.

Corrections are welcome: open an issue or a pull request.
