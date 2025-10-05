import { useEffect, useState } from "react";

interface StatsBarProps {
  skill: string;
  level: number;
  maxLevel?: number;
}

const StatsBar = ({ skill, level, maxLevel = 100 }: StatsBarProps) => {
  const [currentLevel, setCurrentLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentLevel(level);
    }, 300);
    return () => clearTimeout(timer);
  }, [level]);

  const percentage = (currentLevel / maxLevel) * 100;

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-['Press_Start_2P'] text-[8px] text-[hsl(var(--retro-text))]">
          {skill}
        </span>
        <span className="font-['Press_Start_2P'] text-[8px] text-[hsl(var(--retro-border))]">
          {currentLevel}/{maxLevel}
        </span>
      </div>
      <div className="h-6 bg-black border-2 border-[hsl(var(--retro-border))] relative overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,hsl(var(--retro-border))_4px,hsl(var(--retro-border))_5px)]" />
        
        {/* Progress bar */}
        <div
          className="h-full bg-[hsl(var(--retro-border))] transition-all duration-1000 ease-out relative"
          style={{ width: `${percentage}%` }}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]" />
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
