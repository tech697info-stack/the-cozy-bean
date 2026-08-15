import { motion } from 'framer-motion';
import GlowButton from '../ui/GlowButton';
import { ArrowRight, Coffee } from 'lucide-react';

const Hero = () => {
  const scrollTo = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="top">
      <div className="container mx-auto px-4 md:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full glass-panel border border-amber-glow/30"
          >
            <span className="text-sm font-medium text-amber-glow uppercase tracking-wider font-serif">Artisan Cafe & Bakery</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-serif">
            Brewing <span className="text-gradient">Moments</span> <br className="hidden md:block"/>
            Every Day.
          </h1>
          
          <p className="text-lg md:text-xl text-warm-cream/80 mb-10 max-w-2xl mx-auto lg:mx-0">
            Experience exceptional coffee and freshly baked pastries in a warm, relaxing environment. Your cozy neighborhood getaway awaits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <GlowButton variant="primary" className="w-full sm:w-auto" onClick={() => scrollTo('menu')}>
              View Menu <ArrowRight size={18} />
            </GlowButton>
            <GlowButton variant="secondary" className="w-full sm:w-auto" onClick={() => scrollTo('reservation')}>
              <Coffee size={18} /> Reserve a Table
            </GlowButton>
          </div>
        </motion.div>

        {/* Hero Image Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto lg:mx-0 max-w-md lg:max-w-none w-full"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-glow/20 blur-[100px] rounded-full z-0" />
          
          <div className="relative z-10 glass-panel p-4 rounded-[40px] border border-warm-cream/20 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
            <div className="relative rounded-[32px] overflow-hidden aspect-[3/4] md:aspect-square bg-white/5">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-glow/20 to-terracotta/20 mix-blend-overlay z-10" />
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Cafe Coffee" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass-panel p-4 rounded-2xl flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 rounded-full bg-amber-glow/20 flex items-center justify-center text-amber-glow">
                <Coffee size={24} />
              </div>
              <div>
                <p className="text-sm text-warm-cream/80">Freshly Brewed</p>
                <p className="text-xl font-bold text-white font-serif">Every Day</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;