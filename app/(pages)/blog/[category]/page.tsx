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
  searchParams,
}: {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const paginationParams = await searchParams;
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

  const ITEMS_PER_PAGE = 6;
  const currentPage = Number(paginationParams.page) || 1;
  const totalPages = Math.ceil(normalPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedPosts = normalPosts.slice(startIndex, endIndex);

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
        {paginatedPosts.map((e, index) => (
          <Item key={index} slugCategory={category} {...e} />
        ))}
      </div>

      <Pagination className="my-8">
        <PaginationContent className="gap-1">
          <PaginationItem>
            <PaginationLink
              href={`?page=${Math.max(currentPage - 1, 1)}`}
              aria-disabled={currentPage === 1}
              className={`border border-black lg:h-[77px] lg:w-[77px] ${
                currentPage === 1 && "pointer-events-none opacity-50"
              }`}
            >
              <MoveLeft className="lg:h-6 lg:w-6" />
            </PaginationLink>
          </PaginationItem>

          {Array.from({ length: totalPages }).map((_, i) => {
            const page = i + 1;
            const isActive = page === currentPage;

            return (
              <PaginationItem
                key={page}
                className={isActive ? "bg-black text-white rounded-lg" : ""}
              >
                <PaginationLink
                  href={`?page=${page}`}
                  className="border border-black font-bold lg:h-[77px] lg:w-[77px] lg:text-2xl flex items-center justify-center"
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem>
            <PaginationLink
              href={`?page=${Math.min(currentPage + 1, totalPages)}`}
              aria-disabled={currentPage === totalPages}
              className={`border border-black lg:h-[77px] lg:w-[77px] ${
                currentPage === totalPages && "pointer-events-none opacity-50"
              }`}
            >
              <MoveRight className="lg:h-6 lg:w-6" />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
