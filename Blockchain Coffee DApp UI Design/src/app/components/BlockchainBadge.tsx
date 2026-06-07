import { Shield, CheckCircle, XCircle } from "lucide-react";
import { motion } from "motion/react";

interface BlockchainBadgeProps {
  verified: boolean;
  compact?: boolean;
}

export function BlockchainBadge({ verified, compact = false }: BlockchainBadgeProps) {
  if (compact) {
    return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg ${
          verified 
            ? "bg-[#d4f4dd] text-[#2d5f3d]" 
            : "bg-[#fce8e8] text-[#c62828]"
        }`}
      >
        {verified ? (
          <CheckCircle className="size-3.5" />
        ) : (
          <XCircle className="size-3.5" />
        )}
        <span className="text-xs font-medium">
          {verified ? "Verified" : "Pending"}
        </span>
      </motion.div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`relative overflow-hidden rounded-xl border-2 p-4 ${
        verified 
          ? "bg-gradient-to-br from-[#d4f4dd] to-[#b8e6c2] border-[#5a9a5a]" 
          : "bg-gradient-to-br from-[#fff4e6] to-[#ffe0b2] border-[#f59e0b]"
      }`}
    >
      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blockchain-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="20" height="20" fill="currentColor" />
              <rect x="20" y="20" width="20" height="20" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blockchain-pattern)" />
        </svg>
      </div>
      
      <div className="relative flex items-center gap-3">
        <div className={`p-2 rounded-lg ${
          verified ? "bg-[#5a9a5a]" : "bg-[#f59e0b]"
        }`}>
          <Shield className="size-5 text-white" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className={`font-semibold ${
              verified ? "text-[#2d5f3d]" : "text-[#8b5a00]"
            }`}>
              Blockchain {verified ? "Verified" : "Pending"}
            </h4>
            {verified && <CheckCircle className="size-4 text-[#2d5f3d]" />}
          </div>
          <p className={`text-xs mt-0.5 ${
            verified ? "text-[#2d5f3d]/80" : "text-[#8b5a00]/80"
          }`}>
            {verified 
              ? "Transaction recorded on-chain" 
              : "Awaiting confirmation"}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
