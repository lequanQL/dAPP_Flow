import { motion } from "motion/react";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  change?: string;
  trend?: "up" | "down";
  delay?: number;
}

export function StatsCard({ icon: Icon, label, value, change, trend, delay = 0 }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white rounded-2xl shadow-sm border border-[#e8dfd0] p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-gradient-to-br from-[#f4ebe0] to-[#e8dfd0] rounded-xl">
          <Icon className="size-6 text-[#6b4423]" />
        </div>
        {change && (
          <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${
            trend === "up" ? "bg-[#d4f4dd]" : "bg-[#fce8e8]"
          }`}>
            {trend === "up" ? (
              <TrendingUp className="size-3 text-[#2d5f3d]" />
            ) : (
              <TrendingDown className="size-3 text-[#c62828]" />
            )}
            <span className={`text-xs font-medium ${
              trend === "up" ? "text-[#2d5f3d]" : "text-[#c62828]"
            }`}>
              {change}
            </span>
          </div>
        )}
      </div>
      
      <div>
        <p className="text-2xl font-semibold text-[#4a3829] mb-1">{value}</p>
        <p className="text-sm text-[#8b7355]">{label}</p>
      </div>
    </motion.div>
  );
}
