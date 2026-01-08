import Bar from "@/components/icons/bar";
import { BaseBlogType } from "@/types/blog";
import { AlumniSans, Inter, TimesNewRoman } from "../../Typography";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function CategoryBanner({
  blogs,
  category,
}: {
  blogs: BaseBlogType[];
  category: string;
}) {
  const primaryBlog = blogs[0];
  const rightSectionBlog = blogs.slice(1, 3);
  const leftSectionFirstBlog = blogs[3];
  const leftSectionLastBlog = blogs[4];
  const remainingBlogs = blogs.slice(1, 6);

  return (
    <div className="xl:w-[1440px] xl:mx-auto xl:py-20 p-5">
      <div>
        <Bar />
        <TimesNewRoman className="text-[28px]">{category}</TimesNewRoman>
      </div>
      {/* Desktop */}
      <div className="hidden xl:grid grid-cols-2 gap-20">
        <div className="flex flex-col gap-[90px]">
          <div className="relative aspect-video -z-10 w-[716px] h-[859px]">
            <Image
              src={urlFor(primaryBlog.featuredImage).url()}
              alt={primaryBlog.title}
              fill
              priority
              objectFit="cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-[90px]">
            {rightSectionBlog.map(
              ({ title, slug, category, featuredImage }) => (
                <div key={slug.current} className="flex flex-col gap-3">
                  <div className="relative aspect-square -z-10 w-full h-[290px]">
                    <Image
                      src={urlFor(featuredImage).url()}
                      alt={slug.current}
                      fill
                      priority
                      objectFit="cover"
                    />
                  </div>
                  <AlumniSans className="uppercase text-2xl">
                    {category.tag}
                  </AlumniSans>
                  <TimesNewRoman className="uppercase text-2xl">
                    {title}
                  </TimesNewRoman>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="flex flex-col gap-20">
          <div className="grid gap-5">
            <AlumniSans className="uppercase text-[28px]">
              {primaryBlog?.category.tag}
            </AlumniSans>
            <TimesNewRoman className="text-5xl">
              {primaryBlog.title}
            </TimesNewRoman>
            <Inter className="text-[22px]">
              {primaryBlog.shortDescription}
            </Inter>
          </div>
          <div className="flex flex-col gap-20">
            <div className="flex flex-row gap-5 items-center">
              <div className="aspect-square w-[274px] h-[258px] relative">
                <Image
                  src={urlFor(leftSectionFirstBlog.featuredImage).url()}
                  alt={leftSectionFirstBlog.title}
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col ">
                <AlumniSans className="uppercase text-2xl">
                  {leftSectionFirstBlog.category.tag}
                </AlumniSans>
                <TimesNewRoman className="text-[32px]">
                  {leftSectionFirstBlog.title}
                </TimesNewRoman>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="w-[683px] h-[620px] aspect-square relative">
              <Image
                src={urlFor(leftSectionLastBlog.featuredImage).url()}
                alt={leftSectionLastBlog.slug.current}
                fill
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col gap-5">
              <AlumniSans className="uppercase text-[28px]">
                {leftSectionLastBlog.category.tag}
              </AlumniSans>
              <TimesNewRoman className="text-4xl">
                {leftSectionLastBlog.title}
              </TimesNewRoman>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="xl:hidden">
        <div className="relative aspect-square w-full">
          <Image
            src={urlFor(primaryBlog.featuredImage).url()}
            alt={primaryBlog.title}
            fill
            objectFit="cover"
          />
        </div>
        <div className="grid gap-[5px]">
          <AlumniSans className="text-[18px] uppercase">
            {primaryBlog.category.tag}
          </AlumniSans>
          <TimesNewRoman className="text-xl">{primaryBlog.title}</TimesNewRoman>
          <Inter className="text-xs font-light">
            {primaryBlog.shortDescription}
          </Inter>
        </div>
        <div className="grid gap-5 my-5">
          {remainingBlogs.map(({ category, featuredImage, slug, title }) => (
            <div className="w-[349px] flex flex-cols gap-3" key={slug.current}>
              <div className="w-[150px] h-[120px] relative aspect-video">
                <Image
                  src={urlFor(featuredImage).url()}
                  alt={title}
                  fill
                  objectFit="cover"
                />
              </div>
              <div>
                <AlumniSans className="text-sm uppercase">
                  {category.tag}
                </AlumniSans>
                <TimesNewRoman className="text-[16px]">{title}</TimesNewRoman>
              </div>
            </div>
          ))}
        </div>
        <Separator className="bg-black" />
        <Link
          href={"#"}
          className="flex gap-1 justify-center items-center my-4"
        >
          <AlumniSans className="text-xl uppercase">
            More from Real State
          </AlumniSans>
          <MoveRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
