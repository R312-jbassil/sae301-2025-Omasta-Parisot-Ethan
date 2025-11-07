import PocketBase from "pocketbase";

export const onRequest = async (context, next) => {
  const { url, cookies, locals } = context;

  const pb = new PocketBase(
    import.meta.env.PUBLIC_PB_URL ?? "http://127.0.0.1:8090"
  );

  const cookieVal = cookies.get("pb_auth")?.value;
  if (cookieVal) pb.authStore.loadFromCookie(`pb_auth=${cookieVal}`);

  locals.user = pb.authStore.isValid ? pb.authStore.model ?? pb.authStore.record : null;

  const isPublic =
    url.pathname === "/" ||
    url.pathname === "/login" ||
    url.pathname === "/signup" ||
    url.pathname === "/accueil" ||
    url.pathname.startsWith("/apis/login") ||
    url.pathname.startsWith("/apis/signup");

  const needsAuth =
    url.pathname.startsWith("/configurateur") ||
    url.pathname.startsWith("/gallery") ||
    url.pathname.startsWith("/mes-lunettes") ||
    url.pathname.startsWith("/apis/lunettes") ||
    url.pathname.startsWith("/apis/logout");

  if (needsAuth && !locals.user && !isPublic) {
    const redirectUrl = new URL("/connexion-requise", url);
    redirectUrl.searchParams.set("redirect", url.pathname + url.search);
    return Response.redirect(redirectUrl, 303);
  }

  const response = await next();

  // --- Écriture correcte du cookie pour le front
  if (pb.authStore.isValid) {
    const rawCookie = pb.authStore.exportToCookie();
    const tokenValue = rawCookie.split("pb_auth=")[1]?.split(";")[0] ?? "";

    cookies.set("pb_auth", tokenValue, {
      httpOnly: false, // pour que JS puisse lire le cookie
      secure: import.meta.env.MODE !== "development",
      sameSite: "Lax",
      path: "/",
      domain: import.meta.env.MODE === "development" ? "localhost" : "ton-domaine.com",
    });
  }

  return response;
};
