import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import GlowButton from '../ui/GlowButton';
import { CheckCircle } from 'lucide-react';
import { useForm as useReactHookForm } from 'react-hook-form';

const ReservationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useReactHookForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const inputClasses = "w-full bg-warm-cream/5 border border-warm-cream/10 rounded-xl px-4 py-3 text-white placeholder:text-warm-cream/50 focus:outline-none focus:border-amber-glow/50 focus:bg-warm-cream/10 transition-colors";

  return (
    <section className="py-24 relative overflow-hidden" id="reservation">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-glow/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative z-10">
            <SectionTitle 
              align="left"
              subtitle="Reserve a Table" 
              title="Book Your Spot" 
              description="Fill out the form below to secure your table. We accept reservations for parties of up to 10 guests."
            />
            
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-glow/20 flex items-center justify-center text-amber-glow font-bold">1</div>
                <div>
                  <h4 className="font-bold text-white font-serif">Fill the Form</h4>
                  <p className="text-warm-cream/60 text-sm">Provide your details and preferred time.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-glow/20 flex items-center justify-center text-amber-glow font-bold">2</div>
                <div>
                  <h4 className="font-bold text-white font-serif">Confirmation</h4>
                  <p className="text-warm-cream/60 text-sm">We will email you to confirm your table.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-glow/20 flex items-center justify-center text-amber-glow font-bold">3</div>
                <div>
                  <h4 className="font-bold text-white font-serif">Visit Us</h4>
                  <p className="text-warm-cream/60 text-sm">Enjoy great food and cozy vibes.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <GlassCard className="relative overflow-hidden" hover={false}>
              
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
                    <h3 className="text-2xl font-bold text-white mb-2 font-serif">Reservation Sent!</h3>
                    <p className="text-warm-cream/80">Thank you for booking a table. We will contact you shortly to confirm your reservation.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className={inputClasses}
                      {...register("name", { required: true })}
                    />
                    {errors.name && <span className="text-red-400 text-xs mt-1 block">Name is required</span>}
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className={inputClasses}
                      {...register("phone", { required: true })}
                    />
                    {errors.phone && <span className="text-red-400 text-xs mt-1 block">Phone is required</span>}
                  </div>
                </div>

                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className={inputClasses}
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  />
                  {errors.email && <span className="text-red-400 text-xs mt-1 block">Valid email is required</span>}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="date" 
                      className={inputClasses}
                      {...register("date", { required: true })}
                    />
                    {errors.date && <span className="text-red-400 text-xs mt-1 block">Date is required</span>}
                  </div>
                  <div>
                    <input 
                      type="time" 
                      className={inputClasses}
                      {...register("time", { required: true })}
                    />
                    {errors.time && <span className="text-red-400 text-xs mt-1 block">Time is required</span>}
                  </div>
                </div>

                <div>
                  <select 
                    className={`${inputClasses} appearance-none`}
                    {...register("guests", { required: true })}
                  >
                    <option value="" className="text-gray-900">Number of Guests</option>
                    <option value="1" className="text-gray-900">1 Person</option>
                    <option value="2" className="text-gray-900">2 People</option>
                    <option value="3" className="text-gray-900">3 People</option>
                    <option value="4" className="text-gray-900">4 People</option>
                    <option value="5+" className="text-gray-900">5+ People</option>
                  </select>
                  {errors.guests && <span className="text-red-400 text-xs mt-1 block">Guest count is required</span>}
                </div>

                <div>
                  <textarea 
                    placeholder="Special requests (e.g., high chair, window seat) (Optional)" 
                    rows={4}
                    className={`${inputClasses} resize-none`}
                    {...register("message")}
                  ></textarea>
                </div>

                <GlowButton type="submit" className="w-full" variant="primary">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : "Confirm Reservation"}
                </GlowButton>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
