import React from 'react';
import IndQuiz from './IndQuiz';

const MainQuizView = (props) => {
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