import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, Area, AreaChart 
} from 'recharts';

const roadmapData = [
  { quarter: "Q1 2025", feature: "Tokenomics Design", status: "In Progress", priority: "High", owner: "Product Owner", completion: 65 },
  { quarter: "Q2 2025", feature: "Wallet Integration", status: "Planned", priority: "Medium", owner: "Dev Team", completion: 0 },
  { quarter: "Q3 2025", feature: "Exchange Launch", status: "Planned", priority: "High", owner: "PM, Marketing", completion: 0 },
];

const sprintData = [
  { task: "Staking System Design", status: "To Do", assignee: "Backend", priority: "High" },
  { task: "CoinGecko API Integration", status: "In Progress", assignee: "Dev Team", priority: "Medium" },
  { task: "2FA Feature Addition", status: "Done", assignee: "Security Team", priority: "High" },
  { task: "Multi-chain Support", status: "To Do", assignee: "Blockchain Team", priority: "Medium" },
  { task: "DeFi Protocol Integration", status: "In Progress", assignee: "Smart Contract", priority: "High" },
];

const feedbackData = [
  { feature: "Wallet", positive: 75, negative: 25, total: 1000, color: "#10B981" },
  { feature: "Trading", positive: 80, negative: 20, total: 800, color: "#3B82F6" },
  { feature: "Staking", positive: 65, negative: 35, total: 500, color: "#8B5CF6" },
];

const budgetData = [
  { category: "Token Development", allocation: 40, color: "#EF4444" },
  { category: "Security", allocation: 30, color: "#F59E0B" },
  { category: "Marketing", allocation: 20, color: "#10B981" },
  { category: "Reserve", allocation: 10, color: "#6B7280" },
];

const performanceData = [
  { sprint: "Sprint 1", completed: 3, speed: 10 },
  { sprint: "Sprint 2", completed: 5, speed: 15 },
  { sprint: "Sprint 3", completed: 7, speed: 20 },
  { sprint: "Sprint 4", completed: 8, speed: 25 },
  { sprint: "Sprint 5", completed: 10, speed: 30 },
];

const longTermRoadmap = [
  { date: "Q1 2025", feature: "DeFi Integration", status: "Planned", priority: "High" },
  { date: "Q2 2025", feature: "Trading Algorithm", status: "In Progress", priority: "High" },
  { date: "Q3 2025", feature: "Multichain Support", status: "Planned", priority: "Medium" },
  { date: "Q4 2025", feature: "Automated Market Making", status: "Research", priority: "Medium" },
];



