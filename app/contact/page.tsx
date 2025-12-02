import { Metadata } from 'next';
import ContactClient from './ContactClient';

// --- STATIC METADATA ---
export const metadata: Metadata = {
  title: "Contact - Wistant | Spécialiste Systèmes Backend & Architecte Web",
  description: "Contactez Wistant pour des projets de développement web robustes, d'architecture système et de design UI/UX. Discutons de vos besoins et transformons votre vision en réalité.",
  keywords: ["contact", "Wistant", "développeur web", "Backend", "architecture système", "demande de projet", "devis", "Yaoundé", "Cameroun"],
};

const ContactPage = () => {
  return <ContactClient />;
};

export default ContactPage;
