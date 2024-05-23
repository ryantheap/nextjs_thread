import { hasCookie } from "cookies-next";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function middleware(request) {
  let isAuthenticated = false;

  // Check if is invited user
  if (hasCookie("guest", { cookies })) {
    isAuthenticated = true;
  }

  // Check connected

  if (!isAuthenticated) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/"],
};
