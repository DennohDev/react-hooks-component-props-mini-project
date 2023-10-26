import React from 'react';

const About = (props) => {
  const { imageSrc ="https://via.placeholder.com/215", aboutText } = props;

  return (
    <aside>
      <img src={imageSrc} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;
