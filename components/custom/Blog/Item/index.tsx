import Image from "next/image";
import { Blog } from "@/sanity.types";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";
import { AlumniSans, TimesNewRoman } from "../../Typography";
import { capitalizeFirstLetters } from "@/lib/utils";

interface ItemProps extends Blog {
  slugCategory: string;
  width?: number;
  height?: number;
}

export default function Item({
  width = 150,
  height = 150,
  ...props
}: Blog & ItemProps) {
  const builder = imageUrlBuilder(client);
  const urlFor = (source: SanityImageSource) => builder.image(source);

  return (
    <Link
      href={`/blog/${props.slugCategory}/${props.slug?.current}`}
      className="mb-8 flex max-sm:flex-wrap max-sm:flex-row max-sm:w-[120px] sm:w-full"
    >
      <div className="relative aspect-square max-sm:h-[112px] max-sm:w-[120px] sm:h-[194px] sm:w-[205px] -z-10">
        <Image
          src={urlFor(props.featuredImage || "").url()}
          alt={props._id}
          fill
          priority
          className="object-cover px-1"
        />
      </div>
      <div className=" sm:justify-center sm:flex sm:flex-col gap-5 mx-1 mt-1">
        <TimesNewRoman className="text-sm text-wrap leading-[118.9%] truncate line-clamp-2 sm:font-black sm:text-xl">
          {props.title}
        </TimesNewRoman>
        <div className="max-sm:hidden flex justify-between items-center flex-wrap">
          <AlumniSans>
            {capitalizeFirstLetters(props.slugCategory).toUpperCase()}
          </AlumniSans>
          <AlumniSans>
            {new Date(props._createdAt ?? "")
              .toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
              .toUpperCase()}
          </AlumniSans>
        </div>
      </div>
    </Link>
  );
}
