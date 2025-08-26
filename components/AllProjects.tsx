import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github, Calendar, Users, Star } from "lucide-react";
import * as images from "@/constants/images";
import { StaticImageData } from "next/image";
import Image from "next/image";
interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    image: StaticImageData | string;
    technologies: string[];
    github?: string;
    live?: string;
    year: string;
    status: string;
    teamSize: number;
    highlights: string[];
}

const allProjects: Project[] = [
    {
        id: 1,
        title: "RiConnect",
        description: "An app that rewards you for attending and sharing club events, turning your nights out into points, perks, and prizes.",
        longDescription: "RiConnect is a mobile platform designed for people who love going out, attending concerts, and experiencing nightlife. Event organizers and clubs can easily create and promote their events, while users engage by checking in, taking photos, and sharing their experiences on social media. Every interaction earns users points, which can be redeemed for exclusive perks—such as club coupons, discounted entry, and increased chances of winning giveaways hosted by the same venues. By turning social activity into tangible rewards, RiConnect connects nightlife enthusiasts with clubs in a fun and engaging way, while also giving event organizers a powerful channel to boost visibility and loyalty. It is designed as a Mobile app for users with a admin dashboard on the web.",
        image: "/brave_Y3IHdJAWAt.png",
        technologies: ["React", "AWS", "DynamoDB", "React Native"],
        github: "https://github.com/kjakopovic/RiHack3.0-RitehRomanEra",

        year: "2024",
        status: "Offline",
        teamSize: 4,
        highlights: ["Real-time Giveaway", "Social media integration", "User engagement tracking", "Real-time Leaderboard"]
    },
    {
        id: 2,
        title: "EsperaX Website",
        description: "Espera X is a digital transformation partner leveraging Dassault Systèmes’ 3DEXPERIENCE platform—CATIA, ENOVIA, DELMIA, SIMULIA—to deliver tailored digital twin and product lifecycle management solutions.",
        longDescription: "EsperaX is a technology partner specializing in digital transformation through Dassault Systèmes’ 3DEXPERIENCE platform. With expertise in CATIA, ENOVIA, DELMIA, and SIMULIA, EsperaX empowers companies to design, simulate, and manage products across their entire lifecycle. The company focuses on building digital twin solutions, integrating advanced engineering tools, and optimizing collaborative workflows to accelerate innovation. By aligning cutting-edge PLM (Product Lifecycle Management) technologies with client-specific business needs, EsperaX helps organizations in industries such as automotive, aerospace, and manufacturing reduce complexity, improve efficiency, and bring products to market faster.",
        image: "/brave_TftNXaHefF.png",
        technologies: ["Next.js", "Docker", "Strapi", "MariaDB"],

        live: "https://esperax.com/",
        year: "2025",
        status: "Live",
        teamSize: 2,
        highlights: ["CMS With Strapi", "Responsive and fast layout", "Modern Design"]
    },
    {
        id: 3,
        title: "Urban Pulse",
        description: "UrbanPulse is a modular smart city project that bridges the gap between citizens and city governors.",
        longDescription: "UrbanPulse is a modular smart city project that bridges the gap between citizens and city governors. Designed within 48 hours, it supports multiple cities and delivers features to improve daily life through mobile and web applications. ",
        image: "/brave_eXOnWB8L1h.png",
        technologies: ["Next.js", "React Native", "AWS", "FastAPI"],
        github: "https://github.com/kjakopovic/Unihack-RWS",

        year: "2024",
        status: "Offline",
        teamSize: 5,
        highlights: ["News and Ticketing System", "Specialized City Map", " AI-Powered Bill Predictor", "Image Classifier"]
    },
    {
        id: 4,
        title: "Aitac Website",
        description: "Developed the AITAC website, a modern, responsive platform showcasing the company’s products and services, optimized for performance, usability, and seamless user experience.",
        longDescription: "The AITAC website was developed as a comprehensive digital presence for the company, highlighting its products, solutions, and services in an engaging and user-friendly format. The site features a responsive design for mobile and desktop, intuitive navigation, and fast loading performance. Key functionalities include interactive product showcases, easy contact options, and integration with the company’s digital channels. The development focused on delivering a modern, scalable, and maintainable codebase, ensuring a seamless user experience and effective communication of AITAC'S brand values.",
        image: images.avatarImage, // Reusing image for demo
        technologies: ["Next.js", "Docker", "Strapi", "MariaDB"],

        live: "https://aitac.nl",
        year: "2025",
        status: "In Development",
        teamSize: 2,
        highlights: ["CMS With Strapi", "Responsive and fast layout", "Modern Design"]
    },
    {
        id: 5,
        title: "RiMatch",
        description: "RiMatch is a dating application which helps users find connections by creating profiles, matching them with others based on preferences, and enabling communication through chat.",
        longDescription: "Looking to expand your social circle? RiMatch takes the legwork out of meeting new people. Create a detailed profile highlighting your interests, and our smart algorithm will connect you with compatible matches based on your preferences, including location if you choose. Chat with your matches through text, images, or even voice messages, and see if a spark ignites! The experience is seamless on both web and mobile (iOS and Android) with a user-friendly interface and features like swipe gestures for easy interaction.",
        image: "/vlc_4Z12EYMCHp.png", // Reusing image for demo
        technologies: ["React Native", "React", "MongoDB", "Spring boot", "AWS"],
        github: "https://github.com/RitehWebTeam/infobip-rimatch",

        year: "2023",
        status: "Offline",
        teamSize: 6,
        highlights: ["Profile creation", "Geo Location based matching", "Chat functionality", "Cross-platform support"]
    },
    {
        id: 6,
        title: "Aitac AI",
        description: "An educational platform for online courses with interactive content and progress tracking.",
        longDescription: "A comprehensive LMS designed for educational institutions and corporate training. Features interactive course content, video streaming, assignment management, and detailed progress tracking for both students and instructors.",
        image: images.avatarImage, // Reusing image for demo
        technologies: ["Next.js", "FastAPI", "Milvus", "Ollama", "Langchain", "Python"],

        year: "2025",
        status: "In development",
        teamSize: 1,
        highlights: ["Generative AI", "Personalized learning", "Document analysis", "Local Knowledge base"]
    },
    {
        id: 7,
        title: "AI Test Grading application",
        description: "An AI-powered web app that automatically grades programming exams, saving professors time while allowing precise manual adjustments.",
        longDescription: "This web app leverages generative AI to instantly grade programming exams, evaluating the logic and correctness of student submissions while ignoring minor syntax errors. Professors can create courses, assign exams, and review AI-assigned scores, with the flexibility to manually adjust points when needed. By automating the grading process, the app streamlines workflows and provides an efficient, modern solution for educational institutions.",
        image: "/Acrobat_nVZCCoP68a.png", // Reusing image for demo
        technologies: ["Next.js", "Laravel", "MySQL", "Tailwind"],
        github: "https://github.com/marinivosevic/chatgptExamApp",

        year: "2025",
        status: "Private use",
        teamSize: 1,
        highlights: ["Automated grading", "Manual adjustments", "AI-powered insights"]
    },

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
        "Redis": "bg-red-500/10 text-red-400 border-red-400/20",
        "AWS": "bg-yellow-500/10 text-yellow-400 border-yellow-400/20",
        "Docker": "bg-blue-500/10 text-blue-400 border-blue-400/20",
        "Strapi": "bg-purple-500/10 text-purple-400 border-purple-400/20",
        "MariaDB": "bg-blue-700/10 text-blue-600 border-blue-600/20",
        "FastAPI": "bg-teal-500/10 text-teal-400 border-teal-400/20",
        "React Native": "bg-blue-500/10 text-blue-400 border-blue-400/20",
        "DynamoDB": "bg-yellow-500/10 text-yellow-400 border-yellow-400/20",
        "Laravel": "bg-red-500/10 text-red-400 border-red-400/20",
        "MySQL": "bg-blue-700/10 text-blue-600 border-blue-600/20",
        "Tailwind": "bg-teal-500/10 text-teal-400 border-teal-400/20",
        "Milvus": "bg-purple-500/10 text-purple-400 border-purple-400/20",
        "Ollama": "bg-purple-500/10 text-purple-400 border-purple-400/20",
        "Langchain": "bg-purple-500/10 text-purple-400 border-purple-400/20",
        "Python": "bg-blue-500/10 text-blue-400 border-blue-400/20"
    };

    return techColors[tech] || "bg-gray-500/10 text-gray-400 border-gray-400/20";
};

