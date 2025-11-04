import { db } from "./firebase"; 
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  getDoc 
} from "firebase/firestore";


const testFirestore = async () => {
  try {
    const snapshot = await getDocs(collection(db, "project"));
    console.log("Firestore OK  - Nombre de documents :", snapshot.size);
  } catch (error) {
    console.error("Erreur Firestore  :", error);
  }
};

testFirestore();

export interface Project {
  id: string;
  title: string;
  description: string;
  repogit?: string;
  tech: string[];
  publishat?: Date;
  imageUrl?: string;
}

const projectsCollection = collection(db, "project"); // "projects" = nom de ta collection Firestore

// Create
export const createProject = async (project: Omit<Project, "id">) => {
  const docRef = await addDoc(projectsCollection, {
    ...project,
    publishat: project.publishat ? project.publishat : new Date(),
  });
  return { id: docRef.id, ...project };
};

// Read all
export const getProjects = async (): Promise<Project[]> => {
  const snapshot = await getDocs(projectsCollection);
  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...docSnap.data(),
  })) as Project[];
};

// Read one
export const getProjectById = async (id: string): Promise<Project | null> => {
  const docRef = doc(db, "project", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as Project;
  }
  return null;
};

// Update
export const updateProject = async (id: string, updatedData: Partial<Project>) => {
  const docRef = doc(db, "project", id);
  await updateDoc(docRef, updatedData);
};

// Delete
export const deleteProject = async (id: string) => {
  const docRef = doc(db, "project", id);
  await deleteDoc(docRef);
};
