# KanRS Client

The client used to render videos for KanRS (KanPots's Render Serivce).
This is a modified client from official ordr-client to use for KanRS, all credits goes to MasterIO

## What does this do?

KanRS is a free and easy-to-use service that allows you to render osu! videos of replays using [danser](https://github.com/Wieku/danser-go).

This is the client used to render the videos for KanRS.

Anyone with this client can contribute and render osu! videos for users of KanPots.

Please join the [o!rdr Discord server](https://discord.com/invite/vJpskzepCZ) if you want to apply or get more informations about the official client and updates [KanPots's Support Server](https://kanpots.ga/support) to ask any questions!.

## How to use

[NodeJS](https://nodejs.org) v17.1.0+ is required.

1. Clone the repository with `git clone`
2. Copy [FFmpeg binaries](https://www.ffmpeg.org/download.html) to files/danser IF you do not have it installed system-wide (create the directory if it does not exist)
3. Run `npm install` at the root folder of KanRS-client.
4. Run `node main.js` to launch KanRS-Client and follow the instructions. danser will be downloaded automatically.

## Config

-   encoder: can be "nvidia" (NVENC), "amd" (VCE), "intel" (QSV) or "cpu" (libx264).
-   motionBlurCapable: set this to true to get renders with motion blur.
-   usingOsuApi: set this to true to get renders that need a scoreboard and that therefore needs to fetch data from the osu! api (leaderboard). Set an osu! api key in osuApiKey to use this.
-   debugLogs: print more logs when disconnected from the o!rdr server.
-   deleteRenderedVideos: automatically delete rendered videos from your drive once they have been successfully sent to the o!rdr server.
-   renderOnInactivityOnly: connect to the o!rdr server once the computer is idle (check every 60 seconds if mouse or keyboard hasn't been touched for 30 seconds). To use this, you need to install the desktop-idle package with "npm install --save desktop-idle". On Windows, it needs Python and VS > 2016 to compile what it needs to work correctly. Check [this](https://github.com/bithavoc/node-desktop-idle) for more informations about this package. Won't work on precompiled builds for the moment.
