import React, { lazy, Suspense } from "react";
import BbaAdmissionHero from "../Components/BbaAdmission/BbaAdmissionHero";
import FadeInSection from "../Components/FadeInSection";

// Lazy loaded sub-sections
const BbaAdmissionPointers = lazy(() => import("../Components/BbaAdmission/BbaAdmissionPointers"));
const BbaAdmissionOverview = lazy(() => import("../Components/BbaAdmission/BbaAdmissionOverview"));
const BbaAdmissionCourses = lazy(() => import("../Components/BbaAdmission/BbaAdmissionCourses"));
const BbaAdmissionJoin = lazy(() => import("../Components/BbaAdmission/BbaAdmissionJoin"));
const BbaAdmissionInfra = lazy(() => import("../Components/BbaAdmission/BbaAdmissionInfra"));
const BbaAdmissionTestimonials = lazy(() => import("../Components/BbaAdmission/BbaAdmissionTestimonials"));
const Recruiter = lazy(() => import("../Pages/Recruiter"));
const BbaAdmissionTopPlacement = lazy(() => import("../Components/BbaAdmission/BbaAdmissionTopPlacement"));
const BbaDomainCertifications = lazy(() => import("../Components/BbaAdmission/BbaDomainCertifications"));
const BBAAdmissionProcess = lazy(() => import("../Components/BbaAdmission/BbaAdmissionProcess"));
const BbaAdmissionFAQ = lazy(() => import("../Components/BbaAdmission/BbaAdmissionFAQ"));

const SectionFallback = () => <div className="h-24" />;

function BbaAdmission() {
  return (
    <div>
      {/* Hero loads immediately for fast above-the-fold rendering */}
      <BbaAdmissionHero />
      
      <Suspense fallback={<SectionFallback />}>
        <FadeInSection>
          <BbaAdmissionTopPlacement />
        </FadeInSection>
        
        <FadeInSection>
          <BbaAdmissionPointers />
        </FadeInSection>
        
        <FadeInSection>
          <Recruiter />
        </FadeInSection>
        
        <FadeInSection>
          <BbaAdmissionOverview />
        </FadeInSection>
        
        <FadeInSection>
          <BbaAdmissionCourses />
        </FadeInSection>
        
        <FadeInSection>
          <BbaDomainCertifications />
        </FadeInSection>
        
        <FadeInSection>
          <BbaAdmissionInfra />
        </FadeInSection>
        
        <FadeInSection>
          <BbaAdmissionTestimonials />
        </FadeInSection>
        
        <FadeInSection>
          <BbaAdmissionJoin />
        </FadeInSection>
        
        <FadeInSection>
          <BBAAdmissionProcess />
        </FadeInSection>
        
        <FadeInSection>
          <BbaAdmissionFAQ />
        </FadeInSection>
      </Suspense>
    </div>
  );
}

export default BbaAdmission;
