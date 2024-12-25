import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import { useEffect, useState } from "react";
import { FcCalendar } from "react-icons/fc";
import useAxios from "../hooks/useAxios";
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
      console.log(error);
    }
  };

  return (
    <div className="w-10/12 mx-auto  my-10 bg-base-100 rounded-md">
      <h2 className="text-2xl md:text-4xl text-gray-700 text-center flex justify-center gap-4 py-5 items-center underline">
        Event Calendar <FcCalendar />
      </h2>
      <div className="md:grid grid-cols-4 mt-10 gap-8">
        <div className="col-span-2 bg-base-200 rounded-md p-2">
          <h3 className="text-2xl font-semibold opacity-70">
            # Our Upcoming Events Lists
          </h3>
          <ul className="mt-4 ">
            <div className="join join-vertical w-full">
              {events.map((event) => (
                <div className="collapse collapse-arrow join-item border-base-300 border bg-white/40">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title text-xl font-medium opacity-75">
                    {event.title}
                  </div>
                  <div className="collapse-content text-xs sm:text-base opacity-60">
                    <p>Status: {event.status}</p>
                    <p>Date: {event.date}</p>
                    <p>Location: {event.location}</p>
                    <p>Organizer: {event.organizer}</p>
                    <p>Description: {event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ul>
        </div>
        <div className="calendar-container mt-5 sm:mt-0 text-xs col-span-2 overflow-x-auto bg-base-200 p-2 rounded-md">
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
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
