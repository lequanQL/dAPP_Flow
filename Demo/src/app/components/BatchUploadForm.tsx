import { useState } from "react";
import { motion } from "motion/react";
import { Upload, Calendar, Scale, Award, MapPin, FileText, CheckCircle } from "lucide-react";

export function BatchUploadForm() {
  const [step, setStep] = useState(1);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    batchId: "",
    harvestDate: "",
    quantity: "",
    quality: "",
    location: "",
    certifications: [] as string[],
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    
    // Simulate blockchain upload
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setUploading(false);
    setStep(4);
  };

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-[#e8dfd0] p-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-[#4a3829]">
              {step <= totalSteps ? `Step ${step} of ${totalSteps}` : "Complete"}
            </span>
            <span className="text-sm text-[#8b7355]">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-[#e8dfd0] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#6b4423] to-[#8b5a3c]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Basic Information */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h3 className="text-xl font-semibold text-[#4a3829] mb-6">Basic Information</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#4a3829] mb-2">
                    Batch ID
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-[#8b7355]" />
                    <input
                      type="text"
                      value={formData.batchId}
                      onChange={(e) => updateField("batchId", e.target.value)}
                      placeholder="BCH-2026-XXX"
                      className="w-full pl-10 pr-4 py-3 border border-[#e8dfd0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6b4423] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#4a3829] mb-2">
                    Harvest Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-[#8b7355]" />
                    <input
                      type="date"
                      value={formData.harvestDate}
                      onChange={(e) => updateField("harvestDate", e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-[#e8dfd0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6b4423] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#4a3829] mb-2">
                    Quantity (kg)
                  </label>
                  <div className="relative">
                    <Scale className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-[#8b7355]" />
                    <input
                      type="number"
                      value={formData.quantity}
                      onChange={(e) => updateField("quantity", e.target.value)}
                      placeholder="2500"
                      className="w-full pl-10 pr-4 py-3 border border-[#e8dfd0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6b4423] focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full mt-6 py-3 bg-gradient-to-r from-[#6b4423] to-[#8b5a3c] text-white rounded-xl hover:shadow-lg transition-shadow font-medium"
              >
                Continue
              </button>
            </motion.div>
          )}

          {/* Step 2: Quality & Location */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h3 className="text-xl font-semibold text-[#4a3829] mb-6">Quality & Location</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#4a3829] mb-2">
                    Quality Grade
                  </label>
                  <div className="relative">
                    <Award className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-[#8b7355]" />
                    <select
                      value={formData.quality}
                      onChange={(e) => updateField("quality", e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-[#e8dfd0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6b4423] focus:border-transparent appearance-none bg-white"
                      required
                    >
                      <option value="">Select quality grade</option>
                      <option value="Premium">Premium</option>
                      <option value="Grade A">Grade A</option>
                      <option value="Grade B">Grade B</option>
                      <option value="Standard">Standard</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#4a3829] mb-2">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-[#8b7355]" />
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => updateField("location", e.target.value)}
                      placeholder="Farm location"
                      className="w-full pl-10 pr-4 py-3 border border-[#e8dfd0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6b4423] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#4a3829] mb-2">
                    Notes (Optional)
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => updateField("notes", e.target.value)}
                    placeholder="Additional information about this batch..."
                    rows={4}
                    className="w-full px-4 py-3 border border-[#e8dfd0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6b4423] focus:border-transparent resize-none"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 border-2 border-[#e8dfd0] text-[#4a3829] rounded-xl hover:bg-[#faf8f5] transition-colors font-medium"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 py-3 bg-gradient-to-r from-[#6b4423] to-[#8b5a3c] text-white rounded-xl hover:shadow-lg transition-shadow font-medium"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Review & Submit */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h3 className="text-xl font-semibold text-[#4a3829] mb-6">Review & Submit</h3>
              
              <div className="bg-[#faf8f5] rounded-xl p-6 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-[#8b7355] mb-1">Batch ID</p>
                    <p className="font-medium text-[#4a3829]">{formData.batchId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#8b7355] mb-1">Harvest Date</p>
                    <p className="font-medium text-[#4a3829]">{formData.harvestDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#8b7355] mb-1">Quantity</p>
                    <p className="font-medium text-[#4a3829]">{formData.quantity} kg</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#8b7355] mb-1">Quality Grade</p>
                    <p className="font-medium text-[#4a3829]">{formData.quality}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-[#8b7355] mb-1">Location</p>
                    <p className="font-medium text-[#4a3829]">{formData.location}</p>
                  </div>
                  {formData.notes && (
                    <div className="col-span-2">
                      <p className="text-sm text-[#8b7355] mb-1">Notes</p>
                      <p className="font-medium text-[#4a3829]">{formData.notes}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-[#fff4e6] border border-[#f59e0b] rounded-xl p-4 mb-6">
                <div className="flex gap-3">
                  <Upload className="size-5 text-[#f59e0b] mt-0.5" />
                  <div>
                    <p className="font-medium text-[#8b5a00] mb-1">Blockchain Verification</p>
                    <p className="text-sm text-[#8b5a00]/80">
                      This batch will be recorded on the blockchain for permanent verification and traceability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 py-3 border-2 border-[#e8dfd0] text-[#4a3829] rounded-xl hover:bg-[#faf8f5] transition-colors font-medium"
                  disabled={uploading}
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={uploading}
                  className="flex-1 py-3 bg-gradient-to-r from-[#6b4423] to-[#8b5a3c] text-white rounded-xl hover:shadow-lg transition-shadow font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {uploading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="size-5" />
                      Submit to Blockchain
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}

          {/* Success State */}
          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#d4f4dd] to-[#b8e6c2] rounded-full flex items-center justify-center">
                <CheckCircle className="size-10 text-[#2d5f3d]" />
              </div>
              
              <h3 className="text-2xl font-semibold text-[#4a3829] mb-2">
                Batch Submitted Successfully!
              </h3>
              <p className="text-[#8b7355] mb-6">
                Your batch has been recorded on the blockchain
              </p>
              
              <div className="bg-[#faf8f5] rounded-xl p-4 mb-6 max-w-md mx-auto">
                <p className="text-sm text-[#8b7355] mb-1">Transaction Hash</p>
                <p className="font-mono text-sm text-[#4a3829] break-all">
                  0x7d8f3a9b2c1e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setStep(1);
                  setFormData({
                    batchId: "",
                    harvestDate: "",
                    quantity: "",
                    quality: "",
                    location: "",
                    certifications: [],
                    notes: "",
                  });
                }}
                className="px-6 py-3 bg-gradient-to-r from-[#6b4423] to-[#8b5a3c] text-white rounded-xl hover:shadow-lg transition-shadow font-medium"
              >
                Upload Another Batch
              </button>
            </motion.div>
          )}
        </form>
      </div>
    </div>
  );
}
