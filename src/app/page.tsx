import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import ClientLogos from "@/components/ClientLogos";
import AwardsRecognitions from "@/components/AwardsRecognitions";
import Partners from "@/components/Partners";
import LeadForm from "@/components/LeadForm";
import ReviewWidgets from "@/components/ReviewWidgets";
import TrackRecordStats from "@/components/TrackRecordStats";
import MediaCoverage from "@/components/MediaCoverage";
import GlobalPresence from "@/components/GlobalPresence";
import ServicesSection from "@/components/ServicesSection";
import MemeHighlights from "@/components/MemeHighlights";
import ChallengesSection from "@/components/ChallengesSection";
import WhyDifferent from "@/components/WhyDifferent";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#FFA400] selection:text-black">
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <ClientLogos />
      <AwardsRecognitions />
      <Partners />
      <LeadForm />
      <ReviewWidgets />
      <TrackRecordStats />
      <MediaCoverage />
      <GlobalPresence />
      <ServicesSection />
      <MemeHighlights />
      <ChallengesSection />
      <WhyDifferent />
      <FAQSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
