import React from 'react';
import profileImg from '../assets/profile_new.jpg';

const About = () => {
    return (
        <section id="about" className="py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-100 mb-4">About Me</h2>
                    <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Image Column */}
                        <div className="w-full md:w-1/3 flex justify-center">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative w-64 h-64 md:w-full md:h-auto aspect-square overflow-hidden rounded-2xl ring-1 ring-white/10">
                                    <img
                                        src={profileImg}
                                        alt="Sai Karthikeya"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Text Column */}
                        <div className="w-full md:w-2/3 glass-card p-8 rounded-2xl shadow-xl">
                            <p className="text-slate-300 text-lg leading-relaxed mb-6 font-light">
                                I am <strong className="text-slate-100 font-medium">Pisupati A V Sai Karthikeya Bharadwaja</strong>, an enthusiastic and motivated undergraduate at <strong className="text-slate-100 font-medium">KL University</strong>, pursuing Computer Science and Engineering.
                            </p>
                            <p className="text-slate-300 text-lg leading-relaxed mb-6 font-light">
                                I have strong leadership qualities, excellent communication skills, and a sharp ability to quickly grasp and adapt to new technologies. I am open to work and eager to contribute effectively in dynamic team environments.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-neon-blue/10 rounded-full text-neon-blue text-sm font-medium border border-neon-blue/20">Leadership</span>
                                <span className="px-4 py-2 bg-neon-blue/10 rounded-full text-neon-blue text-sm font-medium border border-neon-blue/20">Communication</span>
                                <span className="px-4 py-2 bg-neon-blue/10 rounded-full text-neon-blue text-sm font-medium border border-neon-blue/20">Fast Learner</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
