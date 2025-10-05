import DialogueBox from "@/components/DialogueBox";
import RetroNav from "@/components/RetroNav";
import StatsBar from "@/components/StatsBar";
import ProjectCard from "@/components/ProjectCard";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Index = () => {
  const skills = [
    { skill: "REACT.JS", level: 90 },
    { skill: "TYPESCRIPT", level: 85 },
    { skill: "TAILWIND", level: 95 },
    { skill: "NODE.JS", level: 80 },
    { skill: "UI/UX", level: 88 },
  ];

  const projects = [
    {
      title: "PROJECT_01",
      description: "A retro-themed portfolio showcasing pixel-perfect design and smooth animations.",
      tech: ["REACT", "TAILWIND", "TYPESCRIPT"],
    },
    {
      title: "PROJECT_02",
      description: "Full-stack web application with authentication and real-time features.",
      tech: ["NODE", "EXPRESS", "MONGODB"],
    },
    {
      title: "PROJECT_03",
      description: "Mobile-first e-commerce platform with seamless checkout experience.",
      tech: ["NEXT.JS", "STRIPE", "PRISMA"],
    },
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--retro-bg))]">
      {/* Global effects */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      <div className="fixed inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />

      <RetroNav />

      {/* HOME SECTION */}
      <section id="home" className="min-h-screen flex items-center justify-center p-8 pt-24">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="font-['Press_Start_2P'] text-[16px] md:text-[24px] text-[hsl(var(--retro-text))] mb-4 
              animate-[fade-in_1s_ease-out]"
              style={{ textShadow: "4px 4px 0 rgba(0,0,0,0.5)" }}
            >
              BLACK★ROCK SHOOTER
            </h1>
            <p className="font-['Press_Start_2P'] text-[8px] md:text-[10px] text-[hsl(var(--retro-border))] 
              animate-[fade-in_1.5s_ease-out]">
              FULL-STACK DEVELOPER • PIXEL ARTIST • CREATOR
            </p>
          </div>
          
          <div className="animate-[fade-in_2s_ease-out]">
            <DialogueBox
              text="Black★Rock Shooter reporting for duty. Loading pixel systems..."
              characterImage="/placeholder.svg"
            />
          </div>

          <div className="text-center mt-8 opacity-60">
            <p className="font-['Press_Start_2P'] text-[7px] text-white">
              Replace /placeholder.svg with your blocka.gif path
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-4xl">
          <h2 className="font-['Press_Start_2P'] text-[14px] md:text-[18px] text-[hsl(var(--retro-text))] mb-8 text-center"
            style={{ textShadow: "3px 3px 0 rgba(0,0,0,0.5)" }}>
            :: ABOUT_ME ::
          </h2>
          
          <div className="bg-black border-4 border-[hsl(var(--retro-border))] 
            shadow-[8px_8px_0_hsl(var(--retro-shadow))] p-8">
            <p className="font-['Press_Start_2P'] text-[8px] md:text-[9px] leading-relaxed text-[hsl(var(--retro-text))] mb-6">
              Greetings, traveler. I'm a passionate developer who combines modern web technologies 
              with retro aesthetics. My journey through the digital realm has equipped me with 
              the power to craft pixel-perfect experiences and build robust applications.
            </p>
            <p className="font-['Press_Start_2P'] text-[8px] md:text-[9px] leading-relaxed text-[hsl(var(--retro-text))]">
              When I'm not coding, you'll find me exploring new frameworks, creating pixel art, 
              or diving into the latest tech trends. Let's build something amazing together!
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-4xl">
          <h2 className="font-['Press_Start_2P'] text-[14px] md:text-[18px] text-[hsl(var(--retro-text))] mb-8 text-center"
            style={{ textShadow: "3px 3px 0 rgba(0,0,0,0.5)" }}>
            :: SKILL_STATS ::
          </h2>
          
          <div className="bg-black border-4 border-[hsl(var(--retro-border))] 
            shadow-[8px_8px_0_hsl(var(--retro-shadow))] p-8">
            <div className="mb-6">
              <p className="font-['Press_Start_2P'] text-[8px] text-[hsl(var(--retro-border))] mb-4">
                CHARACTER STATS
              </p>
            </div>
            
            {skills.map((skill, index) => (
              <StatsBar key={index} {...skill} />
            ))}

            <div className="mt-8 pt-6 border-t-2 border-[hsl(var(--retro-border))]">
              <p className="font-['Press_Start_2P'] text-[7px] text-[hsl(var(--retro-text))]/60">
                LEVEL UP: Continuously grinding to unlock new abilities...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-6xl">
          <h2 className="font-['Press_Start_2P'] text-[14px] md:text-[18px] text-[hsl(var(--retro-text))] mb-8 text-center"
            style={{ textShadow: "3px 3px 0 rgba(0,0,0,0.5)" }}>
            :: PROJECT_ARCHIVE ::
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-4xl">
          <h2 className="font-['Press_Start_2P'] text-[14px] md:text-[18px] text-[hsl(var(--retro-text))] mb-8 text-center"
            style={{ textShadow: "3px 3px 0 rgba(0,0,0,0.5)" }}>
            :: CONTACT_LINK ::
          </h2>
          
          <div className="bg-black border-4 border-[hsl(var(--retro-border))] 
            shadow-[8px_8px_0_hsl(var(--retro-shadow))] p-8">
            
            <p className="font-['Press_Start_2P'] text-[9px] leading-relaxed text-[hsl(var(--retro-text))] mb-8 text-center">
              Ready to embark on a new quest? Let's connect and create something legendary!
            </p>

            {/* Social Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: Mail, label: "EMAIL", href: "mailto:your@email.com" },
                { icon: Github, label: "GITHUB", href: "https://github.com" },
                { icon: Linkedin, label: "LINKEDIN", href: "https://linkedin.com" },
                { icon: Twitter, label: "TWITTER", href: "https://twitter.com" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-4
                    bg-[hsl(var(--retro-bg))] border-2 border-[hsl(var(--retro-border))]
                    hover:bg-[hsl(var(--retro-border))] hover:text-black
                    transition-all duration-200 hover:translate-y-[-2px]
                    shadow-[2px_2px_0_hsl(var(--retro-shadow))]
                    hover:shadow-[4px_4px_0_hsl(var(--retro-shadow))]
                    group"
                >
                  <social.icon 
                    size={24} 
                    className="text-[hsl(var(--retro-border))] group-hover:text-black transition-colors" 
                  />
                  <span className="font-['Press_Start_2P'] text-[6px] text-[hsl(var(--retro-text))] group-hover:text-black">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>

            <div className="text-center pt-6 border-t-2 border-[hsl(var(--retro-border))]">
              <p className="font-['Press_Start_2P'] text-[7px] text-[hsl(var(--retro-text))]/60">
                © 2025 BLACK★ROCK SHOOTER • GAME OVER? PRESS START TO CONTINUE
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
