# RustPlusBot Plugins

## Message Router

A slightly modified version of javajuice1337's [messagerouting](https://github.com/javajuice1337/RustPlusBot/blob/main/plugin%20examples/messagerouting.md) plugin.

What it does:
- Routes teamchat messages that meet the following criteria to a "teamchat" channel in Discord:
  - Not sent by the bot account
  - The message does not start with the command prefix (e.g. `!`)
  - The message did not originate in discord (messages forwarded from Discord are of the form `<username>: <message>`)
- All other bot messages are routed to a "logs" channel

Requirements:
- The Steam account the bot uses to send messages is not an active player
- The bot's "Main Discord Channel" must be set to the teamchat channel in order to forward user-sent Discord messages to teamchat.
- The config in "RustPlusBot > Message Synchronization" should be set to the following:
  - "Do not post team chat messages to the Main Discord Channel" to prevent duplicate messages
  - "Send messages from the Main Discord Channel to team chat" should be checked to forward messages from Discord

Issues:
- Messages sent from Discord still end up in the "logs" channel

## Raid Odds

An 8-ball-like command that gives you a Rust-inspired fortune, foretelling your raiding success. 
