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
  _createdAt,
  category[]->{
    tag
  }
}
`);

export const GET_BLOG_BY_SLUG =
  defineQuery(`*[_type == "blog" && slug.current == $slug][0]{
  title,
  slug,
  shortDescription,
  body,
  featuredImage,
  _createdAt,
  author-> { 
    firstName, 
    middleName, 
    lastName, 
    avatar 
  },
  category[]-> { title }
}`);

export const GET_LATEST_BLOG =
  defineQuery(`*[_type == "blog"] | order(_createdAt desc)[0...3]{
    title,
    slug,
    shortDescription,
    featuredImage,
    _createdAt,
    category[]->{
      title
    }
  }`);
