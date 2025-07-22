import { motion } from 'framer-motion';

interface PortfolioCardProps {
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  rarity: string;
  rating: number;
}

export function PortfolioCard({ 
  title, 
  description, 
  icon, 
  iconColor, 
  rarity, 
  rating 
}: PortfolioCardProps) {
  const rarityColors = {
    'Epic Quest': 'achievement-badge',
    'Legendary': 'achievement-badge',
    'Rare Quest': 'bg-purple-600/80 text-white'
  };

  return (
    <motion.div 
      className="rpg-dialog rounded-xl p-4 md:p-6 cursor-pointer group h-full flex flex-col"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center mb-3 md:mb-4">
        <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${iconColor} rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3`}>
          <i className={`${icon} text-white text-lg md:text-2xl`}></i>
        </div>
        <h3 className="text-lg md:text-xl font-bold text-game-text group-hover:text-game-teal transition-colors leading-tight">
          {title}
        </h3>
      </div>
      <p className="text-game-muted text-xs md:text-sm mb-3 md:mb-4 flex-grow leading-relaxed">{description}</p>
      <div className="flex justify-between items-center mt-auto">
        <span className={`${rarityColors[rarity as keyof typeof rarityColors] || 'achievement-badge'} px-2 py-1 rounded-full text-game-dark text-xs`}>
          {rarity}
        </span>
        <div className="text-game-yellow text-sm">
          {[...Array(5)].map((_, i) => (
            <i key={i} className={i < rating ? "fas fa-star" : "far fa-star"}></i>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
