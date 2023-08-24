import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./Calender.scss";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Title from "../../../Title/Title";
function Calender() {
  const localizer = momentLocalizer(moment);
  const myEventsList = [
    // {
    //   title: "Staff meeting",
    //   start: new Date(),
    //   end: new Date(new Date().getTime() + 2 * 60 * 60 * 1000), // Event duration of 2 hours
    // },
    // {
    //   title: "school baraza",
    //   start: moment().add(1, "days").toDate(),
    //   end: moment().add(1, "days").add(2, "hours").toDate(),
    // },
    // Add more events as needed
  ];
  return (
    <div className="calendar-container">
      <Title title={"New Hope School Calendar"}/>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
      
      />
    </div>
  );
}

export default Calender;
