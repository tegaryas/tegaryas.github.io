import { retroAudio } from "../utils/retroAudio";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="w-full max-w-xl max-h-[92vh] flex flex-col bg-[#d4d0c8] retro-border-outset shadow-2xl overflow-hidden font-mono text-sm">
        {/* Title Bar */}
        <div className="bg-[#000080] text-white px-2 py-1 flex items-center justify-between select-none font-bold text-xs shrink-0">
          <div className="flex items-center gap-2 truncate">
            <span>📺</span>
            <span className="truncate">PROJECT VIEWER — {project.title.toUpperCase()}</span>
          </div>
          <button
            onClick={() => {
              retroAudio.playClick();
              onClose();
            }}
            className="w-5 h-5 bg-[#d4d0c8] text-black font-bold flex items-center justify-center retro-border-outset text-xs hover:bg-[#c0c0c0] shrink-0"
          >
            ✕
          </button>
        </div>

        {/* Content (Scrollable for mobile) */}
        <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 text-zinc-900 overflow-y-auto flex-1">
          {/* Screenshot with CRT scanlines preview */}
          <div className="relative rounded overflow-hidden retro-border-inset bg-black">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 sm:h-52 md:h-56 object-cover object-top"
            />
            <div className="absolute top-2 left-2 px-1.5 sm:px-2 py-0.5 bg-black/75 text-emerald-400 font-pixel text-[10px] sm:text-xs border border-emerald-500">
              {project.metrics}
            </div>
            <div className="absolute bottom-2 right-2 px-1.5 sm:px-2 py-0.5 bg-black/75 text-amber-300 font-retro-mono text-[10px] sm:text-[11px] border border-amber-400">
              {project.channelBadge}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-baseline flex-wrap gap-1">
              <h2 className="text-lg sm:text-xl font-bold font-pixel tracking-wide text-zinc-900">
                {project.title}
              </h2>
              <span className="text-xs text-zinc-600 italic">
                {project.tagline}
              </span>
            </div>
            <p className="text-xs sm:text-xs text-zinc-800 mt-2 leading-relaxed bg-white p-2.5 sm:p-3 retro-border-inset">
              {project.desc}
            </p>
          </div>

          {/* Tech Stack Tags */}
          <div>
            <div className="text-[10px] sm:text-[11px] font-bold text-zinc-700 mb-1.5 uppercase tracking-wider">
              TECHNOLOGY SPECIFICATIONS:
            </div>
            <div className="flex flex-wrap gap-1">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-1.5 sm:px-2 py-0.5 bg-[#e4e0d8] border border-zinc-400 font-retro-mono text-[10px] sm:text-[11px] text-zinc-800"
                >
                  [{t}]
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="pt-2 border-t border-zinc-300 flex flex-wrap justify-between items-center gap-2">
            <span className="text-[10px] sm:text-[11px] text-zinc-500 font-retro-mono">
              STATUS: PRODUCTION DEPLOYED
            </span>
            <div className="flex gap-2 w-full sm:w-auto justify-end">
              <button
                onClick={() => {
                  retroAudio.playClick();
                  onClose();
                }}
                className="retro-button px-3 py-1 text-xs"
              >
                Close
              </button>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                onClick={() => retroAudio.playClick()}
                className="retro-button px-3 py-1 text-xs font-bold bg-amber-100 hover:bg-amber-200"
              >
                Launch Live Site ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
