import React, { useEffect } from "react";
import { FaBullhorn, FaChartLine, FaHandsHelping } from "react-icons/fa";
import Container from "../components/Container";

const services = [
  {
    id: 1,
    icon: <FaHandsHelping className="text-4xl text-[#004a61] mb-4" />,
    title: "Volunteer Opportunities",
    description:
      "Connect with meaningful volunteering activities that align with your interests and skills.",
  },
  {
    id: 2,
    icon: <FaBullhorn className="text-4xl text-[#004a61] mb-4" />,
    title: "Post Volunteer Needs",
    description:
      "Easily post opportunities and attract passionate volunteers to support your cause.",
  },
  {
    id: 3,
    icon: <FaChartLine className="text-4xl text-[#004a61] mb-4" />,
    title: "Track Your Impact",
    description:
      "Monitor your contributions and see the real impact you're making in your community.",
  },
];

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Container>
      <section className=" py-6 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-center opacity-80 mb-8">
            Our Services
          </h2>
          {/* Service Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Services;
