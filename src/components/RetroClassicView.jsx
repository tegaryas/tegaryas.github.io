import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { retroAudio } from "../utils/retroAudio";

export default function RetroClassicView({ onOpenProject, onOpenPhone }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    retroAudio.playClick();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-10 font-mono text-zinc-900">
      {/* Bio Terminal Header */}
      <section className="bg-[#d4d0c8] retro-border-outset p-4 shadow-xl">
        <div className="bg-[#000080] text-white px-2 py-1 flex items-center justify-between text-xs font-bold mb-3">
          <span>CONSOLE: TEGAR_BIO.TXT</span>
          <span>ONLINE</span>
        </div>

        <div className="bg-white retro-border-inset p-4 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200 pb-2">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold font-pixel text-zinc-900">
                {portfolioData.profile.name}
              </h1>
              <p className="text-xs text-zinc-600 font-retro-mono">
                {portfolioData.profile.title} · {portfolioData.profile.location}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 border border-emerald-300">
                AVAILABLE FOR HIRE
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed pt-1">
            {portfolioData.profile.bio}
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-xs">
            <button
              onClick={() => onOpenPhone()}
              className="retro-button px-3 py-1 font-bold bg-pink-100 hover:bg-pink-200"
            >
              ☎ Call / Message Tegar
            </button>
            <a
              href={portfolioData.profile.calendar}
              target="_blank"
              rel="noreferrer"
              className="retro-button px-3 py-1 font-bold bg-blue-100 hover:bg-blue-200"
            >
              📅 Book Discovery Call
            </a>
            <button
              onClick={() => handleCopy(portfolioData.profile.email)}
              className="retro-button px-3 py-1"
            >
              {copied ? "Copied Email!" : `Email: ${portfolioData.profile.email}`}
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-[#d4d0c8] retro-border-outset p-4 shadow-xl">
        <div className="bg-[#000080] text-white px-2 py-1 flex items-center justify-between text-xs font-bold mb-3">
          <span>DIRECTORY: /PROJECTS</span>
          <span>3 ITEMS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {portfolioData.projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white retro-border-inset p-3 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-32 bg-black overflow-hidden retro-border-inset mb-2.5">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <span className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/80 text-emerald-400 font-pixel text-[10px] border border-emerald-500">
                    {proj.metrics}
                  </span>
                </div>

                <div className="text-base font-bold font-pixel text-zinc-900">
                  {proj.title}
                </div>
                <div className="text-[11px] text-zinc-500 font-retro-mono mb-2">
                  {proj.tagline}
                </div>
                <p className="text-xs text-zinc-700 leading-snug line-clamp-4">
                  {proj.desc}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-zinc-200 flex justify-between items-center gap-2">
                <button
                  onClick={() => onOpenProject(proj)}
                  className="retro-button px-2.5 py-1 text-xs font-bold"
                >
                  Details 🔍
                </button>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="retro-button px-2.5 py-1 text-xs font-bold bg-amber-100"
                >
                  Live Link ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="bg-[#d4d0c8] retro-border-outset p-4 shadow-xl">
        <div className="bg-[#000080] text-white px-2 py-1 flex items-center justify-between text-xs font-bold mb-3">
          <span>LOG: CAREER_EXPERIENCE.DAT</span>
          <span>3 RECORDS</span>
        </div>

        <div className="space-y-3">
          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className="bg-white retro-border-inset p-3 space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <span className="font-bold text-zinc-900 font-pixel text-sm">
                  {exp.role} · {exp.company}
                </span>
                <span className="text-[11px] text-zinc-500 font-retro-mono">
                  {exp.period} · {exp.location}
                </span>
              </div>
              <p className="text-xs text-zinc-700 leading-relaxed pt-1">
                {exp.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Modules */}
      <section className="bg-[#d4d0c8] retro-border-outset p-4 shadow-xl">
        <div className="bg-[#000080] text-white px-2 py-1 flex items-center justify-between text-xs font-bold mb-3">
          <span>HARDWARE & SYSTEM MODULES</span>
          <span>8 CORES</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {portfolioData.techStack.map((tech, idx) => (
            <div
              key={idx}
              className="bg-white retro-border-inset p-2.5 text-center space-y-1"
            >
              <div className="font-bold font-pixel text-zinc-900 text-xs">
                {tech.name}
              </div>
              <div className="text-[10px] text-zinc-500 font-retro-mono">
                {tech.category}
              </div>
              <span className="inline-block px-1.5 py-0.5 bg-amber-50 text-amber-900 border border-amber-300 text-[10px] font-bold">
                {tech.level}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow Process */}
      <section className="bg-[#d4d0c8] retro-border-outset p-4 shadow-xl">
        <div className="bg-[#000080] text-white px-2 py-1 flex items-center justify-between text-xs font-bold mb-3">
          <span>STANDARD OPERATING PROCEDURE</span>
          <span>5 STAGES</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
          {portfolioData.processSteps.map((step) => (
            <div
              key={step.number}
              className="bg-white retro-border-inset p-2.5 flex flex-col justify-between"
            >
              <div>
                <div className="font-bold text-amber-800 font-pixel text-xs">
                  {step.number}
                </div>
                <div className="font-bold text-zinc-900 text-xs font-pixel mt-0.5">
                  {step.title}
                </div>
                <p className="text-[11px] text-zinc-600 mt-1 leading-snug">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

