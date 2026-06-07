import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronRight, ChevronLeft, Coffee, Sprout, Factory, ShoppingBag, Shield } from "lucide-react";

interface Step {
  title: string;
  description: string;
  icon: any;
  color: string;
}

const steps: Step[] = [
  {
    title: "Welcome to CoffeeChain",
    description: "Track your Robusta coffee from the farms of Đắk Lắk, Vietnam to your cup. Every step is verified on the blockchain for complete transparency.",
    icon: Coffee,
    color: "#6b4423"
  },
  {
    title: "Farmers Upload Batches",
    description: "Farmers register their harvests, including quality grades, certifications, and harvest details. Each batch gets a unique ID recorded on the blockchain.",
    icon: Sprout,
    color: "#5a9a5a"
  },
  {
    title: "Processing & Quality Control",
    description: "Processors track each batch through drying, hulling, and sorting. Quality metrics are verified and recorded at every stage.",
    icon: Factory,
    color: "#8b5a3c"
  },
  {
    title: "Consumer Transparency",
    description: "Scan any QR code to see the complete journey of your coffee - from the farmer who grew it to the sustainability impact of your purchase.",
    icon: ShoppingBag,
    color: "#f59e0b"
  },
  {
    title: "Blockchain Verified",
    description: "Every transaction is permanently recorded on the blockchain, ensuring trust, preventing fraud, and rewarding sustainable practices.",
    icon: Shield,
    color: "#1565c0"
  }
];

interface OnboardingGuideProps {
  onComplete: () => void;
}

export function OnboardingGuide({ onComplete }: OnboardingGuideProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    setTimeout(onComplete, 300);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleClose();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const step = steps[currentStep];
  const Icon = step.icon;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
          >
            {/* Header */}
            <div 
              className="p-6 text-white relative overflow-hidden"
              style={{ backgroundColor: step.color }}
            >
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="onboarding-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="20" height="20" fill="currentColor" />
                      <rect x="20" y="20" width="20" height="20" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#onboarding-pattern)" />
                </svg>
              </div>
              
              <div className="relative">
                <button
                  onClick={handleClose}
                  className="absolute -top-2 -right-2 p-1 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="size-5" />
                </button>
                
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <Icon className="size-8" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white/80 text-sm mb-1">Step {currentStep + 1} of {steps.length}</p>
                    <h2 className="text-2xl font-semibold">{step.title}</h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-[#4a3829] leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Progress Dots */}
              <div className="flex justify-center gap-2 mb-6">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className="transition-all"
                  >
                    <div 
                      className="rounded-full transition-all"
                      style={{
                        width: currentStep === index ? '32px' : '8px',
                        height: '8px',
                        backgroundColor: currentStep === index ? step.color : '#e8dfd0'
                      }}
                    />
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex gap-3">
                {currentStep > 0 && (
                  <button
                    onClick={handlePrev}
                    className="flex-1 px-4 py-3 border-2 border-[#e8dfd0] text-[#4a3829] rounded-xl hover:bg-[#faf8f5] transition-colors font-medium flex items-center justify-center gap-2"
                  >
                    <ChevronLeft className="size-4" />
                    Previous
                  </button>
                )}
                <button
                  onClick={handleNext}
                  className="flex-1 px-4 py-3 text-white rounded-xl hover:shadow-lg transition-shadow font-medium flex items-center justify-center gap-2"
                  style={{ backgroundColor: step.color }}
                >
                  {currentStep < steps.length - 1 ? (
                    <>
                      Next
                      <ChevronRight className="size-4" />
                    </>
                  ) : (
                    "Get Started"
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
