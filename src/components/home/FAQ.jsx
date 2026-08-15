import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const faqs = [
  {
    question: 'Do you have vegan and gluten-free options?',
    answer: 'Yes! We offer a variety of vegan milks for our coffee, as well as several gluten-free pastries and plant-based healthy bowls. Just ask our barista for recommendations.'
  },
  {
    question: 'Is there free Wi-Fi for working?',
    answer: 'Absolutely. We offer fast, free Wi-Fi for all our guests. There are plenty of power outlets available along the wall seating.'
  },
  {
    question: 'Do you take reservations for large groups?',
    answer: 'Yes, we take reservations for parties up to 10 guests. For larger events or private bookings, please contact us directly via email or phone.'
  },
  {
    question: 'Where do you source your coffee beans?',
    answer: 'We partner with local, sustainable roasters who source fair-trade beans from Colombia, Ethiopia, and Costa Rica. Quality and ethical sourcing are our top priorities.'
  },
  {
    question: 'Are pets allowed inside the cafe?',
    answer: 'We are pet-friendly on our outdoor patio! Unfortunately, due to health and safety regulations, only service animals are allowed inside the main dining area.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 relative" id="faq">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <SectionTitle 
          subtitle="Common Questions" 
          title="Frequently Asked Questions" 
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border border-warm-cream/10 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-warm-cream/10 shadow-glass-hover' : 'bg-warm-cream/5 hover:bg-warm-cream/10'}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <h4 className="font-semibold text-white font-serif text-lg pr-4">{faq.question}</h4>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${openIndex === index ? 'bg-amber-glow text-white rotate-180' : 'bg-warm-cream/10 text-warm-cream/60'}`}>
                  <ChevronDown size={18} />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-warm-cream/80">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
