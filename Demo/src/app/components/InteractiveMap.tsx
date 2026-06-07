import { useState } from "react";
import { MapPin, Factory, Ship, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

interface Location {
  id: string;
  name: string;
  type: "farm" | "processor" | "port";
  lat: number;
  lng: number;
  status: "active" | "processing" | "completed";
}

const locations: Location[] = [
  { id: "1", name: "Phước An Farm", type: "farm", lat: 40, lng: 25, status: "active" },
  { id: "2", name: "Buôn Ma Thuột Processing", type: "processor", lat: 45, lng: 40, status: "processing" },
  { id: "3", name: "Đà Nẵng Port", type: "port", lat: 60, lng: 70, status: "completed" },
  { id: "4", name: "Ea Súp Farm", type: "farm", lat: 30, lng: 30, status: "active" },
  { id: "5", name: "Krông Năng Farm", type: "farm", lat: 35, lng: 20, status: "active" },
];

export function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  
  const getIcon = (type: string) => {
    switch (type) {
      case "farm": return MapPin;
      case "processor": return Factory;
      case "port": return Ship;
      default: return MapPin;
    }
  };
  
  const getColor = (status: string) => {
    switch (status) {
      case "active": return "#5a9a5a";
      case "processing": return "#f59e0b";
      case "completed": return "#6b4423";
      default: return "#8b7355";
    }
  };
  
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#e8dfd0] p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-[#f4ebe0] rounded-lg">
          <MapPin className="size-5 text-[#6b4423]" />
        </div>
        <h3 className="font-semibold text-[#4a3829]">Supply Chain Map</h3>
      </div>
      
      <div className="relative bg-gradient-to-br from-[#f4ebe0] to-[#e8dfd0] rounded-xl overflow-hidden" style={{ height: "400px" }}>
        {/* Map Background */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6b4423" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <motion.path
            d="M 25% 40% Q 40% 35%, 40% 40%"
            stroke="#6b4423"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M 40% 40% Q 50% 50%, 70% 70%"
            stroke="#6b4423"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          />
        </svg>
        
        {/* Location Markers */}
        {locations.map((location, index) => {
          const Icon = getIcon(location.type);
          const color = getColor(location.status);
          
          return (
            <motion.div
              key={location.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2, type: "spring" }}
              className="absolute cursor-pointer group"
              style={{ 
                left: `${location.lng}%`, 
                top: `${location.lat}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onClick={() => setSelectedLocation(location)}
            >
              {/* Pulse Animation */}
              {location.status === "active" && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: color }}
                  animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
              
              {/* Marker */}
              <div 
                className="relative w-10 h-10 rounded-full shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform"
                style={{ backgroundColor: color }}
              >
                <Icon className="size-5 text-white" />
              </div>
              
              {/* Tooltip */}
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                <p className="text-xs font-medium text-[#4a3829]">{location.name}</p>
                <p className="text-xs text-[#8b7355] capitalize">{location.type}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#5a9a5a]" />
          <span className="text-xs text-[#8b7355]">Active Farms</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
          <span className="text-xs text-[#8b7355]">Processing</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#6b4423]" />
          <span className="text-xs text-[#8b7355]">Completed</span>
        </div>
      </div>
    </div>
  );
}
