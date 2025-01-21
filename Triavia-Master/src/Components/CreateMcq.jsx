import { useEffect, useReducer, useState } from 'react';
import Timer from './Timer';
import CreateSingleOption from './CreateSingleOption';
import McqChecker from './McqChecker';

function reducer(state, action) {
  if (action.type == 'Options') {
    return { ...state, options: action.payLoad };
  }

  if (action.type == 'setTrue') {
    return { ...state, selectedTrue: action.payLoad };
  }

  if (action.type == 'setFalse') {
    return { ...state, selectedFalse: action.payLoad };
  }

  if (action.type == 'setTrue+setFalse') {
    return { ...state, selectedFalse: false, selectedTrue: false };
  }
}
function CreateMcq({
  element,
  questionNo,
  nextBtnHandler,
  totalMarksHandler,
  dispatchFun,
  currntId,
  Timer,
}) {
  let initialState = {
    options: [],
    selectedTrue: false,
    selectedFalse: false,
  };

  let [state, dispatch] = useReducer(reducer, initialState);
  let { options, selectedTrue, selectedFalse } = state;
  let optionsTempArray = [
    element.correct_answer,
    element.incorrect_answers[0],
    element.incorrect_answers[1],
    element.incorrect_answers[2],
  ];

  let [totalcorrectMcqs, setTotalCorrectMcq] = useState(0);
  let [selectedOption, setSelectedOption] = useState({
    answer: '',
    id: null,
  });

  useEffect(() => {
    dispatch({ type: 'setTrue+SetFalse', payLoad: false });
  }, [questionNo]);

  let optionSelectedHandler = (selectedOpt, id) => {
    setSelectedOption((prs) => {
      if (selectedFalse || selectedTrue) return prs;

      if (selectedOpt === optionsTempArray[0]) {
        setTotalCorrectMcq((pre) => pre + 1);
        dispatch({ type: 'setTrue', payLoad: true });
      } else {
        dispatch({ type: 'setFalse', payLoad: true });
      }

      return { answer: selectedOpt, id: id };
    });
  };
  useEffect(() => {
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    for (let i = 0; i < 4; i++) {
      if (i === randomNumber) {
        let temp = optionsTempArray[i];
        optionsTempArray[i] = optionsTempArray[0];
        optionsTempArray[0] = temp;
      }
    }

    dispatch({
      type: 'Options',
      payLoad: optionsTempArray,
    });
  }, [element]);

  useEffect(() => {
    if (currntId === 9) {
      totalMarksHandler(totalcorrectMcqs);
    }
  }, [currntId, totalcorrectMcqs]);

  return (
    <div className="mcq-div">
      <div className="mcq--innerDiv">
        <div>
          <Timer dispatchFun={dispatchFun} Timer={Timer} />
        </div>
        <div>
          <h4 className="text-center">Total Points :{totalcorrectMcqs}</h4>
        </div>
        <div className="totalmcqs">
          <h4>
            <progress
              name=""
              id=""
              min={0}
              max={10}
              step={1}
              className="range"
              value={totalcorrectMcqs}
            />
          </h4>
        </div>
        <h3 className="text-center">Question No: {questionNo}</h3>
        <p className="question">Statement: {element.question}</p>
        <div
          className={`allMcqs-div 
        ${selectedTrue || selectedFalse ? 'notAllowed' : 'hoverOptDiv'}`}
        >
          {options.map((mcq, index) => (
            <CreateSingleOption
              option={mcq}
              optionSelected
              optionSelectedHandler={optionSelectedHandler}
              character={
                index === 0 ? 'A' : index === 1 ? 'B' : index === 2 ? 'C' : 'D'
              }
              selectedOption={selectedOption}
              key={index}
              id={currntId}
              selectedTrue={selectedTrue}
              selectedfalse={selectedFalse}
            />
          ))}
        </div>

        {selectedTrue || selectedFalse ? (
          <McqChecker
            optionsTempArray={optionsTempArray}
            nextBtnHandler={nextBtnHandler}
            selectedTrue={selectedTrue}
            selectedfalse={selectedFalse}
            dispatchFun={dispatchFun}
            currntId={currntId}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default CreateMcq;
