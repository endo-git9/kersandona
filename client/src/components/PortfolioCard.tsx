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
      className="rpg-dialog rounded-xl p-6 cursor-pointer group"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center mb-4">
        <div className={`w-16 h-16 bg-gradient-to-br ${iconColor} rounded-full flex items-center justify-center mx-auto mb-3`}>
          <i className={`${icon} text-white text-2xl`}></i>
        </div>
        <h3 className="text-xl font-bold text-game-text group-hover:text-game-teal transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-game-muted text-sm mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className={`${rarityColors[rarity as keyof typeof rarityColors] || 'achievement-badge'} px-2 py-1 rounded-full text-game-dark text-xs`}>
          {rarity}
        </span>
        <div className="text-game-yellow">
          {[...Array(5)].map((_, i) => (
            <i key={i} className={i < rating ? "fas fa-star" : "far fa-star"}></i>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
