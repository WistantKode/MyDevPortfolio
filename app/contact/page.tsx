import {Metadata} from 'next';
import ContactClient from "@/components/contact/ContactClient";
import {Metacontact} from "@/lib/metaData";

// --- STATIC METADATA ---
export const metadata: Metadata = Metacontact

const ContactPage = () => {
  return <ContactClient />;
};

export default ContactPage;
