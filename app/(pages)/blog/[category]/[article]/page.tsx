import {
  AlumniSans,
  Inter,
  TimesNewRoman,
} from "@/components/custom/Typography";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Item from "@/components/custom/Blog/Item";
import { client } from "@/sanity/lib/client";
import { GET_BLOG_BY_CATEGORY, GET_BLOG_BY_SLUG } from "@/sanity/lib/queries";
import { Blog } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { capitalizeFirstLetters } from "@/lib/utils";

export default async function Article({
  params,
}: {
  params: Promise<{ category: string; article: string }>;
}) {
  const { category, article } = await params;
  const decodeArticle = decodeURIComponent(article);
  const blogSlug = await client.fetch(GET_BLOG_BY_SLUG, {
    slug: decodeArticle,
  });
  const blogCategories = await client.fetch<Blog[]>(GET_BLOG_BY_CATEGORY, {
    // @ts-expect-error ts-migrate-ignore
    tag: category,
  });
  const normalPosts = blogCategories.filter(
    (post) => post.type !== "highlight",
  );

  return (
    <div className="lg:w-10/12 mx-auto ">
      <div className="max-sm:ps-5 max-sm:pt-5 lg:pt-16">
        <AlumniSans className="font-semibold text-[26px]">
          INDUSTRY / REAL ESTATE
        </AlumniSans>
      </div>

      <div>
        <div className="relative aspect-video">
          <Image
            src={urlFor(blogSlug?.featuredImage ?? "").url()}
            alt="Hello"
            fill
            priority
            className="object-contain px-1"
          />
        </div>
        <div className="p-4">
          <TimesNewRoman className="max-sm:text-2xl lg:text-[48px]">
            {blogSlug?.title}
          </TimesNewRoman>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center justify-center">
              <Avatar className="rounded-full w-5 h-5 items-center justify-center">
                <AvatarImage
                  src={urlFor(blogSlug?.author?.avatar ?? "").url()}
                  alt="@evilrabbit"
                  className="w-5 h-5 rounded-full"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
              <AlumniSans className="text-[#5C5C5C] text-sm">
                BY: {blogSlug?.author?.firstName} {blogSlug?.author?.lastName}
              </AlumniSans>
            </div>

            <AlumniSans className="text-[#5C5C5C] text-sm">
              {new Date(blogSlug?._createdAt ?? "")
                .toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
                .toUpperCase()}
            </AlumniSans>
            <div></div>
          </div>
        </div>
        <div className="px-4">
          <PortableText
            value={blogSlug?.body ?? []}
            components={{
              block: {
                h1: ({ children }) => (
                  <Inter className="text-2xl leading-[165%]">{children}</Inter>
                ),
                h2: ({ children }) => (
                  <Inter className="text-3xl leading-[165%]">{children}</Inter>
                ),
                h3: ({ children }) => (
                  <Inter className="text-4xl leading-[165%]">{children}</Inter>
                ),
                h4: ({ children }) => (
                  <Inter className="text-5xl leading-[165%]">{children}</Inter>
                ),
                normal: ({ children }) => (
                  <Inter className="text-xs leading-[165%]">{children}</Inter>
                ),
              },
            }}
          />
        </div>
      </div>

      <div className="px-4 my-8">
        <button className="border border-[#1E1E1E] px-4 py-2">
          <AlumniSans className="font-medium text-xs">
            RECENT STORIES
          </AlumniSans>
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-5 justify-items-center justify-around">
        {normalPosts.map((e, index) => (
          <Item key={index} slugCategory={category} {...e} />
        ))}
      </div>

      <div className="p-4">
        <TimesNewRoman className="text-2xl">
          More from {capitalizeFirstLetters(category)}
        </TimesNewRoman>

        <div className="gap-2 flex flex-col ">
          {blogCategories.map((e, index) => (
            <div className="flex" key={index}>
              <div className="relative aspect-square max-sm:h-37.5 max-sm:w-44.5 lg:w-118.5 lg:h-99.5">
                <Image
                  // src={
                  //   "https://cdn.sanity.io/images/2n1nozhz/production/e5c3bd7ec07e195699d8940e2b8429c258669532-388x187.png?w=2000&fit=max&auto=format&dpr=2"
                  // }
                  src={urlFor(e.featuredImage || "").url()}
                  alt="Hello"
                  fill
                  priority
                  className="object-cover px-1"
                />
              </div>
              <div className="flex justify-center flex-col">
                <TimesNewRoman className="text-base leading-[118.9%]">
                  From Market Trens to Investment Tips
                </TimesNewRoman>
                <Inter className="text-xs text-[#1E1E1E] font-extralight leading-[130%] mt-1">
                  Stay ahead in the real estate market with the latest trends,
                  expert insights, and smart investment tips. Learn how to make
                  informed decisions.
                </Inter>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
