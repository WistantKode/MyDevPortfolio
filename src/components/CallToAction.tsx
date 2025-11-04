import React, {Component} from 'react';
import {Button} from "@/components/ui/button.tsx";

class CallToAction extends Component {
    render() {
        return (
            <section className={'py-20 bg-background'}>
                <div>
                    <div className="text-center bg-gradient-card rounded-2xl p-12 border border-border-light shadow-card">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                            Prêt à Démarrer Votre Projet ?
                        </h2>
                        <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
                            Discutons de vos besoins et voyons comment je peux vous aider à
                            concrétiser vos idées.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                asChild
                                size="lg"
                                className="bg-gradient-primary hover:opacity-90 border-0 shadow-primary hover:shadow-glow transition-smooth"
                            >
                                <a href="/contact">Commencer un Projet</a>
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                asChild
                                className="border-border-light hover:border-primary hover:bg-primary/10"
                            >
                                <a
                                    href="https://wa.me/237651727673"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Discuter sur WhatsApp
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CallToAction;