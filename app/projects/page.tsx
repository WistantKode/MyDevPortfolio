import {Metadata} from 'next';
import ProjectsClient from './ProjectsClient';
import {MetaProjects} from "@/lib/metaData";

// --- STATIC METADATA ---
export const metadata: Metadata = MetaProjects

const ProjectsPage = () => {
  return <ProjectsClient />;
};

export default ProjectsPage;
