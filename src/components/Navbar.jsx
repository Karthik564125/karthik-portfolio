import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Palette, Home, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme, themes } = useTheme();
    const [showThemeMenu, setShowThemeMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleThemeMenu = () => setShowThemeMenu(!showThemeMenu);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { icon: <Github size={20} />, href: 'https://github.com/Karthik564125', className: "text-slate-300 hover:text-neon-cyan transition-colors transform hover:-translate-y-1" },
        { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/karthikeya-bharadwaja-pisupati-804620247/', className: "text-slate-400 hover:text-neon-purple transition-colors hover:scale-110" },
        { icon: <Mail size={18} />, href: 'mailto:2200030209cseh@gmail.com', className: "text-slate-400 hover:text-neon-blue transition-colors hover:scale-110" },
    ];

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl text-sm md:text-base">
            <div className="glass-nav rounded-full px-6 py-3 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <motion.a
                            href="#"
                            className="flex-shrink-0 flex items-center gap-2 group"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="relative w-10 h-10 flex items-center justify-center bg-surface/80 rounded-full border border-white/10 group-hover:border-neon-cyan/50 transition-colors shadow-lg shadow-neon-blue/10">
                                <Home size={20} className="text-slate-300 group-hover:text-neon-cyan transition-colors" />
                            </div>
                        </motion.a>
                    </div>

                    {/* Mobile Only Center Text */}
                    <div className="md:hidden flex-1 flex justify-center">
                        <span className="text-slate-400 font-display tracking-widest text-xs uppercase opacity-70">Hello & Welcome</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="flex items-baseline space-x-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="relative px-3 py-1.5 rounded-full text-slate-400 hover:text-white transition-colors hover:bg-white/5"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social Icons & Theme Switcher */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="relative">
                            <button
                                onClick={toggleThemeMenu}
                                className="text-slate-300 hover:text-neon-cyan transition-colors p-2"
                                title="Change Theme"
                            >
                                <Palette size={20} />
                            </button>

                            {/* Theme Dropdown */}
                            {showThemeMenu && (
                                <div className="absolute top-full right-0 mt-2 p-2 bg-gray-900 border border-white/10 rounded-xl shadow-xl flex flex-col gap-2 min-w-[120px] z-[100]">
                                    {themes.map((t) => (
                                        <button
                                            key={t.id}
                                            onClick={() => {
                                                setTheme(t.id);
                                                setShowThemeMenu(false);
                                            }}
                                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${theme === t.id ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                                        >
                                            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: t.color }}></span>
                                            {t.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="h-6 w-px bg-white/10 mx-2"></div>

                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={link.className || "text-slate-300 hover:text-neon-cyan transition-colors transform hover:-translate-y-1"}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 focus:outline-none"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden mt-4 glass-nav rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {/* Nav Links */}
                            <div className="space-y-2">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all text-lg"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>

                            <div className="h-px bg-white/10 w-full"></div>

                            {/* Theme Selection in Mobile */}
                            <div className="px-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">Select Theme</p>
                                <div className="grid grid-cols-2 gap-3">
                                    {themes.map((t) => (
                                        <button
                                            key={t.id}
                                            onClick={() => {
                                                setTheme(t.id);
                                                setIsOpen(false);
                                            }}
                                            className={`flex items-center gap-2 p-3 rounded-xl border transition-all ${theme === t.id ? 'bg-white/10 border-white/20 text-white' : 'bg-white/5 border-white/5 text-slate-400 hover:border-white/10'}`}
                                        >
                                            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: t.color }}></span>
                                            <span className="text-sm">{t.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="h-px bg-white/10 w-full"></div>

                            {/* Social Links in Mobile */}
                            <div className="flex justify-center gap-6 pt-2">
                                {socialLinks.map((link, index) => (
                                    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full text-slate-400 hover:text-white transition-colors">
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
