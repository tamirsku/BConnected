import React from 'react';
import topics from '../topics';

const Subscriptions = ()=>{
    return <div>
        <br />
        <div className="ui grid">
        {topics.map((topic)=>
        <div className={`ui button ${topic.active ? `green` : `red`}`} tabindex="0">
            {topic.name}
        </div>)}
    </div>
  </div>;
}

export default Subscriptions;