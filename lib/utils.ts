import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetters(input: string): string {
  return input.replace(
    /\b(\p{L})(\p{L}*)/gu,
    (_, first: string, rest: string) => first.toUpperCase() + rest,
  );
}
