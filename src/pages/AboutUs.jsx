import React, { useEffect } from "react";
import Container from "../components/Container";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Container>
      <div className=" mx-auto py-4">
        {/* Title Section */}
        <h1 className="text-xl sm:text-3xl font-bold text-center mb-6">
          About Impact Makers
        </h1>

        {/* Intro Section */}
        <p className="text-sm sm:text-lg opacity-70 mb-8 text-center max-w-3xl mx-auto">
          At Impact Makers, we are passionate about connecting people who want
          to make a difference with organizations and causes that need support.
          Our platform is built to empower communities and foster meaningful
          connections through volunteering.
        </p>

        {/* Mission Section */}
        <div className="mb-8">
          <h2 className="text-lg sm:text-2xl font-semibold opacity-80 mb-4">
            Our Mission
          </h2>
          <p className="opacity-70 text-sm sm:text-lg">
            Our mission is to create a space where individuals can contribute
            their time, skills, and passion to causes that matter, and
            organizations can find the support they need to achieve their goals.
          </p>
        </div>

        {/* What We Offer Section */}
        <div className="mb-8">
          <h2 className="text-lg sm:text-2xl font-semibold opacity-80 mb-4">
            What We Offer
          </h2>
          <ul className="list-disc pl-6 space-y-2 opacity-70 text-sm sm:text-lg">
            <li>
              Opportunities to connect with local and global volunteer
              initiatives.
            </li>
            <li>
              Tools for organizations to create and manage volunteer needs.
            </li>
            <li>
              Insights and tracking for individuals to see the impact they've
              made.
            </li>
            <li>A blog section to share stories and inspire others.</li>
          </ul>
        </div>

        {/* Join Us Section */}
        <div>
          <h2 className="text-lg sm:text-2xl font-semibold opacity-80 mb-4">
            Join Us
          </h2>
          <p className="opacity-70 text-sm sm:text-lg">
            Whether you're an individual looking to give back, or an
            organization seeking volunteers, Impact Makers is here to help you
            make a difference. Together, we can create a better tomorrow.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
