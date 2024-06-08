"use client";
import prisma from "@/db/prisma";
import { Button } from "@/components/ui/button";
import {
  MixerHorizontalIcon,
  HeartFilledIcon,
  RocketIcon,
  GitHubLogoIcon,
  PaperPlaneIcon,
  Link2Icon,
} from "@radix-ui/react-icons";
import { BottomControl } from "@/components/control-cards";

interface UserPage {
  params: {
    username: string;
  };
}
import { UserInfo } from "./_components/user-info";
import { UserProjects } from "./_components/user-projects";

import { useScreenView } from "@/stores/responsive-store";
import { useEffect, useState } from "react";

export default function UserPage({ params: { username } }: UserPage) {
  const { isMobileView } = useScreenView();
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, [isMobileView]);

  return (
    <main className={`min-h-screen ${isMobileView && !isLoading && "py-12"}`}>
      <div
        className={`container mx-auto h-full w-full bg-background duration-500 ease-in-out ${isMobileView && !isLoading ? "no-scrollbar max-h-[720px] max-w-md overflow-y-scroll rounded-3xl border-4" : "max-w-[1728px]"} ${isLoading && "opacity-0"} pt-16 transition-all`}
      >
        <div className="relative mx-auto h-full w-fit xl:w-full">
          <UserInfo isLoading={isLoading} />
        </div>
        <div className="flex h-full w-full flex-col pb-6 xl:flex-row">
          <div className="w-5/6"></div>
          <div className="mx-auto h-full w-full xl:min-w-fit xl:max-w-full">
            <UserProjects />
          </div>
        </div>
      </div>

      {/* Footer Menu */}
      <nav className="container bottom-8 left-8 mb-4 text-muted-foreground xl:fixed">
        <div className="flex items-center gap-4 divide-x">
          <ul className="flex gap-2">
            <li>
              <Button variant={"ghost"} className="rounded-full" size={"icon"}>
                <MixerHorizontalIcon className="h-4 w-4" />
              </Button>
            </li>
            <li>
              <Button variant={"ghost"} className="rounded-full" size={"icon"}>
                <Link2Icon className="h-4 w-4" />
              </Button>
            </li>
            <li>
              <Button variant={"ghost"} className="rounded-full" size={"icon"}>
                <HeartFilledIcon className="h-4 w-4" />
              </Button>
            </li>
          </ul>
          <p className="pl-6 text-xs">No views yesterday</p>
        </div>
      </nav>

      <BottomControl />
    </main>
  );
}
