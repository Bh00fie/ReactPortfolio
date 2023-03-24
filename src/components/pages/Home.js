import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <div>
       <img src={require("../images/photoprofile.jpg")} />
      <p className="homeIntroduction">
        Abhi's here, just finished my Front End Developer Bootcamp with Trilogy! Ready to get get involved in new projects!😊
      </p>
      <p> 
        I am currently at my fourth year in my Aerospace and Mechanical Engineering degree at the university of Southampton, I have experience in engineering industry and due to my passion to new technology I am able to transfer skills between my projects, such as logical thinking and a structural method to deal with problems.
      </p>

      <a className="btn btn-primary btn-lg" href="images/Abhinandan Thour CV 2023.pdf" download="Abhinandan Thour CV" role="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
        </svg>
          <h2 id="button-text">Download my Resume</h2> 
      </a>


      <div className="socials">
        <p>Get in touch with me at: Bh00fie@gmail.com</p>
        <a href="https://github.com/Bh00fie"> <FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://www.linkedin.com/in/abhinandan-thour-42359b193/"><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>
    </div>
  );
}

export default Home;
