import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-pathname', pathname)
 
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
 
  return response
}
 
export const config = {
  matcher: ['/((?!_next|api|favicon.ico|images|.*\\..*).*)'],
}
 
