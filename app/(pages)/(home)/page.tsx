import { HomepageBanner } from "@/components/custom/Banner";
import {
  AlumniSans,
  Inter,
  TimesNewRoman,
} from "@/components/custom/Typography";
import Bar from "@/components/icons/bar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import formatDate from "@/lib/formatDate";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { BaseBlogType } from "@/types/blog";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const highlights: BaseBlogType[] = await client.fetch(`*[_type=="blog"]{
                  title,
                  category[0]->{
                tag
            },
                  shortDescription,
                  featuredImage,
                  slug,
                  _createdAt
                }`);

  const primaryBlog = highlights[0];
  const remainingBlog = highlights.slice(1);

  return (
    <div>
      <HomepageBanner />
      {/* Highlight Section */}
      <div className="bg-[#e5e5e5] p-5">
        <div className=" grid gap-3">
          <Bar />
          <TimesNewRoman className="text-[28px]">Highlights</TimesNewRoman>
        </div>
        <Carousel className="w-full">
          <CarouselContent className="-ml-1 ">
            {highlights.map(
              ({
                title,
                category,
                shortDescription,
                featuredImage,
                slug,
                _createdAt,
              }) => (
                <CarouselItem className="pl-1 basis-1/2 " key={slug.current}>
                  <Link href="#">
                    <div className="p-1 grid gap-1">
                      <Image
                        src={urlFor(featuredImage).url()}
                        width={100}
                        height={100}
                        alt={title}
                        className="w-[232px] h-[232px]  z-10"
                      />
                      <AlumniSans className="text-xs font-medium">
                        {formatDate(_createdAt)}
                      </AlumniSans>
                      <TimesNewRoman>{title}</TimesNewRoman>
                    </div>
                  </Link>
                </CarouselItem>
              ),
            )}
          </CarouselContent>
        </Carousel>
      </div>

      <div className=" grid p-5">
        <div>
          <Bar />
          <TimesNewRoman className="text-[28px]">Real State</TimesNewRoman>
        </div>
        <div>
          <Image
            src={urlFor(primaryBlog.featuredImage).url()}
            width={100}
            height={100}
            alt={primaryBlog.title}
            className="w-full"
          />
          <div className="grid gap-[5px]">
            <AlumniSans className="text-[18px] uppercase">
              {primaryBlog.category.tag}
            </AlumniSans>
            <TimesNewRoman className="text-xl">
              {primaryBlog.title}
            </TimesNewRoman>
            <Inter className="text-xs font-light">
              {primaryBlog.shortDescription}
            </Inter>
          </div>
          <div className="grid gap-5 my-5">
            {remainingBlog.map(({ category, featuredImage, slug, title }) => (
              <div
                className="w-[349px] flex flex-cols gap-3"
                key={slug.current}
              >
                <Image
                  src={urlFor(featuredImage).url()}
                  alt={title}
                  width={150}
                  height={120}
                  className="w-[150px] h-[120px]"
                />
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

      {/* Cover Story */}
      <div className="p-5">
        <TimesNewRoman className="text-[28px]">Cover Story</TimesNewRoman>
        <Inter className="text-xs">
          Take a deeper dive into the fascinating stories, iconic brands, and
          groundbreaking trends that have shaped the e-commerce landscape over
          the years, all featured in our magazine editors.
        </Inter>
        <AlumniSans>View All</AlumniSans>
        <div>
          <Carousel className="w-full z-20">
            <CarouselContent className="-ml-1">
              {highlights.map(
                ({
                  title,
                  category,
                  shortDescription,
                  featuredImage,
                  slug,
                  _createdAt,
                }) => (
                  <CarouselItem className="pl-1 basis-1/2" key={slug.current}>
                    <Link href="#">
                      <div className="p-1 grid gap-1">
                        <Image
                          src={urlFor(featuredImage).url()}
                          width={100}
                          height={100}
                          alt={title}
                          className="w-auto h-[158px]"
                        />
                        <AlumniSans className="text-xs font-medium">
                          {formatDate(_createdAt)}
                        </AlumniSans>
                        <TimesNewRoman className="text-sm">
                          {title}
                        </TimesNewRoman>
                      </div>
                    </Link>
                  </CarouselItem>
                ),
              )}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <div className=" grid p-5">
        <div>
          <Bar />
          <TimesNewRoman className="text-[28px]">E-Commerce</TimesNewRoman>
        </div>
        <div>
          <Image
            src={urlFor(primaryBlog.featuredImage).url()}
            width={100}
            height={100}
            alt={primaryBlog.title}
            className="w-full"
          />
          <div className="grid gap-[5px]">
            <AlumniSans className="text-[18px] uppercase">
              {primaryBlog.category.tag}
            </AlumniSans>
            <TimesNewRoman className="text-xl">
              {primaryBlog.title}
            </TimesNewRoman>
            <Inter className="text-xs font-light">
              {primaryBlog.shortDescription}
            </Inter>
          </div>
          <div className="grid gap-5 my-5">
            {remainingBlog.map(({ category, featuredImage, slug, title }) => (
              <div
                className="w-[349px] flex flex-cols gap-3"
                key={slug.current}
              >
                <Image
                  src={urlFor(featuredImage).url()}
                  alt={title}
                  width={150}
                  height={120}
                  className="w-[150px] h-[120px]"
                />
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
              More from E-Commerce
            </AlumniSans>
            <MoveRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
