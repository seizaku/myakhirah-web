import { SITE_CONFIG } from "@/config/site-config";
import Link from "next/link";
import { UserMenu } from "@/components/user-menu";
import { MainNav } from "@/components/layouts/main-nav";

export const SiteHeader = async () => {
  return (
    <header className="sticky top-0 mb-6 w-full bg-background py-4">
      <div className="container flex justify-between">
        <div className="flex items-center gap-12">
          <Link
            href={"/"}
            className="flex items-center gap-2 text-sm font-extrabold"
          >
            <span>{SITE_CONFIG.name}</span>
          </Link>
          <MainNav />
        </div>
        <UserMenu />
      </div>
    </header>
  );
};