export default function AllProjects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <section className="min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-[hsl(210,40%,98%)] mb-4">
                        All Projects
                    </h2>
                    <p className="text-xl text-[hsl(215,20.2%,65.1%)] max-w-2xl mx-auto">
                        Explore my complete portfolio of web applications and digital experiences
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {allProjects.map((project) => (
                        <Card
                            key={project.id}
                            className="overflow-hidden bg-[linear-gradient(145deg,hsl(240,10%,8%),hsl(240,10%,10%))] border-[hsl(200,5%,22%)] shadow-card transition-all duration-300 hover:shadow-elevated hover:bg-card-hover hover:border-accent/80 hover:-translate-y-2 cursor-pointer group"
                            onClick={() => handleProjectClick(project)}
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                                    width={400}
                                    height={300}
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Button
                                        size="sm"
                                        className="bg-accent text-black hover:bg-[hsl(179,100%,85%)]"
                                    >
                                        View Details
                                    </Button>
                                </div>
                                <div className="absolute top-2 right-2">
                                    <Badge className={`${project.status === 'Live' ? 'bg-green-500/20 text-green-400 border-green-400/20' : 'bg-yellow-500/20 text-yellow-400 border-yellow-400/20'}`}>
                                        {project.status}
                                    </Badge>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-lg font-bold text-[#f5f8fd]">
                                        {project.title}
                                    </h3>
                                    <span className="text-sm text-[hsl(215,20.2%,65.1%)]">({project.year})</span>
                                </div>
                                <p className="text-[hsl(215,20.2%,65.1%)] text-sm mb-3 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Technology Stack - Show only first 3 */}
                                <div className="flex flex-wrap gap-1 mb-3">
                                    {project.technologies.slice(0, 3).map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="outline"
                                            className={`text-xs border transition-colors duration-200 ${getTechIcon(tech)}`}
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <Badge variant="outline" className="text-xs border text-[hsl(215,20.2%,65.1%)]">
                                            +{project.technologies.length - 3}
                                        </Badge>
                                    )}
                                </div>

                                {/* Project Stats */}
                                <div className="flex items-center gap-4 text-xs text-[hsl(215,20.2%,65.1%)]">
                                    <div className="flex items-center gap-1">
                                        <Users className="w-3 h-3" />
                                        <span>{project.teamSize} {project.teamSize === 1 ? 'developer' : 'developers'}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        <span>{project.year}</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Project Details Modal */}
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                    <DialogContent className="max-w-1/2 max-h-[90vh] overflow-y-auto bg-[linear-gradient(145deg,hsl(240,10%,8%),hsl(240,10%,10%))] border-[hsl(200,5%,22%)] ">
                        {selectedProject && (
                            <>
                                <DialogHeader>
                                    <DialogTitle className="text-2xl font-bold text-[#f5f8fd]">
                                        {selectedProject.title}
                                    </DialogTitle>
                                </DialogHeader>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {/* Project Image */}
                                    <div className="relative overflow-hidden rounded-lg">
                                        <Image
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="w-full h-64 object-cover"
                                        />
                                        <div className="absolute top-4 right-4">
                                            <Badge className={`${selectedProject.status === 'Live' ? 'bg-green-500/20 text-green-400 border-green-400/20' : 'bg-yellow-500/20 text-yellow-400 border-yellow-400/20'}`}>
                                                {selectedProject.status}
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-lg font-semibold text-[#f5f8fd] mb-2">About</h4>
                                            <p className="text-[hsl(215,20.2%,65.1%)] leading-relaxed">
                                                {selectedProject.longDescription}
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <h5 className="font-semibold text-[#f5f8fd] mb-1">Year</h5>
                                                <p className="text-[hsl(215,20.2%,65.1%)]">{selectedProject.year}</p>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-[#f5f8fd] mb-1">Team Size</h5>
                                                <p className="text-[hsl(215,20.2%,65.1%)]">{selectedProject.teamSize} {selectedProject.teamSize === 1 ? 'developer' : 'developers'}</p>
                                            </div>
                                        </div>

                                        <div>
                                            <h5 className="font-semibold text-[#f5f8fd] mb-2">Technologies</h5>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.technologies.map((tech) => (
                                                    <Badge
                                                        key={tech}
                                                        variant="outline"
                                                        className={`text-xs border transition-colors duration-200 ${getTechIcon(tech)}`}
                                                    >
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h5 className="font-semibold text-[#f5f8fd] mb-2">Key Highlights</h5>
                                            <ul className="space-y-1">
                                                {selectedProject.highlights.map((highlight, index) => (
                                                    <li key={index} className="flex items-center gap-2 text-[hsl(215,20.2%,65.1%)]">
                                                        <Star className="w-3 h-3 text-accent" />
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex gap-3 pt-4">
                                            {selectedProject.live && (<Button
                                                className="bg-accent text-black hover:bg-[hsl(179 100% 85%)]"
                                                asChild
                                            >
                                                <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    Live Demo
                                                </a>
                                            </Button>)}
                                            {selectedProject.github && (<Button
                                                variant="outline"
                                                className="border-accent/50 text-accent hover:bg-accent hover:text-black"
                                                asChild
                                            >
                                                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                                                    <Github className="w-4 h-4 mr-2" />
                                                    Source Code
                                                </a>
                                            </Button>)}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
}