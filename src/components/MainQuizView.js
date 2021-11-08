import React from 'react';
import IndQuizView from './IndQuizView';

const MainQuizView = () => {
    return (
        <div className='mainQuizzesView'>
          <h2 className='quizzesHeading'>Quizzes</h2>
          
          <div className='indQuizCntr'>
            <IndQuizView />
            <IndQuizView />
          </div>
        </div>
    );
}

export default MainQuizView;