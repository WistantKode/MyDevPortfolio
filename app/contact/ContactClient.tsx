"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AppearOnScroll } from "@/components/ScrollEffect";

const ContactClient = () => {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/myzbqrro", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, _replyto: formData.email, _subject: `Nouvelle demande de ${formData.name}: ${formData.subject}` }),
            });

            if (response.ok) {
                toast({
                    title: "Message envoyé avec succès.",
                    description: "Merci de m'avoir contacté. Je traiterai votre demande et vous répondrai rapidement.",
                    variant: "default",
                });
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                const errorData = await response.json();
                throw new Error(errorData.error || "Échec du traitement de la demande.");
            }
        } catch (error) {
            console.error("Erreur de transmission:", error);
            toast({
                title: "Échec de la transmission",
                description: "Une erreur est survenue lors de l'envoi du message. Veuillez vérifier les informations et réessayer.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        { icon: Mail, title: "Email Principal", value: "wistantkode@protonmail.com", link: "mailto:wistantkode@protonmail.com" },
        { icon: Phone, title: "Ligne Directe (WhatsApp)", value: "+237 697 135 341", link: "https://wa.me/+237697135341" },
        { icon: MapPin, title: "Base Opérationnelle", value: "Yaoundé, Cameroun", link: null },
        { icon: Clock, title: "Disponibilité Standard", value: "Lun - Ven, 8h - 18h (WAT)", link: null },
    ];

    return (
        <section className="py-20 bg-background min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">Initier le Contact</h1>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">Vous avez un projet nécessitant une architecture Backend solide ? Discutons des spécifications techniques et construisons ensemble un système fiable.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    <Card className="bg-gradient-card border-border-light shadow-card">
                        <CardHeader>
                            <CardTitle className="text-2xl text-text-primary">Envoyer un Message Direct</CardTitle>
                            <p className="text-text-secondary">Remplissez les champs ci-dessous. Toutes les demandes sont traitées en priorité et une réponse structurée est garantie.</p>
                        </CardHeader>
                        <CardContent>
                            <AppearOnScroll>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <Input name="name" required value={formData.name} onChange={handleChange} placeholder="Votre Nom/Société" className="bg-input border-border-light" />
                                        <Input name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="votre@email.com" className="bg-input border-border-light" />
                                    </div>
                                    <Input name="subject" required value={formData.subject} onChange={handleChange} placeholder="Sujet du projet ou de la demande" className="bg-input border-border-light" />
                                    <Textarea name="message" required value={formData.message} onChange={handleChange} placeholder="Décrivez la portée de votre projet ou votre demande..." rows={6} className="bg-input border-border-light" />
                                    <Button type="submit" disabled={isSubmitting} size="lg" className="w-full bg-gradient-primary hover:opacity-90 border-0 shadow-primary hover:shadow-glow transition-smooth">
                                        {isSubmitting ? "Traitement en cours..." : <><Send className="mr-2 w-5 h-5" />Soumettre le Message</>}
                                    </Button>
                                </form>
                            </AppearOnScroll>
                        </CardContent>
                    </Card>

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-text-primary mb-6">Protocoles de Contact</h2>
                            <p className="text-text-secondary text-lg mb-8">Le contact direct est le bienvenu. La latence de réponse standard est de 24 heures, souvent moins.</p>
                        </div>
                        <AppearOnScroll>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <Card key={index} className="bg-gradient-card border-border-light shadow-card hover:shadow-glow transition-smooth group">
                                        <CardContent className="p-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-primary">
                                                    <info.icon className="w-6 h-6 text-primary-foreground" />
                                                </div>
                                                <div>
                                                    <h3 className="text-text-primary font-semibold mb-1">{info.title}</h3>
                                                    {info.link ? <a href={info.link} target={info.link.startsWith("http") ? "_blank" : undefined} rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined} className="text-primary hover:text-primary-glow transition-smooth">{info.value}</a> : <p className="text-text-secondary">{info.value}</p>}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </AppearOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactClient;
