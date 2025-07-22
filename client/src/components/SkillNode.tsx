import { motion } from 'framer-motion';

interface SkillNodeProps {
  name: string;
  level: number;
  description: string;
  color: string;
  icon: string;
}

export function SkillNode({ name, level, description, color, icon }: SkillNodeProps) {
  return (
    <motion.div 
      className="skill-node tooltip-trigger relative"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className={`bg-gradient-to-r ${color} p-4 rounded-lg cursor-pointer`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <i className={`${icon} text-lg`}></i>
            <span className="font-semibold">{name}</span>
          </div>
          <div className="w-20 bg-gray-700 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${color.includes('teal') ? 'bg-game-teal' : color.includes('purple') ? 'bg-game-purple' : 'bg-game-yellow'}`}
              style={{ width: `${level}%` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="tooltip absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm whitespace-nowrap">
        {description}
      </div>
    </motion.div>
  );
}
