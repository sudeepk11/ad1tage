import { NextRequest, NextResponse } from "next/server";

const publicPathnames = ['/login', '/signup', '/forgot-password']

const privatePathnames = ['/admin', '/tenent']

export default function middleware(req: NextRequest) {
    const authToken = req.cookies.get("auth-token")?.value
    const { pathname } = req.nextUrl

    if(authToken && publicPathnames.some(item => pathname.startsWith(item))) {
        return NextResponse.redirect(new URL("/tenent", req.url))
    }

    if(!authToken && privatePathnames.some(item => pathname.startsWith(item))) {
        return NextResponse.redirect(new URL("/login", req.url))
    }
}