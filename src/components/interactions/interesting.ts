export type InterestingInteractions = typeof INTERESTING_INTERACTIONS;

export type Interaction = 
{
    type: 'Drunk/Poisoned',
    interaction: string;
    source: string;
} | {
    type: 'Character',
    character: string;
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
            type: "Drunk/Poisoned",
            interaction: "The Ogre becomes the alignment of their chosen friend regardless of any drunkenness or poison.",
            source: "https://discordapp.com/channels/569683781800296501/806885179389640757/1243339011020423180"
          },
          {
            type: "Character",
            character: "Bounty Hunter",
            interaction: "A sober Bounty Hunter can be shown an evil Ogre.",
            source: "https://discordapp.com/channels/569683781800296501/806885179389640757/1243339011020423180"
          },
          {
            type: "Character",
            character: 'Cannibal',
            interaction: "If a good Ogre is executed, the Cannibal gains the Ogre ability, wakes to pick a player, and becomes the alignment of that player. They are not told their alignment. The next time a player dies to execution, the Cannibal loses the Ogre ability but stays the alignment of the player they chose for the rest of the game. If an evil Ogre is executed, the Cannibal is poisoned due to the Cannibal’s ability.",
            source: "https://discordapp.com/channels/569683781800296501/806885179389640757/1243339011020423180"
          }
        ],
      },
]