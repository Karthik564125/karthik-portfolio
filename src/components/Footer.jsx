import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/5 relative z-10 glass-nav">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
                <p>© {new Date().getFullYear()} Karthik Pisupati. Built with <span className="text-neon-cyan">React</span> & <span className="text-neon-purple">Tailwind CSS</span>.</p>
            </div>
        </footer>
    );
};

export default Footer;
