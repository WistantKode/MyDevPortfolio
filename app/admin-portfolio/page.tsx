import { Metadata } from 'next';
import DashboardClient from './DashboardClient';

// --- STATIC METADATA ---
export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Gestion de contenu du portfolio.",
};

const DashboardPage = () => {
  return <DashboardClient />;
};

export default DashboardPage;
