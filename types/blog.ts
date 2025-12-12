import { SanityImageType, SanitySlugType } from "./sanity";

export type BaseBlogType = {
  title: string;
  shortDescription: string;
  featuredImage: SanityImageType;
  slug: SanitySlugType;
};

export type FullBlogType = BaseBlogType & {};
