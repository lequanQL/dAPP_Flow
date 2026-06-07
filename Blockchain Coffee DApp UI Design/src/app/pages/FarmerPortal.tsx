import { useState } from "react";
import { motion } from "motion/react";
import { User, MapPin, Award, Upload, CheckCircle, Clock, Package } from "lucide-react";
import { Timeline } from "../components/Timeline";
import { BatchUploadForm } from "../components/BatchUploadForm";

const farmerProfile = {
  name: "Nguyễn Văn An",
  farmName: "Phước An Coffee Farm",
  location: "Đắk Lắk, Vietnam",
  established: "2015",
  certifications: ["Organic", "Fair Trade", "Rainforest Alliance"],
  totalBatches: 45,
  verified: 44,
  area: "12 hectares",
};

const harvestLogs = [
  { id: "BCH-2026-001", date: "2026-06-01", quantity: "2,500 kg", status: "Exported", quality: "Premium" },
  { id: "BCH-2026-002", date: "2026-05-28", quantity: "3,200 kg", status: "Processing", quality: "Grade A" },
  { id: "BCH-2026-003", date: "2026-05-25", quantity: "2,800 kg", status: "Verified", quality: "Premium" },
  { id: "BCH-2026-004", date: "2026-05-20", quantity: "3,000 kg", status: "Exported", quality: "Grade A" },
];

export function FarmerPortal() {
  const [activeTab, setActiveTab] = useState<"profile" | "upload" | "logs">("profile");
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-semibold text-[#4a3829] mb-2">
          Farmer Portal
        </h1>
        <p className="text-[#8b7355]">
          Manage your farm profile, certifications, and coffee batches
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 border-b border-[#e8dfd0]">
        {[
          { id: "profile", label: "Profile", icon: User },
          { id: "upload", label: "Upload Batch", icon: Upload },
          { id: "logs", label: "Harvest Logs", icon: Package },
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
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6b4423]"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Profile Tab */}
      {activeTab === "profile" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-1 bg-white rounded-2xl shadow-sm border border-[#e8dfd0] p-6"
          >
            <div className="text-center mb-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#6b4423] to-[#8b5a3c] rounded-full flex items-center justify-center mb-4">
                <User className="size-12 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-[#4a3829] mb-1">{farmerProfile.name}</h2>
              <p className="text-[#8b7355] mb-2">{farmerProfile.farmName}</p>
              <div className="flex items-center justify-center gap-1 text-sm text-[#8b7355]">
                <MapPin className="size-4" />
                {farmerProfile.location}
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center py-2 border-b border-[#e8dfd0]">
                <span className="text-sm text-[#8b7355]">Established</span>
                <span className="text-sm font-medium text-[#4a3829]">{farmerProfile.established}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#e8dfd0]">
                <span className="text-sm text-[#8b7355]">Farm Area</span>
                <span className="text-sm font-medium text-[#4a3829]">{farmerProfile.area}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#e8dfd0]">
                <span className="text-sm text-[#8b7355]">Total Batches</span>
                <span className="text-sm font-medium text-[#4a3829]">{farmerProfile.totalBatches}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-[#8b7355]">Verified</span>
                <span className="text-sm font-medium text-[#5a9a5a]">{farmerProfile.verified}</span>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="size-4 text-[#6b4423]" />
                <h3 className="text-sm font-semibold text-[#4a3829]">Certifications</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {farmerProfile.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1.5 bg-[#f4ebe0] text-[#6b4423] text-xs font-medium rounded-lg"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Timeline />
          </motion.div>
        </div>
      )}

      {/* Upload Tab */}
      {activeTab === "upload" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <BatchUploadForm />
        </motion.div>
      )}

      {/* Logs Tab */}
      {activeTab === "logs" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm border border-[#e8dfd0] p-6"
        >
          <h3 className="text-lg font-semibold text-[#4a3829] mb-6">Harvest History</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#e8dfd0]">
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8b7355]">Batch ID</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8b7355]">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8b7355]">Quantity</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8b7355]">Quality</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8b7355]">Status</th>
                </tr>
              </thead>
              <tbody>
                {harvestLogs.map((log, index) => (
                  <motion.tr
                    key={log.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-[#e8dfd0] last:border-0 hover:bg-[#faf8f5] transition-colors"
                  >
                    <td className="py-4 px-4 font-medium text-[#4a3829]">{log.id}</td>
                    <td className="py-4 px-4 text-[#8b7355]">{log.date}</td>
                    <td className="py-4 px-4 text-[#4a3829]">{log.quantity}</td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 bg-[#f4ebe0] text-[#6b4423] text-xs font-medium rounded-full">
                        {log.quality}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                        log.status === "Exported" 
                          ? "bg-[#d4f4dd] text-[#2d5f3d]" 
                          : log.status === "Processing"
                          ? "bg-[#fff4e6] text-[#8b5a00]"
                          : "bg-[#e3f2fd] text-[#1565c0]"
                      }`}>
                        {log.status === "Exported" && <CheckCircle className="size-3" />}
                        {log.status === "Processing" && <Clock className="size-3" />}
                        {log.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}
    </div>
  );
}
