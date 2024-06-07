import prisma from "@/app/db/prisma";
import { Button } from "@/components/ui/button";
import {
  MixerHorizontalIcon,
  HeartFilledIcon,
  RocketIcon,
  GitHubLogoIcon,
  PaperPlaneIcon,
  Link2Icon,
} from "@radix-ui/react-icons";

interface UserPage {
  params: {
    username: string;
  };
}
import { UserInfo } from "./_components/user-info";
import { UserProjects } from "./_components/user-projects";

export default function UserPage({ params: { username } }: UserPage) {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto h-full w-full max-w-[1728px] pt-16">
        <div className="relative mx-auto h-full w-fit xl:w-full">
          <UserInfo />
        </div>
        <div className="flex h-full w-full flex-col pb-6 xl:flex-row">
          <div className="w-5/6"></div>
          <div className="mx-auto h-full min-w-fit xl:w-full xl:max-w-full">
            <UserProjects />
          </div>
        </div>
      </div>
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
    </main>
  );
}
