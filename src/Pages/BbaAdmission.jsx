import React from "react";
import BbaAdmissionHero from "../Components/BbaAdmission/BbaAdmissionHero";
import BbaAdmissionPointers from "../Components/BbaAdmission/BbaAdmissionPointers";
import BbaAdmissionOverview from "../Components/BbaAdmission/BbaAdmissionOverview";
import BbaAdmissionCourses from "../Components/BbaAdmission/BbaAdmissionCourses";
import BbaAdmissionJoin from "../Components/BbaAdmission/BbaAdmissionJoin";
import BbaAdmissionInfra from "../Components/BbaAdmission/BbaAdmissionInfra";
import BbaAdmissionTestimonials from "../Components/BbaAdmission/BbaAdmissionTestimonials";
import Recruiter from "../Pages/Recruiter";
import BbaAdmissionTopPlacement from "../Components/BbaAdmission/BbaAdmissionTopPlacement";
import BbaDomainCertifications from "../Components/BbaAdmission/BbaDomainCertifications";
import BBAAdmissionProcess from "../Components/BbaAdmission/BbaAdmissionProcess";
import BbaAdmissionFAQ from "../Components/BbaAdmission/BbaAdmissionFAQ";

function BbaAdmission() {
  return (
    <div>
      <BbaAdmissionHero />
      <BbaAdmissionPointers />
      <BbaAdmissionTopPlacement />
      <Recruiter />
      <BbaAdmissionOverview />
      <BbaAdmissionCourses />
      <BbaDomainCertifications />
      <BbaAdmissionInfra />
      <BbaAdmissionJoin />
      <BbaAdmissionTestimonials />
      <BBAAdmissionProcess />
      <BbaAdmissionFAQ />
      {/* <BbaAdmissionFaculty /> */}
    </div>
  );
}

export default BbaAdmission;
