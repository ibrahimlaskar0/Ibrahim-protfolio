import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-32 bg-black transition-colors duration-500 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Personal Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow ring behind image */}
            <div className="absolute inset-0 w-80 h-80 mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-2xl animate-pulse" />
            
            <div className="relative w-80 h-80 mx-auto lg:mx-0 rounded-3xl shadow-2xl overflow-hidden animate-float shadow-glow-purple">
              <img 
                src="/hedaya.jpg" 
                alt="GenZ Media Town - Motion Design Agency" 
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 transition-colors duration-500 text-glow tracking-tight">
              Who We Are
            </h2>
            
            {/* Glassmorphism content card */}
            <div className="glass-card-strong rounded-2xl p-8 space-y-6">
              <div className="space-y-6 text-lg text-gray-300 font-sans leading-relaxed tracking-premium">
                <p>
                  Meet <span className="font-bold gradient-text-premium">GENZ MEDIA TOWN</span> — your AI-powered motion design agency obsessed with turning raw clips into scroll-stopping, thumb-freezing, audience-hooking content. Whether it's Reels, ADS, YouTube, or TikTok, we edit for one thing: making your <span className="font-bold text-white text-glow">BRAND</span> look damn good.
                </p>
                
                <p>
                  Our journey spans across creating engaging content for social media, developing innovative 
                  SaaS solutions, and crafting video strategies that turn vibes into visibility.
                </p>
                
                <p>
                  While others stick to basic editing, we harness cutting-edge AI platforms like VEO 3, Kling, and Midjourney to create AI-UGC content that transforms your brand into an unstoppable scroll-stopping machine.
                </p>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {['Motion Graphics', 'Video Editing', 'Vibe Marketing', 'Brand Content', 'AI/UGC'].map((skill) => (
                <span 
                  key={skill}
                  className="px-5 py-2.5 rounded-full text-white font-semibold text-sm gradient-border bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 tracking-wide"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;