import React, { useState } from 'react';

const EventCard = (props) => {
    const [visable,setVisable] = useState(props.event.visable);

    return visable ? <div className="four wide column">
        <div className="ui card">
            <div className="content">
                {props.children}
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button" onClick={
                        ()=>{props.event.selected = true;
                            props.event.visable = false;
                            setVisable(false);

                            }}>
                        Add
                        </div>
                    <div className="ui basic red button" onClick={
                        ()=>{props.event.selected = false;
                            props.event.visable = false;
                            setVisable(false);
                            }}>
                        Delete
                        </div>
                </div>
            </div>
        </div>
    </div> : null
}


export default EventCard;