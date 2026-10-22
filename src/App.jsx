import { useState } from "react";
import RetroNavbar from "./components/RetroNavbar";
import RetroTvHero from "./components/RetroTvHero";
import TegarDesktop from "./components/TegarDesktop";
import RetroClassicView from "./components/RetroClassicView";
import RetroPhoneModal from "./components/RetroPhoneModal";
import ProjectModal from "./components/ProjectModal";
import RetroHelpModal from "./components/RetroHelpModal";
import RetroTechModal from "./components/RetroTechModal";
import { retroAudio } from "./utils/retroAudio";

export default function App() {
  const [currentView, setCurrentView] = useState("tv"); // "tv" | "desktop" | "classic"
  const [phoneOpen, setPhoneOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [helpOpen, setHelpOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  const handleToggleSound = () => {
    const isMuted = retroAudio.toggleMute();
    setSoundOn(!isMuted);
    if (!isMuted) retroAudio.playClick();
  };

  return (
    <div className="min-h-screen bg-[#c9c9c9] text-zinc-900 flex flex-col font-mono selection:bg-[#000080] selection:text-white overflow-x-hidden">
      {/* Top Retro Control Navbar */}
      <RetroNavbar
        currentView={currentView}
        onChangeView={setCurrentView}
        soundOn={soundOn}
        onToggleSound={handleToggleSound}
        onOpenPhone={() => setPhoneOpen(true)}
      />

      {/* Main Content Area (Responsive padding) */}
      <main className="flex-1 flex flex-col justify-center items-center p-1 sm:p-4 md:p-6 w-full">
        {currentView === "tv" && (
          <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
            {/* Header info badge */}
            <div className="mb-2 sm:mb-3 text-center px-1">
              <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 bg-[#d4d0c8] retro-border-outset text-[10px] sm:text-xs font-bold text-zinc-800 shadow-xs">
                <span className="sm:hidden">📺 TAP SCREENS OR DECK BUTTONS TO EXPLORE</span>
                <span className="hidden sm:inline">📺 INTERACTIVE CRT WORKSTATION · CLICK SCREENS & OBJECTS TO EXPLORE</span>
              </span>
            </div>

            {/* The Central Retro TV Station Hero */}
            <RetroTvHero
              onEnterOs={() => setCurrentView("desktop")}
              onOpenPhone={() => setPhoneOpen(true)}
              onOpenProject={(proj) => setSelectedProject(proj)}
              onOpenHelp={() => setHelpOpen(true)}
              onOpenTech={() => setTechOpen(true)}
            />
          </div>
        )}

        {currentView === "desktop" && (
          <div className="w-full max-w-5xl mx-auto">
            <TegarDesktop
              onReturnToTv={() => setCurrentView("tv")}
              onOpenProjectDetail={(proj) => setSelectedProject(proj)}
              onOpenPhoneModal={() => setPhoneOpen(true)}
            />
          </div>
        )}

        {currentView === "classic" && (
          <div className="w-full">
            <RetroClassicView
              onOpenProject={(proj) => setSelectedProject(proj)}
              onOpenPhone={() => setPhoneOpen(true)}
            />
          </div>
        )}
      </main>

      {/* Footer Info Strip */}
      <footer className="bg-[#d4d0c8] retro-border-outset px-3 sm:px-4 py-2 text-center text-[10px] sm:text-[11px] text-zinc-600 font-retro-mono flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-1.5 shrink-0">
        <div>
          © {new Date().getFullYear()} Tegar Yasindra · Fullstack & Mobile Engineer
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://github.com/tegaryas"
            target="_blank"
            rel="noreferrer"
            className="hover:underline text-zinc-800"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href="https://linkedin.com/in/tegaryasindra"
            target="_blank"
            rel="noreferrer"
            className="hover:underline text-zinc-800"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href="mailto:tegar.yasindraa@gmail.com"
            className="hover:underline text-zinc-800"
          >
            tegar.yasindraa@gmail.com
          </a>
        </div>
      </footer>

      {/* Global Modals */}
      <RetroPhoneModal
        isOpen={phoneOpen}
        onClose={() => setPhoneOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <RetroHelpModal
        isOpen={helpOpen}
        onClose={() => setHelpOpen(false)}
      />

      <RetroTechModal
        isOpen={techOpen}
        onClose={() => setTechOpen(false)}
      />
    </div>
  );
}
