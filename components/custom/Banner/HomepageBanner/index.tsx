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
    <div className="grid gap-5 w-full xl:w-[1440px] xl:mx-auto">
      <Image
        src={urlFor(primaryFeaturedBlog.featuredImage).url()}
        width={100}
        height={100}
        alt="Primary Featured Image"
        className="w-full"
      />
      <div className="grid lg:grid-cols-2 xl:px-0 px-5 gap-5">
        <div className="xl:flex xl:flex-col xl:gap-3 grid gap-1">
          <AlumniSans className="text-lg uppercase xl:text-2xl">
            {primaryFeaturedBlog.category.tag}
          </AlumniSans>
          <TimesNewRoman className="text-2xl leading-8  xl:text-3xl">
            {primaryFeaturedBlog.title}
          </TimesNewRoman>
          <Inter className="text-xs font-light  xl:text-xl">
            {primaryFeaturedBlog.shortDescription}
          </Inter>
        </div>

        <div className="grid lg:grid-cols-2 lg:gap-16 py-5">
          {otherFeaturedBlog.map(({ title, slug, category, featuredImage }) => (
            <div className="xl:flex xl:flex-col gap-1 grid" key={title}>
              <Image
                src={urlFor(featuredImage).url()}
                width={100}
                height={100}
                alt={title}
                className="w-full xl:w-[307px] xl:h-[187px]"
              />
              <AlumniSans className="uppercase text-lg">
                {category.tag}
              </AlumniSans>
              <TimesNewRoman className="text-xl xl:text-3xl">
                {title}
              </TimesNewRoman>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
