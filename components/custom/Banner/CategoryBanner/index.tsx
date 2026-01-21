import Bar from "@/components/icons/bar";
import { AlumniSans, Inter, TimesNewRoman } from "../../Typography";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { GET_CATEGORY_BANNERResult } from "@/sanity.types";

export default function CategoryBanner({
  blogs,
  category,
}: {
  blogs: GET_CATEGORY_BANNERResult;
  category: string;
}) {
  if (!blogs || blogs.length === 0) return null;
  const [primaryBlog, ...restBlogs] = blogs;
  const rightSectionBlog = blogs.slice(1, 3);
  const leftSectionFirstBlog = blogs[3];
  const leftSectionLastBlog = blogs[4];
  const remainingBlogs = blogs.slice(1, 6);

  return (
    primaryBlog && (
      <div className="xl:w-360 xl:mx-auto xl:py-20 p-5">
        <div>
          <Bar />
          <TimesNewRoman className="text-[28px]">{category}</TimesNewRoman>
        </div>
        {/* Desktop */}
        <div className="hidden xl:grid grid-cols-2 gap-20">
          <div className="flex flex-col gap-22.5">
            <div className="relative aspect-video -z-10 w-179 h-214.75">
              <Image
                src={urlFor(primaryBlog.featuredImage).url()}
                alt={primaryBlog.title}
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-22.5">
              {rightSectionBlog &&
                rightSectionBlog.map(({ title, slug, featuredImage }) => (
                  <div key={slug.current} className="flex flex-col gap-3">
                    <div className="relative aspect-square -z-10 w-full h-72.5">
                      <Image
                        src={urlFor(featuredImage).url()}
                        alt={slug.current}
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>
                    <AlumniSans className="uppercase text-2xl">
                      {category}
                    </AlumniSans>
                    <TimesNewRoman className="uppercase text-2xl">
                      {title}
                    </TimesNewRoman>
                  </div>
                ))}
            </div>
          </div>

          <div className="flex flex-col gap-20">
            <div className="grid gap-5">
              <AlumniSans className="uppercase text-[28px]">
                {category}
              </AlumniSans>
              <TimesNewRoman className="text-5xl">
                {primaryBlog.title}
              </TimesNewRoman>
              <Inter className="text-[22px]">
                {primaryBlog.shortDescription}
              </Inter>
            </div>
            {leftSectionFirstBlog && (
              <div className="flex flex-col gap-20">
                <div className="flex flex-row gap-5 items-center">
                  <div className="aspect-square w-68.5 h-64.5 relative">
                    <Image
                      src={urlFor(leftSectionFirstBlog.featuredImage).url()}
                      alt={leftSectionFirstBlog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <AlumniSans className="uppercase text-2xl">
                      {category}
                    </AlumniSans>
                    <TimesNewRoman className="text-[32px]">
                      {leftSectionFirstBlog.title}
                    </TimesNewRoman>
                  </div>
                </div>
              </div>
            )}

            {leftSectionLastBlog && (
              <div className="flex flex-col gap-5">
                <div className="w-170.75 h-155 aspect-square relative">
                  <Image
                    src={urlFor(leftSectionLastBlog.featuredImage).url()}
                    alt={leftSectionLastBlog.slug.current}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <AlumniSans className="uppercase text-[28px]">
                    {category}
                  </AlumniSans>
                  <TimesNewRoman className="text-4xl">
                    {leftSectionLastBlog.title}
                  </TimesNewRoman>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile */}
        <div className="xl:hidden">
          <div className="relative aspect-square w-full">
            <Image
              src={urlFor(primaryBlog.featuredImage).url()}
              alt={primaryBlog.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid gap-1.25">
            <AlumniSans className="text-[18px] uppercase">
              {category}
            </AlumniSans>
            <TimesNewRoman className="text-xl">
              {primaryBlog.title}
            </TimesNewRoman>
            <Inter className="text-xs font-light">
              {primaryBlog.shortDescription}
            </Inter>
          </div>
          <div className="grid gap-5 my-5">
            {remainingBlogs.length >= 1 &&
              remainingBlogs.map(({ featuredImage, slug, title }) => (
                <div
                  className="w-87.25 flex flex-cols gap-3"
                  key={slug.current}
                >
                  <div className="w-37.5 h-30 relative aspect-video">
                    <Image
                      src={urlFor(featuredImage).url()}
                      alt={title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <AlumniSans className="text-sm uppercase">
                      {category}
                    </AlumniSans>
                    <TimesNewRoman className="text-[16px]">
                      {title}
                    </TimesNewRoman>
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
              More from {category}
            </AlumniSans>
            <MoveRight className="size-4" />
          </Link>
        </div>
      </div>
    )
  );
}
