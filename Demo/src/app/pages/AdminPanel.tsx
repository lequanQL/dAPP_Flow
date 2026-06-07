import { useState } from "react";
import { motion } from "motion/react";
import { Shield, Users, FileText, AlertTriangle, Activity, Settings, Eye, Lock } from "lucide-react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const analyticsData = [
  { date: "Jun 1", transactions: 45, verifications: 44, alerts: 2 },
  { date: "Jun 2", transactions: 52, verifications: 51, alerts: 1 },
  { date: "Jun 3", transactions: 48, verifications: 47, alerts: 3 },
  { date: "Jun 4", transactions: 61, verifications: 60, alerts: 1 },
  { date: "Jun 5", transactions: 58, verifications: 58, alerts: 0 },
  { date: "Jun 6", transactions: 70, verifications: 69, alerts: 2 },
  { date: "Jun 7", transactions: 75, verifications: 75, alerts: 0 },
];

const users = [
  { id: 1, name: "Nguyễn Văn An", role: "Farmer", status: "active", batches: 45, joined: "2024-01-15" },
  { id: 2, name: "Trần Thị Bình", role: "Farmer", status: "active", batches: 38, joined: "2024-03-20" },
  { id: 3, name: "Lê Văn Cường", role: "Processor", status: "active", batches: 120, joined: "2023-11-10" },
  { id: 4, name: "Phạm Thị Dung", role: "Exporter", status: "active", batches: 95, joined: "2023-09-05" },
];

const auditLogs = [
  { id: 1, action: "Batch Verified", user: "System", target: "BCH-2026-001", timestamp: "2026-06-07 14:32", status: "success" },
  { id: 2, action: "Contract Signed", user: "Lê Văn Cường", target: "SC-001", timestamp: "2026-06-07 13:15", status: "success" },
  { id: 3, action: "Quality Check Failed", user: "System", target: "BCH-2026-005", timestamp: "2026-06-07 11:45", status: "warning" },
  { id: 4, action: "User Role Updated", user: "Admin", target: "User #234", timestamp: "2026-06-07 10:20", status: "info" },
  { id: 5, action: "Export Approved", user: "Phạm Thị Dung", target: "BCH-2026-002", timestamp: "2026-06-07 09:00", status: "success" },
];

const smartContracts = [
  { id: "SC-001", name: "Purchase Agreement Template", active: true, uses: 45 },
  { id: "SC-002", name: "Quality Guarantee Template", active: true, uses: 38 },
  { id: "SC-003", name: "Export License Template", active: true, uses: 52 },
  { id: "SC-004", name: "Fair Trade Agreement", active: false, uses: 12 },
];

