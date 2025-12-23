import { Blog } from "@/sanity.types";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export default function Highlight(props: Blog) {
  const builder = imageUrlBuilder(client);
  const urlFor = (source: SanityImageSource) => builder.image(source);
  return (
    <div>
      <div className="relative aspect-video">
        <Image
          src={urlFor(props.featuredImage || "")
            .width(800)
            .url()}
          alt="Hello"
          fill
          priority
          className="object-contain px-1"
        />
      </div>
      <div className="p-5">
        <h2 className="font-times-new-roman max-sm:text-2xl lg:text-[48px]">
          {props.title}
        </h2>
        <p className="font-inter max-sm:text-xs leading-[165%] lg:text-[28px]">
          {props.shortDescription}
        </p>
      </div>
    </div>
  );
}
