import { RequestCookies } from 'next/dist/compiled/@edge-runtime/cookies'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

type ICookies  = RequestCookies & {
  authToken: string;
}
interface IRequest extends NextRequest{
  cookies: ICookies
}
// This function can be marked `async` if using `await` inside
export function middleware(request: IRequest) {
    const nextUrl = request.nextUrl
  if (nextUrl.pathname === '/dashboard') {
    if (!request.cookies.get('authToken')?.value) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }else if(nextUrl?.pathname === '/login' || nextUrl?.pathname === '/signup' || nextUrl?.pathname === '/'){
  

    if (request.cookies.get('authToken')?.value) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }
  }
   
  // See "Matching Paths" below to learn more
  export const config = {
    matcher: ['/dashboard/:path*', '/login', '/signup', '/'],
  }