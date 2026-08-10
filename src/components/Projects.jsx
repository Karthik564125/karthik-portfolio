import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import projectFarmbasket from '../assets/project_farmbasket.png';
import projectNutritrack from '../assets/project_nutritrack.png';
import projectFinanceAI from '../assets/project_financeai.png';
import dietxPreview from '../assets/dietx_preview.png';
import Lucky4UFeatured from './Lucky4UFeatured';

const Projects = () => {
    const projects = [
        {
            title: "Spendwise",
            description: "A finance web app to track expenses and manage budgets with insightful visualizations.",
            tags: ["React", "Finance", "Expenses"],
            image: projectFinanceAI,
            github: "https://github.com/Karthik564125/FinanceAI",
            demo: "https://ai-finance-b81e3.web.app/login"
        },
        {
            title: "NutriTrack",
            description: "Your Personal Fitness Companion. Sign up/in, input weight & height, and start working out. Easy to use, simple, and user friendly with motivating streaks and progress tracking to keep you on track.",
            tags: ["React", "Fitness", "Health"],
            image: projectNutritrack,
            github: "https://github.com/Karthik564125/NutriTrack",
        },
        {
            title: "FarmBasket",
            description: "Bridging Farmers and Consumers. A full stack web application facilitating direct connections between farmers and buyers, ensuring fair pricing and fresh produce.",
            tags: ["React", "E-Commerce", "Agriculture"],
            image: projectFarmbasket,
            github: "https://github.com/Karthik564125/FarmBasket",
        },
    ];

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16 flex justify-center">
                        <h2 className="text-3xl font-bold text-slate-100 mb-4 font-display text-center">Featured Projects</h2>
                    </div>

                    {/* Freelance Projects */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-slate-100 mb-6">Freelance Projects</h3>
                        <div className="glass-card p-6 rounded-xl overflow-hidden hover:border-neon-cyan/50 transition-all">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                                <div className="md:col-span-2">
                                <h4 className="text-xl font-bold text-slate-100 mb-2">DietX – Diet Consultation</h4>
                                <p className="text-neon-cyan font-medium mb-3">Jun 2025 – Present</p>
                                <p className="text-slate-300 mb-4">Developed and deployed a production-ready nutrition platform using <strong className="text-white">React</strong>, <strong className="text-white">Node.js</strong>, <strong className="text-white">MongoDB</strong>, and <strong className="text-white">Razorpay</strong> for online consultations and payment management. Collaborated directly with a real-world client — gathered requirements, managed deployment, and delivered a fully functional business solution.</p>
                                <div className="flex gap-4">
                                    <a href="https://www.dietx.org.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 bg-white/5 text-white rounded-lg border border-white/10 hover:bg-white/10 transition-colors">Live Demo</a>
                                    <a href="https://github.com/Karthik564125/dietx" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 bg-white/5 text-white rounded-lg border border-white/10 hover:bg-white/10 transition-colors">GitHub</a>
                                </div>
                            </div>

                            <div className="md:col-span-1 flex items-center justify-center">
                                <div className="w-full max-w-[320px] rounded-lg overflow-hidden border border-white/10 bg-white/5 shadow-lg p-2 group relative">
                                    <a href="https://www.dietx.org.in/" target="_blank" rel="noopener noreferrer" aria-label="Open DietX live demo" className="absolute inset-0 flex items-center justify-center">
                                        <span className="w-12 h-12 bg-gradient-to-r from-neon-green to-neon-cyan rounded-full flex items-center justify-center text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path d="M5 3v18l15-9L5 3z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <img src={dietxPreview} alt="DietX preview" className="w-full h-auto object-contain rounded-md" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                                {/* Lucky4U Group Websites - Featured */}
                                <div className="mb-12">
                                    <Lucky4UFeatured />
                                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-slate-100 mb-6">Personal Projects</h3>
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
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-neon-purple transition-colors"><Github size={20} /></a>
                                        )}
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-neon-purple transition-colors"><ExternalLink size={20} /></a>
                                        )}
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
            </div>
        </section>
    );
};

export default Projects;
