import { motion } from "motion/react";
import { Award, ThermometerSun, Droplets, Scale, CheckCircle, XCircle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

const qualityMetrics = [
  { parameter: "Moisture", value: 12.5, standard: 12, status: "pass", unit: "%" },
  { parameter: "Density", value: 720, standard: 700, status: "pass", unit: "kg/m³" },
  { parameter: "Size", value: 95, standard: 90, status: "pass", unit: "%" },
  { parameter: "Defects", value: 2, standard: 5, status: "pass", unit: "%" },
  { parameter: "Temperature", value: 45, standard: 50, status: "pass", unit: "°C" },
];

const radarData = [
  { quality: "Aroma", value: 90, fullMark: 100 },
  { quality: "Flavor", value: 85, fullMark: 100 },
  { quality: "Body", value: 88, fullMark: 100 },
  { quality: "Acidity", value: 82, fullMark: 100 },
  { quality: "Balance", value: 87, fullMark: 100 },
];

const batchHistory = [
  { date: "Jun 1", passed: 12, failed: 1 },
  { date: "Jun 2", passed: 15, failed: 0 },
  { date: "Jun 3", passed: 10, failed: 2 },
  { date: "Jun 4", passed: 14, failed: 1 },
  { date: "Jun 5", passed: 16, failed: 0 },
  { date: "Jun 6", passed: 13, failed: 1 },
  { date: "Jun 7", passed: 11, failed: 0 },
];

export function QualityControlPanel() {
  return (
    <div className="space-y-6">
      {/* Quality Metrics */}
      <div className="bg-white rounded-2xl shadow-sm border border-[#e8dfd0] p-6">
        <h3 className="text-lg font-semibold text-[#4a3829] mb-6">Current Batch Quality Metrics</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {qualityMetrics.map((metric, index) => {
            const icons = {
              Moisture: Droplets,
              Density: Scale,
              Size: Award,
              Temperature: ThermometerSun,
              Defects: Award
            };
            const Icon = icons[metric.parameter as keyof typeof icons] || Award;
            
            return (
              <motion.div
                key={metric.parameter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-[#e8dfd0] rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className="size-5 text-[#6b4423]" />
                  {metric.status === "pass" ? (
                    <CheckCircle className="size-4 text-[#5a9a5a]" />
                  ) : (
                    <XCircle className="size-4 text-[#c62828]" />
                  )}
                </div>
                <p className="text-2xl font-semibold text-[#4a3829] mb-1">
                  {metric.value}{metric.unit}
                </p>
                <p className="text-xs text-[#8b7355]">{metric.parameter}</p>
                <p className="text-xs text-[#8b7355] mt-1">
                  Standard: {metric.standard}{metric.unit}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quality Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-sm border border-[#e8dfd0] p-6"
        >
          <h3 className="text-lg font-semibold text-[#4a3829] mb-6">Sensory Quality Profile</h3>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e8dfd0" />
                <PolarAngleAxis dataKey="quality" tick={{ fill: '#8b7355', fontSize: 12 }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#8b7355' }} />
                <Radar 
                  name="Quality" 
                  dataKey="value" 
                  stroke="#6b4423" 
                  fill="#6b4423" 
                  fillOpacity={0.3} 
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 p-3 bg-[#d4f4dd] rounded-lg flex items-center gap-2">
            <CheckCircle className="size-5 text-[#2d5f3d]" />
            <p className="text-sm text-[#2d5f3d] font-medium">
              Overall Score: 86/100 - Premium Grade
            </p>
          </div>
        </motion.div>

        {/* Pass/Fail History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-2xl shadow-sm border border-[#e8dfd0] p-6"
        >
          <h3 className="text-lg font-semibold text-[#4a3829] mb-6">Quality Check History</h3>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={batchHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e8dfd0" />
                <XAxis dataKey="date" stroke="#8b7355" />
                <YAxis stroke="#8b7355" />
                <Tooltip />
                <Bar dataKey="passed" fill="#5a9a5a" radius={[8, 8, 0, 0]} />
                <Bar dataKey="failed" fill="#c62828" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#5a9a5a]" />
              <span className="text-sm text-[#8b7355]">Passed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#c62828]" />
              <span className="text-sm text-[#8b7355]">Failed</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quality Tests */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white rounded-2xl shadow-sm border border-[#e8dfd0] p-6"
      >
        <h3 className="text-lg font-semibold text-[#4a3829] mb-6">Recent Quality Tests</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#e8dfd0]">
                <th className="text-left py-3 px-4 text-sm font-medium text-[#8b7355]">Batch ID</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#8b7355]">Test Date</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#8b7355]">Moisture</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#8b7355]">Density</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#8b7355]">Grade</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#8b7355]">Result</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: "BCH-2026-001", date: "2026-06-07", moisture: "12.5%", density: "720", grade: "Premium", result: "pass" },
                { id: "BCH-2026-002", date: "2026-06-06", moisture: "13.1%", density: "715", grade: "Grade A", result: "pass" },
                { id: "BCH-2026-003", date: "2026-06-05", moisture: "11.8%", density: "725", grade: "Premium", result: "pass" },
              ].map((test, index) => (
                <motion.tr
                  key={test.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="border-b border-[#e8dfd0] last:border-0 hover:bg-[#faf8f5] transition-colors"
                >
                  <td className="py-4 px-4 font-medium text-[#4a3829]">{test.id}</td>
                  <td className="py-4 px-4 text-[#8b7355]">{test.date}</td>
                  <td className="py-4 px-4 text-[#4a3829]">{test.moisture}</td>
                  <td className="py-4 px-4 text-[#4a3829]">{test.density}</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 bg-[#f4ebe0] text-[#6b4423] text-xs font-medium rounded-full">
                      {test.grade}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="size-4 text-[#5a9a5a]" />
                      <span className="text-sm font-medium text-[#5a9a5a]">Passed</span>
                    </div>
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
