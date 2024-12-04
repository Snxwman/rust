# Rust
My collection of files and scripts for the game Rust.

## Manifest

| Directory             |  Contents                                                         |
| ---------             |  --------                                                         |
| `docs`                |  Markdown documents with documentation about the game             |
| `instruments`         |  Midi files of songs that can be played on in-game instruments    |
| `rustplusbot`         |                                                                   |
| `rustplusbot/plugins` |  Custom plugins for rustplusbot                                   |
| `settings`            |  Back up of `cfg` files                                           |
| `settings/conveyors`  |  Back up of `json` conveyor filters                               |

`restore.ps1` - A script to automatically place all the files in this repo into their correct locations

`checkchanges.ps1` - A script that checks Rust's game files for diffs to this repo and add the changes back to this repo

### Rustplusbot

#### rustplusbot/plugins

| File                  | Feature                                                               |
| ----                  | -------                                                               |
| `messagerouter.js`    | Routes messages to the configured discord channel                     |
| `raidodds.js`         | 8-ball-like command that foretells your raid success                  |
| `timenotif.js`        | Periodically sends a message to teamchat, reminding you of the time   |

### Settings

| File                  | Contents                                                              |
| ----                  | --------                                                              |
| `client.cfg`          | Client configuration (game settings, *except keybinds*)               |
| `client_default.cfg`  | Default Rust settings                                                 |
| `favorites.cfg`       | Favorite servers                                                      |
| `keys.cfg`            | Keybinds (includes binds from the menu and binds set via the console) |
| `keys_default.cfg`    | Default Rust keybinds                                                 |

These files should be placed in `C:\Program Files(x86)\Steam\steamapps\common\Rust\cfg`

The following files **should not** be place in the above location, and are only here for reference:
- `client_default.cfg`

