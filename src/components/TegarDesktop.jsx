import { useState, useEffect } from "react";
import { retroAudio } from "../utils/retroAudio";
import { portfolioData } from "../data/portfolioData";

export default function TegarDesktop({
  onReturnToTv,
  onOpenProjectDetail,
  onOpenPhoneModal,
}) {
  const [openWindows, setOpenWindows] = useState({
    projects: true,
    experience: false,
    techStack: false,
    howIWork: false,
    contact: false,
    about: false,
  });

  const [activeWindow, setActiveWindow] = useState("projects");
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleWindow = (id) => {
    retroAudio.playClick();
    setOpenWindows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    setActiveWindow(id);
    setStartMenuOpen(false);
  };

  const focusWindow = (id) => {
    setActiveWindow(id);
  };

  const closeWindow = (id) => {
    retroAudio.playSwitch();
    setOpenWindows((prev) => ({
      ...prev,
      [id]: false,
    }));
  };

  const desktopIcons = [
    { id: "projects", label: "Projects.exe", icon: "📁" },
    { id: "experience", label: "Resume.doc", icon: "💼" },
    { id: "techStack", label: "TechStack.sys", icon: "⚙️" },
    { id: "howIWork", label: "Process.txt", icon: "📋" },
    { id: "contact", label: "Contact.app", icon: "☎️" },
    { id: "about", label: "TegarBio.txt", icon: "👤" },
  ];

  return (
    <div className="relative w-full min-h-[640px] md:h-[720px] bg-[#008080] retro-border-inset rounded-lg overflow-hidden flex flex-col font-mono text-xs select-none shadow-2xl">
      {/* ========================================================================= */}
      {/* TOP DESKTOP MENU BAR */}
      {/* ========================================================================= */}
      <div className="h-7 bg-[#d4d0c8] retro-border-outset px-2 flex items-center justify-between z-40 text-zinc-900 text-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              retroAudio.playClick();
              setStartMenuOpen(!startMenuOpen);
            }}
            className="retro-button px-2 py-0.5 font-bold flex items-center gap-1 bg-[#c0c0c0]"
          >
            <span className="text-sm">🪟</span>
            <span className="font-pixel">Start</span>
          </button>

          <span className="text-zinc-400">|</span>

          <button
            onClick={() => {
              retroAudio.playClick();
              onReturnToTv();
            }}
            className="retro-button px-2 py-0.5 flex items-center gap-1 text-[11px]"
          >
            <span>📺</span>
            <span>Switch to TV Room</span>
          </button>
        </div>

        <div className="flex items-center gap-3 font-retro-mono text-[11px]">
          <span className="hidden sm:inline text-zinc-600">
            TegarOS 98 · v2.0
          </span>
          <div className="px-2 py-0.5 bg-white retro-border-inset font-bold">
            {timeStr || "12:00"}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* START MENU POPUP */}
      {/* ========================================================================= */}
      {startMenuOpen && (
        <div className="absolute top-7 left-2 w-56 bg-[#d4d0c8] retro-border-outset shadow-2xl z-50 p-1 flex">
          {/* Side Banner */}
          <div className="w-7 bg-[#000080] text-white flex items-end justify-center py-3 font-pixel text-xs font-bold tracking-widest uppercase [writing-mode:vertical-rl] rotate-180">
            TEGAR OS
          </div>

          {/* Menu Items */}
          <div className="flex-1 pl-1 py-1 space-y-0.5">
            {desktopIcons.map((item) => (
              <button
                key={item.id}
                onClick={() => toggleWindow(item.id)}
                className="w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2 text-xs transition-colors"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}

            <div className="my-1 border-t border-zinc-400" />

            <button
              onClick={() => {
                retroAudio.playRing();
                onOpenPhoneModal();
                setStartMenuOpen(false);
              }}
              className="w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2 text-xs"
            >
              <span>📞</span>
              <span>Direct Hotline</span>
            </button>

            <button
              onClick={() => {
                retroAudio.playSwitch();
                onReturnToTv();
              }}
              className="w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2 text-xs"
            >
              <span>🚪</span>
              <span>Exit to TV Station</span>
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* DESKTOP WORKSPACE AREA */}
      {/* ========================================================================= */}
      <div className="relative flex-1 p-4 overflow-hidden">
        {/* Desktop Icons Grid */}
        <div className="grid grid-flow-col grid-rows-4 gap-4 w-fit z-10 relative">
          {desktopIcons.map((item) => (
            <button
              key={item.id}
              onClick={() => toggleWindow(item.id)}
              className="flex flex-col items-center w-20 p-2 text-white hover:bg-white/10 rounded cursor-pointer group text-center focus:outline-dotted focus:outline-1"
            >
              <span className="text-3xl mb-1 group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <span className="font-retro-mono text-[11px] leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] bg-black/40 px-1 py-0.5 rounded-xs">
                {item.label}
              </span>
            </button>
          ))}

          {/* Quick TV Link Icon */}
          <button
            onClick={() => {
              retroAudio.playClick();
              onReturnToTv();
            }}
            className="flex flex-col items-center w-20 p-2 text-white hover:bg-white/10 rounded cursor-pointer group text-center"
          >
            <span className="text-3xl mb-1 group-hover:scale-110 transition-transform">
              📺
            </span>
            <span className="font-retro-mono text-[11px] leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] bg-black/40 px-1 py-0.5 rounded-xs">
              TV_Room.lnk
            </span>
          </button>
        </div>

        {/* ===================================================================== */}
        {/* WINDOW 1: PROJECTS.EXE */}
        {/* ===================================================================== */}
        {openWindows.projects && (
          <div
            onClick={() => focusWindow("projects")}
            className={`absolute top-6 left-6 right-6 md:left-24 md:right-16 max-h-[85%] bg-[#d4d0c8] retro-border-outset shadow-2xl flex flex-col ${
              activeWindow === "projects" ? "z-30" : "z-20 opacity-95"
            }`}
          >
            {/* Title Bar */}
            <div
              className={`px-2 py-1 flex items-center justify-between text-white font-bold text-xs select-none ${
                activeWindow === "projects" ? "bg-[#000080]" : "bg-[#808080]"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span>📁</span>
                <span>PROJECTS.EXE — Featured Works</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => closeWindow("projects")}
                  className="w-4 h-4 bg-[#d4d0c8] text-black text-[10px] flex items-center justify-center retro-border-outset"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-3 overflow-y-auto space-y-3 bg-[#e8e4dc]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {portfolioData.projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="bg-white retro-border-outset p-2 flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-28 bg-black overflow-hidden retro-border-inset mb-2">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-full h-full object-cover object-top"
                        />
                        <span className="absolute bottom-1 right-1 px-1 bg-black/75 text-emerald-400 font-retro-mono text-[9px]">
                          {proj.metrics}
                        </span>
                      </div>

                      <div className="font-bold text-sm text-zinc-900 font-pixel">
                        {proj.title}
                      </div>
                      <div className="text-[10px] text-zinc-500 font-retro-mono mb-1">
                        {proj.tagline}
                      </div>
                      <p className="text-[11px] text-zinc-700 leading-snug line-clamp-3">
                        {proj.desc}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-zinc-200 flex justify-between items-center">
                      <button
                        onClick={() => onOpenProjectDetail(proj)}
                        className="retro-button px-2 py-1 text-[10px] font-bold"
                      >
                        Inspect 🔍
                      </button>
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noreferrer"
                        className="retro-button px-2 py-1 text-[10px] font-bold bg-amber-100"
                      >
                        Live Site ↗
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* WINDOW 2: RESUME.DOC (EXPERIENCE) */}
        {/* ===================================================================== */}
        {openWindows.experience && (
          <div
            onClick={() => focusWindow("experience")}
            className={`absolute top-12 left-10 right-10 md:left-32 md:right-24 max-h-[80%] bg-[#d4d0c8] retro-border-outset shadow-2xl flex flex-col ${
              activeWindow === "experience" ? "z-30" : "z-20 opacity-95"
            }`}
          >
            <div
              className={`px-2 py-1 flex items-center justify-between text-white font-bold text-xs select-none ${
                activeWindow === "experience" ? "bg-[#000080]" : "bg-[#808080]"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span>💼</span>
                <span>RESUME.DOC — Career Timeline</span>
              </div>
              <button
                onClick={() => closeWindow("experience")}
                className="w-4 h-4 bg-[#d4d0c8] text-black text-[10px] flex items-center justify-center retro-border-outset"
              >
                ✕
              </button>
            </div>

            <div className="p-4 overflow-y-auto space-y-3 bg-[#e8e4dc]">
              {portfolioData.experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-white retro-border-inset space-y-1"
                >
                  <div className="flex justify-between items-baseline flex-wrap">
                    <span className="font-bold text-zinc-900 font-pixel text-sm">
                      {exp.role} · {exp.company}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-retro-mono">
                      {exp.period} · {exp.location}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-700 leading-relaxed">
                    {exp.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* WINDOW 3: TECHSTACK.SYS */}
        {/* ===================================================================== */}
        {openWindows.techStack && (
          <div
            onClick={() => focusWindow("techStack")}
            className={`absolute top-16 left-8 right-8 md:left-36 md:right-32 max-h-[80%] bg-[#d4d0c8] retro-border-outset shadow-2xl flex flex-col ${
              activeWindow === "techStack" ? "z-30" : "z-20 opacity-95"
            }`}
          >
            <div
              className={`px-2 py-1 flex items-center justify-between text-white font-bold text-xs select-none ${
                activeWindow === "techStack" ? "bg-[#000080]" : "bg-[#808080]"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span>⚙️</span>
                <span>TECHSTACK.SYS — System Components</span>
              </div>
              <button
                onClick={() => closeWindow("techStack")}
                className="w-4 h-4 bg-[#d4d0c8] text-black text-[10px] flex items-center justify-center retro-border-outset"
              >
                ✕
              </button>
            </div>

            <div className="p-4 overflow-y-auto space-y-3 bg-[#e8e4dc]">
              <div className="text-xs font-bold text-zinc-800 font-retro-mono">
                INSTALLED HARDWARE & SOFTWARE MODULES:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {portfolioData.techStack.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2 bg-white retro-border-outset text-center space-y-0.5"
                  >
                    <div className="font-bold font-pixel text-zinc-900 text-xs">
                      {item.name}
                    </div>
                    <div className="text-[10px] text-zinc-500 font-retro-mono">
                      {item.category}
                    </div>
                    <span className="inline-block px-1.5 py-0.5 bg-emerald-100 text-emerald-800 text-[9px] font-bold rounded-xs">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* WINDOW 4: PROCESS.TXT (HOW I WORK) */}
        {/* ===================================================================== */}
        {openWindows.howIWork && (
          <div
            onClick={() => focusWindow("howIWork")}
            className={`absolute top-20 left-10 right-10 md:left-40 md:right-36 max-h-[80%] bg-[#d4d0c8] retro-border-outset shadow-2xl flex flex-col ${
              activeWindow === "howIWork" ? "z-30" : "z-20 opacity-95"
            }`}
          >
            <div
              className={`px-2 py-1 flex items-center justify-between text-white font-bold text-xs select-none ${
                activeWindow === "howIWork" ? "bg-[#000080]" : "bg-[#808080]"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span>📋</span>
                <span>PROCESS.TXT — 5-Stage Engineering Workflow</span>
              </div>
              <button
                onClick={() => closeWindow("howIWork")}
                className="w-4 h-4 bg-[#d4d0c8] text-black text-[10px] flex items-center justify-center retro-border-outset"
              >
                ✕
              </button>
            </div>

            <div className="p-4 overflow-y-auto space-y-2 bg-[#e8e4dc]">
              {portfolioData.processSteps.map((step) => (
                <div key={step.number} className="p-2.5 bg-white retro-border-inset">
                  <div className="font-bold text-zinc-900 font-pixel text-xs">
                    {step.number} · {step.title}
                  </div>
                  <p className="text-[11px] text-zinc-700 mt-1 leading-snug">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* WINDOW 5: ABOUT BIO */}
        {/* ===================================================================== */}
        {openWindows.about && (
          <div
            onClick={() => focusWindow("about")}
            className={`absolute top-14 left-8 right-8 md:left-28 md:right-28 max-h-[80%] bg-[#d4d0c8] retro-border-outset shadow-2xl flex flex-col ${
              activeWindow === "about" ? "z-30" : "z-20 opacity-95"
            }`}
          >
            <div
              className={`px-2 py-1 flex items-center justify-between text-white font-bold text-xs select-none ${
                activeWindow === "about" ? "bg-[#000080]" : "bg-[#808080]"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span>👤</span>
                <span>TEGARBIO.TXT — Personal Profile</span>
              </div>
              <button
                onClick={() => closeWindow("about")}
                className="w-4 h-4 bg-[#d4d0c8] text-black text-[10px] flex items-center justify-center retro-border-outset"
              >
                ✕
              </button>
            </div>

            <div className="p-4 overflow-y-auto bg-white retro-border-inset m-2 space-y-2">
              <div className="font-bold font-pixel text-base text-zinc-900">
                Tegar Yasindra
              </div>
              <div className="text-xs text-zinc-600 font-retro-mono">
                {portfolioData.profile.title} · {portfolioData.profile.location}
              </div>
              <p className="text-xs text-zinc-800 leading-relaxed pt-2 border-t border-zinc-200">
                {portfolioData.profile.bio}
              </p>
              <div className="p-2 bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs">
                ★ {portfolioData.profile.status}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* BOTTOM TASKBAR */}
      {/* ========================================================================= */}
      <div className="h-8 bg-[#d4d0c8] retro-border-outset px-2 flex items-center gap-2 z-40 text-xs">
        <button
          onClick={() => setStartMenuOpen(!startMenuOpen)}
          className="retro-button px-2.5 py-1 font-bold flex items-center gap-1 bg-[#c0c0c0]"
        >
          <span>🪟</span>
          <span className="font-pixel">Start</span>
        </button>

        {/* Open Windows Buttons */}
        <div className="flex items-center gap-1 flex-1 overflow-x-auto">
          {Object.entries(openWindows).map(([key, isOpen]) => {
            if (!isOpen) return null;
            return (
              <button
                key={key}
                onClick={() => focusWindow(key)}
                className={`retro-button px-2 py-0.5 text-[11px] flex items-center gap-1 truncate max-w-[130px] ${
                  activeWindow === key ? "bg-[#b0b0b0] font-bold" : ""
                }`}
              >
                <span>{key === "projects" ? "📁" : key === "experience" ? "💼" : "📄"}</span>
                <span className="capitalize">{key}</span>
              </button>
            );
          })}
        </div>

        <button
          onClick={() => {
            retroAudio.playRing();
            onOpenPhoneModal();
          }}
          className="retro-button px-2 py-0.5 text-[11px] font-bold bg-pink-100 hover:bg-pink-200"
        >
          ☎ Call Tegar
        </button>
      </div>
    </div>
  );
}

