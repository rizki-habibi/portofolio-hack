import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "purple" | "lime" | "red" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export default function Badge({ children, variant = "cyan", size = "md", className }: BadgeProps) {
  const variants = {
    cyan: "bg-[#00f5ff11] text-[#00f5ff] border border-[#00f5ff44]",
    purple: "bg-[#bf00ff11] text-[#bf00ff] border border-[#bf00ff44]",
    lime: "bg-[#39ff1411] text-[#39ff14] border border-[#39ff1444]",
    red: "bg-[#ff003311] text-[#ff0033] border border-[#ff003344]",
    outline: "bg-transparent text-white border border-white/20",
  };
  const sizes = {
    sm: "text-[10px] px-2 py-0.5",
    md: "text-xs px-3 py-1",
  };
  return (
    <span
      className={cn(
        "inline-block font-mono uppercase tracking-widest rounded-sm clip-angled-sm",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
