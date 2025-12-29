import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export default function TiroDevanagariSanskrit({
  className,
  ...props
}: ComponentProps<"p">) {
  return (
    <p className={cn("font-tiro-devanagari-sanskrit", className)} {...props}>
      {props.children}
    </p>
  );
}
