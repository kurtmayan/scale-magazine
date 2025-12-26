import { Blog } from "@/sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Inter, TimesNewRoman } from "@/components/custom/Typography";

export default function ListItem(props: Blog) {
  return (
    <div className="flex gap-2">
      <div className="relative shrink-0 sm:w-[516px] sm:h-[326px] max-sm:w-[150px] max-sm:h-[120px] overflow-hidden -z-10">
        <Image
          src={urlFor(props.featuredImage ?? "").url()}
          alt={`${props.title} image`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 178px, 516px"
        />
      </div>

      <div className="flex justify-center flex-col">
        <TimesNewRoman className="max-sm:text-base sm:text-4xl leading-[118.9%]">
          {props.title}
        </TimesNewRoman>
        <Inter className="max-sm:text-xs sm:text-2xl  text-[#1E1E1E] font-light leading-[130%] mt-1">
          {props.shortDescription}
        </Inter>
      </div>
    </div>
  );
}
