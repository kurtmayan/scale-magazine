import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export default function Inter({ className, ...props }: ComponentProps<"p">) {
  return <p className={cn("font-inter", className)}>{props.children}</p>;
}
