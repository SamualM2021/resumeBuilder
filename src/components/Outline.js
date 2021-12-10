import React from 'react';

const Outline = props => {

  const outlineData = props.dummyData;
  const gifURL = outlineData.gifURL;
  const gifSrcURL = outlineData.gifSrcURL;
  const GIPHY_ATTRIBUTION = <p><a href={gifURL}>via GIPHY</a></p>;
  const name = outlineData.name;
  const title = outlineData.title;
  const summary = outlineData.summary;

  return (
    <section className="resumeOutline">
        <iframe title="resumeGif" className="resumeImage giphy-embed" src={gifSrcURL}></iframe>
        {GIPHY_ATTRIBUTION}
        <p><span>{name}</span></p>
        <p><span>{title}</span></p>
        <p><span>{summary}</span></p>
    </section>
  );
};

export default Outline;
