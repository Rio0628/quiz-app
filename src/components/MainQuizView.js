import React from 'react';
import IndQuiz from './IndQuiz';

const MainQuizView = (props) => {
  let quizzesCntr = [];

  // Shows each indQuiz
  for (let i = 0; i < props.quizzes.length; i++) {
    quizzesCntr.push( <IndQuiz info={props.quizzes[i]} savedQuizzes={props.savedQuizzes} onClick={props.onClick} key={'IndQUiz ' + i}/> )
  }
  
  return (
    <div className='mainQuizzesView'>
      <h2 className='quizzesHeading'>Quizzes</h2>
          
      <div className='indQuizCntr'>
        {quizzesCntr}
      </div>
    </div>
  );
}

export default MainQuizView;