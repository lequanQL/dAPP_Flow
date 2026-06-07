import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { HelpCircle } from "lucide-react";

interface InfoTooltipProps {
  content: string;
}

export function InfoTooltip({ content }: InfoTooltipProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={200}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          <button
            type="button"
            className="inline-flex items-center justify-center text-[#8b7355] hover:text-[#6b4423] transition-colors"
          >
            <HelpCircle className="size-4" />
          </button>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side="top"
            className="bg-[#4a3829] text-white px-3 py-2 rounded-lg text-sm max-w-xs shadow-lg z-50"
            sideOffset={5}
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-[#4a3829]" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
