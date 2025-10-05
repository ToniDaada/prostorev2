// export { auth as middleware } from "@/auth";

// middleware.ts

// Light weight middle ware for deployment on vercel
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("authjs.session-token"); // adjust based on your auth lib
  if (!token) return NextResponse.redirect(new URL("/login", req.url));
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"], // limit routes
};
