import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const roles = ["Karthik Pisupati", "React Enthusiast", "Web Developer"];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // typeWriter effect
    useEffect(() => {
        if (subIndex === roles[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % roles.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === roles[index].length ? 2000 : 150, Math.random() * 350));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    // blink effect
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            {/* Background Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[100px] animate-pulse-slow pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">

                <h1 className="text-slate-100 text-6xl md:text-8xl font-bold tracking-tighter mb-6 font-display min-h-[1.2em]">
                    Hi, I'm <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                        {`${roles[index].substring(0, subIndex)}`}
                    </span>
                    <span className={`inline-block w-1 h-12 md:h-16 bg-neon-cyan ml-2 ${blink ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
                </h1>
                <p className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    Computer Science Undergraduate <span className="text-neon-purple mx-2">|</span> Full Stack Developer
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/resume" className="group inline-flex items-center justify-center px-8 py-4 bg-transparent text-slate-200 rounded-full font-medium hover:text-white transition-all hover:scale-105 border border-white/10 hover:border-neon-cyan hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] backdrop-blur-sm">
                        View Resume
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                        href="/src/assets/resume.pdf"
                        download="Karthik_Pisupati_Resume.pdf"
                        className="group inline-flex items-center justify-center px-8 py-4 bg-neon-purple/10 text-neon-purple rounded-full font-medium hover:bg-neon-purple hover:text-white transition-all hover:scale-105 border border-neon-purple/20 hover:border-neon-purple hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] backdrop-blur-sm"
                    >
                        Download Resume
                        <Download className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
