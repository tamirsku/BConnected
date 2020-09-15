import React, { useState } from 'react';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";


const Publish = ({events,setEvents})=>{
    const [title,setTitle] = useState('');
    const [start,setStart] = useState('');
    const [end,setEnd] = useState('');


    return <form className="ui form">
        <div className="field">
            <label>First Name</label>
            <input type="text" placeholder="First Name"/>
        </div>
        <div className="field">
            <label>Last Name</label>
            <input type="text" placeholder="Last Name"/>
        </div>
        <div className="field">
            <label>Title</label>
            <input type="text" placeholder="Title" onChange={(value)=>setTitle(value)}/>
        </div>
        <div className="two fields">
            <div className="field">
                <label>Start Time</label>
                <Datetime onChange={(state)=>setStart(state.toDate())}/>
            </div>
            <div className="field">
                <label>End Time</label>
                <Datetime onChange={(state)=>setEnd(state.toDate())}/>
            </div>
        </div>
        <button className="ui button" type="submit" onClick={()=>{setEvents(
          [
            ...events,
            {
              start,
              end,
              title,
              type : 'Student',
              visable: false,
              selected: true
            }
          ]
        );
        window.alert('Event Submitted Succesfully')}}>Submit</button>
  </form>
}

export default Publish;