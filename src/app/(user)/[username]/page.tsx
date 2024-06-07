import prisma from "@/app/db/prisma";

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
    </main>
  );
}
