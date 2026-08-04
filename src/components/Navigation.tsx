import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/brand/logo.webp?url";

const conditions = [
  { name: "Back Pain", path: "/conditions/back-pain-treatment-north-vancouver" },
  { name: "Sciatica", path: "/conditions/sciatica-treatment-north-vancouver" },
  { name: "Neck Pain & Whiplash", path: "/conditions/neck-pain-and-whiplash-treatment-north-vancouver" },
  { name: "Headaches", path: "/conditions/headache-treatment-north-vancouver" },
  { name: "Shoulder", path: "/conditions/shoulder-pain-treatment-north-vancouver" },
  { name: "Hip", path: "/conditions/hip-pain-treatment-north-vancouver" },
  { name: "Tennis Elbow", path: "/conditions/tennis-elbow-treatment-north-vancouver" },
  { name: "Foot & Ankle", path: "/conditions/foot-and-ankle-pain-treatment-north-vancouver" }
];

const recovery = [
  { name: "Why Pain Keeps Coming Back", path: "/how-recovery-works/why-pain-keeps-coming-back" },
  { name: "Core Stability and Breathing", path: "/how-recovery-works/core-stability-and-breathing" },
  { name: "Posture", path: "/how-recovery-works/posture" },
  { name: "What DNS Is", path: "/d-n-s" }
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a
            href="/"
            onClick={closeMobile}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="Scandinavian Clinic — Home"
          >
            <img src={logo} alt="Scandinavian Clinic logo" className="w-10 h-10 rounded-md shadow-sm" />
            <span className={`text-xl xl:text-2xl font-bold tracking-wide transition-colors duration-300 whitespace-nowrap ${
              isScrolled ? "text-primary" : "text-accent drop-shadow-lg"
            }`}>
              SCANDINAVIAN CLINIC
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-5 text-[13px] xl:text-sm">
            <a href="/" className="text-foreground hover:text-primary transition-colors font-medium whitespace-nowrap">Home</a>
            <a href="/about-me" className="text-foreground hover:text-primary transition-colors font-medium whitespace-nowrap">About Eva</a>
            <a href="/first-visit" className="text-foreground hover:text-primary transition-colors font-medium whitespace-nowrap">The Assessment</a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium focus:outline-none whitespace-nowrap">
                Conditions <ChevronDown size={14} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-background z-50">
                {conditions.map(c => (
                  <DropdownMenuItem key={c.name} asChild>
                    <a href={c.path}>{c.name}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium focus:outline-none whitespace-nowrap">
                How Recovery Works <ChevronDown size={14} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-background z-50">
                {recovery.map(c => (
                  <DropdownMenuItem key={c.name} asChild>
                    <a href={c.path}>{c.name}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="/athletes-and-performance" className="text-foreground hover:text-primary transition-colors font-medium whitespace-nowrap">Athletes & Performance</a>
            <a href="/fees" className="text-foreground hover:text-primary transition-colors font-medium whitespace-nowrap">Fees & Insurance</a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors font-medium whitespace-nowrap">Contact / Book</a>
            
            <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground ml-2 whitespace-nowrap">
              <a href="https://booking.scandinavianclinic.com" target="_blank" rel="noopener noreferrer">Book Your Assessment</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-background rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-4">
              <a href="/" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left">Home</a>
              <a href="/about-me" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left">About Eva</a>
              <a href="/first-visit" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left">The Assessment</a>
              
              <div className="px-4 py-2 text-left font-medium text-foreground bg-secondary/20">Conditions</div>
              {conditions.map(c => (
                <a key={c.name} href={c.path} onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-1 text-left pl-8">{c.name}</a>
              ))}
              
              <div className="px-4 py-2 text-left font-medium text-foreground mt-2 bg-secondary/20">How Recovery Works</div>
              {recovery.map(c => (
                <a key={c.name} href={c.path} onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-1 text-left pl-8">{c.name}</a>
              ))}
              
              <a href="/athletes-and-performance" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left mt-2">Athletes & Performance</a>
              <a href="/fees" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left">Fees & Insurance</a>
              <a href="/contact" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left">Contact / Book</a>
              
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground mx-4">
                <a href="https://booking.scandinavianclinic.com" target="_blank" rel="noopener noreferrer" onClick={closeMobile}>Book Your Assessment</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