export default function Methodology() {
  const [activeTab, setActiveTab] = useState('roadmap');

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'done': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'in progress': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'to do': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'planned': return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'bg-red-500/20 text-red-400';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'low': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-game-dark text-game-text overflow-x-hidden">
      {/* Back Navigation */}
      <div className="fixed top-4 left-4 z-50">
        <motion.a
          href="/"
          className="inline-flex items-center space-x-2 bg-game-darker/80 backdrop-blur-sm hover:bg-game-darker px-4 py-2 rounded-full border border-game-teal/30 transition-all duration-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fas fa-arrow-left text-game-teal"></i>
          <span className="text-game-text">Back to Home</span>
        </motion.a>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 bg-gradient-to-br from-game-darker to-purple-900/20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 rounded-2xl mx-auto mb-6 flex items-center justify-center animate-pulse-glow">
              <i className="fas fa-rocket text-white text-3xl"></i>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 gradient-text-rainbow">
              PDLC
            </h1>
            <p className="text-xl text-game-muted max-w-3xl mx-auto">
              Comprehensive crypto product development framework showcasing strategic roadmaps, 
              technical capabilities, and data-driven decision making processes.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 mb-12 px-4"
          >
            {[
              { id: 'roadmap', label: 'Roadmap', icon: 'fas fa-map' },
              { id: 'sprint', label: 'Sprint Board', icon: 'fas fa-tasks' },
              { id: 'feedback', label: 'Analytics', icon: 'fas fa-chart-pie' },
              { id: 'budget', label: 'Resources', icon: 'fas fa-coins' },
              { id: 'performance', label: 'Performance', icon: 'fas fa-chart-bar' },
              { id: 'documents', label: 'BRD/PRD', icon: 'fas fa-file-alt' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 text-sm md:px-4 md:py-2 md:text-base rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                    : 'bg-game-darker/50 text-game-muted hover:text-game-text border border-game-teal/30'
                }`}
              >
                <i className={`${tab.icon} mr-1 md:mr-2`}></i>
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Product Roadmap */}
          {activeTab === 'roadmap' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-center text-game-teal mb-8">
                <i className="fas fa-map mr-4"></i>Product Roadmap Timeline
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="rpg-dialog rounded-xl p-6">
                  <h3 className="text-xl font-bold text-game-yellow mb-6">Development Milestones</h3>
                  <div className="space-y-4">
                    {roadmapData.map((item, index) => (
                      <div key={index} className="border border-game-teal/30 rounded-lg p-4 bg-game-teal/5">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-bold text-game-text">{item.feature}</h4>
                            <p className="text-sm text-game-muted">{item.quarter}</p>
                          </div>
                          <div className="flex gap-2">
                            <span className={`px-2 py-1 rounded text-xs border ${getStatusColor(item.status)}`}>
                              {item.status}
                            </span>
                            <span className={`px-2 py-1 rounded text-xs ${getPriorityColor(item.priority)}`}>
                              {item.priority}
                            </span>
                          </div>
                        </div>
                        <div className="mb-2">
                          <div className="w-full bg-game-darker rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${item.completion}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-game-muted mt-1">{item.completion}% Complete</p>
                        </div>
                        <p className="text-sm text-game-purple">Owner: {item.owner}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rpg-dialog rounded-xl p-6">
                  <h3 className="text-xl font-bold text-game-purple mb-6">Progress Analytics</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={roadmapData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="quarter" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '8px'
                        }} 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="completion" 
                        stroke="#8B5CF6" 
                        fill="url(#colorGradient)"
                      />
                      <defs>
                        <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>
          )}

          {/* Sprint Backlog */}
          {activeTab === 'sprint' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-center text-game-teal mb-8">
                <i className="fas fa-tasks mr-4"></i>Sprint Backlog (Kanban Board)
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {['To Do', 'In Progress', 'Done'].map((status) => (
                  <div key={status} className="rpg-dialog rounded-xl p-6">
                    <h3 className={`text-lg font-bold mb-4 ${
                      status === 'To Do' ? 'text-blue-400' :
                      status === 'In Progress' ? 'text-yellow-400' : 'text-green-400'
                    }`}>
                      {status} ({sprintData.filter(item => item.status === status).length})
                    </h3>
                    <div className="space-y-3">
                      {sprintData
                        .filter(item => item.status === status)
                        .map((task, index) => (
                          <motion.div
                            key={index}
                            className="bg-game-darker/50 rounded-lg p-4 border border-game-teal/30"
                            whileHover={{ scale: 1.02 }}
                          >
                            <h4 className="font-semibold text-game-text mb-2">{task.task}</h4>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-game-muted">{task.assignee}</span>
                              <span className={`px-2 py-1 rounded text-xs ${getPriorityColor(task.priority)}`}>
                                {task.priority}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* User Feedback Analytics */}
          {activeTab === 'feedback' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-center text-game-teal mb-8">
                <i className="fas fa-chart-pie mr-4"></i>User Feedback Analytics
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="rpg-dialog rounded-xl p-6">
                  <h3 className="text-xl font-bold text-game-yellow mb-6">Feature Satisfaction</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={feedbackData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="feature" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '8px'
                        }} 
                      />
                      <Bar dataKey="positive" fill="#10B981" name="Positive %" />
                      <Bar dataKey="negative" fill="#EF4444" name="Negative %" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="rpg-dialog rounded-xl p-6">
                  <h3 className="text-xl font-bold text-game-purple mb-6">Response Summary</h3>
                  <div className="space-y-4">
                    {feedbackData.map((item, index) => (
                      <div key={index} className="border border-game-teal/30 rounded-lg p-4 bg-game-teal/5">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-bold text-game-text">{item.feature}</h4>
                          <span className="text-sm text-game-muted">{item.total} responses</span>
                        </div>
                        <div className="w-full bg-game-darker rounded-full h-3 mb-2">
                          <div 
                            className="bg-green-500 h-3 rounded-full"
                            style={{ width: `${item.positive}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-green-400">{item.positive}% Positive</span>
                          <span className="text-red-400">{item.negative}% Negative</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Budget & Resources */}
          {activeTab === 'budget' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-center text-game-teal mb-8">
                <i className="fas fa-coins mr-4"></i>Budget & Resources Allocation
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="rpg-dialog rounded-xl p-6">
                  <h3 className="text-xl font-bold text-game-yellow mb-6">Resource Distribution</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={budgetData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="allocation"
                        label={({ category, allocation }) => `${category}: ${allocation}%`}
                      >
                        {budgetData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="rpg-dialog rounded-xl p-6">
                  <h3 className="text-xl font-bold text-game-purple mb-6">Allocation Breakdown</h3>
                  <div className="space-y-4">
                    {budgetData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-game-darker/30 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div 
                            className="w-4 h-4 rounded-full" 
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <span className="font-semibold">{item.category}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-lg">{item.allocation}%</div>
                          <div className="text-sm text-game-muted">of total budget</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Team Performance */}
          {activeTab === 'performance' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-center text-game-teal mb-8">
                <i className="fas fa-chart-bar mr-4"></i>Team Performance Analytics
              </h2>
              
              <div className="rpg-dialog rounded-xl p-6">
                <h3 className="text-xl font-bold text-game-yellow mb-6">Sprint Velocity & Completion</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="sprint" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px'
                      }} 
                    />
                    <Bar dataKey="completed" fill="#8B5CF6" name="Features Completed" />
                    <Bar dataKey="speed" fill="#10B981" name="Development Speed %" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rpg-dialog rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">33</div>
                  <div className="text-game-muted">Total Features</div>
                </div>
                <div className="rpg-dialog rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">20%</div>
                  <div className="text-game-muted">Avg Velocity</div>
                </div>
                <div className="rpg-dialog rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">5</div>
                  <div className="text-game-muted">Active Sprints</div>
                </div>
              </div>
            </motion.div>
          )}



          {/* BRD/PRD Documents */}
          {activeTab === 'documents' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-center text-game-teal mb-8">
                <i className="fas fa-file-alt mr-4"></i>Business & Product Requirements Documentation
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* BRD Section */}
                <div className="rpg-dialog rounded-xl p-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <i className="fas fa-building text-white text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-game-yellow mb-2">
                      Business Requirements Document (BRD)
                    </h3>
                    <p className="text-game-muted text-sm">
                      Strategic foundation outlining business objectives and key requirements
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-game-darker/30 rounded-lg p-4">
                      <h4 className="font-bold text-game-teal mb-2 flex items-center">
                        <i className="fas fa-bullseye mr-2"></i>Business Objectives
                      </h4>
                      <p className="text-sm text-game-text">
                        Increase trading efficiency and security by launching an accessible crypto exchange platform focused on trading and staking.
                      </p>
                    </div>

                    <div className="bg-game-darker/30 rounded-lg p-4">
                      <h4 className="font-bold text-game-purple mb-2 flex items-center">
                        <i className="fas fa-users mr-2"></i>Key Stakeholders
                      </h4>
                      <ul className="text-sm text-game-text space-y-1">
                        <li>• Development Team: Technical implementation</li>
                        <li>• Marketing Team: Market campaigns & segments</li>
                        <li>• Users: Seamless & secure experience</li>
                      </ul>
                    </div>

                    <div className="bg-game-darker/30 rounded-lg p-4">
                      <h4 className="font-bold text-game-yellow mb-2 flex items-center">
                        <i className="fas fa-chart-line mr-2"></i>Success KPIs
                      </h4>
                      <ul className="text-sm text-game-text space-y-1">
                        <li>• Retention Rate: &gt;75% after 6 months</li>
                        <li>• Growth Rate: 50% transaction increase (12 months)</li>
                        <li>• User Churn: Reduce by improving satisfaction</li>
                      </ul>
                    </div>

                    <div className="bg-game-darker/30 rounded-lg p-4">
                      <h4 className="font-bold text-red-400 mb-2 flex items-center">
                        <i className="fas fa-shield-alt mr-2"></i>Risk Mitigation
                      </h4>
                      <ul className="text-sm text-game-text space-y-1">
                        <li>• Development delays: Additional developers & sprints</li>
                        <li>• Regulatory compliance: Legal review checkpoints</li>
                        <li>• Security risks: Multi-layer security framework</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* PRD Section */}
                <div className="rpg-dialog rounded-xl p-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <i className="fas fa-cogs text-white text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-game-yellow mb-2">
                      Product Requirements Document (PRD)
                    </h3>
                    <p className="text-game-muted text-sm">
                      Detailed feature specifications, user flows, and technical implementation
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-game-darker/30 rounded-lg p-4">
                      <h4 className="font-bold text-game-teal mb-2 flex items-center">
                        <i className="fas fa-lightbulb mr-2"></i>Product Vision
                      </h4>
                      <p className="text-sm text-game-text">
                        Secure and user-friendly crypto trading platform with lucrative staking opportunities and multi-currency support.
                      </p>
                    </div>

                    <div className="bg-game-darker/30 rounded-lg p-4">
                      <h4 className="font-bold text-game-purple mb-2 flex items-center">
                        <i className="fas fa-star mr-2"></i>Key Features
                      </h4>
                      <ul className="text-sm text-game-text space-y-1">
                        <li>• Multi-Currency Wallet: 10+ cryptocurrency storage</li>
                        <li>• Staking System: Lock tokens for passive rewards</li>
                        <li>• 2FA Security: Two-factor authentication</li>
                        <li>• Credit Card Integration: Easy fiat-to-crypto</li>
                      </ul>
                    </div>

                    <div className="bg-game-darker/30 rounded-lg p-4">
                      <h4 className="font-bold text-game-yellow mb-2 flex items-center">
                        <i className="fas fa-route mr-2"></i>User Flow
                      </h4>
                      <div className="text-sm text-game-text">
                        <p className="mb-2">Complete user journey:</p>
                        <div className="flex items-center space-x-2 text-xs">
                          <span className="bg-game-teal/20 px-2 py-1 rounded">Open App</span>
                          <i className="fas fa-arrow-right text-game-teal"></i>
                          <span className="bg-game-purple/20 px-2 py-1 rounded">Connect Wallet</span>
                          <i className="fas fa-arrow-right text-game-purple"></i>
                          <span className="bg-game-yellow/20 px-2 py-1 rounded">Transaction</span>
                          <i className="fas fa-arrow-right text-game-yellow"></i>
                          <span className="bg-green-500/20 px-2 py-1 rounded">Staking</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-game-darker/30 rounded-lg p-4">
                      <h4 className="font-bold text-green-400 mb-2 flex items-center">
                        <i className="fas fa-check-circle mr-2"></i>Success Criteria
                      </h4>
                      <ul className="text-sm text-game-text space-y-1">
                        <li>• Transaction processing: &lt;2 seconds</li>
                        <li>• Staking adoption: 60% users within 3 months</li>
                        <li>• New signups: 1,000 users/month</li>
                        <li>• Security: ISO 27001 compliance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Development Timeline */}
              <div className="rpg-dialog rounded-xl p-6 mt-8">
                <h3 className="text-2xl font-bold text-center text-game-yellow mb-6">
                  <i className="fas fa-calendar-alt mr-3"></i>Development Roadmap & Timeline
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold">Q1</span>
                    </div>
                    <h4 className="font-bold text-game-teal mb-2">Q1 2025</h4>
                    <p className="text-sm text-game-text">Multi-currency wallet development and core infrastructure setup</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold">Q2</span>
                    </div>
                    <h4 className="font-bold text-game-purple mb-2">Q2 2025</h4>
                    <p className="text-sm text-game-text">Staking system development, testing, and beta user onboarding</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold">Q3</span>
                    </div>
                    <h4 className="font-bold text-game-yellow mb-2">Q3 2025</h4>
                    <p className="text-sm text-game-text">2FA security implementation and full platform launch</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}