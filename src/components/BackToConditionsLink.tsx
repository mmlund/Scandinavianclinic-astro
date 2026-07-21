import { ArrowLeft } from "lucide-react";

export const BackToConditionsLink = ({ className = "" }: { className?: string }) => (
  <div className={`container mx-auto px-4 max-w-4xl ${className}`}>
    <a href="/conditions"
      className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
    >
      <ArrowLeft className="w-4 h-4" />
      See all conditions Eva treats
    </a>
  </div>
);
