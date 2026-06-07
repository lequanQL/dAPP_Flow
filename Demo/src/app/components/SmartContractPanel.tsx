import { useState } from "react";
import { motion } from "motion/react";
import { FileText, Send, CheckCircle2, Clock, AlertCircle, ExternalLink } from "lucide-react";
import { BlockchainBadge } from "./BlockchainBadge";

const contracts = [
  {
    id: "SC-001",
    type: "Purchase Agreement",
    parties: ["Processor Co.", "Exporter Ltd."],
    status: "active",
    value: "$25,000",
    batch: "BCH-2026-001",
    created: "2026-06-01",
    hash: "0x7d8f3a9b2c1e4f5a6b7c8d9e0f1a2b3c4d5e6f7a"
  },
  {
    id: "SC-002",
    type: "Quality Guarantee",
    parties: ["Farmer An", "Processor Co."],
    status: "pending",
    value: "$12,500",
    batch: "BCH-2026-002",
    created: "2026-06-05",
    hash: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b"
  },
  {
    id: "SC-003",
    type: "Export License",
    parties: ["Exporter Ltd.", "Customs"],
    status: "completed",
    value: "$5,000",
    batch: "BCH-2026-001",
    created: "2026-05-28",
    hash: "0x9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b"
  },
];

export function SmartContractPanel() {
  const [selectedContract, setSelectedContract] = useState(contracts[0]);
  const [showSignModal, setShowSignModal] = useState(false);
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Contracts List */}
      <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-[#e8dfd0] p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-[#4a3829]">Smart Contracts</h3>
          <button className="px-4 py-2 bg-gradient-to-r from-[#6b4423] to-[#8b5a3c] text-white text-sm rounded-lg hover:shadow-lg transition-shadow">
            New Contract
          </button>
        </div>
        
        <div className="space-y-3">
          {contracts.map((contract, index) => (
            <motion.div
              key={contract.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedContract(contract)}
              className={`border rounded-xl p-4 cursor-pointer transition-all ${
                selectedContract.id === contract.id
                  ? "border-[#6b4423] bg-[#faf8f5] shadow-md"
                  : "border-[#e8dfd0] hover:border-[#8b7355]"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FileText className="size-4 text-[#6b4423]" />
                    <h4 className="font-semibold text-[#4a3829]">{contract.id}</h4>
                  </div>
                  <p className="text-sm text-[#8b7355]">{contract.type}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  contract.status === "active"
                    ? "bg-[#d4f4dd] text-[#2d5f3d]"
                    : contract.status === "pending"
                    ? "bg-[#fff4e6] text-[#8b5a00]"
                    : "bg-[#e3f2fd] text-[#1565c0]"
                }`}>
                  {contract.status === "active" && <CheckCircle2 className="inline size-3 mr-1" />}
                  {contract.status === "pending" && <Clock className="inline size-3 mr-1" />}
                  {contract.status}
                </span>
              </div>
              
              <div className="flex items-center gap-4 text-xs text-[#8b7355]">
                <span>Batch: {contract.batch}</span>
                <span>•</span>
                <span>Value: {contract.value}</span>
                <span>•</span>
                <span>{contract.created}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contract Details */}
      <div className="bg-white rounded-2xl shadow-sm border border-[#e8dfd0] p-6">
        <h3 className="text-lg font-semibold text-[#4a3829] mb-6">Contract Details</h3>
        
        <div className="space-y-4">
          <div>
            <p className="text-xs text-[#8b7355] mb-1">Contract ID</p>
            <p className="font-medium text-[#4a3829]">{selectedContract.id}</p>
          </div>
          
          <div>
            <p className="text-xs text-[#8b7355] mb-1">Type</p>
            <p className="font-medium text-[#4a3829]">{selectedContract.type}</p>
          </div>
          
          <div>
            <p className="text-xs text-[#8b7355] mb-1">Parties</p>
            {selectedContract.parties.map((party, i) => (
              <p key={i} className="text-sm text-[#4a3829]">
                {i + 1}. {party}
              </p>
            ))}
          </div>
          
          <div>
            <p className="text-xs text-[#8b7355] mb-1">Contract Value</p>
            <p className="text-xl font-semibold text-[#6b4423]">{selectedContract.value}</p>
          </div>
          
          <div>
            <p className="text-xs text-[#8b7355] mb-1">Related Batch</p>
            <p className="font-medium text-[#4a3829]">{selectedContract.batch}</p>
          </div>
          
          <div className="pt-4 border-t border-[#e8dfd0]">
            <p className="text-xs text-[#8b7355] mb-2">Transaction Hash</p>
            <div className="bg-[#faf8f5] rounded-lg p-3 flex items-center gap-2">
              <p className="font-mono text-xs text-[#4a3829] break-all flex-1">
                {selectedContract.hash}
              </p>
              <ExternalLink className="size-4 text-[#8b7355] flex-shrink-0 cursor-pointer hover:text-[#6b4423]" />
            </div>
          </div>
          
          <div className="pt-4">
            <BlockchainBadge verified={selectedContract.status === "active" || selectedContract.status === "completed"} />
          </div>
          
          {selectedContract.status === "pending" && (
            <button
              onClick={() => setShowSignModal(true)}
              className="w-full py-3 bg-gradient-to-r from-[#6b4423] to-[#8b5a3c] text-white rounded-xl hover:shadow-lg transition-shadow font-medium flex items-center justify-center gap-2"
            >
              <Send className="size-4" />
              Sign Contract
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
