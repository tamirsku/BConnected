import React from 'react';

const Details = ({event})=>
    <div className="comment">
        <div className="content"> 
            <div className="header">
                {event.type}
            </div>
            <div className="meta">
                <span className="date">{event.start.toUTCString()}</span>
            </div> 
            <div className="text">{event.title}</div>
        </div>
    </div>

export default Details;    