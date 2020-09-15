import React from 'react';
import Details from './Details';
import EventCard from './EventCard';

const EventList = ({events}) => {
    return <div className="ui grid"> 
        { events.map(
            (event)=><EventCard event={event}>
                <Details event={event} />
            </EventCard>) } 
        </div>;
};

export default EventList;