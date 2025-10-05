interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image?: string;
}

const ProjectCard = ({ title, description, tech, image }: ProjectCardProps) => {
  return (
    <div className="group relative bg-black border-4 border-[hsl(var(--retro-border))] 
      shadow-[4px_4px_0_hsl(var(--retro-shadow))] 
      hover:shadow-[8px_8px_0_hsl(var(--retro-shadow))]
      hover:translate-x-[-2px] hover:translate-y-[-2px]
      transition-all duration-200">
      
      {/* Image/Placeholder */}
      <div className="h-48 bg-[hsl(var(--retro-bg))] border-b-4 border-[hsl(var(--retro-border))] overflow-hidden relative">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
            style={{ imageRendering: "pixelated" }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="font-['Press_Start_2P'] text-[12px] text-[hsl(var(--retro-border))] opacity-50">
              PROJECT
            </div>
          </div>
        )}
        
        {/* Corner decorations */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[hsl(var(--retro-border))]" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[hsl(var(--retro-border))]" />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-['Press_Start_2P'] text-[10px] text-[hsl(var(--retro-text))] mb-3">
          {title}
        </h3>
        <p className="font-['Press_Start_2P'] text-[7px] leading-relaxed text-[hsl(var(--retro-text))]/80 mb-4">
          {description}
        </p>
        
        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-2 py-1 font-['Press_Start_2P'] text-[6px] 
                bg-[hsl(var(--retro-border))]/20 border border-[hsl(var(--retro-border))]
                text-[hsl(var(--retro-border))]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom decorations */}
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[hsl(var(--retro-border))]" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[hsl(var(--retro-border))]" />
    </div>
  );
};

export default ProjectCard;
