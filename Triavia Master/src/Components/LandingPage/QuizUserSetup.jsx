import ImageSection from './ImageSection';

function QuizUserSetup({ userNameHandler, username, displayHandler }) {
  return (
    <div className="Quiz-userName-setup">
      <p className="quizlet-heading m-0 p-0">
        Unlock Exclusive Rewards as <span> You win </span>
      </p>
      <p>
        Div into ultimate quiz experience -a blend of excitement, <br></br>
        learning and triumph, quizzes. It's more than a game.
      </p>

      <div className="d-flex  inputSection">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text p-2">@</span>
          </div>

          <div className="d-flex justify-contet">
            <input
              type="text"
              className="form-control inputName"
              placeholder="Username"
              onChange={userNameHandler}
              value={username}
            />
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <button className="startQuix--btn d-block " onClick={displayHandler}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizUserSetup;
