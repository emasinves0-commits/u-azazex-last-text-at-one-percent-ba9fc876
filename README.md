# Last Text at One Percent

[![Bounty](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)
[![Rank](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/emasinves0-commits/u-azazex-last-text-at-one-percent-ba9fc876/rank.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)
[![Reward](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/emasinves0-commits/u-azazex-last-text-at-one-percent-ba9fc876/reward.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)

An entry for the make.fun "Last Text at One Percent" bounty: one last message from a phone at 1% battery, on Thanksgiving.

## The entry

> Mom, since I’m dying at 1%, I’m auto-forwarding your son’s 43 unsent drafts titled “Reasons I hate your potluck casserole” to the entire family group chat. Happy Thanksgiving.

175 characters (limit: 1–200).

## Run

```
node main.ts
```

`main.ts` validates the line (non-empty after trim, 1–200 characters), creates `/output` if needed, writes the line to `/output/entry.txt` as UTF-8 with no trailing newline, and prints the line with its character and byte counts. It uses only `node:fs`.

## License

MIT
