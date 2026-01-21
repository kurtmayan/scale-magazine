import {
  AlumniSans,
  Inter,
  TimesNewRoman,
} from "@/components/custom/Typography";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Item from "@/components/custom/Blog/Item";
import {
  GET_BLOG_BY_CATEGORY,
  GET_BLOG_BY_SLUG,
  GET_LATEST_BLOG,
} from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { Blog } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { capitalizeFirstLetters } from "@/lib/utils";
import ListItem from "@/components/custom/Blog/ListItem";

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
  const normalPosts = blogCategories
    .filter((post) => post.type !== "highlight")
    .slice(0, 3);

  const recentBlog = await client.fetch<Blog[]>(GET_LATEST_BLOG);

  return (
    <div className="lg:w-10/12 mx-auto ">
      <div className="max-sm:ps-5 max-sm:pt-5 lg:pt-16 p-5">
        <AlumniSans className="font-semibold  max-sm:text-[26px] lg:text-[64px]">
          {category.toUpperCase()}
        </AlumniSans>
      </div>

      <div>
        <div className="relative aspect-video -z-10">
          <Image
            src={urlFor(blogSlug?.featuredImage ?? "").url()}
            alt="Hello"
            fill
            priority
            className="object-contain px-1"
          />
        </div>
        <div className="px-4">
          <TimesNewRoman className="max-sm:text-2xl sm:text-[60px]">
            {blogSlug?.title}
          </TimesNewRoman>
        </div>
        <div className="px-4 grid md:grid-cols-[2fr_1fr]">
          <div>
            <div className="flex items-center justify-between mt-2 mb-4">
              <div className="flex items-center justify-center  gap-2">
                <Avatar className="rounded-full max-sm:w-5 max-sm:h-5 sm:w-[60px] sm:h-[60px] items-center justify-center -z-10">
                  <AvatarImage
                    src={urlFor(blogSlug?.author?.avatar ?? "").url()}
                    alt="@evilrabbit"
                    className="max-sm:w-5 max-sm:h-5 sm:w-[60px] sm:h-[60px] rounded-full "
                  />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
                <AlumniSans className="text-[#5C5C5C] max-sm:text-sm sm:text-[32px] font-medium">
                  BY: {blogSlug?.author?.firstName} {blogSlug?.author?.lastName}
                </AlumniSans>
              </div>

              <AlumniSans className="text-[#5C5C5C] max-sm:text-sm sm:text-[32px] font-medium">
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
            <PortableText
              value={blogSlug?.body ?? []}
              components={{
                types: {
                  image: ({ value, index }) => (
                    <div className="relative aspect-video -z-10">
                      <Image
                        src={urlFor(value ?? "").url()}
                        alt={index + " images"}
                        fill
                        priority
                        className="object-contain px-1"
                      />
                    </div>
                  ),
                },

                block: {
                  h1: ({ children }) => (
                    <Inter className="max-sm:text-3xl sm:text-4xl leading-[165%] font-bold">
                      {children}
                    </Inter>
                  ),
                  h2: ({ children }) => (
                    <Inter className="max-sm:text-2xl sm:text-3xl leading-[165%] font-bold">
                      {children}
                    </Inter>
                  ),
                  h3: ({ children }) => (
                    <Inter className="max-sm:text-xl sm:text-2xl leading-[165%] font-bold">
                      {children}
                    </Inter>
                  ),
                  h4: ({ children }) => (
                    <Inter className="max-sm:text-lg sm:text-xl leading-[165%] font-bold">
                      {children}
                    </Inter>
                  ),
                  normal: ({ children }) => (
                    <Inter className="max-sm:text-xs sm:text-2xl leading-[165%] whitespace-pre-line">
                      {children}
                    </Inter>
                  ),
                },
              }}
            />
          </div>
          <div>
            <div className="mt-2 mb-4">
              <button className="border border-[#1E1E1E] max-sm:w-[97px] max-sm:h-[36px] sm:h-[73.15px] sm:w-[205px] cursor-pointer items-center justify-center flex">
                <AlumniSans className="font-medium max-sm:text-xs sm:text-[32px]">
                  RECENT STORIES
                </AlumniSans>
              </button>
            </div>

            <div className=" justify-between flex sm:block">
              {recentBlog.map((e, index) => (
                <Item key={index} slugCategory={category} {...e} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <TimesNewRoman className="max-sm:text-2xl sm:text-[64px]">
          More from {capitalizeFirstLetters(category)}
        </TimesNewRoman>

        <div className="gap-2 flex flex-col mt-2 ">
          {normalPosts.map((e, index) => (
            <ListItem {...e} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
