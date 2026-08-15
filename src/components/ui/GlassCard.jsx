import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', hover = true, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay }}
      className={`glass-panel p-6 ${hover ? 'glass-panel-hover' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
