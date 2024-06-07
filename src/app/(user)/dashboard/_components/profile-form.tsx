import prisma from "@/app/db/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";
import { revalidatePath } from "next/cache";

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
    <form action={create}>
      <Button>Create User</Button>
      <section className="py-12">
        <h1 className="font-bold">User Data</h1>
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </section>
    </form>
  );
};
