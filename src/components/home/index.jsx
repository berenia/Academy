import React from "react";
import LowerNavbar from "../lowerNavbar";
import Header from "./header.jsx";
import HeaderPaper from "./headerPaper";
import Resolution from "./resolution";
import WhyChoosingUs from "./whyChoosingUs";
import JobRequirement from "./jobRequirement";
import PartnerWithUs from "./partners";
import JoinOurTeam from "./joinTeam";
import TrendingCourses from "../courses/trendingCourses";
import CustomerReview from "../courses/customerReview";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Home = () => {
  return (
    <div>
      <LowerNavbar />
      <Header />
      <HeaderPaper />
      <main style={{ padding: 20 }}>
        <section>
          <Resolution />
        </section>

        <section data-aos="fade-up"
          data-aos-delay="100"
          data-aos-offset="200"
          data-aos-duration="500">
          <WhyChoosingUs />
        </section>

        <section>
          <JobRequirement />
        </section>

        <section>
          <JoinOurTeam />
        </section>

        <section>
          <PartnerWithUs />
        </section>
        <TrendingCourses />
        <CustomerReview />
      </main>
    </div>
  );
};

export default Home;
