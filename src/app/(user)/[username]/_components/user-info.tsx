import prisma from "@/app/db/prisma";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export const UserInfo = () => {
  return (
    <div className="w-full p-12 xl:fixed xl:top-12 xl:w-1/4">
      <Avatar className="h-28 w-28 xl:h-44 xl:w-44">
        <AvatarFallback></AvatarFallback>
        <AvatarImage src="https://creatorspace.imgix.net/users/cllytf9bi00aoqg014mnkckub/bbJMRsjEmWvglkil-New%2520Project.png?w=300&h=300" />
      </Avatar>
      <h1 className="mt-10 text-3xl font-extrabold xl:text-[42px]">
        Framer Library
      </h1>
      <p className="text-md mt-4 max-w-sm leading-8 text-muted-foreground xl:max-w-md xl:text-lg xl:leading-loose">
        A curated collection of Framer resources. [Press ⌘+D to bookmark this
        page] Curated by Ashwin (@Ashxris)
      </p>
    </div>
  );
};
