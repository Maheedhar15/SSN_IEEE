import React from 'react';
import './events.css';
import Tect from '../../assets/Tect.jpeg';

const App = () => {
  return (
    <>
      <section className="Events">
        <h1>Our events</h1>
        <div className="upcoming__events">
          <img src={Tect} alt="" className="event__img" />
          <div className="event_desc">
            <h1>Tec - T</h1>
            <p>
              Brace yourselves as we are bringing you our first offline event,
              TEC-T. Come and learn about this digital revolution from the
              speaker(Mr. Mohamed Rawidean), who has 20 years of experience in
              the design, development, and installation of smart-home systems. 
              <br />
              <br />
              Date: Oct 11 Venue
              <br />
              Central Seminar Hall (ECE)
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
