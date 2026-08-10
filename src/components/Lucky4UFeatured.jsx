import React from "react";
import { motion } from "framer-motion";
import holdingsPreview from "../assets/l4uh.jpg";
import avocadoPreview from "../assets/l4ua.jpg";
import tradersPreview from "../assets/l4ut.jpg";
import eximsPreview from "../assets/l4ue.png";

const CompactCard = ({ title, short, link }) => (
  <div className="glass-card p-4 rounded-lg border border-white/10 bg-white/5 shadow-sm flex items-center justify-between gap-4">
    <div>
      <h5 className="text-lg font-semibold text-slate-100">{title}</h5>
      <p className="text-slate-300 text-sm mt-1">{short}</p>
    </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-3 py-2 bg-white/5 text-white rounded-md border border-white/10 hover:bg-white/10 transition-colors text-sm shrink-0"
      >
        Visit Website
      </a>
  </div>
);

const GridTile = ({ src, alt, label }) => (
  <motion.div
    whileHover={{ scale: 1.04, zIndex: 10 }}
    transition={{ duration: 0.25, ease: "easeOut" }}
    className="relative rounded-lg overflow-hidden border border-white/10 shadow-lg aspect-[4/3] group"
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover object-top"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-250" />
    <span className="absolute bottom-2 left-2 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-250">
      {label}
    </span>
  </motion.div>
);

const Lucky4UFeatured = () => {
  const sites = [
    {
      title: "Lucky4U Holdings",
      short: "Corporate business website.",
      link: "https://www.lucky4u-holdings.com/",
    },
    {
      title: "Lucky4U Avocado",
      short: "Premium avocado company website.",
      link: "https://www.lucky4u-avocado.com/",
    },
    {
      title: "Lucky4U Traders",
      short: "International trading company website.",
      link: "https://www.lucky4u-traders.com/",
    },
    {
      title: "Lucky4U Exims",
      short: "Botanical extraction & export website.",
      link: "https://lucky4u-exims.vercel.app/",
    },
  ];

  const previews = [
    { src: holdingsPreview, alt: "Lucky4U Holdings", label: "Holdings" },
    { src: avocadoPreview, alt: "Lucky4U Avocado", label: "Avocado" },
    { src: tradersPreview, alt: "Lucky4U Traders", label: "Traders" },
    { src: eximsPreview, alt: "Lucky4U Exims", label: "Exims" },
  ];

  return (
    <div className="glass-card p-6 rounded-xl overflow-hidden hover:border-neon-cyan/50 transition-all">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* LEFT */}
        <div className="md:col-span-7">
          <div className="flex items-center gap-4 mb-3">
            <h4 className="text-xl font-bold text-slate-100">
              Lucky4U Group Websites
            </h4>
            <span className="text-neon-cyan font-medium">2026</span>
          </div>

          <p className="text-slate-300 mb-6 max-w-xl">
            Designed and delivered four premium corporate websites for the
            Lucky4U group. Built with React, TypeScript, Vite and Tailwind —
            responsive, performant and production-ready.
          </p>

          <div className="flex flex-col gap-3">
            {sites.map((site) => (
              <CompactCard key={site.title} {...site} />
            ))}
          </div>
        </div>

        {/* RIGHT — tight 2x2 collage grid */}
        <div className="md:col-span-5">
          <div className="grid grid-cols-2 gap-2 p-2 rounded-xl bg-white/5 border border-white/10">
            {previews.map((p) => (
              <GridTile key={p.label} {...p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lucky4UFeatured;