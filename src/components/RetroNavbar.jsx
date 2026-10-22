import { retroAudio } from "../utils/retroAudio";

export default function RetroNavbar({
  currentView,
  onChangeView,
  soundOn,
  onToggleSound,
  onOpenPhone,
}) {
  return (
    <header className="sticky top-0 z-40 bg-[#d4d0c8] retro-border-outset px-2 sm:px-4 py-1.5 shadow-md flex items-center justify-between text-xs font-mono select-none">
      {/* Brand & Subtitle */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
        <button
          onClick={() => {
            retroAudio.playClick();
            onChangeView("tv");
          }}
          className="font-pixel font-bold text-xs sm:text-sm text-[#000080] tracking-wide hover:underline cursor-pointer flex items-center gap-1"
        >
          <span>📺</span>
          <span>TEGAR.SYS</span>
        </button>
        <span className="text-zinc-400 hidden md:inline">|</span>
        <span className="text-[10px] sm:text-[11px] text-zinc-600 hidden md:inline font-retro-mono">
          Fullstack & Mobile Developer
        </span>
      </div>

      {/* View Switcher Tabs (Responsive on all screen sizes) */}
      <div className="flex items-center gap-1 sm:gap-1.5">
        <button
          onClick={() => {
            retroAudio.playClick();
            onChangeView("tv");
          }}
          className={`retro-button px-1.5 sm:px-2.5 py-1 text-[11px] sm:text-xs font-bold flex items-center gap-1 ${
            currentView === "tv" ? "bg-[#b0b0b0]" : ""
          }`}
          title="Retro TV Wall View"
        >
          <span>📺</span>
          <span className="hidden sm:inline">TV Room</span>
          <span className="sm:hidden">TV</span>
        </button>

        <button
          onClick={() => {
            retroAudio.playCrtPower();
            onChangeView("desktop");
          }}
          className={`retro-button px-1.5 sm:px-2.5 py-1 text-[11px] sm:text-xs font-bold flex items-center gap-1 ${
            currentView === "desktop" ? "bg-[#b0b0b0]" : ""
          }`}
          title="TegarOS Virtual Desktop"
        >
          <span>💻</span>
          <span className="hidden sm:inline">TegarOS</span>
          <span className="sm:hidden">OS</span>
        </button>

        <button
          onClick={() => {
            retroAudio.playClick();
            onChangeView("classic");
          }}
          className={`retro-button px-1.5 sm:px-2.5 py-1 text-[11px] sm:text-xs font-bold flex items-center gap-1 ${
            currentView === "classic" ? "bg-[#b0b0b0]" : ""
          }`}
          title="Classic Document View"
        >
          <span>📄</span>
          <span className="hidden sm:inline">Doc View</span>
          <span className="sm:hidden">Doc</span>
        </button>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
        <button
          onClick={onToggleSound}
          className="retro-button px-1.5 sm:px-2 py-1 text-[10px] sm:text-[11px]"
          title="Toggle Synthesizer SFX"
        >
          <span className="hidden sm:inline">
            {soundOn ? "🔊 SFX" : "🔇 MUTED"}
          </span>
          <span className="sm:hidden">{soundOn ? "🔊" : "🔇"}</span>
        </button>

        <button
          onClick={() => {
            retroAudio.playRing();
            onOpenPhone();
          }}
          className="retro-button px-2 sm:px-2.5 py-1 font-bold text-[11px] sm:text-xs bg-pink-200 hover:bg-pink-300 flex items-center gap-1"
          title="Pick up telephone / Contact"
        >
          <span>☎</span>
          <span className="hidden sm:inline">Contact</span>
        </button>
      </div>
    </header>
  );
}
