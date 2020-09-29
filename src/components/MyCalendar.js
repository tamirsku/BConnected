import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";


const MyCalendar = ({events,setEvents,eventTerm}) => {

    const handleSelect = ({ start, end }) => {
      const title = window.prompt('New Event name');
      const type = window.prompt('Event Type');

      if (title && type)
        setEvents(
          [
            ...events,
            {
              start,
              end,
              title,
              type,
              visable: false,
              selected: true
            }
          ]
        )
    }

    const eventStyle = (event) => {
      let newStyle = {
        backgroundColor: "lightgrey",
        color: 'black',
        borderRadius: "0px",
        border: "none"
      };

      if (event.type === 'Class'){
        newStyle.backgroundColor = "lightgreen"
      }

      if (event.type === 'Aguda'){
        newStyle.backgroundColor = "orange"
      }

      if (event.type === 'Social'){
        newStyle.backgroundColor = "red"
      }

      if (event.type === 'Koka'){
        newStyle.backgroundColor = "blue"
      }

      if (event.type === 'Forum'){
        newStyle.backgroundColor = "yellow"
      }

      if (event.type === 'Baraka'){
        newStyle.backgroundColor = "brown"
      }

      if (event.type === 'Pride'){
        newStyle.backgroundColor = "pink"
      }

      return {
        className: "",
        style: newStyle
      };
    }

    return <div>
        <Calendar
          popup
          selectable
          localizer={momentLocalizer(moment)}
          events={eventTerm==='' ? events.filter(event=>event.selected) :
                 events.filter((event)=> event.type === eventTerm && event.selected)} 
          defaultView="week"
          style={{ height: "150vh"}}
          // onSelectEvent={event => {
          //   setSelectedEvent(event);
          //   setPoped(true);
          // }}
          startAccessor="start"
          endAccessor="end"    
          onSelectSlot={handleSelect}
          eventPropGetter={eventStyle}
        />
      </div>;
}
export default MyCalendar;