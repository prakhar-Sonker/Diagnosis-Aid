import FullPageImg from "@/components/FullPageImg";
import Hero from "@/components/Hero";
import HospitalTrustImg from "@/components/HospitalTrustImg";
import IntroducingData from "@/components/IntroducingData";
import LostResourcesPage from "@/components/LostResourcesPage";
import MagnitudePage from "@/components/MagnitudePage";
// import MidSection from "@/components/MidSection";
import Nav from "@/components/Nav";
import PatientAnxiety from "@/components/PatientAnxiety";
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
    </>
  );
}
