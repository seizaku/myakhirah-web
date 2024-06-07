import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogoutLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { buttonVariants } from "@/components/ui/button";

export const UserMenu = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();

  return (
    <>
      {!isLoggedIn ? (
        <LoginLink
          postLoginRedirectURL={process.env.KINDE_POST_LOGIN_REDIRECT_URL}
          className={buttonVariants({ className: "text-xs" })}
        >
          Login
        </LoginLink>
      ) : (
        // <UserMenu />
        <LogoutLink
          postLogoutRedirectURL={process.env.KINDE_POST_LOGOUT_REDIRECT_URL}
          className={buttonVariants({ className: "text-xs" })}
        >
          Logout
        </LogoutLink>
        // <Avatar>
        //   <AvatarFallback></AvatarFallback>
        //   <AvatarImage src="" />
        // </Avatar>
      )}
    </>
  );
};
