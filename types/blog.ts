import { SanityImageType, SanitySlugType } from "./sanity";

export type BaseBlogType = {
  title: string;
  shortDescription: string;
  featuredImage: SanityImageType;
  slug: SanitySlugType;
  category: {
    tag: string;
  };
  _createdAt: string;
};

export type FullBlogType = BaseBlogType & {};
