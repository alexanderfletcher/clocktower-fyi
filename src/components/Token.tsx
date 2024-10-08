import Link from "next/link";
import { CharacterData } from "./characterData";

type TokenProps = {
  data: CharacterData;
  source: string;
};

export function Info({ data, source }: TokenProps) {
  return (
    <div className="border-solid w-[90%] sm:w-3/4 bg-contain text-center">
      <div className="flex items-center justify-center">
        <img
          height={150}
          width={180}
          src={source}
          alt={`Icon for ${data.name}`}
        ></img>
      </div>
      <Link href={`https://wiki.bloodontheclocktower.com/${data.name}`}>
        <h2 className="text-2xl font-bold">{data.name}</h2>
      </Link>
      <p className="text-lg">{data.ability}</p>
    </div>
  );
}
