import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import GlowButton from '../ui/GlowButton';

const Contact = () => {
  return (
    <section className="py-24 relative" id="contact">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          subtitle="Get In Touch" 
          title="Contact Us" 
          description="We'd love to hear from you. Reach out for any inquiries, feedback, or to book a large event."
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="h-full p-8">
              <h3 className="text-2xl font-bold text-white mb-8 font-serif">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-glow/10 flex items-center justify-center text-amber-glow shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1 font-serif">Our Location</h4>
                    <p className="text-warm-cream/80">456 Coffee Lane<br/>Seattle, WA 98109</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-glow/10 flex items-center justify-center text-amber-glow shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1 font-serif">Phone Number</h4>
                    <p className="text-warm-cream/80">+1 (555) 987-6543<br/>+1 (555) 321-0987</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-glow/10 flex items-center justify-center text-amber-glow shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1 font-serif">Email Address</h4>
                    <p className="text-warm-cream/80">hello@thecozybean.com<br/>events@thecozybean.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-glow/10 flex items-center justify-center text-amber-glow shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1 font-serif">Working Hours</h4>
                    <p className="text-warm-cream/80">Monday - Friday: 6:30 AM - 8:00 PM<br/>Saturday - Sunday: 7:30 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Interactive Map embed (Google Maps) */}
              <div className="mt-10 rounded-2xl overflow-hidden h-48 border border-warm-cream/10 relative">
                {/* For production, use actual Google Maps Embed API. Using a styled iframe for demo */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.3056075904815!2d-118.40375122485304!3d34.08726591586566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1689240321453!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(100%) sepia(20%)' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none bg-dark-roast/20 mix-blend-overlay"></div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard className="h-full p-8">
              <h3 className="text-2xl font-bold text-white mb-2 font-serif">Send us a Message</h3>
              <p className="text-warm-cream/80 mb-8">Fill out the form below and we will get back to you shortly.</p>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-warm-cream/80 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-warm-cream/5 border border-warm-cream/10 rounded-xl px-4 py-3 text-white placeholder:text-warm-cream/50 focus:outline-none focus:border-amber-glow/50 focus:bg-warm-cream/10 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-warm-cream/80 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-warm-cream/5 border border-warm-cream/10 rounded-xl px-4 py-3 text-white placeholder:text-warm-cream/50 focus:outline-none focus:border-amber-glow/50 focus:bg-warm-cream/10 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-warm-cream/80 mb-2">Subject</label>
                  <input 
                    type="text" 
                    placeholder="How can we help you?" 
                    className="w-full bg-warm-cream/5 border border-warm-cream/10 rounded-xl px-4 py-3 text-white placeholder:text-warm-cream/50 focus:outline-none focus:border-amber-glow/50 focus:bg-warm-cream/10 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-warm-cream/80 mb-2">Message</label>
                  <textarea 
                    placeholder="Your message..." 
                    rows={5}
                    className="w-full bg-warm-cream/5 border border-warm-cream/10 rounded-xl px-4 py-3 text-white placeholder:text-warm-cream/50 focus:outline-none focus:border-amber-glow/50 focus:bg-warm-cream/10 transition-colors resize-none"
                  ></textarea>
                </div>
                
                <GlowButton type="submit" className="w-full" variant="primary">
                  Send Message <Send size={18} />
                </GlowButton>
              </form>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
