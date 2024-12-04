console.log('onMessageReceive Event:', obj);

const botSteamId = "76561199803873697";
const botChannel = "1307555354112163941";

const messageRouting = [
    // Add your team chat message routing rules below, before the '*' (catch all) routing rule.
    // Set the wildcard to match the routing rule, and then set the channel to the channel ID.
    // Set ignore to true for the routing rule to throw out (ignore) the team chat message.
    // Routing rules are processed from top to bottom, and stops when a rule is matched.
    // ----------------------------------------------------------------------------------------
    // Example 1: Post all Smart Alarm team chat messages to their own Discord channel.
    // { wildcard: "[ALARM]*", channel: "1234567890", ignore: false },
    // ----------------------------------------------------------------------------------------
    // Example 2: Post all Patrol Helicopter team chat messages to their own Discord channel.
    // { wildcard: "The Patrol Helicopter*", channel: "1234567890", ignore: false },
    // ----------------------------------------------------------------------------------------
    // Example 3: Ignore all team member AFK team chat messages (do not post)
    // { wildcard: "Team Member '*' is*AFK*", channel: "", ignore: true },
    // ----------------------------------------------------------------------------------------
    { wildcard: "!*", channel: "1307555354112163941", ignore: false },   // Bot command messages -> #rustplus-logs
    { wildcard: "*: *", channel: "", ignore: true },   // Ignore team chat messages that originate in Discord
	{ wildcard: "*", channel: "1310059964080979978", ignore: false },  // Everything else -> #wipe-ingame
];

const wildcardToRegExp = (s) => {
    const regExpEscape = (s) => {
        return s.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
    };
    return new RegExp('^' + s.split(/\*+/).map(regExpEscape).join('.*') + '$');
};

for (var i = 0; i < messageRouting.length; i++) {
    if (messageRouting[i].wildcard.length > 0 && wildcardToRegExp(messageRouting[i].wildcard).test(obj.message)) {
        if (messageRouting[i].channel.length > 0 && !messageRouting[i].ignore) {
            if (obj.steamId == botSteamId && !messageRouting[i].ignore) {
            	this.app.postDiscordMessage({
                    //message: obj.name + ': ' + obj.message,
                    message: obj.message,
                    channel: botChannel,
                    tts: false
            	});
            } else {
                this.app.postDiscordMessage({
                    message: '**' + obj.name + ':** ' + obj.message,
                    channel: messageRouting[i].channel,
                    tts: false
                });
            }
        }
        break;
    }
}
