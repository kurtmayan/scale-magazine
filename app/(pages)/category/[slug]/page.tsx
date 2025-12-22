import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { capitalizeFirstLetters } from "@/lib/utils";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className=" lg:w-10/12 mx-auto">
      <div className="max-sm:ps-5 max-sm:pt-5 lg:pt-16">
        <div className="h-2.5 w-20 bg-[#5C5C5C] rounded-full"></div>
        <h1 className="font-times-new-roman max-sm:text-[28px] lg:text-[64px]">
          {capitalizeFirstLetters(slug)}
        </h1>
      </div>

      <div>
        <div className="relative aspect-video">
          <Image
            src="https://cdn.sanity.io/images/2n1nozhz/staging/34d4e51fe4ad439d012fb7d86dd896d4ad2caec1-1920x1080.png"
            alt="Hello"
            fill
            priority
            className="object-contain px-1"
          />
        </div>
        <div className="p-5">
          <h2 className="font-times-new-roman max-sm:text-2xl lg:text-[48px]">
            The Insider&apos;s your Guide to Real Estate Success
          </h2>
          <p className="font-inter max-sm:text-xs leading-[165%] lg:text-[28px]">
            Gain expert insights, proven strategies, and the latest market
            trends to navigate the real estate world with confidence. Make
            informed decisions and maximize your investment potential for
            long-term profitability.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-5 justify-items-center justify-around">
        {Array.from({ length: 10 }).map((e, index) => (
          <div key={index}>
            <div className="relative aspect-square max-sm:h-[150px] max-sm:w-[178px] lg:w-[474px] lg:h-[398px]">
              <Image
                src={
                  "https://cdn.sanity.io/images/2n1nozhz/staging/c15ecf93caec8f55507fdd15347e0d5f24095046-800x450.png?w=2000&fit=max&auto=format"
                }
                alt="Hello"
                fill
                priority
                className="object-cover px-1"
              />
            </div>
            <p className="font-times-new-roman max-sm:text-sm text-wrap max-sm:w-[178px] lg:w-[474px] lg:text-[32px] leading-[118.9%] px-1 mt-2">
              From Market Trends to Investment Tips
            </p>
          </div>
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
