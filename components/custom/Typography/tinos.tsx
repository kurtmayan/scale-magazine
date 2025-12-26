import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export default function Tinos({ className, ...props }: ComponentProps<"p">) {
  return (
    <p className={cn("font-tinos", className)} {...props}>
      {props.children}
    </p>
  );
}
