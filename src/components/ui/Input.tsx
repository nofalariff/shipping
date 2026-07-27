import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  leftIcon?: ReactNode;
  rightSlot?: ReactNode;
  containerClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, leftIcon, rightSlot, className, containerClassName, id, ...props },
  ref
) {
  return (
    <div className={cn("w-full", containerClassName)}>
      {label && (
        <label
          htmlFor={id}
          className="mb-1.5 block text-xs font-medium text-muted-foreground"
        >
          {label}
        </label>
      )}
      <div className="flex items-center gap-2 rounded-lg border border-border bg-muted px-3 py-2.5 transition-colors focus-within:border-harbor-500 focus-within:ring-2 focus-within:ring-harbor-500/15">
        {leftIcon && (
          <span className="shrink-0 text-muted-foreground">{leftIcon}</span>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            "w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground/60",
            className
          )}
          {...props}
        />
        {rightSlot && <span className="shrink-0">{rightSlot}</span>}
      </div>
    </div>
  );
});
