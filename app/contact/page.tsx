import {Metadata} from 'next';
import ContactClient from './ContactClient';
import {Metacontact} from "@/lib/metaData";

// --- STATIC METADATA ---
const metadata: Metadata = Metacontact

const ContactPage = () => {
  return <ContactClient />;
};

export default ContactPage;
