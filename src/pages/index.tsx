import { Inter } from "next/font/google";
import { CharacterIconInput } from "@/components/ScriptInput";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "@/components/Token";
import { CHARACTER_DATA, CharacterData } from "@/components/characterData";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { CharacterSelection } from "@/components/Selection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  // this is really not how i should this but whatevs

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
        <h1 className="text-4xl w-2/3 text-center">Clocktower.fyi</h1>
        <div className="p-5"></div>
        <CharacterIconInput onSubmit={updateCharacter} />

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
