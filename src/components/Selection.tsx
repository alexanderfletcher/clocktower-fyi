"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  CHARACTER_DATA,
  EDITION_NAMES,
  EDITION_NAME_MAPPER,
  isCharacterInEdition,
} from "./characterData";
import { CheckIcon } from "@radix-ui/react-icons";
import { customStringComparator } from "@/lib/stringComparitor";
import { CommandSeparator } from "cmdk";

const sortedCharacters = CHARACTER_DATA.map((character) => {
  return {
    value: character.id,
    label: character.name,
    edition: character.edition,
  };
}).sort(customStringComparator);

type Props = {
  characterSelected: string;
  setCharacterSelected: (character: string) => void;
};
export function CharacterSelection({
  characterSelected: value,
  setCharacterSelected: setValue,
}: Props) {
  const [open, setOpen] = React.useState(false);
  const [editionOpen, setEditionOpen] = React.useState(false);
  const [selectedEdition, setEdition] = React.useState("");

  const characters = sortedCharacters.filter((character) => {
    return isCharacterInEdition(character, selectedEdition);
  });

  return (
    <div className="flex flex-wrap justify-between">
      <div className="w-full md:w-[45%] lg:w-[45%] xl:w-[45%]">
        <Popover open={editionOpen} onOpenChange={setEditionOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between capitalize"
            >
              {selectedEdition || "Select edition..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandList>
                <CommandGroup>
                  {EDITION_NAMES.map((edition) => (
                    <CommandItem
                      key={edition}
                      value={edition}
                      onSelect={(currentValue) => {
                        setEdition(currentValue === value ? "" : currentValue);
                        setEditionOpen(false);
                      }}
                    >
                      {edition}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          selectedEdition.toLowerCase() ===
                            edition.toLowerCase()
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                  <CommandItem
                    key={"Any"}
                    value={"Any"}
                    onSelect={(currentValue) => {
                      setEdition(currentValue === value ? "" : currentValue);
                      setEditionOpen(false);
                    }}
                  >
                    Any
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        "Any" === selectedEdition ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <div className="p-1"></div>
      <div className="w-full md:w-[45%] lg:w-[45%] xl:w-[45%]">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between capitalize"
            >
              {value || "Select a character..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search characters..." />
              <CommandEmpty>No Character found.</CommandEmpty>
              <CommandGroup defaultValue="baron">
                {characters.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
