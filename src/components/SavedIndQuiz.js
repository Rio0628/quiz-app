import React from 'react';

const SavedIndQuiz = (props) => {
    
    const checkQuizSaved = () => {
        
    }
    
    return (
        <div className='indQuizView'>
            <p className='quizName'>{props.info.name}</p>
            <p className='quizQuestions'>Questions: {props.info.questions.length}</p>
            <p className='creatorName'>{props.info.creator}</p>

            <div className='removeBtn' name={props.info.name} onClick={props.onClick}>Remove</div>
            <div className='startBtn' name={props.info.name} onClick={props.onClick}>Start Quiz</div>
        </div>
    )
}

export default SavedIndQuiz;