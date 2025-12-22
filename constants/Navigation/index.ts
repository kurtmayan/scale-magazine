export type NavLinkType = {
  url: string;
  label: string;
  hasChild?: boolean;
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
