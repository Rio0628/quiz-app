import React from 'react';

const IndResult = (props) => {
    return (
        <div className='resultQuizClosed' number={props.number} name={props.quiz.quiz.name} onClick={props.onClick}>
            <p className='quizName'>{props.quiz.quiz.name}</p>
            <p className='resultsQuiz'>Results: {props.quiz.fraction}</p>
            <p className='creatorName'>{props.quiz.quiz.creator}</p>
            <p className='quizQuestions'>Question: {props.quiz.quiz.questions.length}</p>
        </div>
    );
};

export default IndResult;