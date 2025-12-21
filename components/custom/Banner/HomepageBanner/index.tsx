import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { BaseBlogType } from "@/types/blog";
import Image from "next/image";
import { AlumniSans, Inter, TimesNewRoman } from "../../Typography";

export type FeaturedBlogTYpe = {
  blog: BaseBlogType[];
};

export default async function HomepageBanner() {
  const { blog }: FeaturedBlogTYpe =
    await client.fetch(`*[_type=="section" && groupName == "Featured Post" ][0]{
          blog[0..2]->{
            title,
            slug,
            featuredImage,
            shortDescription,
            category[0]->{
                tag
            }
          }
      }`);

  const primaryFeaturedBlog = blog[0];
  const otherFeaturedBlog = blog.slice(1);

  return (
    <div className="grid gap-5">
      <Image
        src={urlFor(primaryFeaturedBlog.featuredImage).url()}
        width={100}
        height={100}
        alt="Primary Featured Image"
        className="w-full"
      />
      <div className="grid md:grid-cols-2 px-5 gap-5">
        <div className="grid gap-1">
          <AlumniSans className="text-lg uppercase">
            {primaryFeaturedBlog.category.tag}
          </AlumniSans>
          <TimesNewRoman className="text-2xl leading-8">
            {primaryFeaturedBlog.title}
          </TimesNewRoman>
          <Inter className="text-xs font-light">
            {primaryFeaturedBlog.shortDescription}
          </Inter>
        </div>
        <div className="grid md:grid-cols-2">
          {otherFeaturedBlog.map(({ title, slug, category, featuredImage }) => (
            <div className="grid gap-2" key={title}>
              <Image
                src={urlFor(featuredImage).url()}
                width={100}
                height={100}
                alt={title}
                className="w-full"
              />
              <AlumniSans className="uppercase text-lg">
                {category.tag}
              </AlumniSans>
              <TimesNewRoman className="text-xl ">{title}</TimesNewRoman>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
