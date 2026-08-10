import React, { useState } from 'react';
import ImageModal from './ImageModal';
import logoKL from '../assets/logo-kl.png';
import logoChaitanya from '../assets/logo-chaitanya.png';
import certWebFullstack from '../assets/cert-web-fullstack.png';
import certIbmSkills from '../assets/cert-ibm-skills.png';
import h1Img from '../assets/h1.jpg';
import h2Img from '../assets/h2.jpg';
import me1Img from '../assets/me1.jpg';

const Experience = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="experience" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Education */}
                    <div>
                        <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center font-display">
                            <span className="w-8 h-1 bg-neon-purple rounded-full mr-3 shadow-[0_0_10px_#7c3aed]"></span>
                            Education
                        </h3>
                        <div className="border-l-2 border-slate-800/50 ml-4 pl-8 pb-12 space-y-12">
                            <div className="relative group">
                                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-neon-purple shadow-[0_0_10px_#7c3aed] group-hover:scale-125 transition-transform"></span>
                                <div className="glass-card p-6 rounded-xl hover:border-neon-purple/50 transition-all flex items-start gap-4">
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-slate-100 mb-1">B.Tech in Computer Science and Engineering</h4>
                                        <p className="text-neon-cyan font-medium mb-2">KL University</p>
                                        <p className="text-slate-500 text-sm">2022 - 2026 | CGPA: 8.91</p>
                                    </div>
                                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-white/5 border border-white/10 flex-shrink-0 group-hover:border-neon-purple/30 transition-colors">
                                        <img src={logoKL} alt="KL University" className="w-full h-full object-contain p-1" />
                                    </div>
                                </div>
                            </div>
                            <div className="relative group">
                                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-slate-600 group-hover:bg-neon-blue transition-colors"></span>
                                <div className="glass-card p-6 rounded-xl hover:border-neon-blue/50 transition-all flex items-start gap-4">
                                    <div className="flex-1">
                                        <h4 className="text-lg font-semibold text-slate-100 mb-1">Intermediate</h4>
                                        <p className="text-neon-blue font-medium mb-2">Sri Chaitanya Junior College</p>
                                        <p className="text-slate-500 text-sm">2020 - 2022 | 70%</p>
                                    </div>
                                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-white/5 border border-white/10 flex-shrink-0 group-hover:border-neon-blue/30 transition-colors">
                                        <img src={logoChaitanya} alt="Sri Chaitanya" className="w-full h-full object-contain p-1" />
                                    </div>
                                </div>
                            </div>
                            <div className="relative group">
                                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-slate-600 group-hover:bg-neon-blue transition-colors"></span>
                                <div className="glass-card p-6 rounded-xl hover:border-neon-blue/50 transition-all">
                                    <h4 className="text-lg font-semibold text-slate-100 mb-1">10th Standard</h4>
                                    <p className="text-neon-blue font-medium mb-2">Santhan High School</p>
                                    <p className="text-slate-500 text-sm">2019 - 2020 | 81%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    {/* Virtual Internships */}
                    <div>
                        <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center font-display">
                            <span className="w-8 h-1 bg-neon-cyan rounded-full mr-3 shadow-[0_0_10px_#06b6d4]"></span>
                            Virtual Internships
                        </h3>
                        <div className="border-l-2 border-slate-800/50 ml-4 pl-8 pb-12">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* EduSkills Internship */}
                                <div className="relative group">
                                    <span className="absolute -left-[41px] top-6 h-5 w-5 rounded-full border-4 border-slate-900 bg-neon-cyan shadow-[0_0_10px_#06b6d4] group-hover:scale-125 transition-transform"></span>
                                    <div className="glass-card p-4 rounded-xl hover:border-neon-cyan/50 transition-all h-full flex flex-col">
                                        <h4 className="text-lg font-bold text-slate-100 mb-1 leading-tight">Web Full Stack Developer</h4>
                                        <p className="text-neon-cyan text-sm font-medium mb-1">EduSkills / AICTE</p>
                                        <p className="text-slate-500 text-xs mb-3">July - Sep 2024</p>
                                        <div
                                            className="mt-auto rounded-lg overflow-hidden border border-white/10 group-hover:border-neon-cyan/30 transition-all cursor-pointer"
                                            onClick={() => setSelectedImage({ src: certWebFullstack, alt: "EduSkills Certificate" })}
                                        >
                                            <img src={certWebFullstack} alt="EduSkills Certificate" className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500" />
                                        </div>
                                    </div>
                                </div>

                                {/* IBM SkillsBuild Internship */}
                                <div className="relative group">
                                    {/* No dot for the second item to keep timeline clean, or we could add a ghost dot if needed */}
                                    <div className="glass-card p-4 rounded-xl hover:border-neon-cyan/50 transition-all h-full flex flex-col">
                                        <h4 className="text-lg font-bold text-slate-100 mb-1 leading-tight">Employability Skills</h4>
                                        <p className="text-neon-cyan text-sm font-medium mb-1">Edunet / APSSDC</p>
                                        <p className="text-slate-500 text-xs mb-3">May - Jun 2024</p>
                                        <div
                                            className="mt-auto rounded-lg overflow-hidden border border-white/10 group-hover:border-neon-cyan/30 transition-all cursor-pointer"
                                            onClick={() => setSelectedImage({ src: certIbmSkills, alt: "IBM SkillsBuild Certificate" })}
                                        >
                                            <img src={certIbmSkills} alt="IBM SkillsBuild Certificate" className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Other Activities */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center justify-center font-display">
                        <span className="w-8 h-1 bg-neon-blue rounded-full mr-3 shadow-[0_0_10px_#3b82f6]"></span>
                        Other Activities
                        <span className="w-8 h-1 bg-neon-blue rounded-full ml-3 shadow-[0_0_10px_#3b82f6]"></span>
                    </h3>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {/* Freedom Fest 2024 */}
                        <div className="relative group">
                            <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-neon-cyan/50 transition-all shadow-lg hover:shadow-neon-cyan/10">
                                <div className="flex flex-col md:flex-row gap-6 items-start">
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-2xl font-bold text-slate-100">Freedom Fest 2024</h4>
                                            <span className="px-3 py-1 bg-neon-cyan/10 text-neon-cyan text-xs font-semibold rounded-full border border-neon-cyan/20">Volunteer</span>
                                        </div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="text-neon-cyan font-medium">Swecha Andhra Pradesh</span>
                                            <span className="text-slate-600">•</span>
                                            <span className="text-slate-500 text-sm">Technical Support</span>
                                        </div>
                                        <p className="text-slate-300 mb-4 leading-relaxed">
                                            Passionate contribution to Swecha AP Freedom Fest 2024 in various organizing activities and Technical Support. Assisted in event planning and coordination to ensure a productive outcome and smooth technical execution.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Summer Social Internship */}
                        <div className="relative group">
                            <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-neon-blue/50 transition-all shadow-lg hover:shadow-neon-blue/10">
                                <div className="flex flex-col md:flex-row gap-6 items-start">
                                    <div className="flex-1">
                                        <h4 className="text-2xl font-bold text-slate-100 mb-2">Summer Social Internship</h4>
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="text-neon-blue font-medium">Swecha Organization</span>
                                            <span className="text-slate-600">•</span>
                                            <span className="text-slate-500 text-sm">Community Service</span>
                                        </div>
                                        <p className="text-slate-300 mb-4 leading-relaxed">
                                            Actively participated in community development initiatives and promoted technology for social good. Worked on open-source projects and helped organize workshops to spread digital literacy.
                                        </p>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-400 text-sm">
                                            <li className="flex items-center"><span className="text-neon-blue mr-2">▹</span> Community Development</li>
                                            <li className="flex items-center"><span className="text-neon-blue mr-2">▹</span> Open Source Contribution</li>
                                            <li className="flex items-center"><span className="text-neon-blue mr-2">▹</span> Tech Workshops</li>
                                            <li className="flex items-center"><span className="text-neon-blue mr-2">▹</span> Social Impact</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Lubeswala Hackathon */}
                        <div className="relative group">
                            <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-neon-blue/50 transition-all shadow-lg hover:shadow-neon-blue/10">
                                <div className="flex flex-col md:flex-row gap-6 items-start">
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-2xl font-bold text-slate-100">Lubeswala Hackathon</h4>
                                            <span className="px-3 py-1 bg-neon-cyan/10 text-neon-cyan text-xs font-semibold rounded-full border border-neon-cyan/20">Hackathon</span>
                                        </div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="text-neon-cyan font-medium">GigPoint (Super Apps)</span>
                                            <span className="text-slate-600">•</span>
                                            <span className="text-slate-500 text-sm">Hyderabad</span>
                                        </div>
                                        <p className="text-slate-300 mb-3 leading-relaxed">
                                            Participated in a hackathon by GigPoint (part of Super Apps) in Hyderabad, solving a real-world problem statement from Petro Bazar for their platform Lubeswala, which sells engine oils, lubricants, greases, and other automotive essentials. The challenge: garage owners and mechanics are used to mobile-first apps like Swiggy and Blinkit, so the goal was to design a simple, customer-friendly Android commerce experience instead of relying only on the existing website.
                                        </p>
                                        <p className="text-slate-300 mb-4 leading-relaxed">
                                            Since most of my prior experience was in web development, I used this as an opportunity to learn React Native with Expo and build my first mobile app — focused on making product discovery and ordering simple for garage owners and mechanics. Presented and demoed the working app in Hyderabad on the final day.
                                        </p>

                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-400 text-sm mb-4">
                                            <li className="flex items-center"><span className="text-neon-blue mr-2">▹</span> React Native</li>
                                            <li className="flex items-center"><span className="text-neon-blue mr-2">▹</span> Mobile Development</li>
                                            <li className="flex items-center"><span className="text-neon-blue mr-2">▹</span> Hackathon</li>
                                            <li className="flex items-center"><span className="text-neon-blue mr-2">▹</span> Product Design</li>
                                        </ul>

                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2">
                                            <div
                                                className="overflow-hidden rounded-md border border-white/10"
                                                onClick={() => setSelectedImage({ src: h1Img, alt: 'Lubeswala - Photo 1' })}
                                            >
                                                <img src={h1Img} alt="Lubeswala 1" className="w-full h-28 md:h-32 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" />
                                            </div>
                                            <div
                                                className="overflow-hidden rounded-md border border-white/10"
                                                onClick={() => setSelectedImage({ src: h2Img, alt: 'Lubeswala - Photo 2' })}
                                            >
                                                <img src={h2Img} alt="Lubeswala 2" className="w-full h-28 md:h-32 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" />
                                            </div>
                                            <div
                                                className="overflow-hidden rounded-md border border-white/10"
                                                onClick={() => setSelectedImage({ src: me1Img, alt: 'Me - Lubeswala' })}
                                            >
                                                <img src={me1Img} alt="Me at Lubeswala" className="w-full h-28 md:h-32 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default Experience;
