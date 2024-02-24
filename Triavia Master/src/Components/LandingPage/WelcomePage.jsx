import React, { useEffect, useState } from 'react';
import ImageSection from './ImageSection';
import QuizUserSetup from './QuizUserSetup';
function WelcomePage({ setWelcomePageDisplay, setUserName, username }) {
  let [showError, setShowError] = useState(false);
  let userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  let displayHandler = () => {
    if (username === '') {
      setShowError(true);
    } else {
      setWelcomePageDisplay((pre) => !pre);
    }
  };
  useEffect(() => {
    if (showError) {
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    }
  });
  return (
    <div className="landing-quiz-part py-5 w-100">
      <div>
        <div>
          {showError && (
            <div className="not-Name-enter mt-4">Enter Your name first!!!</div>
          )}
        </div>
        <div>
          <QuizUserSetup
            userNameHandler={userNameHandler}
            username={username}
            displayHandler={displayHandler}
          />
        </div>
      </div>

      <ImageSection />
    </div>
  );
}

export default WelcomePage;
