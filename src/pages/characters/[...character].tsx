import { Inter } from "next/font/google";
import { CharacterIconInput } from "@/components/ScriptInput";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "@/components/Token";
import { CHARACTER_DATA } from "@/components/characterData";
import { useRouter } from "next/router";
import { Jinxes } from "@/components/Jinxes";

const inter = Inter({ subsets: ["latin"] });

const findCharacter = (character: string | string[] | undefined) => {
  if (!Array.isArray(character)) return;

  return CHARACTER_DATA.find(({ id }) => id === character[0]);
};

export default function Home() {
  const router = useRouter();

  const characterSelected = findCharacter(router.query.character);

  const updateCharacter = async (characterId: string) => {
    const character = CHARACTER_DATA.find(({ id }) => id === characterId);
    if (!character) return;
    router.push(`/characters/${character?.id}`);
  };
  return (
    <>
      <div className={"absolute p-10 right-0"}>{/* <DarkModeSwitch /> */}</div>

      <main
        className={`flex min-h-screen flex-col justify-start- items-center mt-[10%] ${inter.className}`}
      >
        <h1 className="text-4xl w-[90%] sm:w-3/4 text-center">Clocktower.fyi</h1>
        <h2>Quick access to interactions (basic jinxes for now)</h2>
        <div className="p-5"></div>
        <CharacterIconInput onSubmit={updateCharacter} />
        {characterSelected && (
          <>
            <Info
              source={`https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/${characterSelected.id}.png`}
              data={characterSelected}
            />
            <Jinxes character={characterSelected} />
          </>
        )}
        <div className="p-2"></div>
        <Alert className="w-2/3">
          <AlertTitle>Note!</AlertTitle>
          <AlertDescription>
            The functionality is pretty limited, I might add more in the future
            :)
          </AlertDescription>
        </Alert>
        <div className="p-2"></div>

        <div className="p-10"></div>
        <p className="text-sm text-muted-foreground text-center">
          This project is not affiliated with The Pandemonium Institute. All
          roles, content are the property of Steven Medway and The Pandemonium
          Institute.
        </p>
      </main>
    </>
  );
}
