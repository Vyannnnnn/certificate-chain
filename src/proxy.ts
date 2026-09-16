import { NextResponse, NextRequest } from "next/server";

export function proxy(req: NextRequest, res: NextResponse) {
  const token = req.cookies.get("token");
  const { pathname } = req.nextUrl;

  if (token) {
    if (pathname === "/login") {
      console.log("User is already authenticated. Redirecting to dashboard.");
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    return NextResponse.next();
  }

  const protectedRoutes = ["/dashboard", "/students", "/certificates"];
  const isProtectedPath = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );
  if (isProtectedPath) {
    console.log("User is not authenticated. Redirecting to login page.");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/students/:path*", "/certificates/:path*", "/login"],
};
