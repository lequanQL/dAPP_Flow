import { useState } from "react";
import { useParams } from "react-router";
import { motion } from "motion/react";
import { QrCode, MapPin, User, Calendar, Award, Leaf, Mountain, CheckCircle2, ExternalLink } from "lucide-react";
import { QRCodeScanner } from "../components/QRCodeScanner";
import { BlockchainBadge } from "../components/BlockchainBadge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const coffeeStory = {
  batchId: "BCH-2026-001",
  product: "Robusta Premium Beans",
  origin: "Đắk Lắk, Vietnam",
  farmer: {
    name: "Nguyễn Văn An",
    farm: "Phước An Coffee Farm",
    experience: "15 years",
    altitude: "600-800m",
    certifications: ["Organic", "Fair Trade", "Rainforest Alliance"]
  },
  harvest: {
    date: "May 2026",
    method: "Hand-picked at peak ripeness",
    quantity: "2,500 kg"
  },
  processing: {
    method: "Wet Processing",
    drying: "Sun-dried for 14 days",
    quality: "Premium Grade"
  },
  sustainability: {
    waterSaved: "15,000 L",
    co2Offset: "450 kg",
    fairWage: "120% above market rate"
  },
  journey: [
    { stage: "Harvested", date: "2026-05-25", location: "Phước An Farm", verified: true },
    { stage: "Processed", date: "2026-06-05", location: "Buôn Ma Thuột", verified: true },
    { stage: "Quality Tested", date: "2026-06-07", location: "Processing Center", verified: true },
    { stage: "Packaged", date: "2026-06-10", location: "Export Facility", verified: true },
  ]
};

