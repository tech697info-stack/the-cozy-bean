import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import GlowButton from '../ui/GlowButton';

// TODO: replace with your actual EmailJS service/template/public key
// (see https://www.emailjs.com/docs/sdk/installation/)
const EMAILJS_SERVICE_ID = 'service_ptsjezx';
const EMAILJS_TEMPLATE_ID = 'template_a49pqpn';
const EMAILJS_PUBLIC_KEY = 'CrEjCmV1GDyXClB9g';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError(false);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        data,
        EMAILJS_PUBLIC_KEY
      );
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error('EmailJS send failed:', err);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full bg-warm-cream/5 border border-warm-cream/10 rounded-xl px-4 py-3 text-white placeholder:text-warm-cream/50 focus:outline-none focus:border-amber-glow/50 focus:bg-warm-cream/10 transition-colors";

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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21593.667470024!2d-122.34129999999999!3d47.6203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab6b4b1b0a1%3A0x2c3f5b0f0f0f0f0f!2sSeattle%2C%20WA%2098109!5e0!3m2!1sen!2sus!4v1689240321453!5m2!1sen!2sus" 
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
            <GlassCard className="h-full p-8 relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-2 font-serif">Send us a Message</h3>
              <p className="text-warm-cream/80 mb-8">Fill out the form below and we will get back to you shortly.</p>

              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 bg-dark-roast/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                    >
                      <CheckCircle className="text-amber-glow w-20 h-20 mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-serif">Message Sent!</h3>
                    <p className="text-warm-cream/80">Thanks for reaching out. We'll get back to you shortly.</p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <div>
                  <label className="block text-sm font-medium text-warm-cream/80 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className={inputClasses}
                    {...register("name", { required: true })}
                  />
                  {errors.name && <span className="text-red-400 text-xs mt-1 block">Name is required</span>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-warm-cream/80 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className={inputClasses}
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  />
                  {errors.email && <span className="text-red-400 text-xs mt-1 block">Valid email is required</span>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-warm-cream/80 mb-2">Subject</label>
                  <input 
                    type="text" 
                    placeholder="How can we help you?" 
                    className={inputClasses}
                    {...register("subject", { required: true })}
                  />
                  {errors.subject && <span className="text-red-400 text-xs mt-1 block">Subject is required</span>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-warm-cream/80 mb-2">Message</label>
                  <textarea 
                    placeholder="Your message..." 
                    rows={5}
                    className={`${inputClasses} resize-none`}
                    {...register("message", { required: true })}
                  ></textarea>
                  {errors.message && <span className="text-red-400 text-xs mt-1 block">Message is required</span>}
                </div>

                {submitError && (
                  <p className="text-red-400 text-sm">Something went wrong sending your message. Please try again.</p>
                )}
                
                <GlowButton type="submit" className="w-full" variant="primary">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
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