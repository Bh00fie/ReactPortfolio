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
}

export default Project;
