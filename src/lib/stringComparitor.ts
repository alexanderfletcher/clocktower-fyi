import { CharacterData } from "@/components/characterData";

// Custom comparator function straight from chatgpt
export function customStringComparator<T extends { value: string }>(
  charA: T,
  charB: T
) {
  const a = charA.value;
  const b = charB.value;

  // If lengths are equal, compare case-insensitively
  const strA = a.toLowerCase();
  const strB = b.toLowerCase();

  if (strA < strB) {
    return -1;
  }
  if (strA > strB) {
    return 1;
  }
  return 0;
}
