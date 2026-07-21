import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.jpg";

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

  // @ts-ignore
  const logoUrl = typeof logo === 'string' ? logo : logo?.src;

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
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            aria-label="Scandinavian Clinic — Home"
          >
            <img src={logoUrl} alt="Scandinavian Clinic logo" className="w-10 h-10 rounded-md shadow-sm" />
            <span className={`text-2xl font-bold tracking-wide transition-colors duration-300 ${
              isScrolled ? "text-primary" : "text-accent drop-shadow-lg"
            }`}>
              SCANDINAVIAN CLINIC
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">About Eva</a>
            <a href="/first-visit" className="text-foreground hover:text-primary transition-colors font-medium">The Assessment</a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium focus:outline-none">
                Conditions <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-background z-50">
                {["Sciatica", "Low Back Pain", "Neck Pain", "Shoulder", "Tennis Elbow", "Hip Pain", "Headaches", "Post-Surgical Rehab"].map(c => (
                  <DropdownMenuItem key={c} asChild>
                    <a href="#">{c}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium focus:outline-none">
                How Recovery Works <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-background z-50">
                <DropdownMenuItem asChild>
                  <a href="/why-pain-comes-back">Why Pain Keeps Coming Back</a>
                </DropdownMenuItem>
                {["Breathing and Pain", "Posture as Stabilisation", "Core Stability", "What DNS Is"].map(c => (
                  <DropdownMenuItem key={c} asChild>
                    <a href="#">{c}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium focus:outline-none">
                For <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-background z-50">
                {["Desk Workers", "Trail Runners", "Racquet Sport", "Post-Surgical", "Long-Drive"].map(c => (
                  <DropdownMenuItem key={c} asChild>
                    <a href="#">{c}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Services & RMT</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Testimonials</a>
            
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="#" target="_blank" rel="noopener noreferrer">Contact / Book</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-background rounded-lg shadow-lg">
            <div className="flex flex-col gap-4">
              <a href="/" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left">Home</a>
              <a href="#" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left">About Eva</a>
              <a href="/first-visit" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left">The Assessment</a>
              
              <div className="px-4 py-2 text-left font-medium text-foreground">Conditions</div>
              {["Sciatica", "Low Back Pain", "Neck Pain", "Shoulder", "Tennis Elbow", "Hip Pain", "Headaches", "Post-Surgical Rehab"].map(c => (
                <a key={c} href="#" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-1 text-left pl-8">{c}</a>
              ))}
              
              <div className="px-4 py-2 text-left font-medium text-foreground mt-2">How Recovery Works</div>
              <a href="/why-pain-comes-back" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-1 text-left pl-8">Why Pain Keeps Coming Back</a>
              {["Breathing and Pain", "Posture as Stabilisation", "Core Stability", "What DNS Is"].map(c => (
                <a key={c} href="#" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-1 text-left pl-8">{c}</a>
              ))}
              
              <div className="px-4 py-2 text-left font-medium text-foreground mt-2">For</div>
              {["Desk Workers", "Trail Runners", "Racquet Sport", "Post-Surgical", "Long-Drive"].map(c => (
                <a key={c} href="#" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-1 text-left pl-8">{c}</a>
              ))}

              <a href="#" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left mt-2">Services & RMT</a>
              <a href="#" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left">Testimonials</a>
              <a href="#" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left">Contact / Book</a>
              
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground mx-4">
                <a href="#" target="_blank" rel="noopener noreferrer" onClick={closeMobile}>Book Appointment</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
