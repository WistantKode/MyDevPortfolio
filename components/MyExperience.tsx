import React from 'react';
"use client";

import {Briefcase, GraduationCap} from "lucide-react";
import {AppearOnScroll} from "@/components/ScrollEffect";

interface ExperienceItem {
    title: string;
    institution: string;
    date: string;
    description: string;
}

const professionalExperiences: ExperienceItem[] = [
    {
        title: "Frontend Development Internship",
        institution: "Devia Tech",
        date: "June 2025 - Sept. 2025",
        description: "Engineered scalable and robust web interfaces with a strong focus on SEO performance and user experience.",
    },
    // {
    //     title: "Backend Development Internship",
    //     institution: "INAF",
    //     date: "June 2025 - Sept. 2025",
    //     description: "Developed high-performance and secure RESTful APIs using Spring Boot, integrated with React frontend, and managed database systems.",
    // },
];

const academicBackground: ExperienceItem[] = [
    {
        title: "DUT - Software Engineering",
        institution: "Institut Universitaire de Douala",
        date: "2025 - 2026",
        description: "Comprehensive and rigorous scientific and technical training, focused on software engineering principles and practices.",
    },
    {
        title: "First Year DUT - Computer Science",
        institution: "Institut Universitaire de Douala",
        date: "2024 - 2025",
        description: "Foundational studies in computer science, covering core programming concepts, algorithms, and data structures.",
    },
    {
        title: "Bachelor's Degree - Computer Science (Year 1)",
        institution: "University of Yaoundé 1",
        date: "2023 - 2024",
        description: "Solid general and scientific foundation, with an emphasis on computer science fundamentals, preparing for advanced studies.",
    },
    {
        title: "Baccalaureate in Mathematical Sciences",
        institution: "Lycée Classique et Moderne de Bafoussam",
        date: "2023",
        description: "Intensive study in mathematics, biology, and business processes, fostering analytical and problem-solving skills.",
    },
];

const TimelineItem = ({item, isLast}: { item: ExperienceItem; isLast: boolean }) => (
    <div className="relative pl-10 group">
        {/* The timeline dot with a subtle animation */}
        <div
            className="absolute left-0 top-1 w-4 h-4 bg-primary rounded-full border-4 border-background transition-transform group-hover:scale-125"></div>
        {/* The vertical line */}
        {!isLast && <div className="absolute left-[7px] top-5 h-full w-px bg-border"></div>}

        <div className="mb-10 transition-transform group-hover:translate-x-1">
            <p className="text-primary font-medium mb-1 text-sm">{item.date}</p>
            <h4 className="font-semibold text-text-primary mb-1 title3">{item.title}</h4>
            <p className="text-text-secondary font-medium mb-2 text-sm">{item.institution}</p>
            <p className="text-text-secondary title1 text-sm">{item.description}</p>
        </div>
    </div>
);

const MyExperience = () => {
    return (
        <div className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <AppearOnScroll>
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 title3">
                            My Professional Journey
                        </h2>
                    </AppearOnScroll>
                    <AppearOnScroll>
                        <p className="text-text-secondary text-lg title1 max-w-3xl mx-auto">
                            A comprehensive overview of my academic milestones and professional engagements in the
                            software engineering domain.
                        </p>
                    </AppearOnScroll>
                </div>

                {/* Main container to center and limit width */}
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                        {/* Professional Experience Column */}
                        <div>
                            <AppearOnScroll>
                                <div className="flex items-center gap-4 mb-8">
                                    <Briefcase className="w-8 h-8 text-primary"/>
                                    <h3 className="text-2xl font-bold text-text-primary">Professional Experience</h3>
                                </div>
                            </AppearOnScroll>
                            <div className="relative">
                                {professionalExperiences.map((item, index) => (
                                    <AppearOnScroll key={index}>
                                        <TimelineItem item={item}
                                                      isLast={index === professionalExperiences.length - 1}/>
                                    </AppearOnScroll>
                                ))}
                            </div>
                        </div>

                        {/* Academic Background Column */}
                        <div>
                            <AppearOnScroll>
                                <div className="flex items-center gap-4 mb-8">
                                    <GraduationCap className="w-8 h-8 text-primary"/>
                                    <h3 className="text-2xl font-bold text-text-primary">Academic Background</h3>
                                </div>
                            </AppearOnScroll>
                            <div className="relative">
                                {academicBackground.map((item, index) => (
                                    <AppearOnScroll key={index}>
                                        <TimelineItem item={item} isLast={index === academicBackground.length - 1}/>
                                    </AppearOnScroll>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyExperience;
