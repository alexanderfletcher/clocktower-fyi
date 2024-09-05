import { CharacterName } from "../characterData";

export type InterestingInteractions = typeof INTERESTING_INTERACTIONS;

export type Interaction =
  | {
      type: "General";
      title: string;
      interaction: string;
      source: string;
      status?: "outdated";
    }
  | {
      type: "Character";
      title: CharacterName;
      interaction: string;
      source: string;
      status?: "outdated";
    };
export type InterestingInteractionData = {
  id: string;
  interactions: Interaction[];
};
export const INTERESTING_INTERACTIONS: InterestingInteractionData[] = [
  {
    id: "Lord of Typhon",
    interactions: [
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1278857651039637635",
        title: "Alsaahir",
        interaction:
          "Needs to remember to guess an extra Minion if they think it's a Lord Of Typhon game!",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1278857651039637635",
        title: "Balloonist",
        interaction:
          "If the Balloonist becomes a Minion during setup, the Outsider count is not impacted, because the Lord Of Typhon allows for any number of Outsiders to be in play.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1278857651039637635",
        title: "Baron",
        interaction:
          "Still adds 2 Outsiders at setup, but the Lord Of Typhon's setup ability means any number of Outsiders count may be in play. However, taking away all the Outsiders the Baron would have added is real sucky for the Baron, so please don't 🥺",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1278857651039637635",
        title: "Boomdandy",
        interaction:
          "As the Storyteller, be especially mindful with who you leave alive after a Boomdandy execution. If players know it’s a Lord Of Typhon game and only one player near the Boomdandy is alive, that would be very rough for the evil players.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1278857651039637635",
        title: "Bounty Hunter",
        interaction:
          "The Evil Townsfolk must be in the line at setup, and the Lord Of Typhon does not necessarily have to neighbor two Minions if there is an Evil Townsfolk in play at the start of the game. However, Evil Townsfolk who enter play after setup (due to a Mez word, Philo-Bounty Hunter, etc.) do not have to be in the line, as the line itself is a setup ability.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1278858468840702044",
        title: "Chambermaid",
        interaction:
          "The Lord Of Typhon does not wake to their own ability on the first night. Minions learning that they are Minions is part of setup & also do not register to the Chambermaid (though they would register if they woke due to their own Minion ability).",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1278858468840702044",
        title: "Magician",
        interaction:
          "The Minions see the Magician as the Demon, and the Demon sees the Magician as a Minion. In a Lord of Typhon game, if the Magician isn’t next to the line of evil characters, this may make the Magician obvious to the evil team. However, this can be useful - if the Magician senses that the evil team is coordinated, they’ll realize it’s a Lord of Typhon game, which can be exceptionally useful information for world-building.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1278858468840702044",
        title: "Poppy Grower",
        interaction:
          "The Demon does not learn the Minions, but the Lord of Typhon knows that at least both of their neighbors are Minions, and can coordinate with the two players sitting directly next to them.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1278858468840702044",
        title: "Recluse",
        interaction:
          "The Demon does not learn the Minions, but the Lord of Typhon knows that at least both of their neighbors are Minions, and can coordinate with the two players sitting directly next to them.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1278858468840702044",
        title: "Spy",
        interaction:
          "The Demon does not learn the Minions, but the Lord of Typhon knows that at least both of their neighbors are Minions, and can coordinate with the two players sitting directly next to them.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1278858468840702044",
        title: "Snake Charmer",
        interaction:
          "I shouldn’t have to say this, but because it’s been asked multiple times… If the Snake Charmer hits the Lord Of Typhon, no, their neighbors do not become evil Minions.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1278858468840702044",
        title: "Soldier",
        interaction:
          "The Soldier doesn’t have an active ability during setup, so they are not safe from becoming a Minion to the Lord Of Typhon.",
      },
    ],
  },
  {
    id: "Alsaahir",
    interactions: [
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1256026920550924452",
        title: "Legion",
        interaction:
          "If a player registers as both a Minion and a Demon, the Alsaahir must guess that player as a Demon in order for their guess to be correct.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1256026920550924452",
        title: "Lil' Monsta",
        interaction:
          "If a player registers as both a Minion and a Demon, the Alsaahir must guess that player as a Demon in order for their guess to be correct.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1256026920550924452",
        title: "Spy",
        interaction:
          "Yes, but don't. We have yet to encounter a situation where it was fun for the players to have the Spy or Recluse misregister to the Alsaahir's ability.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1256026920550924452",
        title: "Recluse",
        interaction:
          "Yes, but don't. We have yet to encounter a situation where it was fun for the players to have the Spy or Recluse misregister to the Alsaahir's ability.",
      },
    ],
  },
  {
    id: "Ogre",
    interactions: [
      {
        type: "General",
        title: "Drunk/Poisoned",
        interaction:
          "The Ogre becomes the alignment of their chosen friend regardless of any drunkenness or poison.",
        source:
          "https://discordapp.com/channels/569683781800296501/806885179389640757/1243339011020423180",
      },
      {
        type: "Character",
        title: "Bounty Hunter",
        interaction: "A sober Bounty Hunter can be shown an evil Ogre.",
        source:
          "https://discordapp.com/channels/569683781800296501/806885179389640757/1243339011020423180",
      },
      {
        type: "Character",
        title: "Cannibal",
        interaction:
          "If a good Ogre is executed, the Cannibal gains the Ogre ability, wakes to pick a player, and becomes the alignment of that player. They are not told their alignment. The next time a player dies to execution, the Cannibal loses the Ogre ability but stays the alignment of the player they chose for the rest of the game. If an evil Ogre is executed, the Cannibal is poisoned due to the Cannibal's ability.",
        source:
          "https://discordapp.com/channels/569683781800296501/806885179389640757/1243339011020423180",
      },
      {
        type: "Character",
        title: "Mezepheles",
        interaction:
          "If a good Ogre says the Mez word, they turn evil and learn that they are now evil. If an evil Ogre says the Mez word, nothing happens, and a good player may still say the word and turn evil.",
        source:
          "https://discordapp.com/channels/569683781800296501/806885179389640757/1243339011020423180",
      },
      {
        type: "Character",
        title: "Spy",
        interaction:
          "The Spy does not see which player the Ogre selected, but may see the Ogre's alignment.",
        source:
          "https://discordapp.com/channels/569683781800296501/806885179389640757/1243339011020423180",
      },
      {
        type: "Character",
        title: "Widow",
        interaction:
          "The Widow does not see which player the Ogre selected, but may see the Ogre's alignment.",
        source:
          "https://discordapp.com/channels/569683781800296501/806885179389640757/1243339011020423180",
      },
    ],
  },
  {
    id: "Banshee",
    interactions: [
      {
        type: "General",
        title: "Resurrection",
        interaction:
          "If the Banshee is resurrected, their ability resets. Therefore, a resurrected Banshee has their normal ability text, but can only nominate once per day and vote once per nomination.",
        source:
          "https://discordapp.com/channels/569683781800296501/806885179389640757/1234384251818872883",
      },
    ],
  },
  {
    id: "Summoner",
    interactions: [
      {
        type: "General",
        title: "Drunk/Poisoned",
        interaction:
          "As called out in the almanac, if the Summoner is drunk or poisoned on night 3, the good team wins.",
        source:
          "https://discordapp.com/channels/569683781800296501/806885179389640757/1220527415244226580",
      },
      {
        type: "Character",
        title: "Barber",
        interaction:
          "If the Barber dies while there is no Demon, nothing happens.",
        source:
          "https://discordapp.com/channels/569683781800296501/806885179389640757/1220527415244226580",
      },
      {
        type: "Character",
        title: "Engineer",
        interaction:
          " If the Engineer chooses to change the Demon while there is no Demon in play, there is no effect.",
        source:
          "https://discordapp.com/channels/569683781800296501/806885179389640757/1220527415244226580",
      },
      {
        type: "Character",
        title: "Goon",
        interaction:
          "Ouch. That's not a good time. That's a drunk Summoner, a Goon that turns evil and an evil team, including that Goon, that immediately loses (all assuming the Summoner is the first to select the Goon that night).",
        source:
          "https://discordapp.com/channels/569683781800296501/806885179389640757/1220527415244226580",
      },
      {
        type: "Character",
        title: "Pit-Hag",
        interaction:
          "This is a potentially massively unfun combination, so think incredibly carefully before putting these both on a script together.",
        source:
          "https://discordapp.com/channels/569683781800296501/806885179389640757/1220527415244226580",
      },
      {
        type: "General",
        title: "Revolutionary",
        interaction: `It's worth thinking carefully before putting Summoner in a Revolutionary game that's being played for accessibility reasons.`,
        source:
          "https://discordapp.com/channels/569683781800296501/806885179389640757/1220527415244226580",
      },
      {
        type: "Character",
        title: "Zombuul",
        interaction:
          "If the Summoner chooses a dead player to be the Zombuul, they're already dead and do not become a registering-as-dead Zombuul, they are just dead and the good team wins.",
        source:
          "https://discordapp.com/channels/569683781800296501/806885179389640757/1220527415244226580",
        status: "outdated",
      },
    ],
  },
  {
    id: "Kazali",
    interactions: [
      {
        type: "General",
        title: "Drunk/Posoined",
        interaction:
          "The Kazali cannot be made drunk or poisoned on the first night, preventing their Minion choices - it acts before any drunk/poisoning characters other than the Goon (see below).",
        source:
          "https://discordapp.com/channels/569683781800296501/806885179389640757/1190089103673405540",
      },
      {
        type: "Character",
        title: "Alchemist",
        interaction: `The Kazali has to choose their Minions so that the Storyteller knows what's in play in order to give the Alchemist their ability.`,
        source:
          "https://discordapp.com/channels/569683781800296501/806885179389640757/1190089103673405540",
      },
      {
        type: "Character",
        title: "Balloonist",
        interaction: `A Balloonist could be replaced by the Kazali, but because their setup effect can be duplicated by the Kazali's setup effect, this is legitimate.`,
        source:
          "https://discordapp.com/channels/569683781800296501/806885179389640757/1190089103673405540",
      },
      {
        type: "Character",
        title: "Chambermaid",
        interaction: `Minions waking to learn they have become Minions are not waking due to their own ability, but the Kazali's.`,
        source:
          "https://discordapp.com/channels/569683781800296501/806885179389640757/1190089103673405540",
      },
      {
        type: "Character",
        title: "Damsel",
        interaction: `Minions are informed about the Damsel after the Kazali has made all their choices. So if the Damsel is chosen by the Kazali to become a Minion, the Minions do not learn there was a Damsel in play.`,
        source:
          "https://discordapp.com/channels/569683781800296501/806885179389640757/1190089103673405540",
      },
      {
        type: "Character",
        title: "Lunatic",
        interaction: `While the Lunatic ability technically requires any Demon to learn which players a Lunatikazali picked to become Minions, the Storyteller might choose not to do so.`,
        source:
          "https://discordapp.com/channels/569683781800296501/806885179389640757/1190089103673405540",
      },
      {
        type: "Character",
        title: "Magician",
        interaction:
          "If the Magician is in play, the Storyteller should put the Kazali to sleep when waking each Minion to tell them their character has changed, then show both the Demon and the Magician during the Minion info step.",
        source:
          "https://discordapp.com/channels/569683781800296501/806885179389640757/1190089103673405540",
      },
      {
        type: "Character",
        title: "Poppy Grower",
        interaction:
          "If the Poppy Grower is in play, the Storyteller should put the Kazali to sleep when waking each Minion to tell them their character has changed and then run the Poppy Grower as normal.",
        source:
          "https://discordapp.com/channels/569683781800296501/806885179389640757/1190089103673405540",
      },
      {
        type: "Character",
        title: "Soldier",
        interaction:
          "Unlucky Kazali! You might be one Minion down now 😉 Better pay attention during Demon Info to make sure you get told all the players you picked!",
        source:
          "https://discordapp.com/channels/569683781800296501/806885179389640757/1190089103673405540",
      },
    ],
  },
  {
    id: "Hatter",
    interactions: [
      {
        type: "General",
        title: "Drunk/Poisoned",
        interaction:
          "If the Hatter is drunk or poisoned when they die, nothing happens. If a Minion or Demon is drunk or poisoned when they change character, this still works as it's due to the Hatter ability, not their own, though they'd still be drunk or poisoned with whatever new character they change to.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1179939180504174613",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1179939180504174613",
        title: "Alchemist",
        interaction:
          "If the Minion whose ability the Alchemist has comes into play, the Alchemist gains a new ability instead.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1179939180504174613",
        title: "Apprentice",
        interaction:
          "An Apprentice with a Minion ability is not a Minion and is not affected by the Hatter ability.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1179939180504174613",
        title: "Bounty Hunter",
        interaction:
          "The Bounty Hunter evil Townsfolk is not a Minion or Demon, so does not choose a new character.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1179939180504174613",
        title: "Chambermaid",
        interaction:
          "A player waking to make only a Hatter choice and nothing else does not count as waking to the Chambermaid - it's not their own ability.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1179939180504174613",
        title: "Cult Leader",
        interaction:
          "An evil Cult Leader is not a Minion or Demon, so does not choose a new character.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1179939180504174613",
        title: "Damsel",
        interaction:
          "Even if the Minions have changed characters, a used guess is still used.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1179939243171258368",
        title: "Evil Twin",
        interaction:
          "If an Evil Twin ability comes into play through the Hatter, you should wake each twin individually to show them who their twin is and what character it is. Remember that the good twin doesn't have to be alive and generally shouldn't be if this happens in late game as this can mean the good team cannot win.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1179939243171258368",
        title: "Fearmonger",
        interaction:
          "If a player becomes a Fearmonger, their choices as their previous character aren't relevant to the Fearmonger announcement, their first pick will cause an announcement regardless of who it is.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1179939243171258368",
        title: "Godfather",
        interaction:
          "If a Godfather comes into play, they'd immediately learn the in-play Outsiders, whether those Outsiders are dead or alive.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1179939424264523860",
        title: "Lil' Monsta",
        interaction:
          "A Lil' Monsta holder would be able to choose another Demon, as usual for Demons. Jinx - If a Demon chooses Lil' Monsta, they also choose a Minion to become and babysit Lil' Monsta tonight.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1179939424264523860",
        title: "Lleech",
        interaction:
          "A Lleech coming into play would immediately select a host, then follow that by choosing a kill.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1179939424264523860",
        title: "Lunatic",
        interaction:
          "A Lunatic can be given the choice to change characters as if they were the real Demon and a Hatter had died, regardless of whether the actual Hatter died or not.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1179939424264523860",
        title: "Marionette",
        interaction:
          "If a player chooses Marionette with the Hatter ability, you should tell them they're a good character and tell the Demon they are the Marionette. There may also be a future jinx for the Marionette.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1179939424264523860",
        title: "Plague Doctor",
        interaction:
          "If the in-play Minion abilities change due to the Hatter, this does not affect a Plague Doctor granted Storyteller ability.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1179939424264523860",
        title: "Po",
        interaction:
          "A Po that comes into play would have the choice to kill no-one or 1 player - choices as a previous character are not relevant for the Po ability.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1179939424264523860",
        title: "Preacher",
        interaction:
          "A Minion chosen by the Preacher that changes character is still affected by the Preacher ability.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1179939466455023646",
        title: "Pukka",
        interaction:
          "If the Demon changes away from being a Pukka, the previously poisoned player immediately sobers and will not die tonight.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1179939424264523860",
        title: "Recluse",
        interaction:
          "It's possible to wake the Recluse as if they were a Minion or Demon to allow them to change characters, but this is very rarely fun, so recommended against.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1179939424264523860",
        title: "Undertaker",
        interaction:
          "The Undertaker learns the information that was true at the time of execution, regardless of whether the executed player's character changes afterwards.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1179939504832909434",
        title: "Vigormortis",
        interaction:
          "A Demon that changes from a Vigormortis to something else while having killed Minions to maintain their abiities in death will cause those abilities to immediately be lost. However, if the Vigor stays in play, a Vigor-killed Minion can change character and continue to use their new ability.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1179939504832909434",
        title: "Zombuul",
        interaction:
          "An already-dead player that chooses to become a Zombuul does not return to life as a once-killed Zombuul, they are already dead.",
      },
    ],
  },
  {
    id: "Ojo",
    interactions: [
      {
        type: "Character",
        title: "Goon",
        interaction: ` If the Ojo chooses Goon and is the first player to do so tonight, they are made drunk and change the Goon's alignment.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1164705974796419183",
      },
      {
        type: "Character",
        title: "Lunatic",
        interaction: `The Demon learns the player a Lunatic-Ojo functionally targeted, not the character they chose.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1164705974796419183",
      },
      {
        type: "Character",
        title: "Mathematician",
        interaction: `The Ojo killing a different character to the one they chose is not a malfunction, it's part of the Ojo's own ability.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1164705974796419183",
      },
      {
        type: "Character",
        title: "Mayor",
        interaction: `If the Ojo chooses Mayor, it's still possible to bounce it to another player.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1164705974796419183",
      },
      {
        type: "Character",
        title: "Recluse",
        interaction: `If the Ojo chooses Recluse, the Recluse might register as something else and cause a Storyteller-choice death.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1164705974796419183",
      },
      {
        type: "Character",
        title: "Spy",
        interaction:
          "The Spy might register as a good character the Ojo chose and die instead… You should think very carefully about whether this is a good idea.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1164705974796419183",
      },
    ],
  },
  {
    id: "Plague Doctor",
    interactions: [
      {
        type: "General",
        title: "Poisoined/Drunk/Death",
        interaction: `If a Minion gains an ability through a jinx and is then poisoned or dies, they do not maintain the ability second ability any more than their own. If they are changed into another character, they do maintain the ability as they gained it at the moment of the Plague Doctor death.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1144428733021827142",
      },
      {
        type: "Character",
        title: "Alchemist",
        interaction: `The Alchemist ability counts as being in play when the Storyteller is choosing which ability to gain.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1144428733021827142",
      },
      {
        type: "Character",
        title: "Balloonist",
        interaction: `The Storyteller is not a Minion even if they have a Minion ability and therefore cannot be seen by the Balloonist.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1144428733021827142",
      },
      {
        type: "Character",
        title: "Barista",
        interaction: `The Storyteller is not a player and cannot be affected by the Barista.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1144428733021827142",
      },
      {
        type: "Character",
        title: "Bounty Hunter",
        interaction: `The Storyteller is not evil even if they have a Minion ability and therefore cannot be seen by the Bounty Hunter.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1144428733021827142",
      },
      {
        type: "Character",
        title: "Damsel",
        interaction: `The Storyteller is not a Minion, so cannot guess the Damsel.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1144428733021827142",
      },
      {
        type: "Character",
        title: "Engineer",
        interaction: `The Engineer does not affect the Storyteller as they are not themselves a Minion.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1144428733021827142",
      },
      {
        type: "Character",
        title: "Goon",
        interaction: `The Storyteller isn't a player and doesn't have an alignment, so they cannot affect the Goon's alignment or be made drunk by the Goon.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1144428733021827142",
      },
      {
        type: "Character",
        title: "Imp",
        interaction: `The Storyteller might gain a Minion ability, but they will not be a Minion, so they cannot become an Imp through the Imp ability.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1144428733021827142",
      },
      {
        type: "Character",
        title: "King",
        interaction: `The King cannot learn the character whose ability the Storyteller has.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1144428738566697051",
      },
      {
        type: "Character",
        title: "Legion",
        interaction: `A Plague Doctor death can result in a Minion ability in a Legion game.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1144428738566697051",
      },
      {
        type: "Character",
        title: "Minstrel",
        interaction: ` The Storyteller is not drunked by the Minstrel, so a Plague-Doctor-granted Minion ability would still be functioning on a Minstrel night.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1144428738566697051",
      },
      {
        type: "Character",
        title: "Preacher",
        interaction: `The Preacher cannot select the Storyteller and therefore cannot remove their Minion ability.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1144428738566697051",
      },
      {
        type: "Character",
        title: "Recluse",
        interaction: `The Recluse might affect the ability the Storyteller gains by registering as a Minion being in play.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1144428738566697051",
      },
      {
        type: "Character",
        title: "Riot",
        interaction: `A Plague Doctor death can result in a Minion ability in a Riot game.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1144428738566697051",
      },
    ],
  },
  {
    id: "High Priestess",
    interactions: [
      {
        type: "General",
        title: "Drunk/Poisoined",
        interaction: `You can choose to give the High Priestess anyone you like.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1121575296425021522",
      },
      {
        type: "Character",
        title: "Vortox",
        interaction: `The only restriction is not to give the one player you would have given if it was not a Vortox game. It does not have to be the least helpful player to talk to.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1121575296425021522",
      },
    ],
  },
  {
    id: "Steward",
    interactions: [
      {
        type: "General",
        title: "Drunk/Poisoined",
        interaction: `If the Steward is drunk or poisoned, their information might be false.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1108891357029863494",
      },
      {
        type: "Character",
        title: "Atheist",
        interaction: `The Storyteller is not a player and thus cannot be shown to the Steward, even if the Atheist is on the script. If the Atheist is in play, however, the Storyteller can be shown, because the Storyteller may break game rules.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1108891357029863494",
      },
      {
        type: "Character",
        title: "Cult Leader",
        interaction: `The Cult Leader is always a valid target for the Steward as they don't change alignment until later in the first night.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1108891357029863494",
      },
      {
        type: "Character",
        title: "Evil Twin",
        interaction: `The Steward can learn the good twin, but this might not be fun depending on the players and other info involved.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1108891357029863494",
      },
      {
        type: "Character",
        title: "Marionette",
        interaction: `Despite having drawn a blue token, the Marionette is not a valid player for the Steward to learn.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1108891357029863494",
      },
      {
        type: "Character",
        title: "Recluse",
        interaction: `The Recluse may or may not be able to be shown to the Steward - it's the Storyteller's choice of how they register the Recluse.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1108891357029863494",
      },
      {
        type: "Character",
        title: "Spy",
        interaction: `The Spy may or may not be able to be shown to the Steward - it's the Storyteller's choice of how they register the Spy.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1108891357029863494",
      },
      {
        type: "Character",
        title: "Vortox",
        interaction: `The Steward learns an evil player in a Vortox game.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1108891357029863494",
      },
    ],
  },
  {
    id: "Knight",
    interactions: [
      {
        type: "General",
        title: "Drunk/Poisoined",
        interaction: `If the Knight is drunk or poisoned, their information might be false.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1108890558291787776",
      },
      {
        type: "Character",
        title: "Atheist",
        interaction: `The Storyteller is not a player and thus cannot be shown to the Knight, even if the Atheist is on the script. If the Atheist is in play, however, the Storyteller can be shown, because the Storyteller may break game rules.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1108890558291787776",
      },
      {
        type: "Character",
        title: "Legion",
        interaction: `A Knight cannot see any Legion player in their info, regardless of if they're registering as a Minion.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1108890558291787776",
      },
      {
        type: "Character",
        title: "Recluse",
        interaction: `The Recluse may or may not be able to be shown to the Knight - it's the Storyteller's choice of how they register the Recluse.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1108890558291787776",
      },
      {
        type: "Character",
        title: "Vortox",
        interaction: `A Knight in a Vortox game learns 2 players, one of which is the Demon - very powerful stuff! If you can confirm it's a Vortox game…`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1108890558291787776",
      },
    ],
  },
  {
    id: "Vizier",
    interactions: [
      {
        type: "General",
        title: "Drunk/Poisoned",
        interaction: `If the Vizier is drunk or poisoned they may die during the day and cannot choose to execute immediately, but players don't learn this unless the Vizier attempts to do so.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1098715736513454112",
      },
      {
        type: "Character",
        title: "Apprentice",
        interaction: `An Apprentice Vizier acts just like a regular one, including the fact they do not die if exiled.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1098715736513454112",
      },
      {
        type: "Character",
        title: "Atheist",
        interaction: `The Storyteller can simulate a Vizier in an Atheist game, but the Vizier player hasn't got much incentive to play along as this confirms to them that it's an Atheist game, so it's best to choose the Atheist themselves for this purpose. This is because being announced as Vizier makes it less likely for them to be believed as Atheist right away, so many players will wait a day or two to try and point out other abnormalities from the Atheist ability.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1098715736513454112",
      },
      {
        type: "Character",
        title: "Barber",
        interaction: `If the Vizier character is swapped, all players immediately learn who the new Vizier is, if they are alive.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1098715736513454112",
      },
      {
        type: "Character",
        title: "Barista",
        interaction: `The Barista double has no effect on the Vizier.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1098715736513454112",
      },
      {
        type: "Character",
        title: "Butcher",
        interaction: `A Vizier can force a Butcher nomination in the same way as they can force a standard one.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1098715736513454112",
      },
      {
        type: "Character",
        title: "Clockmaker",
        interaction: ` The Clockmaker can be game-solving in single Minion games if the Vizier is in play. Script writers should consider this with care.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1098715736513454112",
      },
      {
        type: "Character",
        title: "Clockmaker",
        interaction: ` The Clockmaker can be game-solving in single Minion games if the Vizier is in play. Script writers should consider this with care.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1098715736513454112",
      },
      {
        type: "General",
        title: "Cult Leader/Fang Gu/Goon/Mezepheles/Politician",
        interaction:
          "A good Cult Leader can vote for everything the Vizier wants then be turned late in the game. Ditto Outsiders in a Fang Gu script (it doesn't even have to be in play for the Vizier to promise it to an Outsider) or the Goon or Politician or a player that negotiates with the Mezepheles to keep the word until later. These plays are very rarely fun, even for the players directly involved, so it's probably just worth agreeing in your group not to do so.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1098715870450159616",
      },
      {
        type: "Character",
        title: "Doomsayer" as any,
        interaction:
          "A Vizier cannot die to the Doomsayer, so evil players must be careful when Doomsaying with a Vizier in play lest they either kill their own Demon as the only remaining evil option to die or have no-one die because the ST targets the Vizier with the Doomsayer ability.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1098715870450159616",
      },
      {
        type: "General",
        title: "Evil Twin/Goblin/Leviathan/Mastermind/Saint",
        interaction: "Better be careful with your voting as good players!",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1098715870450159616",
      },
      {
        type: "Character",
        title: "Gunslinger",
        interaction:
          "If the Vizier chooses to execute before the Gunslinger has a chance to shoot, the Gunslinger gets no chance.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1098715870450159616",
      },
      {
        type: "Character",
        title: "Judge",
        interaction:
          "The Judge can use their ability during or after votes, so might force a success before the Vizier can, but cannot force a failure if the Vizier has already forced a success.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1098715870450159616",
      },
      {
        type: "Character",
        title: "Minstrel",
        interaction:
          "Viziers should be wary if they know they've allowed their fellow Minion to die by execution - they can be killed the next day if a Minstrel is in effect!",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1098715870450159616",
      },
      {
        type: "Character",
        title: "Organ Grinder/Poppy Grower",
        interaction:
          "The Vizier doesn't necessarily know if good has voted and therefore doesn't know if they can force the execution, so if they try it might fail.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1098715900124864592",
      },
      {
        type: "Character",
        title: "Pit-Hag",
        interaction:
          "If a Vizier is created, all players immediately learn who the new Vizier is. If an extant Vizier is made into another character, there is no public indication of this.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1098715900124864592",
      },
      {
        type: "Character",
        title: "Recluse",
        interaction:
          "The Recluse can register as evil when the Vizier chooses to execute immediately and therefore for nothing to happen. This is rarely fun as it publicly confirms the Recluse.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1098715900124864592",
      },
      {
        type: "Character",
        title: "Scapegoat",
        interaction:
          "A Scapegoat can take an execution that the Vizier forced through.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1098715900124864592",
      },
      {
        type: "Character",
        title: "Spy",
        interaction:
          "The Spy can be the good vote that allows the Vizier to execute, but the Vizier cannot know if the Storyteller is going to allow the Spy to register as good, so cannot afford to try and force the execution based on the Spy's vote alone or they risk outing the Spy if the execution doesn't happen.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1098715900124864592",
      },
      {
        type: "Character",
        title: "Thief",
        interaction:
          "A negative vote is still a vote and, if good, can allow the Vizier to force the execution.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1098715900124864592",
      },
      {
        type: "Character",
        title: "Town Crier",
        interaction:
          "The Vizier can completely pollute Town Crier information by nominating freely every day – script writers should consider carefully before putting both on a script.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1098715900124864592",
      },
      {
        type: "Character",
        title: "Vortox",
        interaction:
          "The knowledge that the Vizier is in play is not made false.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1098715900124864592",
      },
    ],
  },
  {
    id: "Organ Grinder",
    interactions: [
      {
        type: "General",
        title: "Drunk/Poisoned",
        interaction: `If the Organ Grinder is drunk or poisoned, votes occur as normal with eyes open and vote counts confirmed, the Storyteller will not ask people to close their eyes.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1088581283606691990",
      },
      {
        type: "General",
        title: "Travellers",
        interaction: ` Calls for exile are not votes, so the Organ Grinder does not affect them.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1088581283606691990",
      },
      {
        type: "Character",
        title: "Beggar",
        interaction: `The Beggar is still bound by their voting restriction, even though their eyes are closed.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1088581283606691990",
      },
      {
        type: "Character",
        title: "Bishop",
        interaction: `The votes on their nominations are still affected by the Organ Grinder.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1088581283606691990",
      },
      {
        type: "Character",
        title: "Butcher",
        interaction: `The votes on their nominations are still affected by the Organ Grinder.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1088581283606691990",
      },
      {
        type: "Character",
        title: "Cult Leader",
        interaction: `Cults are not votes, so the Organ Grinder does not interact with calls for cults.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1088581283606691990",
      },
      {
        type: "General",
        title: "Public Actions",
        interaction:
          "Damsel/Doomsayer/Slayer: Public actions can be taken while players have their eyes closed to vote.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1088581283606691990",
      },
      {
        type: "General",
        title: "Death Prevention",
        interaction:
          "Devil's Advocate/Fool/Lleech/Pacifist/Sailor/Tea Lady: The death prevention happens when players are executed, so only matters at the point of execution, not during voting.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1088581283606691990",
      },
      {
        type: "Character",
        title: "Golem",
        interaction: `Can confirm who the Organ Grinder is by nominating them after a blind vote has already happened that day and the consequent vote happening with eyes open. If the OG is killed between votes, this does not mean the town would learn who is on the block and with how many votes. Future nominations would simply be run open-eyed and results announced - "X votes is/is not enough and player B is/is not on the block" and the town would be able to work out the prior votes based on this information.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1088581309439426620",
      },
      {
        type: "Character",
        title: "Gunslinger",
        interaction: ` Doesn't work with the Organ Grinder. I'd recommend Storytellers don't use the Gunslinger with an Organ Grinder on the script.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1088581309439426620",
      },
      {
        type: "Character",
        title: "Imp",
        interaction: `An Imp that starpasses to an Organ Grinder will probably be found out pretty quick when there's no Organ Grinder ability the next day!`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1088581309439426620",
      },
      {
        type: "Character",
        title: "Judge",
        interaction: `A Judge forces a nomination to pass or fail, which is completely independent of the vote count, so the Judge can force a vote on an Organ Grinder to pass even if the Organ Grinder did not vote.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1088581309439426620",
      },
    ],
  },
  {
    id: "Politician",
    interactions: [
      {
        type: "Character",
        title: "Atheist",
        interaction: `A Politician who successfully makes the entire good team believe that the Atheist is evil and manages to get them to execute down to final 2 can be the only player that wins in an Atheist game.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1026799459377631242",
      },
      {
        type: "General",
        title: "Duplicates",
        interaction: `Cannibal/Philosopher/Pixie: With multiple Politician abilities in play, there can be multiple players playing for the evil team. However, only the most responsible player can change teams, so they're in direct competition with one another. If any of these die while they have the Politician ability, they maintain the ability even if dead and can change alignments to win at the end of the game.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1026799459377631242",
      },
      {
        type: "Character",
        title: "Heretic",
        interaction: `The Politician's changing alignments is decided after the Heretic impacts the result of who actually won the game.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1026799459377631242",
      },
      {
        type: "Character",
        title: "Evil Twin",
        interaction: `It's very rarely fun to make the Politician the good twin as they can campaign for their own execution, never mentioning that they're a twin, then win the game with evil as a result (it's pretty hard to argue they weren't most responsible in that situation!)`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1026799459377631242",
      },
      {
        type: "General",
        title: "Alternate Win Conditions",
        interaction: `Fearmonger/Leviathan/Mastermind: If the game ends due to the Fearmonger ability targeting the Politician or the Politician being executed second in a Leviathan game or on a Mastermind day, the good team loses. If you think that the Politician was nonetheless the main influence in causing this to happen, the Politician can change alignments and win with the evil team, this does not then cause the evil team to lose instead, the game end condition was already evaluated.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1026799506798415872",
      },
      {
        type: "Character",
        title: "Legion",
        interaction: `Politician/Legion is not a fun combination - the Politician is incentivised to vote on literally any execution but their own and be the single good vote Legion needs to pass every vote – again it's difficult to claim they weren't most responsible here.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1026799506798415872",
      },
      {
        type: "Character",
        title: "Mezepheles",
        interaction: `The Politician can say the Mezepheles word and then betray the evil team to win with good - they're not restricted to only switching from good to evil at the end of the game, it's also legitimate for them to switch the other way.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1026799506798415872",
      },
      {
        type: "Character",
        title: "Revolutionary",
        interaction: `If a Politician is in a Revolutionary pair, it's the Politician who must be most responsible for the game end in order to potentially flip both players' alignments, not the pair as a duo.`,
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1026799541112033311",
      },
    ],
  },
  {
    id: "Bounty Hunter",
    interactions: [
      {
        type: "Character",
        title: "Alchemist",
        interaction:
          "The Bounty Hunter can make the Alchemist evil, going full circle to have the Minion ability go back to being used by evil.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927788870320169",
      },
      {
        type: "Character",
        title: "Al-Hadikhia",
        interaction:
          "If the Bounty Hunter dies and is resurrected by the Al-Hadikhia (or anything else) they would be told an evil player that night. This may be the same as previously or a new evil player. If the evil player the Bounty Hunter saw dies, the Bounty Hunter sees a new player and then the previously seen player comes back to life through the Al-Hadikhia, the Bounty Hunter does not see another new player when that previously seen player dies again. (For example, BH sees X on N1. D1, X is executed, N2 BH sees Y but X is resurrected by Al-Hadikhia. D2 X is executed again. N3, BH does not get a new name, their current “known” evil player is still Y.)",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927788870320169",
      },
      {
        type: "General",
        title: "Gaining the ability during a game",
        interaction:
          "(Apprentice/Cannibal/Damsel/Philosopher/Pit-Hag/Pixie): If the Bounty Hunter dies and is resurrected by the Al-Hadikhia (or anything else) they would be told an evil player that night. This may be the same as previously or a new evil player. If the evil player the Bounty Hunter saw dies, the Bounty Hunter sees a new player and then the previously seen player comes back to life through the Al-Hadikhia, the Bounty Hunter does not see another new player when that previously seen player dies again. (For example, BH sees X on N1. D1, X is executed, N2 BH sees Y but X is resurrected by Al-Hadikhia. D2 X is executed again. N3, BH does not get a new name, their current “known” evil player is still Y.)",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927812706553886",
      },
      {
        type: "Character",
        title: "Barista",
        interaction:
          "A Bounty Hunter affected by a Barista 2 could learn 2 evil players in 1 night. They would learn another player when either of those 2 players died. This means the Bounty Hunter has 2 instances of their ability from that point on - when either 'client' dies, they learn a new name. It's usually a good idea to show them the same player after both 'client A' and 'client B' die, to restore the Bounty Hunter to knowing only a single player at a time from then on.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927812706553886",
      },
      {
        type: "Character",
        title: "Cannibal",
        interaction:
          "An evil Townsfolk who dies by execution will poison the Cannibal. A Cannibal that gains the Bounty Hunter ability does not have to see a player the original Bounty Hunter saw.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927812706553886",
      },
      {
        type: "Character",
        title: "Courtier",
        interaction:
          "Even if they choose the Bounty Hunter on Night 1, they cannot prevent the Townsfolk being turned evil as this is a setup ability.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927812706553886",
      },
      {
        type: "Character",
        title: "Cult Leader",
        interaction:
          "The Bounty Hunter cannot see the Cult Leader as their evil player on night 1 as the Cult Leader doesn’t change alignment until the end of the night and therefore will always be good when the Bounty Hunter wakes even if they will be turning evil later tonight. The only exception to this is if the Bounty Hunter themselves causes the Cult Leader to be turned evil at setup.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927834751799347",
      },
      {
        type: "Character",
        title: "Damsel",
        interaction:
          "If the evil Townsfolk guesses the Damsel, nothing happens, because they are not a Minion. The guess is not used.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927834751799347",
      },
      {
        type: "Character",
        title: "Dreamer",
        interaction:
          "Just because a Townsfolk is evil in a Bounty Hunter game, does not make that a legitimate “evil character” to show to the Dreamer, they should still see the relevant Townsfolk and a Minion/Demon token.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927834751799347",
      },
      {
        type: "Character",
        title: "Drunk",
        interaction:
          "Whether the Bounty Hunter is the Drunk or Marionette must be decided before a Townsfolk is woken and told that they are evil (as a result of the Bounty Hunter ability). The Drunk and Marionette also are not valid Townsfolk to be turned evil through the Bounty Hunter ability.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927834751799347",
      },
      {
        type: "Character",
        title: "Marionette",
        interaction:
          "Whether the Bounty Hunter is the Drunk or Marionette must be decided before a Townsfolk is woken and told that they are evil (as a result of the Bounty Hunter ability). The Drunk and Marionette also are not valid Townsfolk to be turned evil through the Bounty Hunter ability.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927834751799347",
      },
      {
        type: "Character",
        title: "Engineer",
        interaction:
          "The evil Townsfolk is unaffected by the Engineer, as it is not a Minion or Demon.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927834751799347",
      },
      {
        type: "Character",
        title: "Farmer",
        interaction:
          "Even if the Farmer is evil, it's an alive good player that becomes the Farmer.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927858906808360",
      },
      {
        type: "Character",
        title: "Fool",
        interaction:
          "If the Fool is the player known to a Bounty Hunter, the Bounty Hunter will not learn another player until the Fool actually dies for good (the second time they die), as the first time a Fool dies, they “don't”.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927858906808360",
      },
      {
        type: "Character",
        title: "Goon",
        interaction:
          "The Bounty Hunter being shown the Goon is not “choosing” the Goon with their ability, so are not made drunk, nor do they flip the Goon.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927858906808360",
      },
      {
        type: "Character",
        title: "Grandmother",
        interaction:
          "The Grandmother could not learn the evil Townsfolk as their grandchild, as the ability says they learn a good player.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927858906808360",
      },
      {
        type: "Character",
        title: "Lil' Monsta",
        interaction:
          "The evil Townsfolk is not a Minion and doesn’t wake to choose the babysitter.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927858906808360",
      },
      {
        type: "Character",
        title: "Lleech",
        interaction:
          "If the Lleech picks the Bounty Hunter or the BH-evil Townsfolk as host, this does not stop a player being made evil through the BH ability – this is a [setup] ability and has already occurred.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927858906808360",
      },
      {
        type: "Character",
        title: "Magician",
        interaction:
          "The evil Townsfolk is unaffected by the Magician, as it is not a Minion or Demon.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927858906808360",
      },
      {
        type: "Character",
        title: "Mayor",
        interaction:
          "If no execution occurs while just 3 players including the Mayor live, and the Mayor is the evil Townsfolk, evil wins.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927881505701928",
      },
      {
        type: "Character",
        title: "No Dashii",
        interaction:
          "Would poison the evil Townsfolk – they are still Townsfolk despite being evil and therefore affected by the No Dashii ability.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927881505701928",
      },
      {
        type: "Character",
        title: "Poppy Grower",
        interaction:
          "The evil Townsfolk is not a Minion or Demon, so is not shown who the evil team is when the Poppy Grower dies.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927881505701928",
      },
      {
        type: "Character",
        title: "Professor",
        interaction: "A Professor could resurrect an evil Townsfolk.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927881505701928",
      },
      {
        type: "Character",
        title: "Recluse",
        interaction:
          "The Bounty Hunter could learn the Recluse as their known evil player.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927881505701928",
      },
      {
        type: "Character",
        title: "Revolutionary",
        interaction:
          "The Revolutionary may cause a good player to register falsely, resulting in the Bounty Hunter learning them.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927921016057906",
      },
      {
        type: "Character",
        title: "Revolutionary",
        interaction:
          "Also, Revolutionary pairs are decided at setup, the same time as Bounty Hunter Evil Townsfolk. As such, if the two players in the pair are good, you cannot select either of them to become the Bounty Hunter evil Townsfolk. You could pair the evil Townsfolk with a Minion or Demon, however.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927921016057906",
      },
      {
        type: "Character",
        title: "Spy",
        interaction:
          "Technically can register as a Townsfolk in order to be made evil by the Bounty Hunter ability… Don't be a dick.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927921016057906",
      },
      {
        type: "Character",
        title: "Virgin",
        interaction: "An evil Townsfolk could trigger the Virgin ability.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927921016057906",
      },
      {
        type: "Character",
        title: "Vortox",
        interaction:
          "The evil Townsfolk still gets false information in a Vortox game.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927921016057906",
      },
      {
        type: "Character",
        title: "Zombuul",
        interaction:
          "If a Bounty Hunter learns the Zombuul, and the Zombuul ‘dies’ for the first time, the Bounty Hunter will learn a different player despite the Zombuul still technically being alive.",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1023927921016057906",
      },
    ],
  },
];
