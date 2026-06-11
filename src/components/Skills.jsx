
import React, { useState } from 'react';
import { Terminal, Coffee, Code, Database, Server, Box, Cloud, Globe, Cpu, ExternalLink } from 'lucide-react';
import certAutomation from '../assets/cert_automation.png';
import certAviatrix from '../assets/cert_aviatrix.png';
import certAws from '../assets/cert_aws.png';
import certRedhat from '../assets/cert_redhat.png';
import certSalesforce from '../assets/cert_salesforce.png';
import certCodechef from '../assets/cert_codechef.png';
import ImageModal from './ImageModal';

const Skills = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const customSkills = [
        {
            category: "Programming Languages",
            items: [
                { name: "C", icon: <Terminal size={18} /> },
                { name: "Java", icon: <Coffee size={18} /> }
            ]
        },
        {
            category: "Web Technologies",
            items: [
                { name: "HTML", icon: <Globe size={18} /> },
                { name: "CSS", icon: <Box size={18} /> },
                { name: "JavaScript", icon: <Code size={18} /> },
                { name: "React", icon: <Box size={18} /> }
            ]
        },
        {
            category: "Database",
            items: [
                { name: "MySQL", icon: <Database size={18} /> },
                { name: "MongoDB", icon: <Database size={18} /> }
            ]
        },
        {
            category: "Cloud",
            items: [
                { name: "Familiar with AWS Services", icon: <Cloud size={18} /> }
            ]
        },
        {
            category: "DevOps & CI/CD",
            items: [
                { name: "CI/CD", icon: <Server size={18} /> },
                { name: "Docker", icon: <Box size={18} /> }
            ]
        },
    ];

    const certifications = [
        {
            name: "AWS Certified Cloud Practitioner",
            date: "Mar 2025",
            issuer: "AWS",
            image: certAws,
            verifyUrl: "https://www.credly.com/badges/423cedc4-6c58-4f28-bb88-95c257e98daf/public_url"
        },
        {
            name: "Salesforce Certified AI Associate",
            date: "Oct 2024",
            issuer: "Salesforce",
            image: certSalesforce,
            verifyUrl: "https://www.salesforce.com/trailblazer/karthikeyapisupati"
        },
        {
            name: "Red Hat Certified Enterprise Developer",
            date: "Sep 2024",
            issuer: "Red Hat",
            image: certRedhat,
            verifyUrl: "https://www.credly.com/badges/1cfcdad6-b8aa-476b-8a6d-2d9eb0bd13b4/public_url"
        },
        {
            name: "Automation Anywhere Certified Essentials RPA Professional",
            date: "2023",
            issuer: "Automation Anywhere",
            image: certAutomation,
            verifyUrl: "https://certificates.automationanywhere.com/66e2a47e-c099-44e2-871e-adaefdae2e61#acc.D0cLIs6n"
        },
        {
            name: "Aviatrix Certified Engineer - Multicloud Network Associate",
            date: "Jul 2025",
            issuer: "Aviatrix",
            image: certAviatrix,
            verifyUrl: "https://www.credly.com/badges/b2dca24b-2326-4ed7-aa9d-0aad2ada6aa3/public_url"
        },
        {
            name: "CodeChef 500 Difficulty Rating",
            date: "Aug 2025",
            issuer: "CodeChef",
            image: certCodechef,
            verifyUrl: "https://www.codechef.com/certificates/public/549bddc"
        }
    ];

    return (
        <section id="skills" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-100 mb-4 font-display">Expertise & Certifications</h2>
                    <p className="text-slate-400">My technical skill set and professional qualifications</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
                    {customSkills.map((skillGroup, index) => (
                        <div key={index} className="flex flex-col bg-white/5 border border-white/10 rounded-xl p-6 hover:border-neon-cyan/50 transition-colors">
                            <h3 className="text-xl font-bold text-slate-100 mb-6 font-display text-center border-b border-white/10 pb-4">{skillGroup.category}</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                {skillGroup.items.map((skill, idx) => (
                                    <div key={idx} className="group flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/5 rounded-lg hover:border-neon-cyan/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 w-fit">
                                        <span className="text-neon-cyan group-hover:text-neon-purple transition-colors">
                                            {skill.icon}
                                        </span>
                                        <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Certifications - Image Grid */}
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-2xl font-bold text-slate-100 mb-10 text-center font-display">Certifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <div key={index} className="glass-card rounded-xl overflow-hidden hover:border-neon-cyan/50 transition-all group hover:-translate-y-1 flex flex-col h-full">
                                <div
                                    className="h-48 w-full bg-black/50 overflow-hidden relative cursor-pointer"
                                    onClick={() => setSelectedImage({ src: cert.image, alt: cert.name })}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60"></div>
                                    <img
                                        src={cert.image}
                                        alt={cert.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 flex-1 flex flex-col relative z-20">
                                    <div className="flex justify-between items-start mb-2 gap-2">
                                        <h4 className="text-lg font-semibold text-slate-100 group-hover:text-neon-cyan transition-colors leading-tight">{cert.name}</h4>
                                        {cert.verifyUrl && (
                                            <a
                                                href={cert.verifyUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-shrink-0 p-2 bg-white/5 border border-white/10 rounded-lg hover:border-neon-cyan/50 hover:bg-neon-cyan/10 transition-all text-slate-400 hover:text-neon-cyan group/btn"
                                                title="Verify Certification"
                                            >
                                                <ExternalLink size={14} className="group-hover/btn:scale-110 transition-transform" />
                                            </a>
                                        )}
                                    </div>
                                    <div className="mt-auto pt-4">
                                        <p className="text-neon-blue text-sm font-medium mb-1">{cert.issuer}</p>
                                        <p className="text-slate-500 text-xs">{cert.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <ImageModal
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                imageSrc={selectedImage?.src}
                altText={selectedImage?.alt}
            />
        </section>
    );
};

export default Skills;

