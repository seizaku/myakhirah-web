import prisma from "@/db/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";
import { revalidatePath } from "next/cache";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ProfileForm = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  async function create(data: any) {
    "use server";
    const res = await prisma.user
      .create({
        data: {
          id: user?.id!,
          username: "seizaku",
          displayName: `${user?.given_name} ${user?.family_name}`,
          description: "Lorem Ipsum",
          email: user?.email!,
        },
      })
      .catch((err) => {
        console.error(err);
      });
    console.log(res);
    revalidatePath("/dashboard");
  }

  const users = await prisma.user.findFirst({
    where: {
      id: user?.id,
    },
  });

  return (
    <form className="mx-auto h-64 w-full max-w-lg rounded-lg border p-4">
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarFallback></AvatarFallback>
          <AvatarImage src="" />
        </Avatar>
        <Input />
      </div>
      <Textarea rows={5} className="mt-2"></Textarea>
    </form>
  );
};
