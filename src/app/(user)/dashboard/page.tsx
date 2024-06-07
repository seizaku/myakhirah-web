import { SiteHeader } from "@/components/layouts/site-header";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { ProfileForm } from "./_components/profile-form";

export default async function Dashboard() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return redirect("/");
  }

  const user = await getUser();

  return (
    <main className="mx-auto max-w-6xl">
      <SiteHeader />
      <div className="container">
        <section className="flex h-48 w-full flex-col items-center justify-center rounded-2xl bg-primary text-primary-foreground">
          <h5 className="text-md mb-2 font-light">Woohoo!</h5>
          <h1 className="text-center text-lg font-bold md:text-3xl">
            Your authentication is all sorted. <br /> Build the important stuff
          </h1>
        </section>
        <section className="py-12">
          <ProfileForm />
        </section>
        {/* <section className="py-12">
          <h1>User Data</h1>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </section> */}
      </div>
    </main>
  );
}
