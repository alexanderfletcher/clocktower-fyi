"use client";

import { CharacterSelection } from "./Selection";
import { useEffect, useState } from "react";

type Props = {
  onSubmit: (character: string) => void;
};

export function CharacterIconInput({ onSubmit }: Props) {
  const [characterSelected, setCharacterSelected] = useState("");
  useEffect(() => {
    onSubmit(characterSelected);
  }, [characterSelected, onSubmit]);
  return (
    <div className="w-[90%] sm:w-3/4">
      <CharacterSelection
        characterSelected={characterSelected}
        setCharacterSelected={setCharacterSelected}
      />
    </div>
  );
}
