import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import projectFarmbasket from '../assets/project_farmbasket.png';
import projectNutritrack from '../assets/project_nutritrack.png';
import projectFinanceAI from '../assets/project_financeai.png';

const Projects = () => {
    const projects = [
        {
            title: "NutriTrack",
            description: "Your Personal Fitness Companion. Sign up/in, input weight & height, and start working out. Easy to use, simple, and user friendly with motivating streaks and progress tracking to keep you on track.",
            tags: ["React", "Fitness", "Health"],
            image: projectNutritrack,
            github: "https://github.com/Karthik564125/NutriTrack",
            demo: "#"
        },
        {
            title: "FarmBasket",
            description: "Bridging Farmers and Consumers. A full stack web application facilitating direct connections between farmers and buyers, ensuring fair pricing and fresh produce.",
            tags: ["React", "E-Commerce", "Agriculture"],
            image: projectFarmbasket,
            github: "https://github.com/Karthik564125/FarmBasket",
            demo: "#"
        },
        {
            title: "FinanceAI",
            description: "FinanceAI is a smart web app that helps users track expenses, manage budgets, and monitor payments. It uses AI to give personalized insights for better financial decisions. The app is secure, simple to use, and designed to keep users in control of their money.",
            tags: ["React+Typescript", "Finance", "AI"],
            image: projectFinanceAI,
            github: "https://github.com/Karthik564125/fianceai",
            demo: "#"
        }
    ];

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-100 mb-4 font-display">Featured Projects</h2>
                    <p className="text-slate-400">Some things I've built during my learning journey</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="glass-card rounded-xl overflow-hidden hover:scale-[1.02] flex flex-col group neon-border transition-all duration-300">
                            {/* Project Image */}
                            <div className="h-48 w-full bg-black/50 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10 opacity-60"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                                    <div className="flex gap-3">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-neon-purple transition-colors"><Github size={20} /></a>
                                    </div>
                                </div>

                                <p className="text-slate-300 mb-6 text-sm leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="px-3 py-1 bg-neon-blue/10 text-neon-blue text-xs rounded-full border border-neon-blue/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
