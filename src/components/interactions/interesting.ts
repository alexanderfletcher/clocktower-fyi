export type InterestingInteractions = typeof INTERESTING_INTERACTIONS;

export type Interaction =
  | {
      type: "General";
      title: string;
      interaction: string;
      source: string;
    }
  | {
      type: "Character";
      title: string;
      interaction: string;
      source: string;
    };
export type InterestingInteractionData = {
  id: string;
  interactions: Interaction[];
};
export const INTERESTING_INTERACTIONS: InterestingInteractionData[] = [
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
          "If a good Ogre is executed, the Cannibal gains the Ogre ability, wakes to pick a player, and becomes the alignment of that player. They are not told their alignment. The next time a player dies to execution, the Cannibal loses the Ogre ability but stays the alignment of the player they chose for the rest of the game. If an evil Ogre is executed, the Cannibal is poisoned due to the Cannibal’s ability.",
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
          "The Spy does not see which player the Ogre selected, but may see the Ogre’s alignment.",
        source:
          "https://discordapp.com/channels/569683781800296501/806885179389640757/1243339011020423180",
      },
      {
        type: "Character",
        title: "Widow",
        interaction:
          "The Widow does not see which player the Ogre selected, but may see the Ogre’s alignment.",
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
          "Ouch. That’s not a good time. That’s a drunk Summoner, a Goon that turns evil and an evil team, including that Goon, that immediately loses (all assuming the Summoner is the first to select the Goon that night).",
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
        interaction: `It's worth thinking carefully before putting Summoner in a Revolutionary game that’s being played for accessibility reasons.`,
        source:
          "https://discordapp.com/channels/569683781800296501/806885179389640757/1220527415244226580",
      },
      {
        type: "Character",
        title: "Zombuul",
        interaction:
          "If the Summoner chooses a dead player to be the Zombuul, they’re already dead and do not become a registering-as-dead Zombuul, they are just dead and the good team wins.",
        source:
          "https://discordapp.com/channels/569683781800296501/806885179389640757/1220527415244226580",
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
          "If a player becomes a Fearmonger, their choices as their previous character aren’t relevant to the Fearmonger announcement, their first pick will cause an announcement regardless of who it is.",
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
          "A Lil’ Monsta holder would be able to choose another Demon, as usual for Demons. Jinx - If a Demon chooses Lil' Monsta, they also choose a Minion to become and babysit Lil' Monsta tonight.",
      },
      {
        type: "Character",
        source:
          "https://discord.com/channels/569683781800296501/806885179389640757/1179939424264523860",
        title: "LLeech",
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
];
