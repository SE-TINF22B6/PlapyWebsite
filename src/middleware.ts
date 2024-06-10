import { NextRequest, NextResponse } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import {debug} from "node:util";

// Define routes that should be protected
const isProtectedRoute = createRouteMatcher([
    '/' // Add any additional routes here
]);
// Update clerkMiddleware to manually protect routes
export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) {
        auth().protect(); // Protect the route if it matches the defined criteria
    }
},
{debug: true}
)
export const config = {
    matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};