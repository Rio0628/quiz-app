import React from 'react';

const IndQuiz = (props) => {
    let quizSaved = false;
    
    const checkQuizSaved = () => {
        const savedQuiz = props.savedQuizzes.filter( quiz => quiz.name === props.info.name);
        if (savedQuiz.length > 0 ) { return 'Saved'}
        else return 'Save'
    }

    const changeBtnBackground = () => {
        const savedQuiz = props.savedQuizzes.filter( quiz => quiz.name === props.info.name);
        if (savedQuiz.length > 0)  return ' saved'
        else return ''
    }
    
    return (
        <div className='indQuizView'>
            <p className='quizName'>{props.info.name}</p>
            <p className='quizQuestions'>Questions: {props.info.questions.length}</p>
            <p className='creatorName'>{props.info.creator}</p>

            <div className={'saveBtn' + changeBtnBackground()} name={props.info.name} onClick={props.onClick}>{checkQuizSaved()}</div>
            <div className='startBtn' name={props.info.name} onClick={props.onClick}>Start Quiz</div>
        </div>
    )
}

export default IndQuiz;