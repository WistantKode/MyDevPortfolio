import {MetadataRoute} from 'next';

// Assurez-vous que cette URL correspond à votre domaine final
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wistant.vercel.app';

export default function robots(): MetadataRoute.Robots {
    // Règle 1 : Pour les environnements qui ne sont PAS la production
    // (ex : les déploiements de test sur Vercel)
    // On bloque TOUT pour éviter que Google n'indexe des versions de test.
    if (process.env.VERCEL_ENV !== 'production') {
        return {
            rules: [{userAgent: '*', disallow: '/'}],
        };
    }

    // Règle 2 : Pour l'environnement de PRODUCTION
    return {
        rules: [
            // Règle spécifique pour bloquer les robots des IA les plus courants
            {
                userAgent: ['GPTBot', 'Google-Extended', 'CCBot'],
                disallow: '/',
            },
            // Règle générale pour les autres robots (Google, Bing, etc.)
            {
                userAgent: '*',
                // On interdit l'accès aux dossiers et pages non pertinents pour le SEO
                disallow: [
                    '/admin-portfolio/', // Votre panel d'administration
                    '/admin',
                    '/api/',             // Toutes vos routes d'API
                    '/contact',          // La page de contact n'a pas besoin d'être dans les résultats de recherche
                    '/private/',         // Une règle générique pour tout futur dossier privé
                    '/cv/',              // Empêche l'indexation directe du dossier contenant le CV
                ],
            },
        ],
        // On indique aux robots autorisés où trouver le plan de votre site
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}
