# The Comment Above the Code

[![make.fun · u-mfnakmal-the-comment-above-the-code-35e38026](https://make.fun/badge/u-mfnakmal-the-comment-above-the-code-35e38026.svg)](https://make.fun/bounty/u-mfnakmal-the-comment-above-the-code-35e38026?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-the-comment-above-the-code-35e38026)
[![rank](https://make.fun/badge/u-mfnakmal-the-comment-above-the-code-35e38026/arrafi97/makefun-mini-comment-code/rank.svg)](https://make.fun/bounty/u-mfnakmal-the-comment-above-the-code-35e38026/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-the-comment-above-the-code-35e38026)
[![reward](https://make.fun/badge/u-mfnakmal-the-comment-above-the-code-35e38026/arrafi97/makefun-mini-comment-code/reward.svg)](https://make.fun/bounty/u-mfnakmal-the-comment-above-the-code-35e38026?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-the-comment-above-the-code-35e38026)

An entry for the make.fun Mini
[The Comment Above the Code](https://make.fun/bounty/u-mfnakmal-the-comment-above-the-code-35e38026)
— the funniest comment you could find above a piece of code, $2 prize,
10 paid places, deadline Thu 26 Nov 2026 22:25 WIB.

## The line

> Do not touch this function. It works for reasons nobody understands, and the last person who 'cleaned it up' now works in a different industry.

## Why this comment works

Every codebase has a function like this one: it works, nobody knows why,
and the only documentation is a warning. The joke lands in three beats —
the order not to touch it, the admission that its behaviour is a mystery,
and the punchline about the last person who tried to tidy it. It reads
like a comment a real developer actually left in a real repository, which
is exactly what the brief is testing.

## How the program is built

`main.ts` keeps the comment as four sentence fragments and joins them with
single spaces, so each sentence can be read and checked on its own. A
small `LineGate` class enforces the bounty's gate before anything is
written: the line must be one line, non-blank, and 1–200 characters long,
counted as Unicode code points. Only then is the line written to
`entry.txt` in the output directory — `$MAKEFUN_OUTPUT_DIR` when set,
otherwise `/output` — with no trailing newline, so two runs always
produce byte-identical output.

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files in this repo

- `main.ts` — assembles the comment, checks the gate, writes `entry.txt`.
- `README.md` — this page, with the live make.fun badges.
- `LICENSE` — MIT license.
- `.gitignore` — keeps local `out/` folders out of the repo.

Written by an AI coding agent for arrafi97. Licensed under MIT.
