import { motion } from "motion/react";
import { Sprout, Droplet, Sun, Package, Factory, Ship, CheckCircle } from "lucide-react";

const timelineStages = [
  { 
    id: 1, 
    title: "Planting", 
    description: "Seeds planted in nursery",
    date: "Jan 2026",
    icon: Sprout,
    status: "completed"
  },
  { 
    id: 2, 
    title: "Growing", 
    description: "Regular irrigation and care",
    date: "Feb - Apr 2026",
    icon: Droplet,
    status: "completed"
  },
  { 
    id: 3, 
    title: "Harvesting", 
    description: "Cherry picking at peak ripeness",
    date: "May 2026",
    icon: Sun,
    status: "completed"
  },
  { 
    id: 4, 
    title: "Processing", 
    description: "Wet processing and drying",
    date: "Jun 2026",
    icon: Factory,
    status: "active"
  },
  { 
    id: 5, 
    title: "Packaging", 
    description: "Quality control and packaging",
    date: "Pending",
    icon: Package,
    status: "pending"
  },
  { 
    id: 6, 
    title: "Export", 
    description: "Shipment to international markets",
    date: "Pending",
    icon: Ship,
    status: "pending"
  },
];

export function Timeline() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#e8dfd0] p-6">
      <h3 className="text-lg font-semibold text-[#4a3829] mb-6">Production Timeline</h3>
      
      <div className="space-y-6">
        {timelineStages.map((stage, index) => {
          const Icon = stage.icon;
          const isCompleted = stage.status === "completed";
          const isActive = stage.status === "active";
          const isPending = stage.status === "pending";
          
          return (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative flex gap-4"
            >
              {/* Timeline Line */}
              {index < timelineStages.length - 1 && (
                <div 
                  className={`absolute left-5 top-12 w-0.5 h-full -ml-px ${
                    isCompleted ? "bg-[#5a9a5a]" : "bg-[#e8dfd0]"
                  }`}
                />
              )}
              
              {/* Icon */}
              <div className="relative z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isCompleted 
                    ? "bg-[#5a9a5a] shadow-md shadow-[#5a9a5a]/30" 
                    : isActive
                    ? "bg-[#f59e0b] shadow-md shadow-[#f59e0b]/30"
                    : "bg-[#e8dfd0]"
                }`}>
                  {isCompleted ? (
                    <CheckCircle className="size-5 text-white" />
                  ) : (
                    <Icon className={`size-5 ${isActive ? "text-white" : "text-[#8b7355]"}`} />
                  )}
                </div>
                
                {/* Pulse for active */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#f59e0b]"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="flex items-start justify-between mb-1">
                  <h4 className={`font-semibold ${
                    isCompleted || isActive ? "text-[#4a3829]" : "text-[#8b7355]"
                  }`}>
                    {stage.title}
                  </h4>
                  <span className={`text-xs px-2 py-1 rounded-lg ${
                    isCompleted 
                      ? "bg-[#d4f4dd] text-[#2d5f3d]"
                      : isActive
                      ? "bg-[#fff4e6] text-[#8b5a00]"
                      : "bg-[#f4ebe0] text-[#8b7355]"
                  }`}>
                    {stage.date}
                  </span>
                </div>
                <p className="text-sm text-[#8b7355]">{stage.description}</p>
                
                {/* Progress indicator for active stage */}
                {isActive && (
                  <div className="mt-3">
                    <div className="h-1.5 bg-[#e8dfd0] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#f59e0b]"
                        initial={{ width: 0 }}
                        animate={{ width: "65%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                    <p className="text-xs text-[#8b7355] mt-1">65% complete</p>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
