import React, { useState } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import eventsInit from '../events'

import MyCalendar from './MyCalendar';
import Home from './Home';
import SearchBar from './SearchBar';
import Setup from './Setup';
import Publish from './Publish';
import Subscriptions from './Subscriptions';


const App = ()=>{
    const [events,setEvents] = useState(eventsInit);
    const [eventTerm,setEventTerm] = useState('');
    
    const calendarComponent = ()=>{
        return <div>
            <SearchBar onFormSubmit={(term)=>setEventTerm(term)} />
            <MyCalendar  events={events} setEvents={setEvents} eventTerm={eventTerm}/>
        </div>
    }

    return <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/home" className="navbar-brand">
            BCONNECTED
        </a>
        <div className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to={"/calendar"} className="nav-link">
                    Calendar View
                </Link>
            </li>

            <li className="nav-item">
                <Link to={"/setup"} className="nav-link">
                    New Events
                </Link>
            </li>

            <li className="nav-item">
                <Link to={"/subscriptions"} className="nav-link">
                    Subscriptions
                </Link>
            </li>
            
            <li className="nav-item">
                <Link to={"/publish"} className="nav-link">
                    Publish Event
                </Link>
            </li>
        </div>
        </nav>

        <div className="container mt-3">
        <Switch>
            <Route exact path={["/","/home"]} component={Home} />
            <Route exact path="/calendar" component={calendarComponent} />
            <Route exact path="/setup" component={Setup}/>
            <Route exact path="/publish" component={()=><Publish events={events} setEvents={setEvents}/>}/>
            <Route exact path="/subscriptions" component={Subscriptions}/>
        </Switch>
        </div>
  </div>
}

export default App;

    //   return (
    //     <ICalendarLink event={event}>
    //         <div class="ui icon button" data-content="Add users to your feed">
    //             <i class="add icon"></i>
    //         </div>
    //     </ICalendarLink>
    //   );
