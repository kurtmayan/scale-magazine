export type NavLinkType = {
  url: string;
  label: string;
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
