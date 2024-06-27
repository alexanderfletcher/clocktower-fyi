export type InterestingInteractions = typeof INTERESTING_INTERACTIONS;

export type Interaction =
    {
        type: 'General';
        title: string;
        interaction: string;
        source: string;
    } | {
        type: 'Character',
        title: string;
        interaction: string;
        source: string;
    }
export type InterestingInteractionData = {
    id: string;
    interactions: Interaction[];
}
export const INTERESTING_INTERACTIONS: InterestingInteractionData[] = [
    {
        id: "Ogre",
        interactions: [
            {
                type: 'General',
                title: "Drunk/Poisoned",
                interaction: "The Ogre becomes the alignment of their chosen friend regardless of any drunkenness or poison.",
                source: "https://discordapp.com/channels/569683781800296501/806885179389640757/1243339011020423180"
            },
            {
                type: "Character",
                title: "Bounty Hunter",
                interaction: "A sober Bounty Hunter can be shown an evil Ogre.",
                source: "https://discordapp.com/channels/569683781800296501/806885179389640757/1243339011020423180"
            },
            {
                type: "Character",
                title: "Cannibal",
                interaction: "If a good Ogre is executed, the Cannibal gains the Ogre ability, wakes to pick a player, and becomes the alignment of that player. They are not told their alignment. The next time a player dies to execution, the Cannibal loses the Ogre ability but stays the alignment of the player they chose for the rest of the game. If an evil Ogre is executed, the Cannibal is poisoned due to the Cannibal’s ability.",
                source: "https://discordapp.com/channels/569683781800296501/806885179389640757/1243339011020423180"
            }, {
                type: "Character",
                title: "Mezepheles",
                interaction: "If a good Ogre says the Mez word, they turn evil and learn that they are now evil. If an evil Ogre says the Mez word, nothing happens, and a good player may still say the word and turn evil.",
                source: "https://discordapp.com/channels/569683781800296501/806885179389640757/1243339011020423180"
            }, {
                type: "Character",
                title: "Spy",
                interaction: "The Spy does not see which player the Ogre selected, but may see the Ogre’s alignment.",
                source: "https://discordapp.com/channels/569683781800296501/806885179389640757/1243339011020423180"
            }, {
                type: "Character",
                title: "Widow",
                interaction: "The Widow does not see which player the Ogre selected, but may see the Ogre’s alignment.",
                source: "https://discordapp.com/channels/569683781800296501/806885179389640757/1243339011020423180"
            },
        ],
    }, {
        id: 'Banshee',
        interactions: [
            {
                type: 'General',
                title: 'Resurrection',
                interaction: 'If the Banshee is resurrected, their ability resets. Therefore, a resurrected Banshee has their normal ability text, but can only nominate once per day and vote once per nomination.',
                source: 'https://discordapp.com/channels/569683781800296501/806885179389640757/1234384251818872883'
            }
        ]
    }, {
        id: 'Summoner',
        interactions: [
            {
                type: 'General',
                title: 'Drunk/Poisoned',
                interaction: 'As called out in the almanac, if the Summoner is drunk or poisoned on night 3, the good team wins.',
                source: 'https://discordapp.com/channels/569683781800296501/806885179389640757/1220527415244226580',

            },
            {
                type: 'Character',
                title: 'Barber',
                interaction: 'If the Barber dies while there is no Demon, nothing happens.',
                source: 'https://discordapp.com/channels/569683781800296501/806885179389640757/1220527415244226580',
            },
            {
                type: 'Character',
                title: 'Engineer',
                interaction: ' If the Engineer chooses to change the Demon while there is no Demon in play, there is no effect.',
                source: 'https://discordapp.com/channels/569683781800296501/806885179389640757/1220527415244226580',
            },
            {
                type: 'Character',
                title: 'Goon',
                interaction: 'Ouch. That’s not a good time. That’s a drunk Summoner, a Goon that turns evil and an evil team, including that Goon, that immediately loses (all assuming the Summoner is the first to select the Goon that night).',
                source: 'https://discordapp.com/channels/569683781800296501/806885179389640757/1220527415244226580',
            },
            {
                type: 'Character',
                title: 'Pit-Hag',
                interaction: 'This is a potentially massively unfun combination, so think incredibly carefully before putting these both on a script together.',
                source: 'https://discordapp.com/channels/569683781800296501/806885179389640757/1220527415244226580',
            },
            {
                type: 'General',
                title: 'Revolutionary',
                interaction: `It's worth thinking carefully before putting Summoner in a Revolutionary game that’s being played for accessibility reasons.`,
                source: 'https://discordapp.com/channels/569683781800296501/806885179389640757/1220527415244226580',
            },
            {
                type: 'Character',
                title: 'Zombuul',
                interaction: 'If the Summoner chooses a dead player to be the Zombuul, they’re already dead and do not become a registering-as-dead Zombuul, they are just dead and the good team wins.',
                source: 'https://discordapp.com/channels/569683781800296501/806885179389640757/1220527415244226580',

            }
        ]
    }, {
        id: 'Kazali',
        interactions: [{
            type: 'General',
            title: 'Drunk/Posoined',
            interaction: 'The Kazali cannot be made drunk or poisoned on the first night, preventing their Minion choices - it acts before any drunk/poisoning characters other than the Goon (see below).',
            source: 'https://discordapp.com/channels/569683781800296501/806885179389640757/1190089103673405540'
        },
        {
            type: 'Character',
            title: 'Alchemist',
            interaction: `The Kazali has to choose their Minions so that the Storyteller knows what's in play in order to give the Alchemist their ability.`,
            source: 'https://discordapp.com/channels/569683781800296501/806885179389640757/1190089103673405540'
        },
        {
            type: 'Character',
            title: 'Balloonist',
            interaction: `A Balloonist could be replaced by the Kazali, but because their setup effect can be duplicated by the Kazali's setup effect, this is legitimate.`,
            source: 'https://discordapp.com/channels/569683781800296501/806885179389640757/1190089103673405540'
        },
        {
            type: 'Character',
            title: 'Chambermaid',
            interaction: `Minions waking to learn they have become Minions are not waking due to their own ability, but the Kazali's.`,
            source: 'https://discordapp.com/channels/569683781800296501/806885179389640757/1190089103673405540'
        },
        {
            type: 'Character',
            title: 'Damsel',
            interaction: `Minions are informed about the Damsel after the Kazali has made all their choices. So if the Damsel is chosen by the Kazali to become a Minion, the Minions do not learn there was a Damsel in play.`,
            source: 'https://discordapp.com/channels/569683781800296501/806885179389640757/1190089103673405540'
        },
        {
            type: 'Character',
            title: 'Lunatic',
            interaction: `While the Lunatic ability technically requires any Demon to learn which players a Lunatikazali picked to become Minions, the Storyteller might choose not to do so.`,
            source: 'https://discordapp.com/channels/569683781800296501/806885179389640757/1190089103673405540'
        }, {
            type: 'Character',
            title: 'Magician',
            interaction: 'If the Magician is in play, the Storyteller should put the Kazali to sleep when waking each Minion to tell them their character has changed, then show both the Demon and the Magician during the Minion info step.',
            source: 'https://discordapp.com/channels/569683781800296501/806885179389640757/1190089103673405540',
        }, {
            type: 'Character',
            title: 'Poppy Grower',
            interaction: 'If the Poppy Grower is in play, the Storyteller should put the Kazali to sleep when waking each Minion to tell them their character has changed and then run the Poppy Grower as normal.',
            source: 'https://discordapp.com/channels/569683781800296501/806885179389640757/1190089103673405540',
        }, {
            type: 'Character',
            title: 'Soldier',
            interaction: 'Unlucky Kazali! You might be one Minion down now 😉 Better pay attention during Demon Info to make sure you get told all the players you picked!',
            source: 'https://discordapp.com/channels/569683781800296501/806885179389640757/1190089103673405540',
        }
        ]
    }
]