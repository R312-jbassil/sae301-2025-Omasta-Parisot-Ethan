export const prerender = false;

import pb from "../../utils/pb.ts";

export async function POST({ request, cookies }) {
  const ct = request.headers.get("content-type") || "";
  if (!ct.includes("application/json")) {
    return new Response(JSON.stringify({ error: "Use Content-Type: application/json" }), { status: 400 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
  }

  const { prenom, nom, email, motdepasse } = body || {};
  if (!prenom || !nom || !email || !motdepasse) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }

  try {
    await pb.collection("users").create({
      email,
      password: motdepasse,
      passwordConfirm: motdepasse,
      name: `${prenom} ${nom}`,
      prenom,
      nom,
    });

    await pb.collection("users").authWithPassword(email, motdepasse);

    const cookieStr = pb.authStore.exportToCookie({
      httpOnly: true,
      sameSite: "strict",
      secure: import.meta.env.PROD,
    });
    const [, name, value] = cookieStr.match(/^([^=]+)=([^;]+);/) || [];
    cookies.set(name || "pb_auth", value || "", {
      httpOnly: true,
      sameSite: "strict",
      path: "/",
      secure: import.meta.env.PROD,
    });

    return new Response(JSON.stringify({ success: true, user: pb.authStore.model }), { status: 200 });
  } catch (err) {
    console.error("Signup failed:", err);
    const msg = err?.data?.message || err?.message || "Signup failed";
    return new Response(JSON.stringify({ error: msg }), { status: 400 });
  }
}
