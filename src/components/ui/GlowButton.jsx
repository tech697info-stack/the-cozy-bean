import { motion } from 'framer-motion';

const GlowButton = ({ children, onClick, type = "button", variant = "primary", className = "" }) => {
  const baseClasses = "relative inline-flex items-center justify-center px-8 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden group";
  
  const variants = {
    primary: "bg-amber-glow/10 text-amber-glow border border-amber-glow/30 hover:bg-amber-glow/20 hover:border-amber-glow/50 hover:shadow-glow",
    secondary: "bg-warm-cream/5 text-warm-cream border border-warm-cream/10 hover:bg-warm-cream/10 hover:border-warm-cream/30",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {variant === 'primary' && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-amber-glow/0 via-amber-glow/20 to-amber-glow/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      )}
    </motion.button>
  );
};

export default GlowButton;
