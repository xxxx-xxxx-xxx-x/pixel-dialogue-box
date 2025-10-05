import DialogueBox from "@/components/DialogueBox";

const Index = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--retro-bg))] flex items-end justify-center p-8 overflow-hidden relative">
      {/* CRT screen effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      
      {/* Vignette effect */}
      <div className="fixed inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />

      <div className="w-full mb-12">
        <DialogueBox
          text="Black★Rock Shooter reporting for duty. Loading pixel systems..."
          characterImage="/placeholder.svg"
        />
        
        {/* Instructions */}
        <div className="text-center mt-8 opacity-60">
          <p className="font-['Press_Start_2P'] text-[8px] text-white">
            Replace /placeholder.svg with your blocka.gif path
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
