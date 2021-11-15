import React from 'react';
import SavedIndQuiz from './SavedIndQuiz';

const SavedQuizzesView = (props) => {
    let savedQuizCntr = [];

    // Takes care of showing each savedQuiz 
    for (let i = 0; i < props.savedQuizzes.length; i++) {
        savedQuizCntr.push( <SavedIndQuiz info={props.savedQuizzes[i]} onClick={props.onClick} key={'savedQuiz ' + i}/> );
    }

    return (
        <div className='mainQuizzesView'>
            <h2 className='quizzesHeading'>Saved Quizzes</h2>
        
            <div className='savedQuizzesCntr'>
                {savedQuizCntr}
            </div>
        </div>
    );
}

export default SavedQuizzesView; 