import { useState } from "react";
import { motion } from "motion/react";
import { QrCode, X, Camera } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

interface QRCodeScannerProps {
  onScan: (data: string) => void;
  onClose: () => void;
}

export function QRCodeScanner({ onScan, onClose }: QRCodeScannerProps) {
  const [inputValue, setInputValue] = useState("");

  // For demo purposes, we'll show a QR code and allow manual input
  const demoQRData = "BCH-2026-001";

  const handleManualInput = () => {
    if (inputValue.trim()) {
      onScan(inputValue.trim());
    }
  };

  const handleDemoScan = () => {
    onScan(demoQRData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-md w-full mx-4"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-[#e8dfd0] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#6b4423] to-[#8b5a3c] p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <QrCode className="size-6" />
              <h2 className="text-xl font-semibold">Scan Coffee QR Code</h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="size-5" />
            </button>
          </div>
          <p className="text-white/90 text-sm">
            Trace your coffee's journey from farm to cup
          </p>
        </div>

        {/* Scanner Area */}
        <div className="p-6">
          {/* Demo QR Code */}
          <div className="bg-white border-2 border-dashed border-[#e8dfd0] rounded-xl p-8 mb-6">
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-xl shadow-lg mb-4">
                <QRCodeSVG value={demoQRData} size={200} />
              </div>
              <p className="text-sm text-[#8b7355] mb-2">Demo QR Code</p>
              <p className="text-xs text-[#8b7355] mb-4">Batch ID: {demoQRData}</p>
              <button
                onClick={handleDemoScan}
                className="px-4 py-2 bg-gradient-to-r from-[#6b4423] to-[#8b5a3c] text-white text-sm rounded-lg hover:shadow-lg transition-shadow flex items-center gap-2"
              >
                <Camera className="size-4" />
                Scan This Code
              </button>
            </div>
          </div>

          {/* Manual Input */}
          <div className="border-t border-[#e8dfd0] pt-6">
            <p className="text-sm font-medium text-[#4a3829] mb-3">
              Or enter Batch ID manually
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="BCH-2026-XXX"
                className="flex-1 px-4 py-3 border border-[#e8dfd0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6b4423] focus:border-transparent"
                onKeyPress={(e) => e.key === "Enter" && handleManualInput()}
              />
              <button
                onClick={handleManualInput}
                className="px-6 py-3 bg-gradient-to-r from-[#6b4423] to-[#8b5a3c] text-white rounded-xl hover:shadow-lg transition-shadow font-medium"
              >
                Go
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="mt-6 p-4 bg-[#f4ebe0] rounded-xl">
            <div className="flex gap-3">
              <QrCode className="size-5 text-[#6b4423] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-[#4a3829] mb-1">
                  How to find your QR code
                </p>
                <p className="text-xs text-[#8b7355]">
                  Look for the QR code on your coffee package. Each code is unique and 
                  verifies the authenticity and origin of your coffee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
