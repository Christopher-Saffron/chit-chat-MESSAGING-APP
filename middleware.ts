import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/', request.url))
if (request.nextUrl.pathname === '/online') {
    console.log('ding ONLINE')
    console.log(request.credentials)
    console.log(request.cookies)
}
return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/online', '/']
}