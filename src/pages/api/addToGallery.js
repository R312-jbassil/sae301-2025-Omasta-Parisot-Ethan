import PocketBase from 'pocketbase';

export async function post({ request, cookies }) {
  try {
    // 1. Connexion à PocketBase
    const pb = new PocketBase(
      import.meta.env.PUBLIC_PB_URL || 'http://127.0.0.1:8090'
    );

    // 2. Lecture du cookie pb_auth
    const raw = cookies.get('pb_auth')?.value;
    if (raw) {
      try {
        pb.authStore.loadFromCookie(`pb_auth=${decodeURIComponent(raw)}`);
      } catch {
        console.warn('⚠️ Cookie pb_auth illisible');
      }
    }

    // 3. Vérifie l'utilisateur
    if (!pb.authStore.isValid) {
      console.warn('❌ Utilisateur non authentifié');
      return new Response(
        JSON.stringify({ error: 'Non connecté (cookie invalide)' }),
        { status: 401 }
      );
    }

    // 4. Données reçues du front
    const { nom_modele, svg_code } = await request.json();

    if (!nom_modele || !svg_code) {
      return new Response(
        JSON.stringify({ error: 'Champs manquants' }),
        { status: 400 }
      );
    }

    // 5. Création dans PocketBase
    const record = await pb.collection('lunette').create({
      nom_modele,
      svg_code,
      createur: pb.authStore.model.id
    });

    console.log('✅ Lunette créée :', record.id);

    return new Response(JSON.stringify(record), { status: 200 });
  } catch (err) {
    console.error('❌ Erreur serveur :', err);
    return new Response(
      JSON.stringify({ error: 'Erreur interne : ' + err.message }),
      { status: 500 }
    );
  }
}
