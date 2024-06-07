import { SiteHeader } from "@/components/layouts/site-header";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { UsernameForm } from "./_components/username-form";
import { ProfileForm } from "./_components/profile-form";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/layouts/hero";

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
        <Hero />
        <section className="mx-auto max-w-lg space-y-4 py-12">
          <UsernameForm />
          <ProfileForm />
          <hr />
          <Button className="w-full">Add Project</Button>
        </section>
        {/* <section className="py-12">
          <h1>User Data</h1>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </section> */}
      </div>
    </main>
  );
}
