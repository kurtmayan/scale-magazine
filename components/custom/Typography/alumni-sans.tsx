import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export default function AlumniSans({
  className,
  ...props
}: ComponentProps<"p">) {
  return (
    <p className={cn("font-alumni-sans font-medium", className)}>
      {props.children}
    </p>
  );
}
