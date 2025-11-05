export const prerender = false;

export async function GET({ cookies }) {
  // Simple check : si le cookie de session PocketBase existe, on considère l'utilisateur connecté.
  const pbCookie = cookies.get ? cookies.get("pb_auth") : undefined;
  return new Response(JSON.stringify({ authenticated: !!pbCookie }), { status: 200 });
}