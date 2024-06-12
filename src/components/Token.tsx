import { CharacterData } from "./characterData";

type TokenProps = {
  data: CharacterData;
  source: string;
};

export function Info({ data, source }: TokenProps) {
  return (
    <div className="border-solid w-2/3 bg-contain text-center">
      <div className="flex items-center justify-center">
        <img height={150} width={180} src={source}></img>
      </div>
      <p className="text-lg">{data.ability}</p>
    </div>
  );
}
