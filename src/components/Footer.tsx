export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SCANDINAVIAN CLINIC</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-2">
              Scandinavian Clinic is a registered massage therapy clinic located in North Vancouver.
            </p>
            <p className="text-primary-foreground/80 leading-relaxed">
              Orthopaedic &amp; Sports Therapy providing expert care through Swedish-trained 
              manual therapy techniques and active rehabilitation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="/" className="hover:text-accent transition-colors">Home</a>
              </li>
              <li>
                <a href="/about-me" className="hover:text-accent transition-colors">About Eva</a>
              </li>
              <li>
                <a href="/first-visit" className="hover:text-accent transition-colors">The Assessment</a>
              </li>
              <li>
                <a href="/conditions" className="hover:text-accent transition-colors">Conditions</a>
              </li>
              <li>
                <a href="/how-recovery-works/why-pain-keeps-coming-back" className="hover:text-accent transition-colors">How Recovery Works</a>
              </li>
              <li>
                <a href="/athletes-and-performance" className="hover:text-accent transition-colors">Athletes &amp; Performance</a>
              </li>
              <li>
                <a href="/fees" className="hover:text-accent transition-colors">Fees &amp; Insurance</a>
              </li>
              <li>
                <a
                  href="https://booking.scandinavianclinic.com"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors font-medium text-accent"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Suite 202-101 West 16th Street</li>
              <li>North Vancouver, BC V7M 1T3</li>
              <li>
                <a href="tel:+16049264883" className="hover:text-accent transition-colors">
                  (604) 926-4883
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@scandinavianclinic.com"
                  className="hover:text-accent transition-colors"
                >
                  info@scandinavianclinic.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>© {currentYear} Scandinavian Clinic. All rights reserved.</p>
          <p className="mt-2">Registered Massage Therapist - Covered by most extended health insurance plans.</p>
        </div>
      </div>
    </footer>
  );
};
