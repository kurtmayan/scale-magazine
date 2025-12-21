import { SVGProps } from "react";

export default function Bar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="60"
      height="10"
      viewBox="0 0 60 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2.5"
        y="2.5"
        width="55"
        height="5"
        rx="2.5"
        fill="#5C5C5C"
        stroke="#5C5C5C"
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
