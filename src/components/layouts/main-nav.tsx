import { SITE_CONFIG } from "@/config/site-config";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const MainNav = () => (
  <nav className="hidden sm:flex">
    <ul className="flex gap-2">
      {SITE_CONFIG.mainNav.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            className={buttonVariants({ variant: "ghost" })}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
