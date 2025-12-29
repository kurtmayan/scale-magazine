import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { capitalizeFirstLetters } from "@/lib/utils";
import { GET_BLOG_BY_CATEGORY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { MoveLeft, MoveRight } from "lucide-react";
import { Blog } from "@/sanity.types";
import Highlight from "@/components/custom/Blog/Highlight";
import Item from "@/components/custom/Blog/Item";

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const blogCategories = await client.fetch<Blog[]>(GET_BLOG_BY_CATEGORY, {
    // @ts-expect-error ts-migrate-ignore
    tag: category,
  });
  const highlightPost = blogCategories.find(
    (post) => post.type === "highlight",
  );

  const normalPosts = blogCategories.filter(
    (post) => post.type !== "highlight",
  );
  return (
    <div className=" lg:w-10/12 mx-auto">
      <div className="max-sm:ps-5 max-sm:pt-5 lg:pt-16">
        <div className="h-2.5 w-20 bg-[#5C5C5C] rounded-full"></div>
        <h1 className="font-times-new-roman max-sm:text-[28px] lg:text-[64px]">
          {capitalizeFirstLetters(decodeURIComponent(category))}
        </h1>
      </div>

      {highlightPost && <Highlight {...highlightPost} />}

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-5 justify-items-center justify-around">
        {normalPosts.map((e, index) => (
          <Item key={index} slugCategory={category} {...e} />
        ))}
      </div>

      <Pagination className="my-8">
        <PaginationContent className="gap-1">
          <PaginationItem className="border border-black h-9 w-9 rounded-sm justify-center items-center flex lg:h-[77px] lg:w-[77px]">
            <MoveLeft size={12} className="lg:h-6 lg:w-6" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="border border-black font-bold lg:h-[77px] lg:w-[77px] lg:text-2xl"
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="border border-black bg-black text-white font-bold lg:h-[77px] lg:w-[77px] lg:text-2xl"
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="border border-black font-bold lg:h-[77px] lg:w-[77px] lg:text-2xl"
            >
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className="border border-black h-9 w-9 rounded-sm justify-center items-center flex lg:h-[77px] lg:w-[77px]">
            <MoveRight size={12} className="lg:h-6 lg:w-6" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
