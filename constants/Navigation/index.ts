import { client } from "@/sanity/lib/client";
import { GET_CATEGORIES } from "@/sanity/lib/queries";

export type NavLinkType = {
  url: string;
  label: string;
  hasChild?: boolean;
  child?: NavLinkType[];
};

export const headerNavLink: NavLinkType[] = [
  {
    url: "/",
    label: "home",
  },
  {
    url: "/about-us",
    label: "about us",
  },
  {
    url: "/awards",
    label: "awards",
  },
  {
    url: "/startups",
    label: "startups",
  },
  {
    url: "/industries",
    label: "industries",
    hasChild: true,
  },
  {
    url: "/more",
    label: "more",
    hasChild: true,
    child: [
      {
        url: "/more/c-suite-office",
        label: "c-suite office",
      },
    ],
  },
];

export const footerNavLink: NavLinkType[] = [
  {
    url: "/contact-us",
    label: "contact us",
  },
  {
    url: "/privacy-policy",
    label: "privacy policy",
  },
  {
    url: "/terms-and-condition",
    label: "terms and condition",
  },
  {
    url: "/advertise",
    label: "advertise",
  },
  {
    url: "/security",
    label: "security",
  },
];
