import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(
    request: VercelRequest,
    response: VercelResponse,
) {
    // Use 308 for a permanent redirect, 307 for a temporary redirect
    return response.redirect(307, '/new-route');
}