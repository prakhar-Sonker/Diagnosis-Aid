import Career from "@/components/Careers";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import FullPageImg from "@/components/FullPageImg";
import Hero from "@/components/Hero";
import HospitalTrustImg from "@/components/HospitalTrustImg";
import HowItWorks from "@/components/HowItWorks";
import IntroducingData from "@/components/IntroducingData";
import LostResourcesPage from "@/components/LostResourcesPage";
import MagnitudePage from "@/components/MagnitudePage";
import Nav from "@/components/Nav";
import PatientAnxiety from "@/components/PatientAnxiety";
import PricingSection from "@/components/PricingSection";
import Research from "@/components/Research";
import Safe from "@/components/Safe";
import Team from "@/components/Team";
import Trusted from "@/components/Trusted";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      {/* <MidSection /> */}
      {/* <Chat />
      // <Background /> */}
      <HospitalTrustImg />
      <Trusted />
      <IntroducingData />
      <MagnitudePage />
      <LostResourcesPage />
      <PatientAnxiety />
      <Team />
      <Safe />
      <FullPageImg />
      <Research />
      <Features />
      <HowItWorks />
      <PricingSection />
      <Career />
      <Footer />
    </>
  );
}
