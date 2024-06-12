import { CharacterData, characterNameToId } from "./characterData";
import { JINXES, JinxData } from "./jinx";
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

export function Jinxes({ character }: Props) {
  const initialCharacterJinxes = JINXES.filter((jinx) => {
    return jinx.id === character.name;
  }).flatMap(formatJinx(character.name));

  const otherCharacterJinxes = JINXES.filter((jinx) => {
    return jinx.jinx.find((info) => info.id === character.name) !== undefined;
  }).flatMap(formatOtherJinx(character.name));

  const characterJinxes = [...initialCharacterJinxes, ...otherCharacterJinxes];

  return (
    <div className="w-3/4">
      {characterJinxes.map(({ jinxer, reason }) => (
        <JinxCard jinxer={jinxer} reason={reason} key={jinxer} />
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
            <h3 className="flex justify-between self-center text-2xl font-semibold leading-none tracking-tigh">
              {jinxer}
            </h3>
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
