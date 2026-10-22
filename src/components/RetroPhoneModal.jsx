import { useState } from "react";
import { retroAudio } from "../utils/retroAudio";
import { portfolioData } from "../data/portfolioData";

export default function RetroPhoneModal({ isOpen, onClose }) {
  const [dialed, setDialed] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const keypad = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];

  const handleKeyPress = (num) => {
    retroAudio.playClick();
    setDialed((prev) => (prev.length < 15 ? prev + num : prev));
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(portfolioData.profile.phone);
    retroAudio.playClick();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    retroAudio.playSwitch();
    const subject = encodeURIComponent(`Project inquiry from ${name || "Visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n— Sent from Tegar Retro Phone Station\nSender: ${name} (${email})`
    );
    window.location.href = `mailto:${portfolioData.profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="w-full max-w-lg max-h-[92vh] flex flex-col bg-[#d4d0c8] retro-border-outset shadow-2xl overflow-hidden font-mono text-sm">
        {/* Title Bar */}
        <div className="bg-[#000080] text-white px-2 py-1 flex items-center justify-between select-none font-bold text-xs tracking-wider shrink-0">
          <div className="flex items-center gap-1.5">
            <span>☎</span>
            <span>TELEPHONE COMMUNICATOR v2.4</span>
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

        {/* Content Body (Scrollable for mobile keyboard) */}
        <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 text-zinc-900 overflow-y-auto flex-1">
          {/* Header Banner */}
          <div className="p-2 sm:p-3 bg-amber-100 border border-amber-300 rounded text-xs flex items-center justify-between">
            <div>
              <div className="font-bold text-amber-950 font-pixel text-[11px] sm:text-xs">
                LINE CONNECTED: TEGAR YASINDRA
              </div>
              <div className="text-amber-800 text-[10px] sm:text-[11px]">
                Fullstack & Mobile Developer · South Jakarta / Bekasi
              </div>
            </div>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
          </div>

          {/* Quick Direct Actions */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <a
              href={portfolioData.profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              onClick={() => retroAudio.playClick()}
              className="retro-button p-2 text-center font-bold flex items-center justify-center gap-1.5 bg-emerald-100 hover:bg-emerald-200 text-xs"
            >
              <span>💬</span> WhatsApp Direct
            </a>
            <a
              href={portfolioData.profile.calendar}
              target="_blank"
              rel="noreferrer"
              onClick={() => retroAudio.playClick()}
              className="retro-button p-2 text-center font-bold flex items-center justify-center gap-1.5 bg-blue-100 hover:bg-blue-200 text-xs"
            >
              <span>📅</span> Book a Call
            </a>
          </div>

          {/* Phone Details Box */}
          <div className="p-2 sm:p-2.5 bg-white retro-border-inset text-xs space-y-1">
            <div className="flex justify-between items-center flex-wrap gap-1">
              <span className="text-zinc-500 text-[11px]">DIRECT LINE:</span>
              <span className="font-bold text-zinc-900 font-retro-mono text-xs">
                {portfolioData.profile.phone}
              </span>
              <button
                onClick={handleCopyPhone}
                className="retro-button px-2 py-0.5 text-[10px]"
              >
                {copied ? "COPIED!" : "COPY"}
              </button>
            </div>
            <div className="flex justify-between items-center pt-1 border-t border-zinc-200 flex-wrap gap-1">
              <span className="text-zinc-500 text-[11px]">EMAIL:</span>
              <span className="font-bold text-zinc-900 font-retro-mono text-[11px]">
                {portfolioData.profile.email}
              </span>
            </div>
          </div>

          {/* Keypad & LCD Display Simulator */}
          <div className="bg-[#bcbcbc] p-2.5 sm:p-3 retro-border-outset rounded">
            <div className="bg-[#99a68c] text-[#1c2c1a] px-2 sm:px-3 py-1 font-retro-mono font-bold text-sm sm:text-base tracking-widest text-right retro-border-inset mb-2 overflow-hidden truncate">
              {dialed || "DIAL OR SEND MESSAGE"}
            </div>
            <div className="grid grid-cols-3 gap-1 max-w-[180px] sm:max-w-[200px] mx-auto">
              {keypad.map((k) => (
                <button
                  key={k}
                  onClick={() => handleKeyPress(k)}
                  className="retro-button py-1 font-bold text-xs"
                >
                  {k}
                </button>
              ))}
            </div>
            {dialed && (
              <div className="mt-1.5 text-center">
                <button
                  onClick={() => {
                    retroAudio.playClick();
                    setDialed("");
                  }}
                  className="retro-button px-2.5 py-0.5 text-[10px]"
                >
                  Clear Keypad
                </button>
              </div>
            )}
          </div>

          {/* Direct Quick Mail Form */}
          <form onSubmit={handleSendEmail} className="space-y-2 pt-1">
            <div className="text-[11px] font-bold text-zinc-700">LEAVE A DISPATCH NOTE:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-1.5 bg-white retro-border-inset text-xs outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-1.5 bg-white retro-border-inset text-xs outline-none"
              />
            </div>
            <textarea
              rows={2}
              placeholder="Tell Tegar about your project or inquiry..."
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-1.5 bg-white retro-border-inset text-xs outline-none resize-none"
            />
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5">
              <span className="text-[10px] text-zinc-500">
                Direct transmission to tegar.yasindraa@gmail.com
              </span>
              <button
                type="submit"
                className="retro-button px-3 py-1 font-bold text-xs bg-[#c0c0c0] w-full sm:w-auto"
              >
                TRANSMIT MESSAGE ✉
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
