import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import AnimatedCounter from '../ui/AnimatedCounter';
import SectionTitle from '../ui/SectionTitle';

const OurStory = () => {
  return (
    <section className="py-24 relative" id="about">
      <div className="container mx-auto px-4 md:px-8">
        
        <SectionTitle 
          subtitle="Our Story" 
          title="Welcome to The Cozy Bean"
          description="A passionate corner of the city dedicated to brewing the perfect cup and baking artisan delights for our community."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="relative overflow-hidden p-2" hover={false}>
              <div className="aspect-[4/5] rounded-[20px] overflow-hidden relative bg-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Cafe Interior" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-roast via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white mb-2 font-serif">The Cozy Bean</h3>
                  <p className="text-amber-glow font-medium">Est. 2018</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white font-serif">Our Passion</h3>
            <p className="text-warm-cream/80 mb-6 leading-relaxed">
              Founded on a deep love for coffee culture and culinary artistry, The Cozy Bean has grown into a beloved local sanctuary. We source our beans sustainably and bake our pastries fresh every morning to ensure the highest quality.
            </p>
            <p className="text-warm-cream/80 mb-10 leading-relaxed">
              Our philosophy is simple: good food, great coffee, and a welcoming atmosphere where everyone feels at home. Whether you're here to work, relax, or catch up with friends, we've saved a seat for you.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-white font-serif">What We Offer</h3>
            <div className="flex flex-wrap gap-3 mb-10">
              {['Signature Roasts', 'Artisan Pastries', 'Vegan Options', 'Free Wi-Fi', 'Cozy Ambiance'].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-full glass-panel text-sm text-amber-glow">
                  {skill}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="glass-panel p-4 text-center rounded-2xl">
                <div className="text-2xl font-bold text-white mb-1">
                  <AnimatedCounter value={5} suffix="+" />
                </div>
                <p className="text-xs text-warm-cream/60">Years Open</p>
              </div>
              <div className="glass-panel p-4 text-center rounded-2xl">
                <div className="text-2xl font-bold text-white mb-1">
                  <AnimatedCounter value={50000} suffix="+" />
                </div>
                <p className="text-xs text-warm-cream/60">Cups Served</p>
              </div>
              <div className="glass-panel p-4 text-center rounded-2xl">
                <div className="text-2xl font-bold text-white mb-1">
                  <AnimatedCounter value={20000} suffix="+" />
                </div>
                <p className="text-xs text-warm-cream/60">Pastries Baked</p>
              </div>
              <div className="glass-panel p-4 text-center rounded-2xl">
                <div className="text-2xl font-bold text-white mb-1">
                  <AnimatedCounter value={99} suffix="%" />
                </div>
                <p className="text-xs text-warm-cream/60">Happy Guests</p>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
