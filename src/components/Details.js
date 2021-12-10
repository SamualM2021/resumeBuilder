import React from 'react';
import dummyData from '../data/dummyData';

const Details = props => {

  const details = props.dummyData.details;
  const skills = details.skills;
  const experience = details.experience;
  const education = details.education;

  return (
    <section className="resumeDetails">
      <div>
        <h1>Skills</h1>
        <textarea disabled>{skills}</textarea>
      </div>
      <div>
        <h1>Experience</h1>
        <textarea disabled>{experience}</textarea>
      </div>
      <div>
        <h1>Education</h1>
        <textarea disabled>{education}</textarea>
      </div>
    </section>
  );
};

export default Details;