export function AdminPanel() {
  const [activeTab, setActiveTab] = useState<"overview" | "users" | "contracts" | "audit">("overview");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-gradient-to-br from-[#6b4423] to-[#8b5a3c] rounded-xl shadow-md">
            <Shield className="size-6 text-white" />
          </div>
          <h1 className="text-3xl font-semibold text-[#4a3829]">
            Admin & Governance Panel
          </h1>
        </div>
        <p className="text-[#8b7355]">
          Manage smart contracts, user roles, and monitor supply chain transparency
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm border border-[#e8dfd0] p-4"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#d4f4dd] rounded-lg">
              <Users className="size-5 text-[#2d5f3d]" />
            </div>
            <div>
              <p className="text-2xl font-semibold text-[#4a3829]">487</p>
              <p className="text-sm text-[#8b7355]">Active Users</p>
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
            <div className="p-2 bg-[#e3f2fd] rounded-lg">
              <FileText className="size-5 text-[#1565c0]" />
            </div>
            <div>
              <p className="text-2xl font-semibold text-[#4a3829]">147</p>
              <p className="text-sm text-[#8b7355]">Smart Contracts</p>
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
            <div className="p-2 bg-[#f4ebe0] rounded-lg">
              <Activity className="size-5 text-[#6b4423]" />
            </div>
            <div>
              <p className="text-2xl font-semibold text-[#4a3829]">1,243</p>
              <p className="text-sm text-[#8b7355]">Total Transactions</p>
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
              <AlertTriangle className="size-5 text-[#f59e0b]" />
            </div>
            <div>
              <p className="text-2xl font-semibold text-[#4a3829]">3</p>
              <p className="text-sm text-[#8b7355]">Active Alerts</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 border-b border-[#e8dfd0]">
        {[
          { id: "overview", label: "Overview", icon: Activity },
          { id: "users", label: "User Management", icon: Users },
          { id: "contracts", label: "Smart Contracts", icon: FileText },
          { id: "audit", label: "Audit Logs", icon: Eye },
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
                  layoutId="adminTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6b4423]"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* Analytics Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-sm border border-[#e8dfd0] p-6"
          >
            <h3 className="text-lg font-semibold text-[#4a3829] mb-6">Supply Chain Analytics</h3>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={analyticsData}>
                  <defs>
                    <linearGradient id="colorTransactions" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6b4423" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#6b4423" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorVerifications" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#5a9a5a" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#5a9a5a" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e8dfd0" />
                  <XAxis dataKey="date" stroke="#8b7355" />
                  <YAxis stroke="#8b7355" />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="transactions" 
                    stroke="#6b4423" 
                    fillOpacity={1} 
                    fill="url(#colorTransactions)" 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="verifications" 
                    stroke="#5a9a5a" 
                    fillOpacity={1} 
                    fill="url(#colorVerifications)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Fraud Detection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm border border-[#e8dfd0] p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-[#4a3829]">Fraud Detection & Alerts</h3>
              <span className="px-3 py-1 bg-[#d4f4dd] text-[#2d5f3d] text-sm font-medium rounded-full">
                All Systems Normal
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-[#e8dfd0] rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#8b7355]">Duplicate Batches</span>
                  <span className="text-2xl font-semibold text-[#5a9a5a]">0</span>
                </div>
                <div className="h-1.5 bg-[#e8dfd0] rounded-full overflow-hidden">
                  <div className="h-full bg-[#5a9a5a] w-0" />
                </div>
              </div>

              <div className="border border-[#e8dfd0] rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#8b7355]">Suspicious Activity</span>
                  <span className="text-2xl font-semibold text-[#5a9a5a]">0</span>
                </div>
                <div className="h-1.5 bg-[#e8dfd0] rounded-full overflow-hidden">
                  <div className="h-full bg-[#5a9a5a] w-0" />
                </div>
              </div>

              <div className="border border-[#e8dfd0] rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#8b7355]">Failed Verifications</span>
                  <span className="text-2xl font-semibold text-[#f59e0b]">3</span>
                </div>
                <div className="h-1.5 bg-[#e8dfd0] rounded-full overflow-hidden">
                  <div className="h-full bg-[#f59e0b] w-1/4" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Users Tab */}
      {activeTab === "users" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm border border-[#e8dfd0] p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-[#4a3829]">User Management</h3>
            <button className="px-4 py-2 bg-gradient-to-r from-[#6b4423] to-[#8b5a3c] text-white text-sm rounded-lg hover:shadow-lg transition-shadow">
              Add User
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#e8dfd0]">
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8b7355]">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8b7355]">Role</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8b7355]">Batches</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8b7355]">Joined</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8b7355]">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#8b7355]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-[#e8dfd0] last:border-0 hover:bg-[#faf8f5] transition-colors"
                  >
                    <td className="py-4 px-4 font-medium text-[#4a3829]">{user.name}</td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 bg-[#f4ebe0] text-[#6b4423] text-xs font-medium rounded-full">
                        {user.role}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-[#4a3829]">{user.batches}</td>
                    <td className="py-4 px-4 text-[#8b7355]">{user.joined}</td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 bg-[#d4f4dd] text-[#2d5f3d] text-xs font-medium rounded-full">
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        <button className="p-1 hover:bg-[#e8dfd0] rounded transition-colors">
                          <Eye className="size-4 text-[#8b7355]" />
                        </button>
                        <button className="p-1 hover:bg-[#e8dfd0] rounded transition-colors">
                          <Settings className="size-4 text-[#8b7355]" />
                        </button>
                        <button className="p-1 hover:bg-[#fce8e8] rounded transition-colors">
                          <Lock className="size-4 text-[#c62828]" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}

      {/* Smart Contracts Tab */}
      {activeTab === "contracts" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm border border-[#e8dfd0] p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-[#4a3829]">Smart Contract Templates</h3>
            <button className="px-4 py-2 bg-gradient-to-r from-[#6b4423] to-[#8b5a3c] text-white text-sm rounded-lg hover:shadow-lg transition-shadow">
              Deploy New Contract
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {smartContracts.map((contract, index) => (
              <motion.div
                key={contract.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-[#e8dfd0] rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#f4ebe0] rounded-lg">
                      <FileText className="size-5 text-[#6b4423]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#4a3829]">{contract.name}</h4>
                      <p className="text-xs text-[#8b7355]">{contract.id}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    contract.active 
                      ? "bg-[#d4f4dd] text-[#2d5f3d]" 
                      : "bg-[#e8dfd0] text-[#8b7355]"
                  }`}>
                    {contract.active ? "Active" : "Inactive"}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#8b7355]">Total Uses</p>
                    <p className="text-xl font-semibold text-[#4a3829]">{contract.uses}</p>
                  </div>
                  <button className="px-4 py-2 border-2 border-[#e8dfd0] text-[#4a3829] text-sm rounded-lg hover:bg-[#faf8f5] transition-colors">
                    Manage
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Audit Logs Tab */}
      {activeTab === "audit" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm border border-[#e8dfd0] p-6"
        >
          <h3 className="text-lg font-semibold text-[#4a3829] mb-6">Audit Logs</h3>

          <div className="space-y-3">
            {auditLogs.map((log, index) => (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`border rounded-xl p-4 ${
                  log.status === "success" 
                    ? "border-[#5a9a5a] bg-[#d4f4dd]/30" 
                    : log.status === "warning"
                    ? "border-[#f59e0b] bg-[#fff4e6]/30"
                    : "border-[#1565c0] bg-[#e3f2fd]/30"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-[#4a3829]">{log.action}</h4>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        log.status === "success" 
                          ? "bg-[#5a9a5a] text-white" 
                          : log.status === "warning"
                          ? "bg-[#f59e0b] text-white"
                          : "bg-[#1565c0] text-white"
                      }`}>
                        {log.status}
                      </span>
                    </div>
                    <p className="text-sm text-[#8b7355]">
                      By {log.user} • Target: {log.target}
                    </p>
                  </div>
                  <span className="text-xs text-[#8b7355] whitespace-nowrap">
                    {log.timestamp}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
