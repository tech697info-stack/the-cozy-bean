import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Star, Quote } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';

const testimonials = [
  {
    id: 1,
    name: 'Michael Thompson',
    review: 'The best coffee I have ever had. The staff is incredibly welcoming, and the cafe feels like a cozy second home.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 2,
    name: 'Sarah Williams',
    review: 'Their artisan pastries are out of this world! The almond croissant with an espresso is my absolute favorite morning treat.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 3,
    name: 'David Chen',
    review: 'I love coming here to work. The Wi-Fi is fast, the ambiance is perfectly chill, and the Matcha Latte keeps me going all day.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    review: 'A hidden gem in the city! The Healthy Bowls are delicious and so fresh. It is my go-to spot for weekend brunch with friends.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-glow/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionTitle 
          subtitle="Happy Guests" 
          title="What People Say" 
        />

        <div className="mt-12">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="w-full max-w-5xl !pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="max-w-md w-full px-4">
                <GlassCard className="relative p-8 pt-12 mt-8 text-center" hover={false}>
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                    <div className="relative">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-20 h-20 rounded-full border-4 border-dark-roast object-cover"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-amber-glow flex items-center justify-center text-white">
                        <Quote size={14} className="fill-current" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  <p className="text-warm-cream/80 italic mb-6">"{testimonial.review}"</p>
                  <h4 className="text-white font-bold text-lg font-serif">{testimonial.name}</h4>
                </GlassCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
