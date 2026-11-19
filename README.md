# The World in One Day — 18 November 2026

[![make.fun](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![Rank](https://make.fun/badge/news-image-20261118/Nengyara2017/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118)
[![Reward](https://make.fun/badge/news-image-20261118/Nengyara2017/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118)

An editorial front page summing up the world news of **Wednesday, 18 November 2026** in a single 1024×1024 image, built for the [make.fun news-image-20261118 bounty](https://make.fun/bounty/news-image-20261118).

## The six stories

1. **Middle East — Iran Strikes Back in the Gulf.** US jets struck an Iranian Revolutionary Guard missile site on Qeshm Island; Iran then fired drones and missiles at US bases in Kuwait (Ali Al Salem) and Bahrain, which both countries say their air defences intercepted.
2. **Ukraine — Kerch Bridge Hit Again.** Ukraine struck the Crimea (Kerch) Bridge for a second day; part of its road span collapsed into the strait. Ukraine also hit two Russian oil refineries overnight.
3. **Diplomacy — Xi and Putin Meet Before Trump Summit.** Xi Jinping and Vladimir Putin met in Shenzhen ahead of Thursday's first three-way summit with Donald Trump at APEC; Xi pledged to stand against trade protectionism, and Trump arrived in Shenzhen, greeted by Xi.
4. **United States — Democrats Take the Senate.** Democrat Mary Peltola defeated Republican Senator Dan Sullivan in Alaska, the last undecided Senate race; Democrats take a 56–44 majority, their largest since 2009.
5. **Health — Ebola Passes 11,000 Cases.** The Ebola outbreak in DR Congo has more than doubled in three months to over 11,000 cases and 5,400 deaths, the UN said; nearly three in four infected children under 5 do not survive.
6. **Science — Voyager 1, One Light-Day Away.** Voyager 1 reached one light-day from Earth on Wednesday at 5:16 a.m. ET — about 16 billion miles — a distance no human-made object has crossed before, NASA's Jet Propulsion Laboratory said.

The **BY THE NUMBERS** strip: 11,000+ Ebola cases in DR Congo · 5,412 US measles cases in 2026 (measles-free status lost after 26 years) · 56–44 Democrats' Senate majority · 16bn miles, Voyager 1 from Earth.

## How it was made

`design.html` is a single self-contained page (inline CSS and inline SVG pictograms, system fonts, no external resources) laid out at exactly 1024×1024. It was rendered to `entry.png` with headless Chromium and checked visually for overlap, clipping and legibility.

## How to run

```sh
# Node 22
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

`main.ts` reads `entry.png.b64` (a single-line base64 encoding of the rendered `entry.png` beside it), decodes it, and writes `entry.png` into `$MAKEFUN_OUTPUT_DIR` (default `/output`). Running it twice produces byte-identical output.

## License

MIT — see [LICENSE](LICENSE).
