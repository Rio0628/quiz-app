import React from 'react';

const IndQuiz = (props) => {
    return (
        <div className='indQuizView'>
            <p className='quizName'>{props.info.name}</p>
            <p className='quizQuestions'>Questions: {props.info.questions.length}</p>
            <p className='creatorName'>{props.info.creator}</p>

            <div className='saveBtn' onClick={props.onClick}>Save</div>
            <div className='startBtn' onClick={props.onClick}>Start Quiz</div>
        </div>
    )
}

export default IndQuiz;