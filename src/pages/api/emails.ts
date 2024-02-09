import type { APIRoute } from 'astro'

const authToken = import.meta.env.BENCHMARKEMAIL_AUTH_TOKEN
const listId = import.meta.env.BENCHMARKEMAIL_CONTACT_LIST_ID

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    const formData = await request.formData()

    var myHeaders = new Headers();
    myHeaders.append("AuthToken", authToken);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        EmailIDs: formData.get("email"),
    });

    const response = await fetch(
        "https://clientapi.benchmarkemail.com/Contact/" +
        listId +
        "/ContactDetails/CSV/Verified",
        {
            method: "POST",
            body: raw,
            headers: myHeaders,
        },
    )
    const data = await response.json()

    return new Response(
        JSON.stringify({ message: data.detail }),
        { status: data.status }
    );
}
