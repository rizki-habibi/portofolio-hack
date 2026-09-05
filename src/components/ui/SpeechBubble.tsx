import { cn } from "@/lib/utils";

interface SpeechBubbleProps {
  children: React.ReactNode;
  variant?: "top" | "bottom" | "left" | "right";
  color?: "cyan" | "purple" | "lime";
  className?: string;
}

export default function SpeechBubble({
  children,
  variant = "bottom",
  color = "cyan",
  className,
}: SpeechBubbleProps) {
  const colors = {
    cyan: "border-[#00f5ff] bg-[#00f5ff11] text-white",
    purple: "border-[#bf00ff] bg-[#bf00ff11] text-white",
    lime: "border-[#39ff14] bg-[#39ff1411] text-white",
  };

  const tailColors = {
    cyan: "border-t-[#00f5ff]",
    purple: "border-t-[#bf00ff]",
    lime: "border-t-[#39ff14]",
  };

  return (
    <div className={cn("relative inline-block", className)}>
      <div className={cn("border-2 p-4 text-sm font-medium leading-relaxed", colors[color])}>
        {children}
      </div>
      {variant === "bottom" && (
        <div
          className={cn(
            "absolute -bottom-3 left-6 w-0 h-0",
            "border-l-[10px] border-l-transparent",
            "border-r-[10px] border-r-transparent",
            "border-t-[12px]",
            tailColors[color]
          )}
        />
      )}
    </div>
  );
}
