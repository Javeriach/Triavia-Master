import { useEffect, useState } from 'react';
import WelcomePage from './Components/LandingPage/WelcomePage';
import Navbar from './Components/LandingPage/Navbar';
// import Navbar from './components/LandingPage/Navbar';
import QuizData from './Components/QuizData';
import 'bootstrap/dist/css/bootstrap.css';
import { Modal, Button } from 'bootstrap';
import './App.css';

function App() {
  let [WelcomePageDisplay, setWelcomePageDisplay] = useState(true);
  let [Username, setUserName] = useState('');
  let [dataFetching, setDataFetcing] = useState(true);
  return (
    <div className="h-100">
      <Navbar />
      <div className="quiz-data-section">
        {WelcomePageDisplay && (
          <WelcomePage
            setWelcomePageDisplay={setWelcomePageDisplay}
            setUserName={setUserName}
            username={Username}
          />
        )}

        {!WelcomePageDisplay && (
          <QuizData
            username={Username}
            setWelcomePageDisplay={setWelcomePageDisplay}
            setDataFetcing={setDataFetcing}
          />
        )}
      </div>
    </div>
  );
}

export default App;
