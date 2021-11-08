import React from 'react';
import IndQuiz from './IndQuiz';

const MainQuizView = () => {
    return (
        <div className='mainQuizzesView'>
          <h2 className='quizzesHeading'>Quizzes</h2>
          
          <div className='indQuizCntr'>
            <IndQuiz />
            <IndQuiz />
          </div>
        </div>
    );
}

export default MainQuizView;