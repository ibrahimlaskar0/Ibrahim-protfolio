import { Hero } from '@/components/ui/hero';

const HeroSection = () => {
  return (
    <Hero
      id="hero"
      title={
        <>
          <span className="text-glow">Crafting Impactful stories with</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-gradient-shift">
            Motion
          </span>{' '}
          <span className="text-glow">&</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 animate-gradient-shift">
            Strategy
          </span>
        </>
      }
      subtitle="A team of editors and motion designers crafting scroll-stopping content at scale."
      actions={[
        {
          label: "Get in Touch",
          href: "#get-in-touch",
          variant: "default"
        }
      ]}
      titleClassName="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight"
      subtitleClassName="text-xl md:text-2xl max-w-[650px] text-gray-300 tracking-premium leading-relaxed"
      actionsClassName="mt-14"
    />
  );
};

export default HeroSection;