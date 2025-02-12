import { motion } from "motion/react";
import React from "react";

const OurUpcomingEvents = ({ events }) => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      viewport={{ once: true, amount: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        bounceDamping: 1,
        delay: 0.4,
      }}
      className="col-span-2 bg-base-200 rounded-md p-2"
    >
      <h3 className="text-2xl font-semibold opacity-70">
        # Our Upcoming Events Lists
      </h3>
      <ul className="mt-4 ">
        <div className="join join-vertical w-full">
          {events.map((event) => (
            <div
              key={event._id}
              className="collapse collapse-arrow join-item border-base-300 border "
            >
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium opacity-75">
                {event.title}
              </div>
              <div className="collapse-content text-xs sm:text-base opacity-80">
                <p>Status: {event.status}</p>
                <p>Date: {event.date}</p>
                <p>Location: {event.location}</p>
                <p>Organizer: {event.organizer}</p>
                <p>Description: {event.description}</p>
                {/* <button className="btn w-full text-xl hover:bg-[#004A61] hover:text-white text-black bg-white btn-outline my-2">
                  Go
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </ul>
    </motion.div>
  );
};

export default OurUpcomingEvents;
