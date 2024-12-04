console.log('onMessageReceive Event:', obj);

const cmdName = "raidodds";
const allowVulgarMessages = true;
const onlineTeamMemberMultiplier = 1.2;
const useNoPlayersOnlineMessages = true;
const debug = true;

const raidOddsMessages = [
    { message: "All your base are belong to us", odds: [90, 100], vulgar: false },
    { message: "You're going to roll them", odds: [60, 90], vulgar: false },
    { message: "You might win, but there is no loot in that base", odds: [50, 60], vulgar: false },
    { message: "Fuck it, we ball", odds: [40, 60], vulgar: true },
    { message: "They're despawning the loot RIGHT NOW", odds: [40, 50], vulgar: false },
    { message: "...yikes", odds: [20, 40], vulgar: false },
    { message: "How about you try a farm run instead...", odds: [5, 20], vulgar: false },
    { message: "You're going to get ass blasted", odds: [5, 20], vulgar: true },
    { message: "You wouldn't win if this was an offline", odds: [0, 10], vulgar: false },
];

// All messages here should have their odds set to [0, 0] or they will be filtered out.
const noPlayersOnlineMessages = [
    { message: "How can you raid with no one online?", odds: [0, 0], vulgar: false },
]

function getPromise(fn) {
    return new Promise((resolve, reject) => {
        fn((message) => {
            if (message) resolve(message);
            else reject(new Error("Failed to get promise"));
        });
    });
}

const cmd = await this.app.getPrefix('all') + cmdName;

if (obj.message.toLowerCase().startsWith(cmd)) {
    var m = await getPromise(this.app.getTeamInfo);
    const numOnlineTeamMembers = m.response.teamInfo?.members
        .filter((member) => member.isOnline)
        .length;
	debug && console.log('Online Team Members: ' + numOnlineTeamMembers);

    const noPlayersOnline = numOnlineTeamMembers == 0;
    const baseOdds    = noPlayersOnline ? 0 : Math.floor(Math.random() * (100 + 1));
    const onlineBonus = noPlayersOnline ? 0 : Math.round(numOnlineTeamMembers ** onlineTeamMemberMultiplier);
    const odds = Math.min(baseOdds + onlineBonus, 100);
    debug && console.log('noPlayersOnline: ' + noPlayersOnline);
    debug && console.log('Base: ' + baseOdds + ', Bonus: ' + onlineBonus + ', Odds: ' + odds);
    
    const replies = (noPlayersOnline && useNoPlayersOnlineMessages) ? noPlayersOnlineMessages : raidOddsMessages;
    var possibleReplies = replies.filter((reply) => reply.odds[0] <= odds && reply.odds[1] >= odds);
    if (!allowVulgarMessages) {
        possibleReplies = replies.filter((reply) => reply.vulgar == false);
    }

    const reply = possibleReplies[Math.floor(Math.random() * possibleReplies.length)];
    debug && console.log(reply.message);
    // this.app.sendTeamMessage(reply.message);
}
