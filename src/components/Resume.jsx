import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticlesBackground from './ParticlesBackground';

const Resume = () => {
    return (
        <div className="min-h-screen bg-background text-slate-200 relative overflow-hidden">
            <ParticlesBackground />

            <div className="fixed top-6 left-6 z-50">
                <Link to="/" className="flex items-center gap-2 px-6 py-3 bg-surface/50 backdrop-blur-md border border-white/10 rounded-full hover:border-neon-cyan/50 hover:bg-surface/80 transition-all group">
                    <ArrowLeft className="text-neon-cyan group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Home</span>
                </Link>
            </div>

            <div className="container mx-auto px-4 pt-24 pb-12 h-screen flex flex-col">
                <div className="flex-1 w-full h-full bg-surface/30 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                    <iframe
                        src="/src/assets/resume.pdf"
                        className="w-full h-full"
                        title="Resume"
                    />
                </div>
            </div>
        </div>
    );
};

export default Resume;
