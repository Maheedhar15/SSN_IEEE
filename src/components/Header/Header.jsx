import React from 'react';
import './header.css';
import SSN from '../../assets/ssn.jpeg';

const Header = () => {
  return (
    <section id="header">
      <h1>Welcome to SSN IEEE</h1>
      <h2>About SSN</h2>
      <div className="header header__head">
        <div className="about__ssn">
          <img src={SSN} alt="ssn" className="ssn" />
          <p className="about">
            SSN Institutions, established by Mr. Shiv Nadar, Founder Chairman of
            HCL Technologies, stand out as a premier center of higher learning
            with a mission of pursuing excellence in education and research. The
            institutions are named after the Chairman’s father, Sri
            Sivasubramaniya Nadar. SSN Institutions are run by the SSN Trust
            and, with their diverse and dynamic community of students offer a
            distinctive combination of some of the finest graduate,
            undergraduate and research programs, accomplished faculty, world
            class facilities and a residential campus set on a sprawling 230
            acres of sylvan surroundings. The Institutions provide a variety of
            stimulating environments for intellectual development, free
            thinking, and personal growth, challenging its students with dynamic
            learning opportunities and equipping them with the skills, insights,
            attitudes and practical experiences that are necessary to take up
            responsibilities in the society.
          </p>
        </div>
        <div className="about__ieee">
          <h2>What do we do?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            enim dolorum aliquam expedita sit nulla itaque! Non eligendi
            consequuntur nemo, aut ducimus fuga consequatur voluptatum, deserunt
            nihil tenetur a assumenda?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
