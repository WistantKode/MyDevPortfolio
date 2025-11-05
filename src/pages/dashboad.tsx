import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Edit,
  Trash2,
  X,
  Save,
  User,
  BarChart3,
  Eye,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/layout/layout";

import { FaReact } from "react-icons/fa";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNestjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { RiNextjsFill, RiRemixiconFill } from "react-icons/ri";

const PROJECT_IMAGE_BASE_PATH = "/projects img/";

// Mock data
const mockPosts = [
  {
    id: 1,
    title: "Bienvenue sur le tableau de bord",
    excerpt: "Voici un aperçu de votre interface d’administration",
    content: "Ceci est un exemple d’article pour votre admin panel.",
    category: "Informations",
    tags: ["dashboard", "demo"],
    publishedAt: new Date().toISOString(),
    status: "published",
  },
];

const mockProjects = [
    {
        id: "proj-shopdo",
        title: "ShopDO - E-commerce Platform Backend",
        description: "Developed a robust and scalable backend for an e-commerce platform, focusing on secure API design and efficient data management. Implemented core functionalities for product catalog, user authentication, and order processing.",
        category: "backend",
        tech: [
            {name: "React", icon: FaReact}, // Assuming React is used for frontend part of this project
            {name: "TypeScript", icon: SiTypescript},
            {name: "JavaScript", icon: SiJavascript},
            {name: "Next.js", icon: RiNextjsFill}, // Assuming Next.js is used for frontend part of this project
        ],
        repoGit: "https://github.com/WistantKode/nextjs-15-fullstack-e-commerce-web-app",
        liveUrl: "#", // Placeholder
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}shopdo.png`,
    },
    {
        id: "proj-nestjs-auth",
        title: "NESTJS AUTH JWT - Secure Authentication Microservice",
        description: "Engineered a secure and efficient authentication microservice using NestJS, implementing JWT (JSON Web Tokens) for robust user authorization. Designed for seamless integration into larger application architectures.",
        category: "backend",
        tech: [
            {name: "NestJS", icon: SiNestjs},
            {name: "TypeScript", icon: SiTypescript},
            {name: "JavaScript", icon: SiJavascript},
        ],
        repoGit: "https://github.com/WistantKode/nestjs-nextjs-authentication-side",
        liveUrl: "#", // Placeholder
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}nestjs-auth.png`,
    },
    {
        id: "proj-plantex",
        title: "Plantex - Modern Plant Showcase Website",
        description: "Developed a visually appealing showcase website for plants, designed to be fully responsive and easily customizable. Includes sections for products, FAQs, contact information, and social links, featuring a minimalist design with Google Fonts (Outfit) and Remix Icons.",
        category: "web",
        tech: [
            {name: "HTML5", icon: SiHtml5},
            {name: "JavaScript", icon: SiJavascript},
            {name: "Tailwind CSS", icon: SiTailwindcss},
            {name: "CSS3", icon: SiCss3},
        ],
        repoGit: "https://github.com/WistantKode/responsivewebsite-plantex",
        liveUrl: "https://plantex-wistant.vercel.app/",
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}plantex.png`,
    },
    {
        id: "proj-car-rental",
        title: "Car Rental - Responsive Web Application",
        description: "Engineered a responsive car rental website using HTML, CSS, and JavaScript. The platform features a clean user interface, dynamic content rendering, and a seamless booking experience. Optimized for performance and cross-browser compatibility.",
        category: "web",
        tech: [
            {name: "HTML5", icon: SiHtml5},
            {name: "JavaScript", icon: SiJavascript},
            {name: "Tailwind CSS", icon: SiTailwindcss},
            {name: "CSS3", icon: SiCss3},
        ],
        repoGit: "https://github.com/WistantKode/javascript-html-css-car-rental-website",
        liveUrl: "https://javascript-html-css-car-rental-webs.vercel.app/",
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}car-rental.png`,
    },
    {
        id: "proj-chickfood-v2",
        title: "Chick Food - Responsive Restaurant Frontend (V2)",
        description: "An enhanced responsive frontend for a fictional fried chicken restaurant, delivering an engaging user experience with smooth animations and a clean, modern design. A robust portfolio piece demonstrating advanced HTML, CSS, and JavaScript skills.",
        category: "web",
        tech: [
            {name: "HTML5", icon: SiHtml5},
            {name: "JavaScript", icon: SiJavascript},
            {name: "Tailwind CSS", icon: SiTailwindcss},
            {name: "CSS3", icon: SiCss3},
        ],
        repoGit: "https://github.com/WistantKode/Responsivewebsite-chickfood",
        liveUrl: "https://chickfood-wistant.netlify.app/",
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}chickfood.png`,
    },
    {
        id: "proj-structo",
        title: "Structo - Modern Construction Landing Page",
        description: "Developed a fully responsive and easily customizable landing page for a construction company. Features sections for services, projects, testimonials, and contact information, utilizing modern design principles, Google Fonts (Outfit), and Remixicon for enhanced aesthetics.",
        category: "web",
        tech: [
            {name: "HTML", icon: SiHtml5},
            {name: "CSS3", icon: SiCss3},
            {name: "JavaScript", icon: SiJavascript},
            {name: "ScrollJS", icon: RiRemixiconFill}, // Assuming SiFramework is for ScrollJS
            {name: "RemixIcon", icon: RiRemixiconFill},
        ],
        repoGit: "https://github.com/WistantKode/responsive-construction-company-website",
        liveUrl: "https://construction-wistant.vercel.app/",
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}structo.png`,
    },
    {
        id: "proj-elysian-drive",
        title: "Elysian Drive - Electric Car Brand Landing Page",
        description: "Crafted a captivating frontend landing page for an electric car brand, showcasing futuristic design and immersive animations. Demonstrates advanced skills in HTML, CSS, and JavaScript, with a focus on interactive and visually rich user experiences.",
        category: "web",
        tech: [
            {name: "HTML", icon: SiHtml5},
            {name: "CSS3", icon: SiCss3},
            {name: "JavaScript", icon: SiJavascript},
        ],
        repoGit: "https://github.com/WistantKode/responsive-car-website",
        liveUrl: "https://elsyandrive-wistant.netlify.app/",
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}elysindrive.png`,
    },
    {
        id: "proj-boomsound",
        title: "Boomsound - Artist & DJ Showcase Website",
        description: "Designed and developed a dynamic showcase website for artists, DJs, and creatives, enabling them to establish a strong web presence. Built with HTML, CSS, and JavaScript for a vibrant and engaging user experience.",
        category: "web",
        tech: [
            {name: "HTML", icon: SiHtml5},
            {name: "CSS3", icon: SiCss3},
            {name: "JavaScript", icon: SiJavascript},
        ],
        repoGit: "https://github.com/WistantKode/Responsivewebsite-boomsound",
        liveUrl: "https://wistant-html-css-js-headphones-website.vercel.app/",
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}boomsound.png`,
    },
    {
        id: "proj-portfolio",
        title: "Personal Portfolio - React & Tailwind CSS",
        description: "Meticulously crafted my personal portfolio using React and Tailwind CSS. This platform effectively showcases my diverse projects, technical skills, and professional journey through a modern, responsive, and highly optimized design.",
        category: "web",
        tech: [
            {name: "React", icon: FaReact},
            {name: "TypeScript", icon: SiTypescript},
            {name: "Tailwind CSS", icon: SiTailwindcss},
        ],
        repoGit: "https://github.com/wistantkode/my-dev-portfolio.git",
        liveUrl: "#", // Placeholder
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}portfolio-img.png`,
    },
];

const Dashboard: React.FC = () => {
  const { toast } = useToast();

  const [posts, setPosts] = useState(mockPosts);
  const [projects, setProjects] = useState(mockProjects);

  const [editingPost, setEditingPost] = useState<any>(null);
  const [editingProject, setEditingProject] = useState<any>(null);

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    tags: "",
  });

  const [projectForm, setProjectForm] = useState({
    title: "",
    description: "",
    repogit: "",
    techString: "",
    publishatStr: "",
    imageUrl: "",
  });

  /* ---------------------------
     Fonctions Article
  --------------------------- */
  const handleCreatePost = () => {
    setEditingPost(null);
    setFormData({ title: "", excerpt: "", content: "", category: "", tags: "" });
  };

  const handleEditPost = (post: any) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      tags: post.tags.join(", "),
    });
  };

  const handleSavePost = () => {
    if (!formData.title || !formData.content) {
      toast({ title: "Erreur", description: "Le titre et le contenu sont requis.", variant: "destructive" });
      return;
    }
    const newPost = { ...formData, tags: formData.tags.split(",").map((t) => t.trim()), publishedAt: new Date().toISOString(), status: "published" };
    if (editingPost) {
      setPosts(posts.map((p) => (p.id === editingPost.id ? { ...p, ...newPost } : p)));
      toast({ title: "Succès", description: "Article mis à jour." });
    } else {
      setPosts([{ id: Date.now(), ...newPost }, ...posts]);
      toast({ title: "Succès", description: "Article ajouté." });
    }
    setEditingPost(null);
  };

  const handleDeletePost = (id: number) => {
    setPosts(posts.filter((p) => p.id !== id));
    toast({ title: "Supprimé", description: "Article supprimé." });
  };

  /* ---------------------------
     Fonctions Projet
  --------------------------- */
  const handleCreateProject = () => {
    setEditingProject(null);
    setProjectForm({ title: "", description: "", repogit: "", techString: "", publishatStr: "", imageUrl: "" });
  };

  const handleEditProject = (p: any) => {
    setEditingProject(p);
    setProjectForm({
      title: p.title,
      description: p.description,
      repogit: p.repoGit || "",
      techString: p.tech.map((t: any) => t.name).join(", "),
      publishatStr: p.publishedAt ? p.publishedAt.slice(0, 10) : "",
      imageUrl: p.imageUrl || "",
    });
  };

  const handleSaveProject = () => {
    if (!projectForm.title || !projectForm.description) {
      toast({ title: "Erreur", description: "Le titre et la description sont requis.", variant: "destructive" });
      return;
    }

    const newProject = {
      id: editingProject?.id || Date.now().toString(),
      title: projectForm.title,
      description: projectForm.description,
      repoGit: projectForm.repogit,
      tech: projectForm.techString.split(",").map((name) => ({ name: name.trim(), icon: null })),
      publishedAt: new Date(projectForm.publishatStr || Date.now()).toISOString(),
      imageUrl: projectForm.imageUrl,
    };

    if (editingProject) {
      setProjects(projects.map((p) => (p.id === editingProject.id ? newProject : p)));
      toast({ title: "Succès", description: "Projet mis à jour." });
    } else {
      setProjects([newProject, ...projects]);
      toast({ title: "Succès", description: "Projet ajouté." });
    }

    setEditingProject(null);
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id));
    toast({ title: "Supprimé", description: "Projet supprimé." });
  };

  /* ---------------------------
     Statistiques
  --------------------------- */
  const stats = {
    totalPosts: posts.length,
    published: posts.filter((p) => p.status === "published").length,
    projects: projects.length,
  };

  /* ---------------------------
     UI
  --------------------------- */
  return (
    <Layout title="Admin Dashboard" description="Gestion de contenu">
      <section className="py-10 px-4 bg-background min-h-screen">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Header */}
          <header className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-text-primary">Dashboard</h1>
              <p className="text-text-secondary">Gérez vos articles et vos projets facilement</p>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleCreatePost}>
                <Plus className="w-4 h-4 mr-1" /> Nouvel Article
              </Button>
              <Button onClick={handleCreateProject} variant="outline">
                <Plus className="w-4 h-4 mr-1" /> Nouveau Projet
              </Button>
            </div>
          </header>

          {/* Statistiques */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Articles publiés</p>
                  <h2 className="text-2xl font-semibold">{stats.published}</h2>
                </div>
                <Eye className="w-6 h-6 text-primary" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Projets</p>
                  <h2 className="text-2xl font-semibold">{stats.projects}</h2>
                </div>
                <BarChart3 className="w-6 h-6 text-primary" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Articles</p>
                  <h2 className="text-2xl font-semibold">{stats.totalPosts}</h2>
                </div>
                <User className="w-6 h-6 text-primary" />
              </CardContent>
            </Card>
          </div>

          {/* Articles */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Articles</h2>
            {editingPost && (
              <Card className="mb-6">
                <CardHeader className="flex justify-between items-center">
                  <CardTitle>Modifier l'article</CardTitle>
                  <Button variant="ghost" size="sm" onClick={() => setEditingPost(null)}>
                    <X className="w-4 h-4" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Input
                    placeholder="Titre"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                  <Input
                    placeholder="Extrait"
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  />
                  <Textarea
                    placeholder="Contenu"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleSavePost}>
                      <Save className="w-4 h-4 mr-1" /> Sauvegarder
                    </Button>
                    <Button variant="outline" onClick={() => setEditingPost(null)}>
                      Annuler
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            <div className="grid md:grid-cols-2 gap-4">
              {posts.map((post) => (
                <Card key={post.id}>
                  <CardContent className="p-5">
                    <div className="flex justify-between">
                      <h3 className="font-semibold">{post.title}</h3>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => handleEditPost(post)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleDeletePost(post.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm mt-2 text-muted-foreground">{post.excerpt}</p>
                    <Badge className="mt-2">{post.category}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Projets */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Projets</h2>
            {editingProject && (
              <Card className="mb-6">
                <CardHeader className="flex justify-between items-center">
                  <CardTitle>Modifier le projet</CardTitle>
                  <Button variant="ghost" size="sm" onClick={() => setEditingProject(null)}>
                    <X className="w-4 h-4" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Input
                    placeholder="Titre"
                    value={projectForm.title}
                    onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                  />
                  <Textarea
                    placeholder="Description"
                    value={projectForm.description}
                    onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                  />
                  <Input
                    placeholder="Technologies (séparées par des virgules)"
                    value={projectForm.techString}
                    onChange={(e) => setProjectForm({ ...projectForm, techString: e.target.value })}
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleSaveProject}>
                      <Save className="w-4 h-4 mr-1" /> Sauvegarder
                    </Button>
                    <Button variant="outline" onClick={() => setEditingProject(null)}>
                      Annuler
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            <div className="grid md:grid-cols-2 gap-4">
              {projects.map((p) => (
                <Card key={p.id}>
                  <CardContent className="p-5">
                    <div className="flex justify-between">
                      <h3 className="font-semibold">{p.title}</h3>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => handleEditProject(p)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleDeleteProject(p.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm mt-2 text-muted-foreground">{p.description}</p>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {p.tech.map((t, i) => (
                        <Badge key={i}>{t.name}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
