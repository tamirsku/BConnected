import React from 'react';
import events from '../events';
import EventList from './EventList';

const Setup = ()=>{
    return <div>
        <EventList events={events}/>
    </div>;
}

export default Setup;