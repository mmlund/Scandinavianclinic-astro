import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const ConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    if (window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
        analytics_storage: "granted",
      });
    }
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 shadow-lg z-[100]">
      <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          <p>
            We use cookies to measure how our site is used and to ensure our advertising reaches the right people. 
            Under Quebec Law 25, no analytics or advertising cookies are set without your explicit consent. 
            <a href="#" className="underline ml-1 hover:text-foreground">Read our Privacy Policy</a>.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <Button variant="outline" onClick={handleDecline}>
            Decline All
          </Button>
          <Button onClick={handleAccept}>
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
};
