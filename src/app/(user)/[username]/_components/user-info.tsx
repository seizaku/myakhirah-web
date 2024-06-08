"use client";
import { useScreenView } from "@/stores/responsive-store";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export const UserInfo = ({ isLoading }: { isLoading: boolean }) => {
  const { isMobileView } = useScreenView();

  return (
    <div
      className={`w-full p-12 xl:top-12 ${isMobileView && !isLoading ? "xl:relative" : "xl:fixed xl:w-1/4"}`}
    >
      <Avatar className="h-28 w-28 xl:h-44 xl:w-44">
        <AvatarFallback></AvatarFallback>
        <AvatarImage src="https://creatorspace.imgix.net/users/cllytf9bi00aoqg014mnkckub/bbJMRsjEmWvglkil-New%2520Project.png?w=300&h=300" />
      </Avatar>
      <h1
        className={`mt-10 text-3xl font-extrabold ${isMobileView ? "xl:text-3xl" : "xl:text-[42px]"}`}
      >
        Seizaku.dev
      </h1>
      <p
        className={`text-md mt-4 max-w-sm leading-8 text-muted-foreground xl:max-w-md ${isMobileView ? "xl:text-md" : "xl:text-lg"} xl:leading-loose`}
      >
        A curated collection of Framer resources. [Press ⌘+D to bookmark this
        page] Curated by Ashwin (@Ashxris)
      </p>
    </div>
  );
};
