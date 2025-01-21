import { useState, useReducer, useEffect } from 'react';

function reducer(state, action) {
  if (action.type === 'checkAnswer') {
    return {
      ...state,
      checkAnswer: action.payLoad,
    };
  }
}

function McqChecker({
  optionsTempArray,
  nextBtnHandler,
  selectedTrue,
  selectedfalse,
  dispatchFun,
  currntId,
}) {
  let initialState = {
    checkAnswer: false,
  };

  let [StateCollector, dispatch] = useReducer(reducer, initialState);
  let { checkAnswer } = StateCollector;
  let checkAnswerHandler = () => {
    dispatch({ type: 'checkAnswer', payLoad: true });
  };

  useEffect(() => {
    if (checkAnswer) {
      setTimeout(() => {
        dispatch({ type: 'checkAnswer', payLoad: false });
      }, 6000);
    }
  }, [checkAnswer]);

  let nextHandler = (e) => {
    if (e.target.innerText === 'Result' && currntId === 9) {
      dispatchFun({ type: 'quiz-finished' });
      console.log(dispatch);
    } else {
      nextBtnHandler({ answer: '', id: 0 });
    }
  };

  return (
    <div>
      <div>
        {checkAnswer && (
          <div className="Result-div">
            {selectedTrue === true ? (
              <div className="CorrectAnswer-appearance border border-2">
                <span className="tickMark">✅</span>Correct Answer
              </div>
            ) : selectedfalse ? (
              <div className="Wrong-resultDiv">
                <div>
                  <p className="text-center wrong-Text m-0">
                    <span className="">❌</span>Wrong Answer
                  </p>
                  <p className="text-center">
                    Correct Answer <br /> 👉{optionsTempArray[0]}
                  </p>
                </div>
              </div>
            ) : (
              ''
            )}{' '}
          </div>
        )}
        <div className="next-btnDiv">
          <button className="checkBtn" onClick={checkAnswerHandler}>
            Check Solution
          </button>
          <button className="nextBtn" onClick={nextHandler}>
            {currntId === 9 ? 'Result' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default McqChecker;
