"use client";

import { SiteHeader } from "@/components/layouts/site-header";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  const {
    permissions,
    isLoading,
    user,
    accessToken,
    organization,
    userOrganizations,
    getPermission,
    getBooleanFlag,
    getIntegerFlag,
    getFlag,
    getStringFlag,
    getClaim,
    getAccessToken,
    getToken,
    getIdToken,
    getOrganization,
    getPermissions,
    getUserOrganizations,
  } = useKindeBrowserClient();

  console.log(getPermission("eat:chips"));
  console.log(getBooleanFlag("flag", false));
  console.log(getIntegerFlag("eat:chips", 1));
  console.log(getStringFlag("eat:chips", "ds"));
  console.log(getFlag("eat:chips", false, "b"));

  console.log("accessToken", accessToken);
  console.log(getClaim("aud"));
  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="mx-auto max-w-6xl">
      <SiteHeader />
      <div className="container">
        <div className="pt-20">
          <LoginLink postLoginRedirectURL="/dashboard">Login</LoginLink>
          <div className="mb-8">
            <h4 className="mb-2 text-2xl font-bold dark:text-white">User</h4>

            <pre className="rounded bg-slate-950 p-4 text-green-300">
              {JSON.stringify(user, null, 2)}
            </pre>
          </div>

          <div className="mb-8">
            <h4 className="mb-2 text-2xl font-bold dark:text-white">
              Permissions
            </h4>

            <pre className="rounded bg-slate-950 p-4 text-green-300">
              {JSON.stringify(permissions, null, 2)}
            </pre>
          </div>

          <div className="mb-8">
            <h4 className="mb-2 text-2xl font-bold dark:text-white">
              Organization
            </h4>

            <pre className="rounded bg-slate-950 p-4 text-green-300">
              {JSON.stringify(organization, null, 2)}
            </pre>
          </div>

          <div className="mb-8">
            <h4 className="mb-2 text-2xl font-bold dark:text-white">
              User organizations
            </h4>

            <pre className="rounded bg-slate-950 p-4 text-green-300">
              {JSON.stringify(userOrganizations, null, 2)}
            </pre>
          </div>

          <div className="mb-8">
            <h4 className="mb-2 text-2xl font-bold dark:text-white">
              Access token
            </h4>

            <pre className="rounded bg-slate-950 p-4 text-green-300">
              {JSON.stringify(accessToken, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
}
