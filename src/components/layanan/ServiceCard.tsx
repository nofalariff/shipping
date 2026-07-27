import { CheckCircle2, FileText } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { Service } from "./data";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { icon: Icon, title, tagline, badge, description, features, documents, highlight } = service;

  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl border bg-card p-7 shadow-sm",
        highlight ? "border-harbor-500/50 ring-1 ring-harbor-500/20" : "border-border"
      )}
    >
      <div className="flex items-start justify-between">
        <div
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-xl",
            highlight ? "bg-harbor-700" : "bg-muted"
          )}
        >
          <Icon size={20} className={highlight ? "text-white" : "text-harbor-500"} />
        </div>
        {badge && <Badge variant="accent">{badge}</Badge>}
      </div>

      <h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3>
      <p className="text-xs font-medium text-harbor-500">{tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>

      <ul className="mt-5 space-y-2.5">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-status-delivered" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-xl border border-border bg-muted/60 p-4">
        <p className="mb-3 flex items-center gap-2 text-xs font-medium text-foreground">
          <FileText size={13} className="text-harbor-500" />
          Dokumen yang diperlukan
        </p>
        <ul className="space-y-2">
          {documents.map((doc) => (
            <li key={doc} className="flex items-start gap-2 text-xs text-muted-foreground">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-steel-400" />
              {doc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
