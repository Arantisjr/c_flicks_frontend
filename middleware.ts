// import createMiddleware from "next-intl/middleware";
// import { routing } from './i18n/routing';

// export default createMiddleware(
//     routing
// );


// export const config = {
//     matcher: [
//         "/",
//         "/(de|fr|en)/:path*",
//         // "/login",
//         // "/signup",
//         // "/dashboard",
//         // "/homepage",
//     ],
// }



import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    // Match all pathnames except for
    // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};