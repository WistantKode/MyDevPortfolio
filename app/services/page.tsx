import {Metadata} from 'next';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {ArrowRight, CheckCircle, Code, Database, Globe, Monitor, Smartphone} from "lucide-react";
import MyStack from "@/components/MyStack";
import {AppearOnScroll} from "@/components/ScrollEffect";

// --- STATIC METADATA ---
export const metadata: Metadata = {
    title: "Services - Wistant | Développement Backend & Architecture Système",
    description: "Explorez mes services en développement de systèmes backend robustes, API sur mesure, applications mobiles/desktop, et solutions numériques complètes.",
    keywords: ["services", "développement backend", "architecture système", "API sur mesure", "NestJS", "microservices", "applications mobiles", "logiciels desktop", "performance web", "Wistant"],
};

const ServicesPage = () => {
    const services = [
        {
            icon: Database,
            title: "Systèmes Backend & APIs",
            description: "Implémentation de systèmes robustes et scalables avec NestJS et des architectures microservices résilientes.",
            features: [
                "APIs REST/GraphQL sécurisées",
                "Authentification & Gestion des utilisateurs (JWT, OAuth)",
                "Déploiement de microservices",
                "Architecture système scalable",
            ],
            price: "Solutions sur mesure adaptées aux besoins de l'entreprise",
        },
        {
            icon: Code,
            title: "Développement Web Full-Stack",
            description: "Création d'applications web modernes et performantes avec des technologies de pointe.",
            features: [
                "Plateformes web responsives",
                "Progressive Web Apps (PWAs)",
                "Solutions E-commerce",
                "Intégration & orchestration d'APIs",
                "Tableaux de bord administratifs",
            ],
            price: "Tarification adaptée à la portée – Devis gratuit fourni",
        },
        {
            icon: Smartphone,
            title: "Applications Mobiles Multiplateformes",
            description: "Développement d'applications mobiles multiplateformes offrant une expérience quasi-native avec React Native.",
            features: [
                "Développement d'applications iOS/Android",
                "Interface optimisée quasi-native",
                "Optimisation des performances et des ressources",
            ],
            price: "Tarification adaptée à la portée",
        },
        {
            icon: Globe,
            title: "Optimisation & Performance",
            description: "Amélioration de la performance, de la stabilité et du classement des sites web dans les moteurs de recherche.",
            features: [
                "Optimisation SEO technique",
                "Métriques de performance web (Core Web Vitals)",
                "Implémentation & reporting d'analytics",
                "Maintenance & surveillance continues",
            ],
            price: "",
        },
        {
            icon: Monitor,
            title: "Applications de Bureau sur Mesure",
            description: "Développement de solutions logicielles de bureau sur mesure avec JavaFX et une intégration de base de données robuste.",
            features: [
                "Interfaces modernes et intuitives",
                "Connectivité de base de données sécurisée",
                "Fonctionnalités de gestion de données et de reporting",
                "Solutions conçues pour les PME",
            ],
            price: "Chaque projet est chiffré en fonction de sa complexité technique",
        },
    ];

    const processSteps = [
        {
            step: "01",
            title: "Consultation & Cadrage",
            description: "Définition des besoins et des objectifs du projet pour établir une feuille de route claire."
        },
        {
            step: "02",
            title: "Architecture & Conception",
            description: "Création des plans, des wireframes et planification de l'architecture technique du système."
        },
        {
            step: "03",
            title: "Développement & Tests",
            description: "Implémentation du système avec un codage structuré et des points de validation réguliers."
        },
        {
            step: "04",
            title: "Déploiement & Support",
            description: "Déploiement final, formation nécessaire et support de maintenance post-lancement."
        },
    ];

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <MyStack/>
                <AppearOnScroll>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 title3">Mes Domaines
                            d'Expertise</h1>
                        <p className="text-text-secondary text-lg max-w-2xl mx-auto title1">Solutions numériques
                            complètes livrées avec **précision, architecture et fiabilité**.</p>
                    </div>
                </AppearOnScroll>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <Card key={index}
                              className="bg-gradient-card border-border-light hover:border-primary/50 transition-smooth shadow-card hover:shadow-glow group h-full">
                            <CardHeader>
                                <div
                                    className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-primary">
                                    <service.icon className="w-8 h-8 text-primary-foreground"/>
                                </div>
                                <CardTitle className="text-xl text-text-primary mb-2 title3">{service.title}</CardTitle>
                                <p className="text-text-secondary title2">{service.description}</p>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3 mb-6 title1">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0"/>
                                            <span className="text-text-secondary text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t border-border pt-4">
                                    <p className="text-primary font-semibold mb-4 title1">{service.price}</p>
                                    <Button variant="outline"
                                            className="w-full group/btn border-border-light hover:border-primary hover:bg-primary/10">
                                        En savoir plus
                                        <ArrowRight
                                            className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform"/>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mb-20">
                    <AppearOnScroll>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 title3">Mon Flux de
                                Travail Structuré</h2>
                            <p className="text-text-secondary text-lg max-w-2xl mx-auto title1">Une approche robuste en
                                quatre étapes, conçue pour garantir le succès du projet.</p>
                        </div>
                    </AppearOnScroll>
                    <AppearOnScroll>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {processSteps.map((process, index) => (
                                <Card key={index}
                                      className="bg-gradient-card border-border-light shadow-card text-center group">
                                    <CardContent className="p-8">
                                        <div
                                            className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-primary">
                                            <span
                                                className="text-primary-foreground font-bold text-lg">{process.step}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-text-primary mb-3">{process.title}</h3>
                                        <p className="text-text-secondary">{process.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </AppearOnScroll>
                </div>

                <div className="text-center bg-gradient-card rounded-2xl p-12 border border-border-light shadow-card">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Prêt à Concevoir Votre
                        Prochain Projet ?</h2>
                    <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">Discutons de vos besoins système
                        et élaborons la solution qui concrétisera vos idées.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg"
                                className="bg-gradient-primary hover:opacity-90 border-0 shadow-primary hover:shadow-glow transition-smooth">
                            <a href="/contact">Démarrer un Projet</a>
                        </Button>
                        <Button variant="outline" size="lg" asChild
                                className="border-border-light hover:border-primary hover:bg-primary/10">
                            <a href="https://wa.me/237697135341" target="_blank" rel="noopener noreferrer">Contacter sur
                                WhatsApp</a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesPage;
