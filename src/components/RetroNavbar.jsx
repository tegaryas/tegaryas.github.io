import { retroAudio } from "../utils/retroAudio";

export default function RetroNavbar({
  currentView,
  onChangeView,
  soundOn,
  onToggleSound,
  onOpenPhone,
}) {
  return (
    <header className="sticky top-0 z-40 bg-[#d4d0c8] retro-border-outset px-3 py-1.5 shadow-md flex items-center justify-between text-xs font-mono select-none">
      {/* Brand */}
      <div className="flex items-center gap-2">
        <span className="font-pixel font-bold text-sm text-[#000080] tracking-wide">
          TEGAR.SYS
        </span>
        <span className="text-zinc-400 hidden sm:inline">|</span>
        <span className="text-[11px] text-zinc-600 hidden sm:inline font-retro-mono">
          Fullstack & Mobile Developer
        </span>
      </div>

      {/* View Switcher Tabs */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={() => {
            retroAudio.playClick();
            onChangeView("tv");
          }}
          className={`retro-button px-2.5 py-1 text-xs font-bold flex items-center gap-1 ${
            currentView === "tv" ? "bg-[#b0b0b0]" : ""
          }`}
          title="Retro TV Wall View"
        >
          <span>📺</span>
          <span>TV Room</span>
        </button>

        <button
          onClick={() => {
            retroAudio.playCrtPower();
            onChangeView("desktop");
          }}
          className={`retro-button px-2.5 py-1 text-xs font-bold flex items-center gap-1 ${
            currentView === "desktop" ? "bg-[#b0b0b0]" : ""
          }`}
          title="TegarOS Virtual Desktop"
        >
          <span>💻</span>
          <span>TegarOS</span>
        </button>

        <button
          onClick={() => {
            retroAudio.playClick();
            onChangeView("classic");
          }}
          className={`retro-button px-2.5 py-1 text-xs font-bold flex items-center gap-1 ${
            currentView === "classic" ? "bg-[#b0b0b0]" : ""
          }`}
          title="Classic Document View"
        >
          <span>📄</span>
          <span>Doc View</span>
        </button>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={onToggleSound}
          className="retro-button px-2 py-1 text-[11px]"
          title="Toggle Synthesizer SFX"
        >
          {soundOn ? "🔊 SFX" : "🔇 MUTED"}
        </button>

        <button
          onClick={() => {
            retroAudio.playRing();
            onOpenPhone();
          }}
          className="retro-button px-2.5 py-1 font-bold text-xs bg-pink-200 hover:bg-pink-300"
          title="Pick up telephone / Contact"
        >
          ☎ Contact
        </button>
      </div>
    </header>
  );
}

