import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={closeMobile}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            aria-label="Scandinavian Clinic — Home"
          >
            <img src={logo} alt="Scandinavian Clinic logo" className="w-10 h-10 rounded-md shadow-sm" />
            <span className={`text-2xl font-bold tracking-wide transition-colors duration-300 ${
              isScrolled ? "text-primary" : "text-accent drop-shadow-lg"
            }`}>
              SCANDINAVIAN CLINIC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium focus:outline-none">
                About <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-background z-50">
                <DropdownMenuItem asChild>
                  <Link to="/about-me">About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/icbc-rmt-north-vancouver">ICBC Coverage</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/testimonials">Testimonials</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/education">Education</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors font-medium">Services</Link>
            <Link to="/first-visit" className="text-foreground hover:text-primary transition-colors font-medium">First Visit</Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium focus:outline-none">
                Conditions <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-background z-50">
                <DropdownMenuItem asChild>
                  <Link to="/conditions">Conditions Treated</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/conditions/back-pain-treatment-north-vancouver">Back Pain</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/conditions/sciatica-treatment-north-vancouver">Sciatica</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/conditions/neck-pain-treatment-north-vancouver">Neck Pain</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/conditions/tennis-elbow-treatment-north-vancouver">Tennis Elbow</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/conditions/headaches-treatment-north-vancouver">Headaches</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/conditions/shoulder-injury-treatment-north-vancouver">Shoulder Injury</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/conditions/hip-pain-treatment-north-vancouver">Hip Pain</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/facilities" className="text-foreground hover:text-primary transition-colors font-medium">Facilities</Link>
            <Link to="/r-m-t" className="text-foreground hover:text-primary transition-colors font-medium">RMT</Link>
            <Link to="/d-n-s" className="text-foreground hover:text-primary transition-colors font-medium">DNS</Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium focus:outline-none">
                Contact <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-background z-50">
                <DropdownMenuItem asChild>
                  <Link to="/contact">Contact</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/hours">Hours</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/booking">Book Appointment</Link>
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
              <Link to="/about-me" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left">About</Link>
              <Link to="/icbc-rmt-north-vancouver" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left pl-8">ICBC Coverage</Link>
              <Link to="/testimonials" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left pl-8">Testimonials</Link>
              <Link to="/education" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left pl-8">Education</Link>
              <Link to="/services" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left">Services</Link>
              <Link to="/first-visit" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left">First Visit</Link>
              <Link to="/conditions" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left">Conditions</Link>
              <Link to="/conditions/back-pain-treatment-north-vancouver" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left pl-8">Back Pain</Link>
              <Link to="/conditions/sciatica-treatment-north-vancouver" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left pl-8">Sciatica</Link>
              <Link to="/conditions/neck-pain-treatment-north-vancouver" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left pl-8">Neck Pain</Link>
              <Link to="/conditions/tennis-elbow-treatment-north-vancouver" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left pl-8">Tennis Elbow</Link>
              <Link to="/conditions/headaches-treatment-north-vancouver" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left pl-8">Headaches</Link>
              <Link to="/conditions/shoulder-injury-treatment-north-vancouver" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left pl-8">Shoulder Injury</Link>
              <Link to="/conditions/hip-pain-treatment-north-vancouver" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left pl-8">Hip Pain</Link>
              <Link to="/facilities" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left">Facilities</Link>
              <Link to="/r-m-t" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left">RMT</Link>
              <Link to="/d-n-s" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left">DNS</Link>
              <Link to="/contact" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left">Contact</Link>
              <Link to="/hours" onClick={closeMobile} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left pl-8">Hours</Link>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground mx-4">
                <Link to="/booking" onClick={closeMobile}>Book Appointment</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

