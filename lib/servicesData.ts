import {Code, Database, Globe, Monitor, Palette, Smartphone} from "lucide-react";

export const services = [
    {
        icon: Database,
        title: "Backend Systems & APIs",
        description: "Implementation of robust and scalable systems with NestJS and resilient microservices architectures.",
        features: [
            "Secure REST/GraphQL APIs",
            "Authentication & User Management (JWT, OAuth)",
            "Microservices Deployment",
            "Scalable System Architecture",
        ],
        price: "Custom solutions tailored to business needs",
    },
    {
        icon: Code,
        title: "Full-Stack Web Development",
        description: "Creation of modern and high-performance web applications with cutting-edge technologies.",
        features: [
            "Responsive Web Platforms",
            "Progressive Web Apps (PWAs)",
            "E-commerce Solutions",
            "API Integration & Orchestration",
            "Admin Dashboards",
        ],
        price: "Pricing adapted to scope – Free quote provided",
    },
    {
        icon: Smartphone,
        title: "Cross-Platform Mobile Apps",
        description: "Development of cross-platform mobile applications offering a near-native experience with React Native.",
        features: [
            "iOS/Android App Development",
            "Near-Native Optimized Interface",
            "Performance and Resource Optimization",
        ],
        price: "Pricing adapted to scope",
    },
    {
        icon: Globe,
        title: "Optimization & Performance",
        description: "Improvement of website performance, stability, and search engine rankings.",
        features: [
            "Technical SEO Optimization",
            "Core Web Vitals Performance Metrics",
            "Analytics Implementation & Reporting",
            "Continuous Maintenance & Monitoring",
        ],
        price: "",
    },
    {
        icon: Monitor,
        title: "Custom Desktop Applications",
        description: "Development of custom desktop software solutions with JavaFX and robust database integration.",
        features: [
            "Modern and Intuitive Interfaces",
            "Secure Database Connectivity",
            "Data Management and Reporting Features",
            "Solutions designed for SMEs",
        ],
        price: "Each project is quoted based on its technical complexity",
    },
];

export const processSteps = [
    {
        step: "01",
        title: "Consultation & Scoping",
        description: "Defining the project needs and objectives to establish a clear roadmap."
    },
    {
        step: "02",
        title: "Architecture & Design",
        description: "Creating blueprints, wireframes, and planning the system's technical architecture."
    },
    {
        step: "03",
        title: "Development & Testing",
        description: "Implementing the system with structured coding and regular validation points."
    },
    {
        step: "04",
        title: "Deployment & Support",
        description: "Final deployment, necessary training, and post-launch maintenance support."
    },
];


export const ServicesSectionData = () => {
  const services = [
    {
      icon: Database,
      title: "Backend Solutions",
      description:
        "Robust backend architecture design and implementation to support your applications with reliable data management.",
    },
    {
      icon: Code,
      title: "Coding",
      description:
        "I develop custom solutions with clean, efficient, and optimized code to deliver reliable and high-performance results.",
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Full-stack web development using cutting-edge technologies to build scalable and maintainable applications.",
    },
    {
      icon: Monitor,
      title: "Desktop Development",
      description:
        "I build powerful and reliable desktop applications tailored to user needs, with a focus on performance, security, and seamless experience.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Creating responsive mobile applications with modern frameworks, ensuring optimal performance across all devices.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "I create intuitive and aesthetically pleasing interfaces, providing a smooth and engaging user experience for your projects."
    },
    //   {
    //       icon: Heart,
    //       title: "SEO & search",
    //       description: "Globe",
    //   },
  ]
}