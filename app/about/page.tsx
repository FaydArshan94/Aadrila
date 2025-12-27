import AboutUs from "@/components/sections/AboutMain";
import React from "react";
import Navbar from "./Navbar";
import MeetOurTeam from "@/components/sections/MeetOurTeam";
import Footer from "@/components/layout/Footer";

const page = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutUs />
      <MeetOurTeam />
      <Footer />
    </div>
  );
};

export default page;
