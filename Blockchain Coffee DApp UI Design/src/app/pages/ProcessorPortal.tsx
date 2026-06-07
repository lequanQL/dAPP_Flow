import { useState } from "react";
import { motion } from "motion/react";
import { Factory, Package, FileCheck, Bell, TrendingUp, AlertCircle } from "lucide-react";
import { SmartContractPanel } from "../components/SmartContractPanel";
import { QualityControlPanel } from "../components/QualityControlPanel";

const activeBatches = [
  { id: "BCH-2026-001", farmer: "Nguyễn Văn An", quantity: "2,500 kg", stage: "Drying", progress: 75, quality: "Premium" },
  { id: "BCH-2026-002", farmer: "Trần Thị Bình", quantity: "3,200 kg", stage: "Hulling", progress: 45, quality: "Grade A" },
  { id: "BCH-2026-003", farmer: "Lê Văn Cường", quantity: "2,800 kg", stage: "Sorting", progress: 90, quality: "Premium" },
];

const notifications = [
  { id: 1, type: "success", message: "Batch BCH-2026-001 quality check passed", time: "5 min ago" },
  { id: 2, type: "info", message: "New batch received from Phước An Farm", time: "1 hour ago" },
  { id: 3, type: "warning", message: "Temperature alert in drying zone 3", time: "2 hours ago" },
];

export function ProcessorPortal() {
  const [activeTab, setActiveTab] = useState<"batches" | "quality" | "contracts">("batches");
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-semibold text-[#4a3829] mb-2">
          Processor & Exporter Portal
        </h1>
        <p className="text-[#8b7355]">
          Track batch processing, quality control, and smart contract transactions
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm border border-[#e8dfd0] p-4"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#f4ebe0] rounded-lg">
              <Package className="size-5 text-[#6b4423]" />
            </div>
            <div>
              <p className="text-2xl font-semibold text-[#4a3829]">12</p>
              <p className="text-sm text-[#8b7355]">Active Batches</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm border border-[#e8dfd0] p-4"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#d4f4dd] rounded-lg">
              <FileCheck className="size-5 text-[#2d5f3d]" />
            </div>
            <div>
              <p className="text-2xl font-semibold text-[#4a3829]">98%</p>
              <p className="text-sm text-[#8b7355]">Quality Pass Rate</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-sm border border-[#e8dfd0] p-4"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#e3f2fd] rounded-lg">
              <TrendingUp className="size-5 text-[#1565c0]" />
            </div>
            <div>
              <p className="text-2xl font-semibold text-[#4a3829]">45</p>
              <p className="text-sm text-[#8b7355]">Shipped This Month</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-sm border border-[#e8dfd0] p-4"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#fff4e6] rounded-lg">
              <Bell className="size-5 text-[#f59e0b]" />
            </div>
            <div>
              <p className="text-2xl font-semibold text-[#4a3829]">3</p>
              <p className="text-sm text-[#8b7355]">New Alerts</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 border-b border-[#e8dfd0]">
        {[
          { id: "batches", label: "Batch Tracking", icon: Package },
          { id: "quality", label: "Quality Control", icon: FileCheck },
          { id: "contracts", label: "Smart Contracts", icon: Factory },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className="relative px-4 py-3 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Icon className={`size-4 ${isActive ? 'text-[#6b4423]' : 'text-[#8b7355]'}`} />
                <span className={`text-sm font-medium ${isActive ? 'text-[#4a3829]' : 'text-[#8b7355]'}`}>
                  {tab.label}
                </span>
              </div>
              {isActive && (
                <motion.div
                  layoutId="processorTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6b4423]"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Batch Tracking Tab */}
      {activeTab === "batches" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Batches */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-[#e8dfd0] p-6"
          >
            <h3 className="text-lg font-semibold text-[#4a3829] mb-6">Active Batches</h3>
            
            <div className="space-y-4">
              {activeBatches.map((batch, index) => (
                <motion.div
                  key={batch.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-[#e8dfd0] rounded-xl p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-[#4a3829]">{batch.id}</h4>
                      <p className="text-sm text-[#8b7355]">From {batch.farmer}</p>
                    </div>
                    <span className="px-3 py-1 bg-[#f4ebe0] text-[#6b4423] text-xs font-medium rounded-full">
                      {batch.quality}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-xs text-[#8b7355]">Quantity</p>
                      <p className="text-sm font-medium text-[#4a3829]">{batch.quantity}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#8b7355]">Current Stage</p>
                      <p className="text-sm font-medium text-[#4a3829]">{batch.stage}</p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-[#8b7355]">Progress</span>
                      <span className="text-xs font-medium text-[#6b4423]">{batch.progress}%</span>
                    </div>
                    <div className="h-2 bg-[#e8dfd0] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#6b4423] to-[#8b5a3c]"
                        initial={{ width: 0 }}
                        animate={{ width: `${batch.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Notifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm border border-[#e8dfd0] p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <Bell className="size-5 text-[#6b4423]" />
              <h3 className="text-lg font-semibold text-[#4a3829]">Notifications</h3>
            </div>
            
            <div className="space-y-3">
              {notifications.map((notif, index) => (
                <motion.div
                  key={notif.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-3 rounded-lg border ${
                    notif.type === "success" 
                      ? "bg-[#d4f4dd] border-[#5a9a5a]" 
                      : notif.type === "warning"
                      ? "bg-[#fff4e6] border-[#f59e0b]"
                      : "bg-[#e3f2fd] border-[#1565c0]"
                  }`}
                >
                  <p className={`text-sm font-medium mb-1 ${
                    notif.type === "success" 
                      ? "text-[#2d5f3d]" 
                      : notif.type === "warning"
                      ? "text-[#8b5a00]"
                      : "text-[#1565c0]"
                  }`}>
                    {notif.message}
                  </p>
                  <p className={`text-xs ${
                    notif.type === "success" 
                      ? "text-[#2d5f3d]/70" 
                      : notif.type === "warning"
                      ? "text-[#8b5a00]/70"
                      : "text-[#1565c0]/70"
                  }`}>
                    {notif.time}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {/* Quality Control Tab */}
      {activeTab === "quality" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <QualityControlPanel />
        </motion.div>
      )}

      {/* Smart Contracts Tab */}
      {activeTab === "contracts" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <SmartContractPanel />
        </motion.div>
      )}
    </div>
  );
}
