import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { initTracking, sendTrackingData } from "@/lib/tracking";

import Index from "./pages/Index";
import RMTCore1 from "./pages/RMTCore1";
import RMT from "./pages/RMT";
import DNS from "./pages/DNS";
import RMTCore2 from "./pages/NotUsed";
import RMTCore3 from "./pages/RMTCore3";
import Payment from "./pages/Payment";
import BackPain from "./pages/BackPain";
import Booking from "./pages/Booking";
import ConditionsTreated from "./pages/ConditionsTreated";
import AboutMe from "./pages/AboutMe";
import Facilities from "./pages/Facilities";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Hours from "./pages/Hours";
import FirstVisit from "./pages/FirstVisit";
import Education from "./pages/Education";
import NotFound from "./pages/NotFound";
import Draft from "./pages/Draft";
import BackPainTreatmentNorthVancouver from "./pages/BackPainTreatmentNorthVancouver";
import SciaticaTreatmentNorthVancouver from "./pages/SciaticaTreatmentNorthVancouver";
import NeckPainTreatmentNorthVancouver from "./pages/NeckPainTreatmentNorthVancouver";
import TennisElbowTreatmentNorthVancouver from "./pages/TennisElbowTreatmentNorthVancouver";
import HeadachesTreatmentNorthVancouver from "./pages/HeadachesTreatmentNorthVancouver";
import ShoulderInjuryTreatmentNorthVancouver from "./pages/ShoulderInjuryTreatmentNorthVancouver";
import HipPainTreatmentNorthVancouver from "./pages/HipPainTreatmentNorthVancouver";
import IcbcRmtNorthVancouver from "./pages/IcbcRmtNorthVancouver";
import { ScrollToTop } from "./components/ScrollToTop";

const queryClient = new QueryClient();

function TrackingInit() {
  const location = useLocation();

  useEffect(() => {
    initTracking();
  }, []);

  useEffect(() => {
    // Re-fire page_view on client-side navigation.
    // Canonicals are set per-page by usePageMeta — never auto-synced here,
    // so unknown/404 routes do not generate self-canonicals.
    sendTrackingData({ event_type: "page_view" });
  }, [location.pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <TrackingInit />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rmt-core1" element={<RMTCore1 />} />
          <Route path="/r-m-t" element={<RMT />} />
          <Route path="/d-n-s" element={<DNS />} />
          <Route path="/rmt-core2" element={<RMTCore2 />} />
          <Route path="/rmt-core3" element={<RMTCore3 />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/backpain" element={<BackPain />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/conditions" element={<ConditionsTreated />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/hours" element={<Hours />} />
          <Route path="/first-visit" element={<FirstVisit />} />
          <Route path="/education" element={<Education />} />
          <Route path="/draft" element={<Draft />} />
          <Route path="/conditions/back-pain-treatment-north-vancouver" element={<BackPainTreatmentNorthVancouver />} />
          <Route path="/conditions/sciatica-treatment-north-vancouver" element={<SciaticaTreatmentNorthVancouver />} />
          <Route path="/conditions/neck-pain-treatment-north-vancouver" element={<NeckPainTreatmentNorthVancouver />} />
          <Route path="/conditions/tennis-elbow-treatment-north-vancouver" element={<TennisElbowTreatmentNorthVancouver />} />
          <Route path="/conditions/headaches-treatment-north-vancouver" element={<HeadachesTreatmentNorthVancouver />} />
          <Route path="/conditions/shoulder-injury-treatment-north-vancouver" element={<ShoulderInjuryTreatmentNorthVancouver />} />
          <Route path="/conditions/hip-pain-treatment-north-vancouver" element={<HipPainTreatmentNorthVancouver />} />
          <Route path="/icbc-rmt-north-vancouver" element={<IcbcRmtNorthVancouver />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
