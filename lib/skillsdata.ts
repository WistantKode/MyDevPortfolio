import {
    SiGit,
    SiGithub,
    SiMicrogenetics,
    SiNestjs,
    SiPostgresql,
    SiPrisma,
    SiReact,
    SiSlack,
    SiTrello,
    SiTypescript
} from "react-icons/si";
import {RiNextjsFill} from "react-icons/ri";
import {IconType} from "react-icons";
import {TargetAndTransition, Transition} from "framer-motion";

interface Technology {
    name: string;
    icon: IconType;
    color: string;
    proficiency: number;
    size?: 'small' | 'medium' | 'large';
    animate?: TargetAndTransition;
    transition?: Transition;
    whileHover?: TargetAndTransition;
}

export const technologies: Technology[] = [
    {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
        proficiency: 70,
        size: 'large',
        animate: {
            x: [0, 0, 0, 0],
            y: [-100, -200, 250, 10],
            rotate: [0, -22, 22, 0]
        },
        transition: {
            duration: 2.25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0
        },
        whileHover: {scale: 1.3, rotate: -20, zIndex: 10}
    },
    {
        name: "Next.js",
        icon: RiNextjsFill,
        color: "#FFFFFF",
        proficiency: 50,
        size: 'medium',
        animate: {
            x: [0, 0, 0, 0],
            y: [10, 20, -20, 10],
            rotate: [0, -22, 22, 0]
        },
        transition: {duration: 2.35, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.1},
        whileHover: {scale: 1.3, rotate: -25, zIndex: 10}
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        proficiency: 50,
        animate: {
            x: [0, 0, 0, 0],
            y: [-100, -120, 200, -100],
            rotate: [0, -22, 22, 0]
        },
        transition: {duration: 2.15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.15},
        whileHover: {scale: 1.3, rotate: 18, zIndex: 10}
    },
    {
        name: "Git",
        icon: SiGit,
        color: "#F05032",
        proficiency: 95,
        animate: {
            x: [0, 0, 0, 0],
            y: [100, 120, -200, 100],
            rotate: [0, -22, 22, 0]
        },
        transition: {duration: 2.25, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.2},
        whileHover: {scale: 1.3, rotate: -20, zIndex: 10}
    },
    {
        name: "GitHub",
        icon: SiGithub,
        color: "#FFFFFF",
        proficiency: 95,
        animate: {
            x: [0, 0, 0, 0],
            y: [100, 120, -200, 100],
            rotate: [0, -22, 22, 0]
        },
        transition: {duration: 2.3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.25},
        whileHover: {scale: 1.3, rotate: 22, zIndex: 10}
    },
    {
        name: "NestJS",
        icon: SiNestjs,
        color: "#E0234E",
        proficiency: 40,
        animate: {
            x: [0, 0, 0, 0],
            y: [10, 20, -20, 10],
            rotate: [0, -22, 22, 0]
        },
        transition: {duration: 2.4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.3},
        whileHover: {scale: 1.3, rotate: -25, zIndex: 10}
    },
    {
        name: "Microservices",
        icon: SiMicrogenetics,
        color: "#FF6B6B",
        proficiency: 30,
        animate: {
            x: [0, 0, 0, 0],
            y: [10, 20, -20, 10],
            rotate: [0, -22, 22, 0]
        },
        transition: {duration: 2.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.35},
        whileHover: {scale: 1.3, rotate: 25, zIndex: 10}
    },
    {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#336791",
        proficiency: 50,
        animate: {
            x: [0, 0, 0, 0],
            y: [10, 20, -20, 10],
            rotate: [0, -22, 22, 0]
        },
        transition: {duration: 2.3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.4},
        whileHover: {scale: 1.3, rotate: -20, zIndex: 10}
    },
     {
        name: "Prisma",
        icon: SiPrisma,
        color: "#336791",
        proficiency: 50,
        animate: {
            x: [0, 0, 0, 0],
            y: [100, 0, 200, 100],
            rotate: [0, -22, 22, 0]
        },
        transition: {duration: 2.3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.4},
        whileHover: {scale: 1.3, rotate: -20, zIndex: 10}
    },
    {
        name: "Trello",
        icon: SiTrello,
        color: "#0079BF",
        proficiency: 100,
        animate: {
           x: [0, 0, 0, 0],
            y: [10, 20, -20, 10],
            rotate: [0, -22, 22, 0]
        },
        transition: {duration: 2.25, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.45},
        whileHover: {scale: 1.3, rotate: 28, zIndex: 10}
    },
    {
        name: "Slack",
        icon: SiSlack,
        color: "#bfa600",
        proficiency: 100,
        animate: {
            x: [0, 0, 0, 0],
            y: [5, 5, 5, 5],
            rotate: [0, 0, 0, 0]
        },
        transition: {duration: 2.25, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.45},
        whileHover: {scale: 1.3, rotate: 28, zIndex: 10}
    },
];
