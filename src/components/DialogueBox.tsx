import { useEffect, useState } from "react";

interface DialogueBoxProps {
  text: string;
  characterImage?: string;
  speed?: number;
}

const DialogueBox = ({ text, characterImage, speed = 40 }: DialogueBoxProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    setDisplayedText("");
    setIsComplete(false);

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <div className="relative w-full max-w-[800px] mx-auto">
      {/* Scanline effect overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-10">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,hsl(var(--retro-border))_2px,hsl(var(--retro-border))_4px)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 animate-[scanline_8s_linear_infinite]" />
      </div>

      {/* Main dialogue box */}
      <div className="relative bg-[hsl(var(--retro-dialogue))] border-4 border-[hsl(var(--retro-border))] shadow-[0_0_0_4px_hsl(var(--retro-shadow))] p-4">
        <div className="flex gap-4 items-start">
          {/* Character portrait */}
          {characterImage && (
            <div className="flex-shrink-0 relative">
              <div className="w-[120px] h-[160px] border-2 border-[hsl(var(--retro-border))] bg-black overflow-hidden rounded-sm relative">
                <img
                  src={characterImage}
                  alt="Character"
                  className="w-full h-full object-contain"
                  style={{
                    imageRendering: "pixelated"
                  }}
                />
                {/* Inner glow effect */}
                <div className="absolute inset-0 border border-white/20 pointer-events-none" />
              </div>
            </div>
          )}

          {/* Text area */}
          <div className="flex-1 min-h-[120px] relative">
            <div
              className="font-['Press_Start_2P'] text-[10px] leading-relaxed whitespace-pre-wrap text-[hsl(var(--retro-text))]"
              style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.5)" }}
            >
              {displayedText}
              {isComplete && (
                <span className="inline-block w-2 h-3 bg-white ml-1 animate-[cursor-blink_1s_step-end_infinite]" />
              )}
            </div>
          </div>
        </div>

        {/* Corner decorations */}
        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[hsl(var(--retro-border))]" />
        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[hsl(var(--retro-border))]" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[hsl(var(--retro-border))]" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[hsl(var(--retro-border))]" />
      </div>
    </div>
  );
};

export default DialogueBox;
