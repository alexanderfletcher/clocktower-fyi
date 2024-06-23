import {
  CharacterData,
  characterNameToId,
  getCharacterId,
} from "./characterData";
import { JINXES, JinxData } from "./interactions/jinx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";
import { INTERESTING_INTERACTIONS, Interaction, InterestingInteractionData } from "./interactions/interesting";

type Props = {
  character: CharacterData;
};
type IndividualJinxData = {
  jinxer: string;
  reason: string;
};


const formatJinx = (
  characterName: string
): ((data: JinxData) => IndividualJinxData[]) => {
  return (data: JinxData): IndividualJinxData[] => {
    return data.jinx.map(({ id, reason }) => {
      const jinxer = id !== characterName ? id : data.id;
      return {
        jinxer,
        reason,
      };
    });
  };
};

const formatOtherJinx = (
  characterName: string
): ((data: JinxData) => IndividualJinxData[]) => {
  return (data: JinxData): IndividualJinxData[] => {
    return data.jinx
      .filter((jinx) => jinx.id === characterName)
      .map(({ id, reason }) => {
        const jinxer = id !== characterName ? id : data.id;
        return {
          jinxer,
          reason,
        };
      });
  };
};

const findInteractionsForCharacter = (
  characterName: string
): ((data: InterestingInteractionData) => Interaction[]) => {
  return (data: InterestingInteractionData): Interaction[] => {
    return data.interactions
      .filter(interaction => interaction.type === 'Character' && interaction.title === characterName)
      .map(interaction => {
        if(interaction.type !== 'Character') throw new Error("Cant find interaction");
        return {
          type: 'Character',
          interaction: interaction.interaction,
          title: data.id,
          source: interaction.source
        }
      })
  };
};

export function Jinxes({ character }: Props) {
  const initialCharacterJinxes = JINXES.filter((jinx) => {
    return jinx.id === character.name;
  }).flatMap(formatJinx(character.name));

  const otherCharacterJinxes = JINXES.filter((jinx) => {
    return jinx.jinx.find((info) => info.id === character.name) !== undefined;
  }).flatMap(formatOtherJinx(character.name));

  const initialCharacterInteractions = INTERESTING_INTERACTIONS.filter((interaction) => {
    return interaction.id === character.name;
  }).flatMap(interaction => interaction.interactions);

  const otherCharacterInteractions = INTERESTING_INTERACTIONS.filter((interaction) => {
    return interaction.interactions.find((info) => info.type === 'Character' && info.title === character.name) !== undefined;
  }).flatMap(findInteractionsForCharacter(character.name))
  console.log({ otherCharacterInteractions })

  const characterJinxes = [...initialCharacterJinxes, ...otherCharacterJinxes];
  const characterInteractions = [...initialCharacterInteractions, ...otherCharacterInteractions]


  return (
    <div className="w-3/4">
      {characterJinxes.map(({ jinxer, reason }) => (
        <JinxCard jinxer={jinxer} reason={reason} key={jinxer} />
      ))}
      {characterInteractions.map(interaction => (
        <InteractionCard {...interaction} key={interaction.title} />
      ))}
    </div>
  );
}

function JinxCard({ jinxer, reason }: IndividualJinxData) {
  return (
    <Card className="m-5">
      <CardHeader>
        <div className="flex justify-between">
          <div className="flex">
            <Avatar className="self-center">
              <AvatarImage
                src={`https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/${characterNameToId(jinxer)}.png`}
              ></AvatarImage>
            </Avatar>
            <Link
              className="flex hover:underline justify-between self-center text-2xl font-semibold leading-none tracking-tight und"
              href={`/characters/${getCharacterId(jinxer)}`}
            >
              <h3 className="">{jinxer}</h3>
            </Link>
          </div>
          <Button asChild>
            <Link href="https://wiki.bloodontheclocktower.com/Djinn">
              <ExternalLinkIcon />
            </Link>
          </Button>
        </div>
        <CardDescription>Jinx</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{reason}</p>
      </CardContent>
    </Card>
  );
}

function InteractionCard(interestingInteraction: Interaction) {
  const { interaction, source, type, title } = interestingInteraction
  return (
    <Card className="m-5">
      <CardHeader>
        <div className="flex justify-between">
          <div className="flex">
            {type === 'Character' && <Avatar className="self-center">
              <AvatarImage
                src={`https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/${characterNameToId(interestingInteraction.title)}.png`}
              ></AvatarImage>
            </Avatar>}
            <Link
              className="flex hover:underline justify-between self-center text-2xl font-semibold leading-none tracking-tight und"
              href={type === 'Character' ? `/characters/${getCharacterId(interestingInteraction.title)}`: `https://wiki.bloodontheclocktower.com/States#Drunkenness_and_Poisoning`}
            >
              <h3 className="">{title}</h3>
            </Link>
          </div>
          <Button asChild>
            <Link href={source}>
              <ExternalLinkIcon />
            </Link>
          </Button>
        </div>
        <CardDescription>Interesting Interaction</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{interaction}</p>
      </CardContent>
    </Card>
  );
}