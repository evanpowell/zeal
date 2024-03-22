import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware

export default authMiddleware({
  // Allow signed out users to access the specified routes:
  publicRoutes: ["/site", "/api/uploadthing"],
  async afterAuth(auth, req) {
    const url = req.nextUrl;
    const searchParams = url.searchParams.toString();
    const hostname = req.headers;

    const pathWithSearchParams = `${url.pathname}${
      searchParams ? "?" : ""
    }${searchParams}`;

    // if subdomain exists
    const customSubdomain = hostname
      .get("host")
      ?.split(`${process.env.NEXT_PUBLIC_DOMAIN}`)
      .filter(Boolean)[0];

    if (customSubdomain) {
      return NextResponse.rewrite(
        new URL(`/${customSubdomain}${pathWithSearchParams}`, req.url)
      );
    }

    if (["/sign-in", "/sign-up"].includes(url.pathname)) {
      return NextResponse.redirect(new URL(`/agency/sign-in`, req.url));
    }

    if (
      ["/", "/site"].includes(url.pathname) &&
      url.host === process.env.NEXT_PUBLIC_DOMAIN
    ) {
      return NextResponse.rewrite(new URL(`/site`, req.url));
    }

    if (
      url.pathname.startsWith("/agency") ||
      url.pathname.startsWith("/subaccounts")
    ) {
      return NextResponse.rewrite(new URL(pathWithSearchParams, req.url));
    }
  },
});

export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.

    "/((?!.+\\.[\\w]+$|_next).*)",
    // Re-include any files in the api or trpc folders that might have an extension
    "/(api|trpc)(.*)",
  ],
};
