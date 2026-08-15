import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const galleryImages = [
  { 
    id: 1, 
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80', 
    alt: 'Barista pouring latte art',
    aspect: 'aspect-[4/3]' 
  },
  { 
    id: 2, 
    src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80', 
    alt: 'Coffee cup and wooden table',
    aspect: 'aspect-square' 
  },
  { 
    id: 3, 
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80', 
    alt: 'Cozy cafe interior with warm lighting',
    aspect: 'aspect-[3/4]' 
  },
  { 
    id: 4, 
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80', 
    alt: 'Freshly baked croissants and espresso',
    aspect: 'aspect-[4/3]' 
  },
  { 
    id: 5, 
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80', 
    alt: 'Modern cafe seating area',
    aspect: 'aspect-[3/4]' 
  },
  { 
    id: 6, 
    src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80', 
    alt: 'Pour over artisan coffee brew',
    aspect: 'aspect-square' 
  },
];

const fallbackImg = 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-24 relative" id="gallery">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          subtitle="Gallery" 
          title="Moments Captured" 
          description="Take a peek inside our cozy cafe, our artisan baked goods, and perfect pours."
        />

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mt-12">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              <div 
                className={`relative rounded-2xl overflow-hidden glass-panel group cursor-pointer border border-warm-cream/10 bg-cafe-brown/40 ${img.aspect}`}
                onClick={() => setSelectedImage(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = fallbackImg;
                  }}
                />
                <div className="absolute inset-0 bg-dark-roast/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center mix-blend-overlay" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-warm-cream/20 backdrop-blur-md flex items-center justify-center text-white">
                    <ZoomIn size={24} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark-roast/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-warm-cream/10 flex items-center justify-center text-white hover:bg-warm-cream/20 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Gallery Preview" 
              className="max-w-full max-h-full rounded-2xl shadow-glow object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;