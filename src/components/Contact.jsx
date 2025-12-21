import React, { useState } from 'react';
import { Mail, Linkedin, Github, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState("idle"); // idle, loading, success, error
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setStatus("loading");

        const formData = new FormData(event.target);

        // IMPORTANT: Replace with your actual Access Key from https://web3forms.com/
        formData.append("access_key", "4fffc5d5-80f4-4a22-be6a-3d0f9ff6dfd4");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                setResult("Message sent successfully!");
                event.target.reset();
            } else {
                console.log("Error", data);
                setStatus("error");
                setResult(data.message);
            }
        } catch (error) {
            setStatus("error");
            setResult("Something went wrong. Please try again later.");
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Contact Info */}
                    <div className="text-left space-y-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 font-display">Let's <span className="text-neon-cyan">Connect</span></h2>
                            <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
                                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="mailto:2200030209cseh@gmail.com"
                                className="inline-flex items-center justify-center px-8 py-4 bg-neon-blue text-white rounded-full font-medium hover:bg-neon-purple transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:scale-105"
                            >
                                <Mail className="mr-3 w-5 h-5" />
                                Say Hello
                            </a>
                            <a
                                href="/resume"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 hover:border-neon-cyan/50 transition-all hover:scale-105 group"
                            >
                                <span className="mr-2">View Resume</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-center text-slate-400">
                                <span className="text-neon-purple mr-3">●</span>
                                <p>Or call me at: <span className="text-neon-cyan font-medium tracking-wide ml-2">+91 7075686837</span></p>
                            </div>
                        </div>

                        <div className="flex gap-6 pt-6">
                            <a href="https://github.com/Karthik564125" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full border border-white/10 hover:border-neon-cyan/50 hover:bg-white/10 text-slate-400 hover:text-neon-cyan transition-all hover:scale-110">
                                <Github size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/karthikeya-bharadwaja-pisupati-804620247/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full border border-white/10 hover:border-neon-purple/50 hover:bg-white/10 text-slate-400 hover:text-neon-purple transition-all hover:scale-110">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-neon-cyan/10 transition-colors duration-700"></div>

                        {status === "success" ? (
                            <div className="relative z-10 flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-neon-cyan/10 rounded-full flex items-center justify-center mb-6 border border-neon-cyan/20">
                                    <CheckCircle2 className="w-10 h-10 text-neon-cyan" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-slate-400 mb-8 max-w-xs">{result}</p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all"
                                >
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            <form className="relative z-10 space-y-6" onSubmit={onSubmit}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 transition-all placeholder:text-slate-600"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 transition-all placeholder:text-slate-600"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 transition-all placeholder:text-slate-600 resize-none"
                                        placeholder="Your message here..."
                                    ></textarea>
                                </div>

                                {status === "error" && (
                                    <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/5 p-3 rounded-lg border border-red-400/20">
                                        <AlertCircle size={16} />
                                        {result}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className={`w-full py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:scale-[1.02] transition-all relative overflow-hidden group/btn flex items-center justify-center ${status === "loading" ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    <span className="relative z-10 flex items-center">
                                        {status === "loading" ? (
                                            <>
                                                <Loader2 className="mr-2 animate-spin" size={20} />
                                                Sending...
                                            </>
                                        ) : "Send Message"}
                                    </span>
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};


export default Contact;
