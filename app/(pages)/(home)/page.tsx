import { HomepageBanner } from "@/components/custom/Banner";
import CategoryBanner from "@/components/custom/Banner/CategoryBanner";
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
      <div className="bg-[#e5e5e5] xl:py-20 p-5">
        <div className="xl:w-[1440px] xl:mx-auto">
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
                  <CarouselItem
                    className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/4"
                    key={slug.current}
                  >
                    <Link href="#">
                      <div className="p-1 grid gap-1">
                        <Image
                          src={urlFor(featuredImage).url()}
                          width={100}
                          height={100}
                          alt={title}
                          className="w-[177px] h-[232px] lg:w-full"
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
      </div>

      <CategoryBanner category="Real State" blogs={highlights} />

      {/* Cover Story */}
      <div className="xl:w-[1440px] xl:mx-auto xl:py-20 p-5 bg-[#D9D9D9] xl:grid xl:grid-cols-2 gap-20">
        <div className="flex flex-col xl:gap-20 gap-3">
          <TimesNewRoman className="text-[28px] xl:text-6xl">
            Cover Story
          </TimesNewRoman>
          <Inter className="text-xs xl:text-3xl font-light">
            Take a deeper dive into the fascinating stories, iconic brands, and
            groundbreaking trends that have shaped the e-commerce landscape over
            the years, all featured in our magazine editions.
          </Inter>
          <AlumniSans className="xl:text-3xl">View All</AlumniSans>
        </div>

        <div>
          <Carousel className="w-full z-20 xl:hidden">
            <CarouselContent className="-ml-1">
              {highlights
                .slice(0, 4)
                .map(
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
          <div className="hidden xl:flex flex-col gap-5">
            {highlights
              .slice(0, 3)
              .map(({ slug, title, category, featuredImage }) => (
                <div key={slug.current} className="flex flex-row gap-5">
                  <Image
                    src={urlFor(featuredImage).url()}
                    alt={slug.current}
                    width={100}
                    height={100}
                    className="w-[185px] h-[192px]"
                  />
                  <div>
                    <AlumniSans className="uppercase text-2xl">
                      {category.tag}
                    </AlumniSans>
                    <TimesNewRoman className="text-2xl">{title}</TimesNewRoman>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <CategoryBanner category="E-Commerce" blogs={highlights} />
    </div>
  );
}
