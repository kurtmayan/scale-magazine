import { defineQuery } from "next-sanity";

export const GET_CATEGORIES = defineQuery(`*[_type == "category"]`);

export const GET_BLOG = defineQuery(`*[_type == "blog"]`);

export const GET_BLOG_BY_CATEGORY = defineQuery(`*[
  _type == "blog" &&
  $tag in category[]->tag
]{
  title,
  slug,
  type,
  shortDescription,
  featuredImage,
  category[]->{
    tag
  }
}
`);
