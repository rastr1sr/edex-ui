![eDEX-UI](media/logo.png)

eDEX-UI is a fullscreen, cross-platform terminal emulator and system monitor that looks and feels like a sci-fi computer interface.

This is a personal fork of [GitSquared/edex-ui](https://github.com/GitSquared/edex-ui), which was archived in October 2021.

Inspired by the [TRON Legacy movie effects](https://gmunk.com/TRON-Board-Room) and [DEX-UI](https://github.com/seenaburns/dex-ui).

## Features
- Fully featured terminal emulator with tabs, colors, mouse events, and support for `curses` and `curses`-like applications.
- Real-time system (CPU, RAM, swap, processes) and network (GeoIP, active connections, transfer rates) monitoring.
- Works on touch displays, with an on-screen keyboard.
- Directory viewer that follows the CWD (current working directory) of the terminal.
- Advanced customization using themes, on-screen keyboard layouts, CSS injections. The `tron-notype` theme hides the keyboard and file browser.
- Optional sound effects for maximum hollywood hacking vibe.

## Running from source
- clone the repository
- `npm install` (this also installs the app's own dependencies in `src/`)
- `npm run start`

#### Building
Note: Due to native modules, you can only build targets for the host OS you are using.

- `npm install`
- `npm run build-linux` or `build-windows` or `build-darwin`

The script will create distributable assets in the `dist` folder. Windows builds target x64 and ARM64.

## Credits
eDEX-UI's source code was primarily written by [Squared](https://github.com/GitSquared). It would never have existed without the work of [Seena](https://github.com/seenaburns) on DEX-UI.

[PixelyIon](https://github.com/PixelyIon) helped with Windows compatibility early in the project.

[IceWolf](https://soundcloud.com/iamicewolf) composed the sound effects on v2.1.x and above.

Huge thanks to [Rob "Arscan" Scanlon](https://github.com/arscan) for making the fantastic [ENCOM Globe](https://github.com/arscan/encom-globe), also inspired by the TRON: Legacy movie, and distributing it freely.

This project uses a bunch of open-source libraries, frameworks and tools, namely [xterm.js](https://github.com/xtermjs/xterm.js), [systeminformation](https://github.com/sebhildebrandt/systeminformation) and [SmoothieCharts](https://github.com/joewalnes/smoothie).

Licensed under the GPLv3.0. See [LICENSE](LICENSE).
