import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Contact = () => {
    return (
        <section className="min-h-screen py-20 px-4 flex items-center">
            <div className="max-w-4xl mx-auto w-full">
                <div className="text-center animate-fade-in-up ">
                    <h2 className="text-4xl font-bold mb-8 text-accent">Get In Touch</h2>
                    <p className="text-lg text-[hsl(215,20.2%,65.1%)] mb-12 max-w-2xl mx-auto">
                        Feel free to reach out for collaboration or just to say hello!
                    </p>

                    <div className="flex justify-center space-x-16">
                        <Link
                            href="mailto:marin.ivosevic91@gmail.com"
                            className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-[hsl(240,10%,8%)] border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 shadow-glow group animate-fade-in-up"
                            style={{ animationDelay: "0.2s" }}
                        >
                            <div className="p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                                <Mail className="h-8 w-8 text-accent" />
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold text-[hsl(210,40%,98%)] mb-1">Email</h3>
                                <p className="text-accent hover:text-accent-glow transition-colors duration-300">
                                    marin.ivosevic91@gmail.com
                                </p>
                            </div>
                        </Link>

                        <Link
                            href="https://github.com/marinivosevic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-[hsl(240,10%,8%)] border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 shadow-glow group animate-fade-in-up"
                            style={{ animationDelay: "0.4s" }}
                        >
                            <div className="p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                                <Github className="h-8 w-8 text-accent" />
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold text-[hsl(210,40%,98%)] mb-1">GitHub</h3>
                                <p className="text-accent hover:text-portfolio-accent-glow transition-colors duration-300">
                                    @marinivosevic
                                </p>
                            </div>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/marin-ivo%C5%A1evi%C4%87-634064269/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-[hsl(240,10%,8%)] border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 shadow-glow group animate-fade-in-up"
                            style={{ animationDelay: "0.4s" }}
                        >
                            <div className="p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                                <Linkedin className="h-8 w-8 text-accent" />
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold text-[hsl(210,40%,98%)] mb-1">Linked In</h3>
                                <p className="text-accent hover:text-portfolio-accent-glow transition-colors duration-300">
                                    Marin Ivošević
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;