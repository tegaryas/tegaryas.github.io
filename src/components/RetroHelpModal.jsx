import { retroAudio } from "../utils/retroAudio";

export default function RetroHelpModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="w-full max-w-md max-h-[92vh] flex flex-col bg-[#d4d0c8] retro-border-outset shadow-2xl overflow-hidden font-mono text-xs">
        {/* Title Bar */}
        <div className="bg-[#000080] text-white px-2 py-1 flex items-center justify-between select-none font-bold shrink-0">
          <div className="flex items-center gap-1.5">
            <span>❓</span>
            <span>STATION MANUAL & GUIDE</span>
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
        <div className="p-3 sm:p-4 space-y-3 text-zinc-900 bg-[#e8e4dc] overflow-y-auto flex-1">
          <div className="p-2 sm:p-2.5 bg-white retro-border-inset">
            <div className="font-bold text-xs sm:text-sm text-zinc-900 font-pixel">
              Tegar Yasindra Workstation
            </div>
            <div className="text-[10px] sm:text-[11px] text-zinc-600 font-retro-mono mt-0.5">
              Fullstack (Go/Python) & Mobile (Flutter) Engineer
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="font-bold text-zinc-800 font-retro-mono text-[11px]">
              STATION CONTROLS GUIDE:
            </div>
            <ul className="space-y-1.5 text-[10px] sm:text-[11px] text-zinc-700 bg-white p-2.5 retro-border-inset">
              <li>
                📺 <strong className="text-zinc-900">Main Center TV:</strong> Tap
                &ldquo;CLICK TO ENTER&rdquo; or the Station Deck button to launch TegarOS virtual desktop.
              </li>
              <li>
                ☎ <strong className="text-zinc-900">Telephone / Pink Note:</strong> Tap
                the phone or &ldquo;pick up!&rdquo; note to call/message Tegar directly.
              </li>
              <li>
                🎛 <strong className="text-zinc-900">TV Remote / Deck:</strong> Tap buttons
                to cycle channels, power off CRT screens, or mute retro audio.
              </li>
              <li>
                📁 <strong className="text-zinc-900">Bottom 3 TVs:</strong> Direct
                inspectors for Sribuu, Fintelite, and Anycheck.
              </li>
            </ul>
          </div>

          <div className="pt-2 border-t border-zinc-300 flex justify-between items-center">
            <span className="text-[10px] text-zinc-500 font-retro-mono">
              Built with React & Vite
            </span>
            <button
              onClick={() => {
                retroAudio.playClick();
                onClose();
              }}
              className="retro-button px-3 sm:px-4 py-1 font-bold text-xs"
            >
              Acknowledge ✓
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
