import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

import Image from "next/image";
import * as images from "@/constants/images";
const projects = [
    {
        id: 1,
        title: "Social Media App",
        description: "A modern social networking platform with real-time messaging, user profiles, and content sharing capabilities.",
        image: images.avatarImage,
        technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
        featured: false,
        github: "https://github.com",
        live: "https://example.com"
    },
    {
        id: 2,
        title: "Task Management Dashboard",
        description: "A comprehensive productivity dashboard with analytics, team collaboration, and advanced project tracking features.",
        image: images.avatarImage,
        technologies: ["React", "TypeScript", "PostgreSQL", "Chart.js"],
        featured: true, // This will be elevated (podium winner)
        github: "https://github.com",
        live: "https://example.com"
    },
    {
        id: 3,
        title: "E-Commerce Platform",
        description: "A full-featured online store with payment integration, inventory management, and customer analytics.",
        image: images.avatarImage,
        technologies: ["Next.js", "Stripe", "Prisma", "Redis"],
        featured: false,
        github: "https://github.com",
        live: "https://example.com"
    }
];

const getTechIcon = (tech: string) => {
    const techColors: Record<string, string> = {
        "React": "bg-blue-500/10 text-blue-400 border-blue-400/20",
        "Node.js": "bg-green-500/10 text-green-400 border-green-400/20",
        "MongoDB": "bg-green-600/10 text-green-500 border-green-500/20",
        "Socket.io": "bg-purple-500/10 text-purple-400 border-purple-400/20",
        "TypeScript": "bg-blue-600/10 text-blue-500 border-blue-500/20",
        "PostgreSQL": "bg-indigo-500/10 text-indigo-400 border-indigo-400/20",
        "Chart.js": "bg-orange-500/10 text-orange-400 border-orange-400/20",
        "Next.js": "bg-gray-500/10 text-gray-300 border-gray-400/20",
        "Stripe": "bg-purple-600/10 text-purple-500 border-purple-500/20",
        "Prisma": "bg-teal-500/10 text-teal-400 border-teal-400/20",
        "Redis": "bg-red-500/10 text-red-400 border-red-400/20"
    };

    return techColors[tech] || "bg-gray-500/10 text-gray-400 border-gray-400/20";
};

export default function FeaturedProjects() {
    return (
        <section className="min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl text-white font-bold  mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Showcasing my best work and the technologies that power them
                    </p>
                </div>

                {/* Projects Grid with Podium Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`relative transition-all duration-300 ${project.featured
                                ? 'md:-translate-y-8 scale-105'
                                : 'hover:-translate-y-2'
                                }`}
                        >
                            {/* Winner Badge for Featured Project */}
                            {project.featured && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                    <Badge className="bg-accent text-black font-bold rounded-full px-4 py-2 shadow-[0_0_40px_hsl(179,100%,75%,0.3)]">
                                        🏆 Featured
                                    </Badge>
                                </div>
                            )}

                            <Card className={`
                overflow-hidden bg-[linear-gradient(145deg,hsl(240,10%,8%),hsl(240,10%,10%))] border-[hsl(200,5%,22%)] shadow-card
                transition-all duration-300 hover:shadow-elevated hover:bg-card-hover
                ${project.featured ? 'border-accent/70 shadow-glow' : 'hover:border-accent/80'}
              `}>
                                {/* Project Image */}
                                <div className="relative overflow-hidden group">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="bg-black/50 border-accent text-accent hover:bg-accent hover:text-black"
                                            asChild
                                        >
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="w-4 h-4" />
                                            </a>
                                        </Button>
                                        <Button
                                            size="sm"
                                            className="bg-accent text-black hover:bg-[179 100% 85%]"
                                            asChild
                                        >
                                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        </Button>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#f5f8fd] mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-[hsl(215,20.2%,65.1%)] mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Technology Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="outline"
                                                className={`
                          text-xs border transition-colors duration-200
                          ${getTechIcon(tech)}
                        `}
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <div className="text-center mt-16">
                    <Button
                        size="lg"
                        className="bg-accent text-black hover:bg-portfolio-accent-glow font-semibold px-8 py-3 transition-all duration-300 hover:scale-105 shadow-[0_0_40px_hsl(179,100%,75%,0.3)]"
                    >
                        View All Projects
                    </Button>
                </div>
            </div>
        </section>
    );
}