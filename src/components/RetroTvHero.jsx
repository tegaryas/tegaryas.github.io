import { useState } from "react";
import { retroAudio } from "../utils/retroAudio";
import { portfolioData } from "../data/portfolioData";

export default function RetroTvHero({
  onEnterOs,
  onOpenPhone,
  onOpenProject,
  onOpenHelp,
  onOpenTech,
}) {
  const [powerOn, setPowerOn] = useState(true);
  const [channel, setChannel] = useState(1);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [topBadgeHover, setTopBadgeHover] = useState(false);

  // Toggle TV power
  const handlePowerToggle = () => {
    retroAudio.playCrtPower();
    setPowerOn((prev) => !prev);
  };

  // Change channels
  const handleChannelCycle = () => {
    retroAudio.playStatic();
    setChannel((prev) => (prev % 3) + 1);
  };

  // Sound toggle
  const handleSoundToggle = () => {
    const isMuted = retroAudio.toggleMute();
    setSoundEnabled(!isMuted);
    if (!isMuted) retroAudio.playClick();
  };

  return (
    <div className="relative w-full max-w-[1024px] mx-auto select-none px-1 sm:px-2">
      {/* 4:3 Aspect Ratio Container matching 1024x768 */}
      <div className="relative w-full aspect-[1024/768] overflow-hidden rounded-lg sm:rounded-xl shadow-[0_12px_36px_rgba(0,0,0,0.28)] bg-[#bebebe]">
        {/* The Base Retro TV Artwork Image */}
        <img
          src="/images/retro-tvs.png"
          alt="Retro TV Wall & Workstation"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Global CRT Power-off Blackout Overlay if turned off */}
        {!powerOn && (
          <div className="absolute inset-0 bg-black/95 z-30 flex flex-col items-center justify-center font-retro-mono text-xs text-zinc-500 animate-in fade-in duration-300">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping mb-3" />
            <div className="tracking-widest uppercase text-center px-4 space-y-2">
              <div className="text-[11px] sm:text-xs text-zinc-400">
                [ ALL CRT MONITORS POWERED DOWN ]
              </div>
              <button
                onClick={handlePowerToggle}
                className="retro-button px-3 py-1 font-bold text-zinc-900 bg-amber-200 hover:bg-amber-300 text-[10px] sm:text-xs"
              >
                PRESS POWER ON REMOTE TO REBOOT ⚡
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* HOTSPOT 1: MAIN CRT TV (WELCOME TO TEGAR OS) */}
        {/* Left: 23.44%, Top: 42.06%, Width: 18.95%, Height: 18.23% */}
        {/* ========================================================================= */}
        <div
          className={`absolute left-[23.44%] top-[42.06%] w-[18.95%] h-[18.23%] z-10 overflow-hidden cursor-pointer group rounded-[8%] transition-transform hover:scale-[1.02] active:scale-[0.98] ${
            !powerOn ? "opacity-0" : "opacity-100"
          }`}
          onClick={() => {
            retroAudio.playCrtPower();
            onEnterOs();
          }}
          title="Click to Enter TegarOS Desktop"
        >
          {/* Screen Overlay with Scanlines */}
          <div className="absolute inset-0 bg-[#e0d7c0] flex flex-col items-center justify-center p-0.5 sm:p-1 text-center font-retro-mono">
            {/* Scanlines Effect */}
            <div className="absolute inset-0 crt-scanlines opacity-50 pointer-events-none" />

            {/* Glowing Phosphor Inner Shadow */}
            <div className="absolute inset-0 rounded-[8%] shadow-[inset_0_0_8px_rgba(0,0,0,0.4)] pointer-events-none" />

            <div className="relative z-10 w-full px-0.5 space-y-0.5">
              <div className="font-pixel text-[8px] sm:text-[11px] md:text-[14px] lg:text-[15px] font-bold text-[#1a1915] tracking-widest leading-none drop-shadow-xs">
                WELCOME
              </div>
              <div className="text-[5px] sm:text-[7px] md:text-[9px] lg:text-[10px] text-[#4d493f] tracking-wider uppercase font-semibold leading-none">
                TO TEGAR OS
              </div>

              {/* Enter Button */}
              <div className="my-0.5 md:my-1 inline-flex items-center gap-0.5 sm:gap-1 px-1 sm:px-2 py-0.5 bg-[#827d6d] text-[#fffef0] font-pixel text-[5px] sm:text-[8px] md:text-[10px] lg:text-[11px] font-bold tracking-wider rounded-xs shadow-xs group-hover:bg-[#1a1915] group-hover:text-amber-300 transition-colors animate-pulse">
                <span>▶</span>
                <span>CLICK TO ENTER</span>
              </div>

              <div className="text-[4px] sm:text-[6px] md:text-[8px] text-[#6d685c] font-vt uppercase tracking-tight leading-none">
                FULLSTACK & MOBILE
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HOTSPOT 2: TOP SMALL TV ("LOOKING FOR A JOB / OPEN FOR ROLES") */}
        {/* Left: 28.32%, Top: 32.42%, Width: 4.98%, Height: 5.47% */}
        {/* ========================================================================= */}
        <div
          className="absolute left-[28.32%] top-[32.42%] w-[4.98%] h-[5.47%] z-10 cursor-pointer rounded-full group"
          onClick={() => {
            retroAudio.playClick();
            setTopBadgeHover(!topBadgeHover);
          }}
          onMouseEnter={() => setTopBadgeHover(true)}
          onMouseLeave={() => setTopBadgeHover(false)}
          title="Status: Available for hire"
        >
          {/* Expanded mobile tap area */}
          <div className="absolute -inset-2 sm:inset-0 rounded-full" />

          {/* Pulsing glow */}
          <span className="absolute -top-1 -right-1 w-2 sm:w-2.5 h-2 sm:h-2.5 bg-emerald-400 rounded-full animate-ping opacity-75" />

          {/* Tooltip popup */}
          {topBadgeHover && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 sm:mb-2 w-40 sm:w-48 p-1.5 sm:p-2 bg-[#d4d0c8] text-zinc-900 font-retro-mono text-[9px] sm:text-[10px] retro-border-outset shadow-xl z-40 pointer-events-none">
              <div className="font-bold text-emerald-800 font-pixel">
                STATUS: AVAILABLE
              </div>
              <div className="text-[8px] sm:text-[9px] mt-0.5 leading-tight">
                Fullstack & Mobile Engineer (Go, Python, Flutter, React)
              </div>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* HOTSPOT 3: MID TOP TV (TECH STACK STREAM) */}
        {/* Left: 46.88%, Top: 32.94%, Width: 13.57%, Height: 13.80% */}
        {/* ========================================================================= */}
        <div
          className={`absolute left-[46.88%] top-[32.94%] w-[13.57%] h-[13.80%] z-10 overflow-hidden cursor-pointer group rounded-xs sm:rounded-sm transition-transform hover:scale-[1.02] active:scale-[0.98] ${
            !powerOn ? "opacity-0" : "opacity-100"
          }`}
          onClick={() => {
            retroAudio.playSwitch();
            onOpenTech();
          }}
          title="Click to view Tech Stack"
        >
          <div className="absolute inset-0 crt-scanlines opacity-40 pointer-events-none z-10" />

          {/* Live Badge */}
          <div className="absolute top-0.5 sm:top-1 left-0.5 sm:left-1 z-20 px-0.5 sm:px-1 py-0.2 sm:py-0.5 bg-black/70 text-[5px] sm:text-[7px] md:text-[9px] text-amber-300 font-pixel uppercase tracking-widest border border-amber-400/40">
            CH {channel} · STACK
          </div>

          <div className="absolute bottom-0.5 sm:bottom-1 right-0.5 sm:right-1 z-20 px-0.5 sm:px-1 py-0.2 bg-black/75 text-[5px] sm:text-[6px] md:text-[8px] text-emerald-400 font-retro-mono">
            {channel === 1
              ? "GO · FLUTTER"
              : channel === 2
              ? "PYTHON · AI"
              : "REACT · DOCKER"}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HOTSPOT 4: MID BOTTOM TV (SMPTE COLOR BARS) */}
        {/* Left: 46.88%, Top: 46.88%, Width: 15.6%, Height: 14.8% */}
        {/* ========================================================================= */}
        <div
          className={`absolute left-[46.88%] top-[46.88%] w-[15.6%] h-[14.8%] z-10 overflow-hidden cursor-pointer group ${
            !powerOn ? "opacity-0" : "opacity-100"
          }`}
          onClick={() => {
            retroAudio.playStatic();
            handleChannelCycle();
          }}
          title="Click to cycle TV channel / signal"
        >
          <div className="absolute inset-0 crt-scanlines opacity-50 pointer-events-none z-10" />
          <div className="absolute top-0.5 sm:top-1 right-0.5 sm:right-1 z-20 px-0.5 sm:px-1 bg-black/80 text-[5px] sm:text-[7px] text-amber-300 font-retro-mono">
            SIGNAL: OK
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HOTSPOT 5: BOTTOM LEFT TV (PROJECT 1: SRIBUU) */}
        {/* Left: 17.09%, Top: 62.50%, Width: 16.02%, Height: 14.19% */}
        {/* ========================================================================= */}
        <div
          className={`absolute left-[17.09%] top-[62.50%] w-[16.02%] h-[14.19%] z-10 cursor-pointer overflow-hidden group rounded-xs sm:rounded-sm active:scale-[0.98] ${
            !powerOn ? "opacity-0" : "opacity-100"
          }`}
          onClick={() => {
            retroAudio.playClick();
            onOpenProject(portfolioData.projects[0]);
          }}
          title="View Sribuu Project (500K+ Users)"
        >
          <div className="absolute inset-0 crt-scanlines opacity-40 pointer-events-none z-10" />
          <div className="absolute bottom-0.5 sm:bottom-1 left-0.5 sm:left-1 z-20 px-0.5 sm:px-1 py-0.2 sm:py-0.5 bg-black/80 text-[5px] sm:text-[7px] md:text-[9px] text-cyan-300 font-pixel tracking-wide border border-cyan-400 group-hover:bg-cyan-900 transition-colors">
            ▶ 01 · SRIBUU
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HOTSPOT 6: BOTTOM MID TV (PROJECT 2: FINTELITE) */}
        {/* Left: 35.64%, Top: 62.50%, Width: 15.04%, Height: 14.19% */}
        {/* ========================================================================= */}
        <div
          className={`absolute left-[35.64%] top-[62.50%] w-[15.04%] h-[14.19%] z-10 cursor-pointer overflow-hidden group rounded-xs sm:rounded-sm active:scale-[0.98] ${
            !powerOn ? "opacity-0" : "opacity-100"
          }`}
          onClick={() => {
            retroAudio.playClick();
            onOpenProject(portfolioData.projects[1]);
          }}
          title="View Fintelite Project (AI & OCR)"
        >
          <div className="absolute inset-0 crt-scanlines opacity-40 pointer-events-none z-10" />
          <div className="absolute bottom-0.5 sm:bottom-1 left-0.5 sm:left-1 z-20 px-0.5 sm:px-1 py-0.2 sm:py-0.5 bg-black/80 text-[5px] sm:text-[7px] md:text-[9px] text-amber-300 font-pixel tracking-wide border border-amber-400 group-hover:bg-amber-900 transition-colors">
            ▶ 02 · FINTELITE
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HOTSPOT 7: BOTTOM RIGHT TV (PROJECT 3: ANYCHECK) */}
        {/* Left: 52.73%, Top: 62.50%, Width: 17.48%, Height: 14.19% */}
        {/* ========================================================================= */}
        <div
          className={`absolute left-[52.73%] top-[62.50%] w-[17.48%] h-[14.19%] z-10 cursor-pointer overflow-hidden group rounded-xs sm:rounded-sm active:scale-[0.98] ${
            !powerOn ? "opacity-0" : "opacity-100"
          }`}
          onClick={() => {
            retroAudio.playClick();
            onOpenProject(portfolioData.projects[2]);
          }}
          title="View Anycheck Project (Document Verification)"
        >
          <div className="absolute inset-0 crt-scanlines opacity-40 pointer-events-none z-10" />
          <div className="absolute bottom-0.5 sm:bottom-1 left-0.5 sm:left-1 z-20 px-0.5 sm:px-1 py-0.2 sm:py-0.5 bg-black/80 text-[5px] sm:text-[7px] md:text-[9px] text-emerald-300 font-pixel tracking-wide border border-emerald-400 group-hover:bg-emerald-900 transition-colors">
            ▶ 03 · ANYCHECK
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HOTSPOT 8: TELEPHONE & PINK NOTE ("▶ pick up!") */}
        {/* Pink Tag: Left: 72.85%, Top: 37.50%, Width: 9.57%, Height: 4.82% */}
        {/* Phone Body: Left: 65.43%, Top: 37.63%, Width: 8.2%, Height: 24.7% */}
        {/* ========================================================================= */}
        <div
          className="absolute left-[65.43%] top-[34.00%] w-[18.00%] h-[28.00%] z-20 cursor-pointer group active:scale-[0.98]"
          onClick={() => {
            retroAudio.playRing();
            onOpenPhone();
          }}
          title="Pick up telephone to contact Tegar"
        >
          {/* Animated bouncy pink note indicator */}
          <div className="absolute right-[5%] top-[10%] transform rotate-[2deg] group-hover:rotate-0 transition-transform group-hover:scale-105">
            <span className="relative flex h-2 sm:h-3 w-2 sm:w-3 -top-1 -right-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HOTSPOT 9: TV REMOTE CONTROL */}
        {/* Left: 80.27%, Top: 50.65%, Width: 5.57%, Height: 11.46% */}
        {/* ========================================================================= */}
        <div
          className="absolute left-[79.00%] top-[49.50%] w-[8.00%] h-[14.00%] z-20 cursor-pointer"
          onClick={handleChannelCycle}
          title="TV Remote: Click to cycle channels"
        >
          {/* Top buttons row */}
          <div className="w-full h-full flex flex-col justify-between p-0.5">
            <div className="flex justify-between items-center h-[35%]">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePowerToggle();
                }}
                className="w-1/3 h-full opacity-0 hover:opacity-20 active:opacity-30 bg-white rounded-xs"
                title="TV Power OFF/ON"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleChannelCycle();
                }}
                className="w-1/3 h-full opacity-0 hover:opacity-20 active:opacity-30 bg-white rounded-xs"
                title="Cycle Channel"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSoundToggle();
                }}
                className="w-1/3 h-full opacity-0 hover:opacity-20 active:opacity-30 bg-white rounded-xs"
                title={soundEnabled ? "Mute Retro SFX" : "Unmute Retro SFX"}
              />
            </div>
            <div className="h-[60%] opacity-0 hover:opacity-10 bg-white" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HOTSPOT 10: QUESTION MARK HELP BUTTON */}
        {/* Left: 94.82%, Top: 79.43%, Width: 4.30%, Height: 5.86% */}
        {/* ========================================================================= */}
        <div
          className="absolute left-[93.00%] top-[77.00%] w-[7.00%] h-[9.00%] z-20 cursor-pointer rounded-full opacity-0 hover:opacity-25 active:opacity-40 bg-white transition-opacity"
          onClick={() => {
            retroAudio.playClick();
            onOpenHelp();
          }}
          title="Help & About Tegar Yasindra"
        />
      </div>

      {/* ========================================================================= */}
      {/* RESPONSIVE STATION CONTROL DECK (Ergonomic on Mobile & Tablet) */}
      {/* ========================================================================= */}
      <div className="mt-3 bg-[#d4d0c8] retro-border-outset p-2 sm:p-3 space-y-2 shadow-md">
        {/* Row 1: Direct Channel / Object Launchers */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px] font-retro-mono scrollbar-none">
          <span className="font-bold text-zinc-800 text-[10px] shrink-0 font-pixel uppercase">
            CHANNELS:
          </span>

          <button
            onClick={() => {
              retroAudio.playClick();
              onOpenProject(portfolioData.projects[0]);
            }}
            className="retro-button px-2 py-1 text-[11px] font-bold shrink-0 flex items-center gap-1 bg-cyan-50 hover:bg-cyan-100"
          >
            <span>📱</span>
            <span>01: Sribuu (500K+)</span>
          </button>

          <button
            onClick={() => {
              retroAudio.playClick();
              onOpenProject(portfolioData.projects[1]);
            }}
            className="retro-button px-2 py-1 text-[11px] font-bold shrink-0 flex items-center gap-1 bg-amber-50 hover:bg-amber-100"
          >
            <span>🤖</span>
            <span>02: Fintelite (AI)</span>
          </button>

          <button
            onClick={() => {
              retroAudio.playClick();
              onOpenProject(portfolioData.projects[2]);
            }}
            className="retro-button px-2 py-1 text-[11px] font-bold shrink-0 flex items-center gap-1 bg-emerald-50 hover:bg-emerald-100"
          >
            <span>📄</span>
            <span>03: Anycheck</span>
          </button>

          <button
            onClick={() => {
              retroAudio.playRing();
              onOpenPhone();
            }}
            className="retro-button px-2 py-1 text-[11px] font-bold shrink-0 flex items-center gap-1 bg-pink-100 hover:bg-pink-200"
          >
            <span>☎</span>
            <span>Pick Up Phone</span>
          </button>
        </div>

        {/* Row 2: Station Function Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-1.5 pt-1.5 border-t border-zinc-300 text-[11px]">
          <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
            <button
              onClick={handlePowerToggle}
              className="retro-button px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] font-bold"
            >
              {powerOn ? "⚡ POWER OFF" : "⚡ POWER ON"}
            </button>

            <button
              onClick={handleChannelCycle}
              className="retro-button px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] font-bold"
            >
              📺 CH: {channel}
            </button>

            <button
              onClick={handleSoundToggle}
              className="retro-button px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] font-bold"
            >
              {soundEnabled ? "🔊 SOUND ON" : "🔇 SOUND OFF"}
            </button>

            <button
              onClick={() => {
                retroAudio.playClick();
                onOpenHelp();
              }}
              className="retro-button px-2 py-1 text-[10px] sm:text-[11px] font-bold"
            >
              ❓ MANUAL
            </button>
          </div>

          <button
            onClick={() => {
              retroAudio.playCrtPower();
              onEnterOs();
            }}
            className="retro-button px-3 sm:px-4 py-1 text-xs font-bold bg-amber-200 hover:bg-amber-300 flex items-center gap-1.5 shadow-xs"
          >
            <span>💻</span>
            <span>LAUNCH TEGAR OS ↗</span>
          </button>
        </div>
      </div>
    </div>
  );
}
