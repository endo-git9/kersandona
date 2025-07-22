import { motion } from 'framer-motion';

interface Achievement {
  value: string;
  label: string;
  color: string;
}

interface ExperienceCardProps {
  company: string;
  position: string;
  period?: string;
  icon: string;
  iconColor: string;
  achievements: Achievement[];
  skills: string[];
}

export function ExperienceCard({ 
  company, 
  position, 
  period, 
  icon, 
  iconColor, 
  achievements, 
  skills 
}: ExperienceCardProps) {
  return (
    <motion.div 
      className="rpg-dialog rounded-xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start space-x-6">
        <div className={`w-16 h-16 bg-gradient-to-br ${iconColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
          <i className={`${icon} text-white text-2xl`}></i>
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-game-text">{company}</h3>
          </div>
          <p className="text-game-purple font-semibold mb-3">{position}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {achievements.map((achievement, index) => (
              <div key={index} className={`${achievement.color} rounded-lg p-3 text-center`}>
                <div className={`font-bold ${achievement.color.includes('green') ? 'text-green-400' : 
                  achievement.color.includes('red') ? 'text-red-400' : 
                  achievement.color.includes('yellow') ? 'text-yellow-400' :
                  achievement.color.includes('blue') ? 'text-blue-400' :
                  achievement.color.includes('purple') ? 'text-purple-400' :
                  achievement.color.includes('teal') ? 'text-teal-400' :
                  achievement.color.includes('orange') ? 'text-orange-400' :
                  achievement.color.includes('pink') ? 'text-pink-400' :
                  achievement.color.includes('indigo') ? 'text-indigo-400' : 'text-white'}`}>
                  {achievement.value}
                </div>
                <div className="text-xs text-game-muted">{achievement.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-game-teal/20 text-game-teal px-2 py-1 rounded text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
