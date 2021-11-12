import React from 'react';
import IndQuiz from './IndQuiz';

const MainQuizView = (props) => {
  let quizzesCntr = [];

  for (let i = 0; i < props.quizzes.length; i++) {
    quizzesCntr.push( <IndQuiz info={props.quizzes[i]} onClick={props.onClick}/> )
  }
  
  return (
    <div className='mainQuizzesView'>
      <h2 className='quizzesHeading'>Quizzes</h2>
          
      <div className='indQuizCntr'>
        <IndQuiz onClick={props.onClick}/>
        <IndQuiz onClick={props.onClick}/>
      </div>
    </div>
  );
}

export default MainQuizView;