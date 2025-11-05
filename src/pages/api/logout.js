export const prerender = false;

import pb from "../../utils/pb.ts";

export async function POST({ cookies }) {
  const name = "pb_auth";
  cookies.set(name, "", {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
    secure: import.meta.env.PROD,
    expires: new Date(0),
  });

  try { if (pb?.authStore?.clear) pb.authStore.clear(); } catch (e) { /* ignore */ }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}