import Image from "next/image";
import { Blog } from "@/sanity.types";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";

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
      className="mb-8 flex flex-wrap flex-col"
    >
      <div className="relative aspect-square max-sm:h-37.5 max-sm:w-44.5 lg:w-118.5 lg:h-99.5">
        <Image
          src={urlFor(props.featuredImage || "")
            .width(800)
            .url()}
          alt="Hello"
          fill
          priority
          className="object-cover px-1"
        />
      </div>
      <p className="font-times-new-roman text-sm text-wrap leading-[118.9%] px-1 mt-2 truncate line-clamp-2">
        {props.title}
      </p>
    </Link>
  );
}
