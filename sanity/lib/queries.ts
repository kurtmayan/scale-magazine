import { defineQuery } from "next-sanity";

export const GET_CATEGORIES = defineQuery(`*[_type == "category"]`);

export const GET_BLOG = defineQuery(`*[_type == "blog"]`);
