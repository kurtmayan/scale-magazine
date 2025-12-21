import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export default function TimesNewRoman({
  className,
  ...props
}: ComponentProps<"p">) {
  return (
    <p className={cn("font-times-new-roman", className)} {...props}>
      {props.children}
    </p>
  );
}
