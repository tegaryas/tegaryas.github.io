import { retroAudio } from "../utils/retroAudio";
import { portfolioData } from "../data/portfolioData";

export default function RetroTechModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="w-full max-w-lg bg-[#d4d0c8] retro-border-outset shadow-2xl overflow-hidden font-mono text-xs">
        {/* Title Bar */}
        <div className="bg-[#000080] text-white px-2 py-1 flex items-center justify-between select-none font-bold">
          <div className="flex items-center gap-1.5">
            <span>⚙️</span>
            <span>SYSTEM HARDWARE & TECH STACK</span>
          </div>
          <button
            onClick={() => {
              retroAudio.playClick();
              onClose();
            }}
            className="w-5 h-5 bg-[#d4d0c8] text-black font-bold flex items-center justify-center retro-border-outset text-xs hover:bg-[#c0c0c0]"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3 text-zinc-900 bg-[#e8e4dc]">
          <div className="text-[11px] font-bold text-zinc-700 font-retro-mono">
            CORE CAPABILITIES & ENGINEERING ARCHITECTURE:
          </div>

          <div className="grid grid-cols-2 gap-2">
            {portfolioData.techStack.map((tech, idx) => (
              <div
                key={idx}
                className="p-2.5 bg-white retro-border-inset flex flex-col justify-between"
              >
                <div>
                  <div className="font-bold font-pixel text-zinc-900 text-xs">
                    {tech.name}
                  </div>
                  <div className="text-[10px] text-zinc-500 font-retro-mono">
                    Category: {tech.category}
                  </div>
                </div>
                <div className="mt-2 text-right">
                  <span className="px-1.5 py-0.5 bg-amber-100 text-amber-900 text-[10px] font-bold rounded-xs border border-amber-300">
                    {tech.level}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-zinc-300 flex justify-end">
            <button
              onClick={() => {
                retroAudio.playClick();
                onClose();
              }}
              className="retro-button px-4 py-1 text-xs font-bold"
            >
              Close Inspector
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

