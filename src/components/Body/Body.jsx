import React from 'react';
import faculty from '../../assets/faculty0.jpg';
import './body.css';

const Body = () => {
  return (
    <section id="body">
      <h1>Our SSN IEEE Members</h1>
      <div className="container body__header">
        <div className="ieee_faculties">
          <h2>Faculty Members</h2>
          <img src={faculty} alt="faculty" className="facultyimg" />
          <h3>T Sharmila</h3>
          <h4>Faculty Incharge</h4>
        </div>
        <div className="core__members">
          <h2>IEEE CS Core Members</h2>
        </div>
      </div>
    </section>
  );
};

export default Body;
