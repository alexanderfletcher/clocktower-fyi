export type Jinxes = typeof JINXES;
export type JinxData = (typeof JINXES)[number];

export const JINXES = [
  {
    id: "Chambermaid",
    jinx: [
      {
        id: "Mathematician",
        reason:
          "The Chambermaid learns if the Mathematician wakes tonight or not, even though the Chambermaid wakes first.",
      },
    ],
  },
  {
    id: "Evil Twin",
    jinx: [
      {
        id: "Plague Doctor",
        reason:
          "The Storyteller cannot gain the Evil Twin ability if the Plague Doctor dies.",
      },
    ],
  },
  {
    id: "Cannibal",
    jinx: [
      {
        id: "Butler",
        reason:
          "If the Cannibal gains the Butler ability, the Cannibal learns this.",
      },
      {
        id: "Juggler",
        reason:
          "If the Juggler guesses on their first day and dies by execution, tonight the living Cannibal learns how many guesses the Juggler got correct.",
      },
      {
        id: "Zealot",
        reason:
          "If the Cannibal gains the Zealot ability, the Cannibal learns this.",
      },
    ],
  },
  {
    id: "Lunatic",
    jinx: [
      {
        id: "Mathematician",
        reason:
          "The Mathematician learns if the Lunatic attacks a different player(s) than the real Demon attacked.",
      },
    ],
  },
  {
    id: "Pit-Hag",
    jinx: [
      {
        id: "Heretic",
        reason: "A Pit-Hag can not create a Heretic.",
      },
      {
        id: "Damsel",
        reason:
          "If a Pit-Hag creates a Damsel, the Storyteller chooses which player it is.",
      },
      {
        id: "Politician",
        reason:
          "If the Pit-Hag turns an evil player into the Politician, they can't turn good due to their own ability.",
      },
      {
        id: "Village Idiot",
        reason:
          "If there is a spare token, the Pit-Hag can create an extra Village Idiot. If so, the drunk Village Idiot might change.",
      },
      {
        id: "Cult Leader",
        reason:
          "If the Pit-Hag turns an evil player into the Cult Leader, they can't turn good due to their own ability.",
      },
      {
        id: "Goon",
        reason:
          "If the Pit-Hag turns an evil player into the Goon, they can't turn good due to their own ability.",
      },
      {
        id: "Ogre",
        reason:
          "If the Pit-Hag turns an evil player into the Ogre, they can't turn good due to their own ability.",
      },
    ],
  },
  {
    id: "Cerenovus",
    jinx: [
      {
        id: "Goblin",
        reason:
          "The Cerenovus may choose to make a player mad that they are the Goblin.",
      },
    ],
  },
  {
    id: "Goblin",
    jinx: [
      {
        id: "Plague Doctor",
        reason:
          "If the Plague Doctor dies, a living Minion gains the Goblin ability in addition to their own ability, and learns this.",
      },
    ],
  },
  {
    id: "Leviathan",
    jinx: [
      {
        id: "Soldier",
        reason:
          "If Leviathan nominates and executes the Soldier, the Soldier does not die.",
      },
      {
        id: "Monk",
        reason:
          "If Leviathan nominates and executes the player the Monk chose, that player does not die.",
      },
      {
        id: "Innkeeper",
        reason:
          "If Leviathan nominates and executes a player the Innkeeper chose, that player does not die.",
      },
      {
        id: "Ravenkeeper",
        reason:
          "If Leviathan is in play & the Ravenkeeper dies by execution, they wake that night to use their ability. They are drunk if their nominator was good.",
      },
      {
        id: "Banshee",
        reason:
          "If Leviathan is in play, and the Banshee dies by execution, all players learn that the Banshee has died, and the Banshee gains their ability.",
      },
      {
        id: "Sage",
        reason:
          "If Leviathan is in play & the Sage dies by execution, they wake that night to use their ability. They are drunk if their nominator was good.",
      },
      {
        id: "Farmer",
        reason:
          "If Leviathan is in play & a Farmer dies by execution, a good player becomes a Farmer that night.",
      },
      {
        id: "Mayor",
        reason:
          "If Leviathan is in play & no execution occurs on day 5, good wins.",
      },
      {
        id: "Hatter",
        reason:
          "If the Hatter dies on or after day 5, the Demon cannot choose Leviathan.",
      },
      {
        id: "Pit-Hag",
        reason: "After day 5, the Pit-Hag cannot choose Leviathan.",
      },
    ],
  },
  {
    id: "Lil' Monsta",
    jinx: [
      {
        id: "Poppy Grower",
        reason:
          "If the Poppy Grower is in play, Minions don't wake together. They are woken one by one, until one of them chooses to take the Lil' Monsta token.",
      },
      {
        id: "Magician",
        reason:
          "Each night, the Magician chooses a Minion: if that Minion & Lil' Monsta are alive, that Minion babysits Lil’ Monsta.",
      },
      {
        id: "Scarlet Woman",
        reason:
          "If there are 5 or more players alive and the player holding the Lil' Monsta token dies, the Scarlet Woman is given the Lil' Monsta token tonight.",
      },
      {
        id: "Organ Grinder",
        reason:
          "Votes for the Organ Grinder count if the Organ Grinder is babysitting Lil' Monsta.",
      },
      {
        id: "Vizier",
        reason:
          "The Vizier can die by execution if they are babysitting Lil' Monsta.",
      },
      {
        id: "Hatter",
        reason:
          "If a Demon chooses Lil' Monsta, they also choose a Minion to become and babysit Lil' Monsta tonight.",
      },
    ],
  },
  {
    id: "Lycanthrope",
    jinx: [
      {
        id: "Gambler",
        reason:
          "If the Lycanthrope is alive and the Gambler kills themself at night, no other players can die tonight.",
      },
    ],
  },
  {
    id: "Legion",
    jinx: [
      {
        id: "Engineer",
        reason:
          "Legion and the Engineer can not both be in play at the start of the game. If the Engineer creates Legion, most players (including all evil players) become evil Legion.",
      },
      {
        id: "Preacher",
        reason:
          "If the Preacher chooses Legion, Legion keeps their ability, but the Preacher might learn they are Legion.",
      },
      {
        id: "Minstrel",
        reason:
          "If Legion died by execution today, Legion keeps their ability, but the Minstrel might learn they are Legion.",
      },
      {
        id: "Hatter",
        reason:
          "If the Hatter dies and Legion is in play, nothing happens. If the Hatter dies and an evil player chooses Legion, all current evil players become Legion.",
      },
      {
        id: "Zealot",
        reason: "The Zealot might register as evil to Legion's ability.",
      },
    ],
  },
  {
    id: "Fang Gu",
    jinx: [
      {
        id: "Scarlet Woman",
        reason:
          "If the Fang Gu chooses an Outsider and dies, the Scarlet Woman does not become the Fang Gu.",
      },
    ],
  },
  {
    id: "Spy",
    jinx: [
      {
        id: "Alchemist",
        reason: "The Alchemist can not have the Spy ability.",
      },
      {
        id: "Magician",
        reason:
          "When the Spy sees the Grimoire, the Demon and Magician's character tokens are removed.",
      },
      {
        id: "Poppy Grower",
        reason:
          "If the Poppy Grower is in play, the Spy does not see the Grimoire until the Poppy Grower dies.",
      },
      {
        id: "Plague Doctor",
        reason:
          "If the Plague Doctor dies, a living Minion gains the Spy ability in addition to their own ability, and learns this.",
      },
      {
        id: "Damsel",
        reason: "If the Spy is (or has been) in play, the Damsel is poisoned.",
      },
      {
        id: "Heretic",
        reason: "Only 1 jinxed character can be in play.",
      },
      {
        id: "Ogre",
        reason: "The Spy registers as evil to the Ogre.",
      },
    ],
  },
  {
    id: "Widow",
    jinx: [
      {
        id: "Alchemist",
        reason: "The Alchemist can not have the Widow ability.",
      },
      {
        id: "Magician",
        reason:
          "When the Widow sees the Grimoire, the Demon and Magician's character tokens are removed.",
      },
      {
        id: "Poppy Grower",
        reason:
          "If the Poppy Grower is in play, the Widow does not see the Grimoire until the Poppy Grower dies.",
      },
      {
        id: "Damsel",
        reason:
          "If the Widow is (or has been) in play, the Damsel is poisoned.",
      },
      {
        id: "Heretic",
        reason: "Only 1 jinxed character can be in play.",
      },
    ],
  },
  {
    id: "Godfather",
    jinx: [
      {
        id: "Heretic",
        reason: "Only 1 jinxed character can be in play.",
      },
    ],
  },
  {
    id: "Scarlet Woman",
    jinx: [
      {
        id: "Plague Doctor",
        reason:
          "If the Plague Doctor dies, a living Minion gains the Scarlet Woman ability in addition to their own ability, and learns this.",
      },
    ],
  },
  {
    id: "Boomdandy",
    jinx: [
      {
        id: "Plague Doctor",
        reason:
          "If the Plague Doctor is executed and the Storyteller would gain the Boomdandy ability, the Boomdandy ability triggers immediately.",
      },
    ],
  },
  {
    id: "Fearmonger",
    jinx: [
      {
        id: "Plague Doctor",
        reason:
          "If the Plague Doctor dies, a living Minion gains the Fearmonger ability in addition to their own ability, and learns this.",
      },
    ],
  },
  {
    id: "Yaggababble",
    jinx: [
      {
        id: "Exorcist",
        reason:
          "If the Exorcist chooses the Yaggababble, the Yaggababble ability does not kill tonight.",
      },
    ],
  },
  {
    id: "Summoner",
    jinx: [
      {
        id: "Clockmaker",
        reason:
          "If the Summoner is in play, the Clockmaker does not receive their information until a Demon is created.",
      },
      {
        id: "Alchemist",
        reason:
          "If there is an Alchemist-Summoner in play, the game starts with a Demon in play, as normal. If the Alchemist-Summoner chooses a player, they make that player a Demon but do not change their alignment.",
      },
      {
        id: "Poppy Grower",
        reason:
          "If the Poppy Grower is alive when the Summoner acts, the Summoner chooses which Demon, but the Storyteller chooses which player.",
      },
      {
        id: "Marionette",
        reason:
          "The Marionette neighbors the Summoner. The Summoner knows who the Marionette is.",
      },
      {
        id: "Pit-Hag",
        reason:
          "The Summoner cannot create an in-play Demon. If the Summoner creates a not-in-play Demon, deaths tonight are arbitrary.",
      },
      {
        id: "Hatter",
        reason:
          "The Summoner cannot create an in-play Demon. If the Summoner creates a not-in-play Demon, deaths tonight are arbitrary.",
      },
      {
        id: "Courtier",
        reason:
          "If the Summoner is drunk on the 3rd night, the Summoner chooses which Demon, but the Storyteller chooses which player.",
      },
      {
        id: "Engineer",
        reason:
          "If the Engineer removes a Summoner from play before that Summoner uses their ability, the Summoner uses their ability immediately.",
      },
      {
        id: "Zombuul",
        reason:
          "If the Summoner turns a dead player into the Zombuul, the Storyteller treats that player as a Zombuul that has died once.",
      },
      {
        id: "Pukka",
        reason:
          "The Summoner may choose a player to become the Pukka on the 2nd night.",
      },
      {
        id: "Riot",
        reason: "If the Summoner creates Riot, all Minions also become Riot.",
      },
      {
        id: "Legion",
        reason:
          "If the Summoner creates Legion, most players (including all evil players) become evil Legion.",
      },
      {
        id: "Kazali",
        reason:
          "The Summoner cannot create an in-play Demon. If the Summoner creates a not-in-play Demon, deaths tonight are arbitrary.",
      },
      {
        id: "Preacher",
        reason:
          "If the Preacher chose the Summoner on or before the 3rd night, the Summoner chooses which Demon, but the Storyteller chooses which player.",
      },
    ],
  },
  {
    id: "Baron",
    jinx: [
      {
        id: "Heretic",
        reason: "The Baron might only add 1 Outsider, not 2.",
      },
      {
        id: "Plague Doctor",
        reason:
          "If the Storyteller gains the Baron ability, up to two players become not-in-play Outsiders.",
      },
    ],
  },
  {
    id: "Marionette",
    jinx: [
      {
        id: "Lil' Monsta",
        reason:
          "The Marionette neighbors a Minion, not the Demon. The Marionette is not woken to choose who takes the Lil' Monsta token, and does not learn they are the Marionette if they have the Lil' Monsta token.",
      },
      {
        id: "Poppy Grower",
        reason:
          "When the Poppy Grower dies, the Demon learns the Marionette but the Marionette learns nothing.",
      },
      {
        id: "Snitch",
        reason:
          "The Marionette does not learn 3 not in-play characters. The Demon learns an extra 3 instead.",
      },
      {
        id: "Balloonist",
        reason:
          "If the Marionette thinks that they are the Balloonist, +1 Outsider was added.",
      },
      {
        id: "Damsel",
        reason: "The Marionette does not learn that a Damsel is in play.",
      },
      {
        id: "Plague Doctor",
        reason:
          "If the Demon has a neighbor who is alive and a Townsfolk or Outsider when the Plague Doctor dies, that player becomes an evil Marionette. If there is already an extra evil player, this does not happen.",
      },
      {
        id: "Huntsman",
        reason:
          "If the Marionette thinks that they are the Huntsman, the Damsel was added.",
      },
    ],
  },
  {
    id: "Lleech",
    jinx: [
      {
        id: "Mastermind",
        reason:
          "If the Mastermind is alive and the Lleech's host dies by execution, the Lleech lives but loses their ability.",
      },
      {
        id: "Slayer",
        reason: "If the Slayer slays the Lleech's host, the host dies.",
      },
      {
        id: "Heretic",
        reason:
          "If the Lleech has poisoned the Heretic then the Lleech dies, the Heretic remains poisoned.",
      },
    ],
  },
  {
    id: "Kazali",
    jinx: [
      {
        id: "Bounty Hunter",
        reason:
          "An evil Townsfolk is only created if the Bounty Hunter is still in play after the Kazali acts.",
      },
      {
        id: "Goon",
        reason:
          "If the Kazali chooses the Goon to become a Minion, remaining Minion choices are decided by the Storyteller.",
      },
      {
        id: "Marionette",
        reason:
          "If the Kazali chooses to create a Marionette, they must choose one of their neighbors.",
      },
      {
        id: "Huntsman",
        reason:
          "If the Kazali chooses the Damsel to become a Minion, and a Huntsman is in play, a good player becomes the Damsel.",
      },
      {
        id: "Choirboy",
        reason:
          "The Kazali can not choose the King to become a Minion if a Choirboy is in play.",
      },
      {
        id: "Soldier",
        reason:
          "If the Kazali turns the Soldier into a Minion, the Soldier chooses which not-in-play Minion to become.",
      },
    ],
  },
  {
    id: "Riot",
    jinx: [
      {
        id: "Engineer",
        reason:
          "Riot and the Engineer can not both be in play at the start of the game. If the Engineer creates Riot, the evil players become Riot.",
      },
      {
        id: "Golem",
        reason: "If the Golem nominates Riot, the Riot player does not die.",
      },
      {
        id: "Snitch",
        reason:
          "If the Snitch is in play, each Riot player gets an extra 3 bluffs.",
      },
      {
        id: "Saint",
        reason:
          "If a good player nominates and kills the Saint, the Saint's team loses.",
      },
      {
        id: "Butler",
        reason: "The Butler can not nominate their master.",
      },
      {
        id: "Pit-Hag",
        reason:
          "If the Pit-Hag creates Riot, all evil players become Riot. If the Pit-Hag creates Riot after day 3, the game continues for one more day.",
      },
      {
        id: "Mayor",
        reason:
          "If the 3rd day begins with just three players alive, the players may choose (as a group) not to nominate at all. If so (and a Mayor is alive) then the Mayor's team wins.",
      },
      {
        id: "Monk",
        reason:
          "If a Riot player nominates and kills the Monk-protected-player, the Monk-protected-player does not die.",
      },
      {
        id: "Farmer",
        reason:
          "If a Riot player nominates and kills a Farmer, the Farmer uses their ability tonight.",
      },
      {
        id: "Innkeeper",
        reason:
          "If a Riot player nominates an Innkeeper-protected-player, the Innkeeper-protected-player does not die.",
      },
      {
        id: "Sage",
        reason:
          "If a Riot player nominates and kills a Sage, the Sage uses their ability tonight.",
      },
      {
        id: "Banshee",
        reason:
          "If Riot nominates and kills the Banshee, all players learn that the Banshee has died, and the Banshee may nominate two players immediately.",
      },
      {
        id: "Ravenkeeper",
        reason:
          "If a Riot player nominates and kills the Ravenkeeper, the Ravenkeeper uses their ability tonight.",
      },
      {
        id: "Soldier",
        reason:
          "If a Riot player nominates the Soldier, the Soldier does not die.",
      },
      {
        id: "Grandmother",
        reason:
          "If a Riot player nominates and kills the Grandchild, the Grandmother dies too.",
      },
      {
        id: "King",
        reason:
          "If a Riot player nominates and kills the King and the Choirboy is alive, the Choirboy uses their ability tonight.",
      },
      {
        id: "Exorcist",
        reason: "Only 1 jinxed character can be in play.",
      },
      {
        id: "Minstrel",
        reason: "Only 1 jinxed character can be in play.",
      },
      {
        id: "Flowergirl",
        reason: "Only 1 jinxed character can be in play.",
      },
      {
        id: "Undertaker",
        reason:
          "Players that die by nomination register as being executed to the Undertaker.",
      },
      {
        id: "Cannibal",
        reason:
          "Players that die by nomination register as being executed to the Cannibal.",
      },
      {
        id: "Pacifist",
        reason:
          "Players that die by nomination register as being executed to the Pacifist.",
      },
      {
        id: "Devil's Advocate",
        reason:
          "Players that die by nomination register as being executed to the Devil's Advocate.",
      },
      {
        id: "Investigator",
        reason: "Riot registers as a Minion to the Investigator.",
      },
      {
        id: "Clockmaker",
        reason: "Riot registers as a Minion to the Clockmaker.",
      },
      {
        id: "Town Crier",
        reason: "Riot registers as a Minion to the Town Crier.",
      },
      {
        id: "Damsel",
        reason: "Riot registers as a Minion to the Damsel.",
      },
      {
        id: "Preacher",
        reason: "Riot registers as a Minion to the Preacher.",
      },
      {
        id: "Hatter",
        reason:
          "If the Hatter dies, Riot is in play and a Riot chooses a different Demon, a normal evil team is created from the Riot players. If the Hatter dies and the Demon chooses Riot, Minions become Riot too.",
      },
      {
        id: "Zealot",
        reason: "If you are nominated, you must nominate again, even if dead.",
      },
    ],
  },
  {
    id: "Al-Hadikhia",
    jinx: [
      {
        id: "Scarlet Woman",
        reason:
          "If there are two living Al-Hadikhias, the Scarlet Woman Al-Hadikhia becomes the Scarlet Woman again.",
      },
    ],
  },
  {
    id: "Organ Grinder",
    jinx: [
      {
        id: "Butler",
        reason:
          "If the Organ Grinder is causing eyes closed voting, the Butler may raise their hand to vote but their vote is only counted if their master voted too.",
      },
      {
        id: "Minstrel",
        reason:
          "If the Minstrel makes everyone drunk, the Organ Grinder keeps their ability but the Minstrel keeps their eyes open when voting.",
      },
      {
        id: "Preacher",
        reason:
          "If the Preacher removes the Organ Grinder ability, the Organ Grinder keeps their ability but the Preacher keeps their eyes open when voting.",
      },
    ],
  },
  {
    id: "Vizier",
    jinx: [
      {
        id: "Investigator",
        reason:
          "If the Investigator learns that the Vizier is in play, the existence of the Vizier is not announced by the Storyteller.",
      },
      {
        id: "Preacher",
        reason:
          "If the Vizier loses their ability, they learn this. If the Vizier is executed while they have their ability, their team wins.",
      },
      {
        id: "Courtier",
        reason:
          "If the Vizier loses their ability, they learn this. If the Vizier is executed while they have their ability, their team wins.",
      },
      {
        id: "Alchemist",
        reason:
          "If the Alchemist has the Vizier ability, they may only choose to execute immediately if three or more players voted, regardless of those players' alignment.",
      },
      {
        id: "Magician",
        reason:
          "If the Vizier and Magician are both in play, the Demon does not learn the Minions.",
      },
      {
        id: "Fearmonger",
        reason:
          "The Vizier wakes with the Fearmonger, learns who they choose and cannot choose to immediately execute that player.",
      },
      {
        id: "Politician",
        reason: "The Politician might register as evil to the Vizier.",
      },
      {
        id: "Alsaahir",
        reason:
          "If the Vizier is in play, the Alsaahir must also guess which Demon(s) are in play.",
      },
      {
        id: "Zealot",
        reason: "The Zealot might register as evil to the Vizier.",
      },
    ],
  },
  {
    id: "Vortox",
    jinx: [
      {
        id: "Banshee",
        reason:
          "If the Vortox is in play and the Demon kills the Banshee, the players still learn that the Banshee has died.",
      },
    ],
  },
  {
    id: "Ogre",
    jinx: [
      {
        id: "Recluse",
        reason:
          "If the Recluse registers as evil to the Ogre, the Ogre learns that they are evil.",
      },
    ],
  },
  {
    id: "Philosopher",
    jinx: [
      {
        id: "Bounty Hunter",
        reason:
          "If the Philosopher gains the Bounty Hunter ability, a Townsfolk might turn evil.",
      },
    ],
  },
  {
    id: "Mastermind",
    jinx: [
      {
        id: "Al-Hadikhia",
        reason:
          "If the Al-Hadikhia dies by execution, and the Mastermind is alive, the Al-Hadikhia chooses 3 good players tonight: if all 3 choose to live, evil wins. Otherwise, good wins.",
      },
    ],
  },
];
