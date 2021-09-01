import React from "react";
export const About = () => {
  return (
    <div style={aboutStyle}>
      <h2>About</h2>
      <p style={{ fontSize: "20px" }}>
        Hi there , I'm Hamed Tahmasebi, a junior front-end web developer based
        in Ahvaz , Khuzestan , Iran.
        <br />
        This is one of my Reactjs practice projects.
        <br />
        <br />
        It's for technicians who work in a company and need to inform other
        technicians of what problems they've solved or what problems are there
        and need to be solved
        <br />
        <br />
      </p>
      <ul>
        <li>
          <h3>What i used in this app</h3>
        </li>
        <li>HTML/CSS/JS</li>
        <li>Reactjs</li>
        <li>Redux</li>
        <li>Materialize (library)</li>
      </ul>
      <a href="/">
        <h4 className="btn blue white-text">Back to home page</h4>
      </a>
    </div>
  );
};

const aboutStyle = { backgroundColor: "whitesmoke", padding: "1.5rem 4rem" };

export default About;
