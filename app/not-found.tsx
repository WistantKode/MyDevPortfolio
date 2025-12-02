import { Metadata } from 'next';
import NotFoundClient from './NotFoundClient';

export const metadata: Metadata = {
  title: "404 - Page non trouvée | Wistant Kode",
  description: "La page demandée n'a pas pu être trouvée. Veuillez vérifier l'URL ou retourner à la page d'accueil.",
};

const NotFoundPage = () => {
  return <NotFoundClient />;
};

export default NotFoundPage;
