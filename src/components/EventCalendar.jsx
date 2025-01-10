import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { FcCalendar } from "react-icons/fc";
import useAxios from "../hooks/useAxios";
import OurUpcomingEvents from "./OurUpcomingEvents";
import SectionTitle from "./SectionTitle";
const EventCalendar = () => {
  const axiosInstance = useAxios();
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchEvents();
  }, []);
  const fetchEvents = async () => {
    try {
      const { data } = await axiosInstance.get("/events");
      setEvents(data?.data);
    } catch (error) {
      // console.log(error);
    }
  };
  return (
    <div className="mx-auto  my-10 bg-base-100 rounded-md">
      <SectionTitle title={" Event Calendar"} icon={<FcCalendar />} />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        viewport={{ once: true, amount: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          bounceDamping: 1,
          delay: 0.4,
        }}
        className="md:grid grid-cols-4 mt-10 gap-8"
      >
        {/* upcoming section */}
        <OurUpcomingEvents events={events} />
        {/* calender */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          viewport={{ once: true, amount: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            bounceDamping: 1,
            delay: 0.4,
          }}
          className="calendar-container mt-5 sm:mt-0 text-xs col-span-2 overflow-x-auto bg-base-200 p-2 rounded-md"
        >
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth",
            }}
            height="auto"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EventCalendar;
