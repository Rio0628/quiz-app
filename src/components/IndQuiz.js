import React from 'react';

const IndQuiz = (props) => {
    return (
        <div className='indQuizView'>
            <p className='quizName'>Quiz Name</p>
            <p className='quizQuestions'>Questions: 10</p>
            <p className='creatorName'>Creator Name</p>

            <div className='saveBtn' onClick={props.onClick}>Save</div>
            <div className='startBtn' onClick={props.onClick}>Start Quiz</div>
        </div>
    )
}

export default IndQuiz;