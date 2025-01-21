import popper from '../video/popper.gif';
import sadness from '../Components/LandingPage/Images/sadness.png';
function ResultGenerator({
  username,
  totalcorrectMcqs,
  playAgainResetAll,
  setWelcomePageDisplay,
}) {
  let playAgainHandler = () => {
    setWelcomePageDisplay(true);
    playAgainResetAll();
  };

  return (
    <div className="final-resultDiv d-flex flex-column justify-content-center align-items-center mt-5">
      <div>
        {totalcorrectMcqs <= 5 ? (
          <img className="popper-gif" src={sadness}></img>
        ) : (
          <img className="popper-gif" src={popper}></img>
        )}
      </div>
      <p>{username}!!</p>
      <p>Your got {totalcorrectMcqs} marks out of 10</p>
      <button className="play-again" onClick={playAgainHandler}>
        Play Again ?
      </button>
    </div>
  );
}

export default ResultGenerator;
