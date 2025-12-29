import {
  TimesNewRoman,
  TiroDevanagariSanskrit,
} from "@/components/custom/Typography";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { BaseBlogType } from "@/types/blog";
import Image from "next/image";

export default async function CSuiteOffice() {
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

  return (
    <div>
      <div className="bg-linear-to-b from-gray-200 via-gray-200 to-white py-14">
        <TiroDevanagariSanskrit className="max-sm:text-xl max-sm:w-93.25 text-center mx-auto sm:text-[36px]">
          C-Suite Office
        </TiroDevanagariSanskrit>
        <TiroDevanagariSanskrit className="max-sm:text-sm max-sm:w-93.25 text-center mx-auto sm:text-[22px] flex items-center justify-center">
          Where <span className="mx-1 italic">leadership</span>
          meets innovation.
        </TiroDevanagariSanskrit>
        <TiroDevanagariSanskrit className="max-sm:text-xs max-sm:w-72.5 text-center mx-auto sm:text-[22px]">
          Immersive, insight-rich features from CEOs, tycoons, founders, and
          industry trailblazers.
        </TiroDevanagariSanskrit>
      </div>

      <div className="my-20 sm:hidden">
        <TiroDevanagariSanskrit className="max-sm:text-[20px] text-[#111111] italic sm:text-[28px] mx-auto max-sm:w-88.5 sm:w-178.75 text-center">
          Coming Soon: Leadership Insights
        </TiroDevanagariSanskrit>
      </div>
      <div className="mt-5 w-11/12 mx-auto max-sm:hidden">
        <TiroDevanagariSanskrit className="text-2xl mb-5">
          Leadership Insights
        </TiroDevanagariSanskrit>

        <div className="grid grid-cols-3 justify-items-center gap-5">
          {highlights.map((items, index) => (
            <div key={index} className="sm:w-80.75">
              <div className="relative aspect-video -z-10 ">
                <Image
                  src={urlFor(items?.featuredImage ?? "").url()}
                  alt={items.title + " images"}
                  fill
                  priority
                  className="object-cover sm:w-80.75 sm:h-60"
                />
              </div>
              <TimesNewRoman className="text-2xl">{items.title}</TimesNewRoman>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
