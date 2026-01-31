export default function BeginningSection() {
  return (
    <section className="py-32 bg-black transition-colors duration-500 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 md:px-8 text-center relative z-10">
        <h2 className="font-dm-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-glow tracking-tight">
          This Is Just the <span className="gradient-text-premium">Beginning</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-premium">
          We serve beyond design - a vision that blends SaaS, UI/UX, video motion graphics, and Generative AI. It's not just about products - it's about the emotions we spark, the stories we shape, and the connections we create through thoughtful technology and premium design.
        </p>

        {/* Premium quote card */}
        <div className="mt-16 glass-card rounded-2xl p-8 max-w-4xl mx-auto">
          <p className="italic text-white/90 text-xl md:text-2xl font-dm-serif leading-relaxed">
            "The future belongs to those who can blend bold design, clear strategy, and AI with emotion."
          </p>
        </div>
      </div>
    </section>
  );
}
