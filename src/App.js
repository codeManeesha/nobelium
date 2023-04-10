import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [eventLogs, setEventLogs] = useState([]);

  const logEvent=( eventName) =>{
    let currentDate = new Date();

    setEventLogs( [
      ...eventLogs, { time: currentDate.toLocaleString(),eventName: `${eventName}`}
     
    ]);
  }

  return (
    <div>
      <h1 onMouseOver={() => logEvent( 'in')} onMouseOut={() => logEvent( 'out')}>Heading 1</h1>
      <h2 onMouseOver={() => logEvent( 'in')} onMouseOut={() => logEvent('out')}>Heading 2</h2>
      <div onMouseOver={() => logEvent( 'in')} onMouseOut={() => logEvent('out')}>Div element</div>
      <table>
        <tr>
            
            <th>date and Time</th>
            <th>Event Name</th>
          </tr>
      
        
          {eventLogs.map((log, index) => (
            <tr key={index}>
              <th>{log.time}</th>
              <th>{log.eventName}</th>
            </tr>
          ))}
      
      </table>
    </div>
  );
}

export default App;



