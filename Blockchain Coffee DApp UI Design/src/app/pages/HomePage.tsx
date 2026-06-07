import { useState } from "react";
import { motion } from "motion/react";
import { TrendingUp, Users, Package, CheckCircle, MapPin, Leaf, Award, BarChart3 } from "lucide-react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { StatsCard } from "../components/StatsCard";
import { InteractiveMap } from "../components/InteractiveMap";
import { BlockchainBadge } from "../components/BlockchainBadge";
import { OnboardingGuide } from "../components/OnboardingGuide";

const supplyChainData = [
  { month: "Jan", batches: 45, verified: 45 },
  { month: "Feb", batches: 52, verified: 51 },
  { month: "Mar", batches: 61, verified: 60 },
  { month: "Apr", batches: 58, verified: 58 },
  { month: "May", batches: 70, verified: 69 },
  { month: "Jun", batches: 75, verified: 75 },
];

const qualityData = [
  { name: "Premium", value: 45, color: "#6b4423" },
  { name: "Grade A", value: 35, color: "#8b5a3c" },
  { name: "Grade B", value: 15, color: "#a97c50" },
  { name: "Standard", value: 5, color: "#c9a882" },
];

const recentBatches = [
  { id: "BCH-2026-001", farmer: "Nguyễn Văn An", date: "2026-06-05", status: "Exported", location: "Đắk Lắk" },
  { id: "BCH-2026-002", farmer: "Trần Thị Bình", date: "2026-06-06", status: "Processing", location: "Đắk Nông" },
  { id: "BCH-2026-003", farmer: "Lê Văn Cường", date: "2026-06-07", status: "Verified", location: "Đắk Lắk" },
];

export function HomePage() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Onboarding Guide */}
      {showOnboarding && <OnboardingGuide onComplete={() => setShowOnboarding(false)} />}
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-[#4a3829] mb-2">
              Supply Chain Dashboard
            </h1>
            <p className="text-[#8b7355]">
              Real-time tracking and verification of Robusta coffee from Đắk Lắk, Vietnam
            </p>
          </div>
          <button
            onClick={() => setShowOnboarding(true)}
            className="px-4 py-2 border-2 border-[#e8dfd0] text-[#4a3829] rounded-xl hover:bg-[#faf8f5] transition-colors text-sm font-medium"
          >
            Quick Tour
          </button>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          icon={Package}
          label="Active Batches"
          value="156"
          change="+12%"
          trend="up"
          delay={0.1}
        />
        <StatsCard
          icon={Users}
          label="Registered Farmers"
          value="487"
          change="+8%"
          trend="up"
          delay={0.2}
        />
        <StatsCard
          icon={CheckCircle}
          label="Verified Shipments"
          value="1,243"
          change="+15%"
          trend="up"
          delay={0.3}
        />
        <StatsCard
          icon={TrendingUp}
          label="Transparency Score"
          value="98.5%"
          change="+2.3%"
          trend="up"
          delay={0.4}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Interactive Map - 2 columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-2"
        >
          <InteractiveMap />
        </motion.div>

        {/* Quality Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-sm border border-[#e8dfd0] p-6"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-[#f4ebe0] rounded-lg">
              <Award className="size-5 text-[#6b4423]" />
            </div>
            <h3 className="font-semibold text-[#4a3829]">Quality Distribution</h3>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={qualityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {qualityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="space-y-2 mt-4">
            {qualityData.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-[#4a3829]">{item.name}</span>
                </div>
                <span className="text-sm font-medium text-[#6b4423]">{item.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Supply Chain Tracking */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-2xl shadow-sm border border-[#e8dfd0] p-6"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-[#f4ebe0] rounded-lg">
              <BarChart3 className="size-5 text-[#6b4423]" />
            </div>
            <h3 className="font-semibold text-[#4a3829]">Monthly Batch Tracking</h3>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={supplyChainData}>
                <defs>
                  <linearGradient id="colorBatches" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6b4423" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6b4423" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e8dfd0" />
                <XAxis dataKey="month" stroke="#8b7355" />
                <YAxis stroke="#8b7355" />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="batches" 
                  stroke="#6b4423" 
                  fillOpacity={1} 
                  fill="url(#colorBatches)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Verification Rate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl shadow-sm border border-[#e8dfd0] p-6"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-[#f4ebe0] rounded-lg">
              <CheckCircle className="size-5 text-[#6b4423]" />
            </div>
            <h3 className="font-semibold text-[#4a3829]">Blockchain Verification</h3>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={supplyChainData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e8dfd0" />
                <XAxis dataKey="month" stroke="#8b7355" />
                <YAxis stroke="#8b7355" />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="verified" 
                  stroke="#5a9a5a" 
                  strokeWidth={3}
                  dot={{ fill: "#5a9a5a", r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="batches" 
                  stroke="#8b7355" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: "#8b7355", r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Recent Batches */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-white rounded-2xl shadow-sm border border-[#e8dfd0] p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-[#f4ebe0] rounded-lg">
              <Package className="size-5 text-[#6b4423]" />
            </div>
            <h3 className="font-semibold text-[#4a3829]">Recent Batches</h3>
          </div>
          <BlockchainBadge verified={true} />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#e8dfd0]">
                <th className="text-left py-3 px-4 text-sm font-medium text-[#8b7355]">Batch ID</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#8b7355]">Farmer</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#8b7355]">Location</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#8b7355]">Date</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#8b7355]">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentBatches.map((batch, index) => (
                <motion.tr
                  key={batch.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="border-b border-[#e8dfd0] last:border-0 hover:bg-[#faf8f5] transition-colors"
                >
                  <td className="py-4 px-4 font-medium text-[#4a3829]">{batch.id}</td>
                  <td className="py-4 px-4 text-[#4a3829]">{batch.farmer}</td>
                  <td className="py-4 px-4 text-[#8b7355] flex items-center gap-1">
                    <MapPin className="size-3" />
                    {batch.location}
                  </td>
                  <td className="py-4 px-4 text-[#8b7355]">{batch.date}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      batch.status === "Exported" 
                        ? "bg-[#d4f4dd] text-[#2d5f3d]" 
                        : batch.status === "Processing"
                        ? "bg-[#fff4e6] text-[#8b5a00]"
                        : "bg-[#e3f2fd] text-[#1565c0]"
                    }`}>
                      {batch.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}