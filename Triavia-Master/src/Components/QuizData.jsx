import { useEffect, useState, useReducer } from 'react';
import DatafetchingMsg from './DatafetchingMsg';
import ResultGenerator from './ResultGenerator';
import Timer from './Timer';
import CreateMcq from './CreateMcq';

function reducer(state, action) {
  if (action.type == 'Ready') {
    return { ...state, apiData: action.payLoad, status: 'Ready' };
  }

  if (action.type == 'CorrectMcqs') {
    return { ...state, totalcorrectMcqs: action.payLoad };
  }

  if (action.type == 'Loading') return { ...state, Loading: action.payLoad };

  if (action.type == 'quiz-finished') {
    return { ...state, apiData: [], status: 'finished' };
  }

  return state;
}

function QuizData({ username, setWelcomePageDisplay, setDataFetcing }) {
  let initialState = {
    apiData: [],
    totalcorrectMcqs: 0,
    Loading: false,

    status: 'Not-Started',
  };
  let [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  let { apiData, totalcorrectMcqs, Loading, Ready, status } = state;

  let TotalMcqHandler = (value) => {
    dispatch({ type: 'CorrectMcqs', payLoad: value });
  };

  let [msg, setMsg] = useState('isLoading');
  let [currntId, setCurrentId] = useState(0);
  let [dataFetchingFailed, setDataFetchingFailed] = useState(false);

  let nextBtnHandler = (event) => {
    if (currntId < 10) {
      setCurrentId((prs) => prs + 1);
    }
  };

  let playAgainResetAll = () => {
    setCurrentId(0);
    dispatch({ type: 'Ready', payLoad: [] });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch({ type: 'Loading', payLoad: true });
        const response = await fetch(
          `https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple`
        );

        if (response.ok) {
          let data = await response.json();

          dispatch({
            type: 'Ready',
            payLoad: data.results.length > 0 ? data.results : [],
          });
          setMsg(data.results ? '' : 'Data fetching failed');
          setDataFetcing(false);
        }
      } catch (err) {
        {
          setDataFetchingFailed(true);
          setMsg('Data Fetching Failed');
          throw new Error('Some thing want wrong during data fetching!!!');
        }
      } finally {
        dispatch({ type: 'Loading', payLoad: false });
      }
    }

    if (currntId === 0) {
      fetchData();
    }
  }, []);

  return (
    <div className="quiz-section">
      {Loading ? (
        <DatafetchingMsg msg={'is Loading'} />
      ) : dataFetchingFailed ? (
        <DatafetchingMsg msg={msg} />
      ) : apiData.length > 0 && currntId < apiData.length ? (
        <div className="quiz-full-box">
          <CreateMcq
            element={apiData[currntId]}
            questionNo={currntId + 1}
            nextBtnHandler={nextBtnHandler}
            totalMarksHandler={TotalMcqHandler}
            dispatchFun={dispatch}
            currntId={currntId}
            Timer={Timer}
          />
        </div>
      ) : status == 'finished' ? (
        <div className="quiz-full-box">
          <ResultGenerator
            totalcorrectMcqs={totalcorrectMcqs}
            username={username}
            playAgainResetAll={playAgainResetAll}
            setWelcomePageDisplay={setWelcomePageDisplay}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default QuizData;
