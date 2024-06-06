
export type SITE_CONFIG = typeof SITE_CONFIG;

export const SITE_CONFIG = {
  description: "",
  name: "MyAkhirah.",
  url: process.env.NEXT_PUBLIC_SITE_URL,
  mainNav: [
    {
      title: "Pricing",
      href: "/pricing"
    },
    {
      title: "About Us",
      href: "/about"
    }
  ]
}