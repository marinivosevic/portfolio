import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github, Calendar, Users, Star } from "lucide-react";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import dashboardImg from "@/assets/project-dashboard.jpg";
import socialImg from "@/assets/project-social.jpg";
import * as images from "@/constants/images";
import { StaticImageData } from "next/image";
import Image from "next/image";
interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    image: StaticImageData;
    technologies: string[];
    github: string;
    live: string;
    year: string;
    status: string;
    teamSize: number;
    highlights: string[];
}

const allProjects: Project[] = [
    {
        id: 1,
        title: "Social Media App",
        description: "A modern social networking platform with real-time messaging, user profiles, and content sharing capabilities.",
        longDescription: "A comprehensive social media platform built with modern web technologies. Features include real-time messaging using WebSockets, advanced user profiles with customizable themes, content sharing with image and video support, and a sophisticated recommendation algorithm.",
        image: images.avatarImage,
        technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
        github: "https://github.com",
        live: "https://example.com",
        year: "2024",
        status: "Live",
        teamSize: 3,
        highlights: ["Real-time messaging", "Advanced recommendation system", "Mobile-responsive design", "Content moderation tools"]
    },
    {
        id: 2,
        title: "Task Management Dashboard",
        description: "A comprehensive productivity dashboard with analytics, team collaboration, and advanced project tracking features.",
        longDescription: "An enterprise-grade task management solution designed for modern teams. Includes advanced analytics, customizable workflows, time tracking, and integration with popular productivity tools. Built with performance and scalability in mind.",
        image: images.avatarImage,
        technologies: ["React", "TypeScript", "PostgreSQL", "Chart.js"],
        github: "https://github.com",
        live: "https://example.com",
        year: "2024",
        status: "Live",
        teamSize: 4,
        highlights: ["Advanced analytics", "Team collaboration", "Custom workflows", "API integrations"]
    },
    {
        id: 3,
        title: "E-Commerce Platform",
        description: "A full-featured online store with payment integration, inventory management, and customer analytics.",
        longDescription: "A complete e-commerce solution with advanced features for both customers and administrators. Includes secure payment processing, intelligent inventory management, customer behavior analytics, and a powerful admin dashboard.",
        image: images.avatarImage,
        technologies: ["Next.js", "Stripe", "Prisma", "Redis"],
        github: "https://github.com",
        live: "https://example.com",
        year: "2023",
        status: "Live",
        teamSize: 5,
        highlights: ["Payment processing", "Inventory management", "Customer analytics", "Admin dashboard"]
    },
    {
        id: 4,
        title: "Weather Forecast App",
        description: "A beautiful weather application with detailed forecasts, weather maps, and location-based alerts.",
        longDescription: "An intuitive weather application providing accurate forecasts and weather insights. Features beautiful visualizations, interactive weather maps, and personalized weather alerts based on user preferences and location.",
        image: images.avatarImage, // Reusing image for demo
        technologies: ["React", "OpenWeather API", "Leaflet", "PWA"],
        github: "https://github.com",
        live: "https://example.com",
        year: "2023",
        status: "Live",
        teamSize: 1,
        highlights: ["Real-time weather data", "Interactive maps", "PWA support", "Location-based alerts"]
    },
    {
        id: 5,
        title: "Fitness Tracker",
        description: "A comprehensive fitness tracking application with workout plans, progress monitoring, and social features.",
        longDescription: "A complete fitness companion app that helps users track their workouts, monitor progress, and connect with other fitness enthusiasts. Includes custom workout plans, nutrition tracking, and social features for motivation.",
        image: images.avatarImage, // Reusing image for demo
        technologies: ["React Native", "Firebase", "Charts", "ML Kit"],
        github: "https://github.com",
        live: "https://example.com",
        year: "2023",
        status: "Development",
        teamSize: 2,
        highlights: ["Workout tracking", "Progress analytics", "Social features", "Nutrition monitoring"]
    },
    {
        id: 6,
        title: "Learning Management System",
        description: "An educational platform for online courses with interactive content and progress tracking.",
        longDescription: "A comprehensive LMS designed for educational institutions and corporate training. Features interactive course content, video streaming, assignment management, and detailed progress tracking for both students and instructors.",
        image: images.avatarImage, // Reusing image for demo
        technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
        github: "https://github.com",
        live: "https://example.com",
        year: "2022",
        status: "Live",
        teamSize: 6,
        highlights: ["Interactive content", "Video streaming", "Assignment system", "Progress tracking"]
    },
    {
        id: 7,
        title: "Crypto Portfolio Tracker",
        description: "A cryptocurrency portfolio management tool with real-time prices and advanced analytics.",
        longDescription: "A sophisticated crypto portfolio tracker that helps users manage their investments. Features real-time price tracking, portfolio analytics, profit/loss calculations, and market insights to make informed trading decisions.",
        image: images.avatarImage, // Reusing image for demo
        technologies: ["React", "CoinGecko API", "D3.js", "WebSocket"],
        github: "https://github.com",
        live: "https://example.com",
        year: "2022",
        status: "Live",
        teamSize: 2,
        highlights: ["Real-time prices", "Portfolio analytics", "Market insights", "Trading signals"]
    },
    {
        id: 8,
        title: "Recipe Sharing Platform",
        description: "A social platform for sharing and discovering recipes with rating and review systems.",
        longDescription: "A vibrant community platform where food enthusiasts can share their favorite recipes, discover new dishes, and connect with other cooks. Features recipe rating, reviews, meal planning, and shopping list generation.",
        image: images.avatarImage, // Reusing image for demo
        technologies: ["Svelte", "Node.js", "MongoDB", "Cloudinary"],
        github: "https://github.com",
        live: "https://example.com",
        year: "2022",
        status: "Live",
        teamSize: 3,
        highlights: ["Recipe sharing", "Community features", "Meal planning", "Shopping lists"]
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
        "Redis": "bg-red-500/10 text-red-400 border-red-400/20",
        "OpenWeather API": "bg-yellow-500/10 text-yellow-400 border-yellow-400/20",
        "Leaflet": "bg-green-500/10 text-green-400 border-green-400/20",
        "PWA": "bg-purple-500/10 text-purple-400 border-purple-400/20",
        "React Native": "bg-blue-500/10 text-blue-400 border-blue-400/20",
        "Firebase": "bg-orange-500/10 text-orange-400 border-orange-400/20",
        "Charts": "bg-teal-500/10 text-teal-400 border-teal-400/20",
        "ML Kit": "bg-red-500/10 text-red-400 border-red-400/20",
        "Vue.js": "bg-green-500/10 text-green-400 border-green-400/20",
        "Laravel": "bg-red-500/10 text-red-400 border-red-400/20",
        "MySQL": "bg-blue-500/10 text-blue-400 border-blue-400/20",
        "WebRTC": "bg-purple-500/10 text-purple-400 border-purple-400/20",
        "CoinGecko API": "bg-yellow-500/10 text-yellow-400 border-yellow-400/20",
        "D3.js": "bg-orange-500/10 text-orange-400 border-orange-400/20",
        "WebSocket": "bg-purple-500/10 text-purple-400 border-purple-400/20",
        "Svelte": "bg-orange-500/10 text-orange-400 border-orange-400/20",
        "Cloudinary": "bg-blue-500/10 text-blue-400 border-blue-400/20"
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
                            className="overflow-hidden bg-[linear-gradient(145deg,hsl(240,10%,8%),hsl(240,10%,10%))] border-[hsl(200,5%,22%)] shadow-card transition-all duration-300 hover:shadow-elevated hover:bg-card-hover hover:border-portfolio-accent/20 hover:-translate-y-2 cursor-pointer group"
                            onClick={() => handleProjectClick(project)}
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
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
                                            <Button
                                                className="bg-accent text-black hover:bg-[hsl(179 100% 85%)]"
                                                asChild
                                            >
                                                <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    Live Demo
                                                </a>
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="border-accent/50 text-accent hover:bg-accent hover:text-black"
                                                asChild
                                            >
                                                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                                                    <Github className="w-4 h-4 mr-2" />
                                                    Source Code
                                                </a>
                                            </Button>
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