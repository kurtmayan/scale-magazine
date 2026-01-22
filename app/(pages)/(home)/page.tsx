import { HomepageBanner } from "@/components/custom/Banner";
import CategoryBanner from "@/components/custom/Banner/CategoryBanner";
import {
  AlumniSans,
  Inter,
  TimesNewRoman,
} from "@/components/custom/Typography";
import Bar from "@/components/icons/bar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { capitalizeWords } from "@/lib/capitalizeWords";
import formatDate from "@/lib/formatDate";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { defineQuery } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const GET_BLOG_HIGHLIGHT =
    defineQuery(`*[_type == "blog" && type == "highlight"]{
      _id,
      title,
      shortDescription,
      "slug": slug.current,
      type,
      "categories": category[]->{
        _id,
        tag
      },
      author->{
        firstName,
        lastName
      },
      featuredImage,
      _createdAt
    }
  `);
  const highlights = await client.fetch(GET_BLOG_HIGHLIGHT);
  const GET_CATEGORY_BANNER = defineQuery(`*[
    _type == "blog" &&
      references(*[_type == "category" && tag == $categoryName][0]._id)
    ]{
      _id,
      title,
      featuredImage,
      slug,
      category[]->{
        tag
      },
      shortDescription,
      _createdAt
    }
  `);

  const FIRSTCATEGORY = "business";
  const categoryBanner = await client.fetch(GET_CATEGORY_BANNER, {
    categoryName: FIRSTCATEGORY,
  });

  const SECONDCATEGORY = "technology";
  const secondCategoryBanner = await client.fetch(GET_CATEGORY_BANNER, {
    categoryName: SECONDCATEGORY,
  });

  const GET_COVER_STORY =
    defineQuery(`*[_type == "section" && groupName == "Cover Story"][0]{
      groupName,
      description,
      category[]->{
        _id,
        tag
      },
      "blogs": *[
        _type == "blog" &&
        (
          category._ref in ^.category[]._ref ||
          count(category[@._ref in ^.category[]._ref]) > 0
        )
      ][0...6]{
        _id,
        _createdAt,
        title,
        slug,
        featuredImage,
        shortDescription,
        category[]-> {
          _id,
          tag
        }
      }
    }
  `);
  const coverStory = await client.fetch(GET_COVER_STORY);

  return (
    <div>
      <HomepageBanner />
      {/* Highlight Section */}
      <div className="bg-[#e5e5e5] xl:py-20 p-5">
        <div className="xl:w-360 xl:mx-auto">
          <div className=" grid gap-3">
            <Bar />
            <TimesNewRoman className="text-[28px]">Highlights</TimesNewRoman>
          </div>
          <Carousel className="w-full">
            <CarouselContent className="-ml-1 ">
              {highlights.map(
                (
                  { featuredImage, title, _createdAt, slug, categories },
                  index,
                ) => (
                  <CarouselItem
                    className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/4"
                    key={index}
                  >
                    <Link href={`/blog/${categories[0].tag}/${slug}`}>
                      <div className="p-1 grid gap-1 ">
                        <div className="w-44.25 h-58 lg:w-full relative aspect-square">
                          <Image
                            src={urlFor(featuredImage).url()}
                            alt={title}
                            fill
                            className="object-cover"
                          />
                        </div>
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

      <CategoryBanner
        category={capitalizeWords(FIRSTCATEGORY)}
        blogs={categoryBanner}
      />

      {/* Cover Story */}
      <div className="xl:w-360 xl:mx-auto xl:py-20 p-5 bg-[#D9D9D9] xl:grid xl:grid-cols-2 gap-20">
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
              {coverStory?.blogs
                .slice(0, 4)
                .map(({ title, featuredImage, slug, _createdAt, category }) => (
                  <CarouselItem className="pl-1 basis-1/2" key={slug.current}>
                    <Link href={`/blog/${category[0].tag}/${slug.current}`}>
                      <div className="p-1 grid gap-1">
                        <div className="w-auto h-39.5 relative aspect-square">
                          <Image
                            src={urlFor(featuredImage).url()}
                            alt={title}
                            fill
                          />
                        </div>
                        <AlumniSans className="text-xs font-medium">
                          {formatDate(_createdAt)}
                        </AlumniSans>
                        <TimesNewRoman className="text-sm">
                          {title}
                        </TimesNewRoman>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
            </CarouselContent>
          </Carousel>
          <div className="hidden xl:flex flex-col gap-5">
            {coverStory?.blogs
              .slice(0, 3)
              .map(({ slug, title, category, featuredImage }) => (
                <Link
                  href={`/blog/${category[0].tag}/${slug.current}`}
                  key={slug.current}
                >
                  <div key={slug.current} className="flex flex-row gap-5">
                    <div className="w-46.25 h-48 relative aspect-square">
                      <Image
                        src={urlFor(featuredImage).url()}
                        alt={slug.current}
                        className="object-cover"
                        fill
                      />
                    </div>
                    <div>
                      <AlumniSans className="uppercase text-2xl">
                        {category[0].tag}
                      </AlumniSans>
                      <TimesNewRoman className="text-2xl">
                        {title}
                      </TimesNewRoman>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <CategoryBanner
        category={capitalizeWords(SECONDCATEGORY)}
        blogs={secondCategoryBanner}
      />
    </div>
  );
}
