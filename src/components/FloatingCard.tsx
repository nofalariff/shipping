import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FloatingCardProps {
  title: string;
  subtitle: string;
  dotColor: "green" | "blue";
  className?: string;
  icon?: ReactNode;
}

const dotColors = {
  green: "bg-status-delivered",
  blue: "bg-status-transit",
};

export function FloatingCard({
  title,
  subtitle,
  dotColor,
  className,
  icon,
}: FloatingCardProps) {
  return (
    <div
      className={cn(
        "absolute flex items-center gap-2.5 bg-card border border-border rounded-xl px-3.5 py-2.5 shadow-lg shadow-steel-900/5 animate-float",
        className
      )}
    >
      {icon ? (
        icon
      ) : (
        <span
          className={cn("w-2 h-2 rounded-full shrink-0", dotColors[dotColor])}
        />
      )}
      <div>
        <p className="text-xs font-medium text-foreground leading-tight">
          {title}
        </p>
        <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
