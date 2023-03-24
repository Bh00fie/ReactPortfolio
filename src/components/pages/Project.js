// Imported React
import React from 'react';

// Imported Images for each project
import workoutKitchen from "../images/workoutKitchen.png";
import weightTracker from "../images/weightTracker.png";
import readmeGenerator from "../images/ReadMe.png";
import codeQuiz from "../images/Quiz.jpg";
import weatherAPI from "../images/weatherAPI.png";
import dailyPlanner from "../images/dailyPlanner.png";

const images = {
  "Workout Kitchen": workoutKitchen,
  "Team Profile Generator": weightTracker,
  "README Generator": readmeGenerator,
  "Code Quiz": codeQuiz,
  "Password Generator": weatherAPI,
  "Work Day Scheduler": dailyPlanner,
};

//Created function to check if the webpage has been deployed or not
function Project({ title, description, features, deployed, repo }) {
  const isDeployed = () => {
    if (deployed) {
      return <a href={deployed}><button>Deployed App</button></a>;
    } else {
      return null;
    }
  };

  return (
    <div>
      <div className="project-card column">
        <div className="img-container" style={{ backgroundImage: `url('${images[title]}')` }} />
        <div className="project-content p-3">
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{features}</p>
          {isDeployed()}
          <a href={repo}><button>GitHub</button></a>
        </div>
      </div>
    </div>
  );
}

export default Project;
