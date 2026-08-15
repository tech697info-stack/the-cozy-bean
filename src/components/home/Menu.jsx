import { motion } from 'framer-motion';
import { Coffee, Pizza, Croissant, Leaf } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';

const menus = [
  {
    id: 1,
    cuisine: 'Signature Brews',
    icon: <Coffee size={28} />,
    items: [
      { name: 'Espresso Romano', price: '$4' },
      { name: 'Caramel Macchiato', price: '$5.5' },
      { name: 'Single Origin Pour Over', price: '$4.5' },
      { name: 'Iced Matcha Latte', price: '$5' },
    ]
  },
  {
    id: 2,
    cuisine: 'Artisan Bakery',
    icon: <Croissant size={28} />,
    items: [
      { name: 'Butter Croissant', price: '$4' },
      { name: 'Pain au Chocolat', price: '$4.5' },
      { name: 'Cinnamon Swirl', price: '$4' },
      { name: 'Sourdough Toast', price: '$6' },
    ]
  },
  {
    id: 3,
    cuisine: 'Italian Bites',
    icon: <Pizza size={28} />,
    items: [
      { name: 'Margherita Flatbread', price: '$12' },
      { name: 'Truffle Mushroom Panini', price: '$13' },
      { name: 'Caprese Salad', price: '$10' },
      { name: 'Classic Tiramisu', price: '$7' },
    ]
  },
  {
    id: 4,
    cuisine: 'Healthy Bowls',
    icon: <Leaf size={28} />,
    items: [
      { name: 'Berry Acai Bowl', price: '$9' },
      { name: 'Quinoa Buddha Bowl', price: '$11' },
      { name: 'Green Smoothie Bowl', price: '$9' },
      { name: 'Overnight Chia Oats', price: '$7' },
    ]
  },
];

const Menu = () => {
  return (
    <section className="py-24 relative" id="menu">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionTitle 
          subtitle="Our Menu" 
          title="Cuisines & Delights" 
          description="Explore our diverse selection of carefully crafted beverages, fresh pastries, and hearty meals to satisfy any craving."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menus.map((menu, index) => (
            <GlassCard 
              key={menu.id} 
              delay={index * 0.1}
              className="group flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-full bg-amber-glow/10 flex items-center justify-center text-amber-glow mb-6 group-hover:scale-110 group-hover:bg-amber-glow/20 transition-all duration-300">
                {menu.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-glow transition-colors font-serif">{menu.cuisine}</h3>
              
              <ul className="flex-grow space-y-3">
                {menu.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center text-warm-cream/80 border-b border-warm-cream/10 pb-2 last:border-0 last:pb-0">
                    <span>{item.name}</span>
                    <span className="text-amber-glow font-medium">{item.price}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
