import React from 'react';
import HeroSection from "@/components/heroSection/Index";
import EventDetail from "@/components/eventDetail/Index";
import AboutSection from "@/components/aboutSection/Index";
import FeaturesAndBenefits from "@/components/featuresAndBenefits/Index";
import EligibilityCriteria from "@/components/eligibilityCriteria/Index";
import ParticipationRequirements from "@/components/participationRequirements/Index";
import FooterSection from "@/components/footerSection/Index";
import ApplicationCallToAction from "@/components/applicationCallToAction/Index";

const Overview = () => {
    return (
        <>
            <HeroSection/>
            <EventDetail/>
            <AboutSection/>
            <FeaturesAndBenefits />
            <EligibilityCriteria />
            <ParticipationRequirements />
            <ApplicationCallToAction />
            <FooterSection />
        </>
    );
};

export default Overview;