export function ConsumerView() {
  const { batchId } = useParams();
  const [showScanner, setShowScanner] = useState(!batchId);
  const [scannedBatch, setScannedBatch] = useState(batchId || null);

  const handleScan = (data: string) => {
    setScannedBatch(data);
    setShowScanner(false);
  };

  if (showScanner && !scannedBatch) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#faf8f5] to-[#f4ebe0]">
        <QRCodeScanner onScan={handleScan} onClose={() => setShowScanner(false)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf8f5] to-[#f4ebe0]">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1695094412603-3340f1e72232?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwY29mZmVlJTIwcGxhbnRhdGlvbiUyMGFlcmlhbHxlbnwxfHx8fDE3ODA4MDI4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Coffee plantation in Vietnam"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4a3829] via-[#4a3829]/50 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <QrCode className="size-6 text-white" />
                <span className="text-white/90 text-sm">Batch ID: {coffeeStory.batchId}</span>
              </div>
              <h1 className="text-4xl font-semibold text-white mb-3">
                {coffeeStory.product}
              </h1>
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="size-5" />
                <span className="text-lg">{coffeeStory.origin}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Blockchain Verification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <BlockchainBadge verified={true} />
        </motion.div>

        {/* Farmer Story */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-[#e8dfd0] overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6b4423] to-[#8b5a3c] rounded-full flex items-center justify-center">
                  <User className="size-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-[#4a3829]">
                    Meet the Farmer
                  </h2>
                  <p className="text-[#8b7355]">{coffeeStory.farmer.name}</p>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-[#4a3829] mb-4">
                  For {coffeeStory.farmer.experience}, {coffeeStory.farmer.name} has been cultivating premium 
                  Robusta coffee at {coffeeStory.farmer.farm} in the highlands of Đắk Lắk. Nestled at an 
                  altitude of {coffeeStory.farmer.altitude}, the farm benefits from ideal growing conditions 
                  that produce beans of exceptional quality and flavor.
                </p>
                <p className="text-[#4a3829]">
                  Our commitment to sustainable farming practices and fair trade principles ensures that 
                  every cup tells a story of dedication, quality, and respect for both the land and the 
                  people who work it.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-[#e8dfd0]">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="size-5 text-[#6b4423]" />
                  <h3 className="font-semibold text-[#4a3829]">Certifications</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {coffeeStory.farmer.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="px-4 py-2 bg-gradient-to-r from-[#d4f4dd] to-[#b8e6c2] text-[#2d5f3d] text-sm font-medium rounded-lg border border-[#5a9a5a]"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1663123458923-8216ea050aa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBmYXJtZXIlMjB2aWV0bmFtJTIwcm9idXN0YXxlbnwxfHx8fDE3ODA4MDI4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Coffee farmer"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Quick Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-[#e8dfd0] p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="size-5 text-[#6b4423]" />
                <h3 className="font-semibold text-[#4a3829]">Harvest Details</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-[#8b7355] mb-1">Harvest Date</p>
                  <p className="font-medium text-[#4a3829]">{coffeeStory.harvest.date}</p>
                </div>
                <div>
                  <p className="text-xs text-[#8b7355] mb-1">Method</p>
                  <p className="font-medium text-[#4a3829]">{coffeeStory.harvest.method}</p>
                </div>
                <div>
                  <p className="text-xs text-[#8b7355] mb-1">Quantity</p>
                  <p className="font-medium text-[#4a3829]">{coffeeStory.harvest.quantity}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-[#e8dfd0] p-6">
              <div className="flex items-center gap-2 mb-4">
                <Mountain className="size-5 text-[#6b4423]" />
                <h3 className="font-semibold text-[#4a3829]">Processing</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-[#8b7355] mb-1">Method</p>
                  <p className="font-medium text-[#4a3829]">{coffeeStory.processing.method}</p>
                </div>
                <div>
                  <p className="text-xs text-[#8b7355] mb-1">Drying</p>
                  <p className="font-medium text-[#4a3829]">{coffeeStory.processing.drying}</p>
                </div>
                <div>
                  <p className="text-xs text-[#8b7355] mb-1">Quality</p>
                  <span className="inline-block px-3 py-1 bg-[#f4ebe0] text-[#6b4423] text-sm font-medium rounded-full">
                    {coffeeStory.processing.quality}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#d4f4dd] to-[#b8e6c2] rounded-2xl shadow-lg border border-[#5a9a5a] p-6">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="size-5 text-[#2d5f3d]" />
                <h3 className="font-semibold text-[#2d5f3d]">Sustainability</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#2d5f3d]">Water Saved</span>
                  <span className="font-semibold text-[#2d5f3d]">{coffeeStory.sustainability.waterSaved}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#2d5f3d]">CO₂ Offset</span>
                  <span className="font-semibold text-[#2d5f3d]">{coffeeStory.sustainability.co2Offset}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#2d5f3d]">Fair Wage</span>
                  <span className="font-semibold text-[#2d5f3d]">{coffeeStory.sustainability.fairWage}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg border border-[#e8dfd0] p-8"
        >
          <h2 className="text-2xl font-semibold text-[#4a3829] mb-8">Coffee Journey</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#5a9a5a]" />
            
            <div className="space-y-8">
              {coffeeStory.journey.map((step, index) => (
                <motion.div
                  key={step.stage}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="relative flex gap-6"
                >
                  <div className="relative z-10 w-16 h-16 bg-[#5a9a5a] rounded-full flex items-center justify-center shadow-lg shadow-[#5a9a5a]/30">
                    <CheckCircle2 className="size-8 text-white" />
                  </div>
                  
                  <div className="flex-1 bg-[#faf8f5] rounded-xl p-6 border border-[#e8dfd0]">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-[#4a3829]">{step.stage}</h3>
                      <span className="px-3 py-1 bg-[#d4f4dd] text-[#2d5f3d] text-xs font-medium rounded-full flex items-center gap-1">
                        <CheckCircle2 className="size-3" />
                        Verified
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-[#8b7355]">
                      <div className="flex items-center gap-1">
                        <Calendar className="size-4" />
                        {step.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="size-4" />
                        {step.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-4 bg-[#faf8f5] rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ExternalLink className="size-5 text-[#6b4423]" />
              <span className="text-sm text-[#4a3829]">View full blockchain record</span>
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-[#6b4423] to-[#8b5a3c] text-white text-sm rounded-lg hover:shadow-lg transition-shadow">
              View on Explorer
            </button>
          </div>
        </motion.div>

        {/* Scan Another */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8 text-center"
        >
          <button
            onClick={() => setShowScanner(true)}
            className="px-6 py-3 border-2 border-[#6b4423] text-[#6b4423] rounded-xl hover:bg-[#6b4423] hover:text-white transition-colors font-medium inline-flex items-center gap-2"
          >
            <QrCode className="size-5" />
            Scan Another Product
          </button>
        </motion.div>
      </div>
    </div>
  );
}
