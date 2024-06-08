import { SiteHeader } from "@/components/layouts/site-header";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
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
        <section className="py-12">
          <h1>User Data</h1>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </section>
      </div>
    </main>
  );
}
