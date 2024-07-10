export const runtime = "experimental-edge";

import { CharacterIconInput } from "@/components/ScriptInput";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "@/components/Token";
import { CHARACTER_DATA, CharacterData } from "@/components/characterData";
import { useRouter } from "next/router";
import { Jinxes } from "@/components/Jinxes";
import Head from "next/head";
import { GetStaticPaths, GetStaticPropsContext } from "next";

export async function getStaticProps({ params }: GetStaticPropsContext) {
  if (!params || !params.character) return { props: { chracter: undefined } };

  const character = findCharacter(params.character) || null;

  return { props: { character } };
}
export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

const findCharacter = (character: string | string[] | undefined) => {
  if (!Array.isArray(character)) return;

  return CHARACTER_DATA.find(({ id }) => id === character[0]);
};

type CharacterPageProps = {
  character: CharacterData;
};

export default function Home({ character }: CharacterPageProps) {
  const router = useRouter();

  if (!character) return;

  const updateCharacter = async (characterId: string) => {
    const character = CHARACTER_DATA.find(({ id }) => id === characterId);
    if (!character) return;
    router.push(`/characters/${character?.id}`);
  };
  const title = `Clocktower.fyi - ${character.name}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="robots" content="follow, index" />
        <meta
          name="description"
          content={`Jinxes and interesting interactions for the ${character.name}`}
        />
        <meta
          property="og:url"
          content={`https://clocktower.fyi/characters/${character.id}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Clocktower.fyi" />
        <meta
          property="og:description"
          content={`Jinxes and interesting interactions for the ${character.name}`}
        />
        <meta property="og:title" content={character.name} />
        <meta
          property="og:image"
          content={`https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/${character.id}.png`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={character.name} />
        <meta
          name="twitter:description"
          content={`Jinxes and interesting interactions for the ${character.name}`}
        />
        <meta
          name="twitter:image"
          content={`https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/${character.id}.png`}
        />
        <link
          rel="canonical"
          href={`https://clocktower.fyi/characters/${character.id}`}
        />
      </Head>
      <div className={"absolute p-10 right-0"}>{/* <DarkModeSwitch /> */}</div>
      <main
        className={`flex min-h-screen flex-col justify-start- items-center mt-[10%]`}
      >
        <h1 className="text-4xl w-[90%] sm:w-3/4 text-center">
          Clocktower.fyi
        </h1>
        <h2>Quick access to interactions (basic jinxes for now)</h2>
        <div className="p-5"></div>
        <CharacterIconInput onSubmit={updateCharacter} />
        {character && (
          <>
            <Info
              source={`https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/${character.id}.png`}
              data={character}
            />
            <Jinxes character={character} />
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
