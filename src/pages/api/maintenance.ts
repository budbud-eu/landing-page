import { setMaintenanceMode } from "../sessions"

export const prerender = false;

export async function PUT({ request }) {
    const content = await request.json()

    setMaintenanceMode(content.session_id, content.maintenance)
    console.log(`api/maintenance> put ${content.maintenance} for session_id ${content.session_id}`)
    return new Response(JSON.stringify({}), {
        status: 200
    });
}