import React from 'react';
import IndQuiz from './IndQuiz';

const SavedQuizzesView = () => {
    return (
        <div className='mainQuizzesView'>
            <h2 className='quizzesHeading'>Saved Quizzes</h2>
        
            <div className='savedQuizzesCntr'>
                <IndQuiz />
                <IndQuiz />
            </div>
        </div>
    );
}

export default SavedQuizzesView; 