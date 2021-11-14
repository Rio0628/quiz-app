import React from 'react';
import IndQuestion from './IndQuestion';

const ResultsQuizView = (props) => {
    return (
        <div className='resultsQuizCntr'>
            <p className='resultsHeading'>Results</p>
            <p className='quizNameHeading'>{props.info.quiz.name}</p>

            <p className='resultHeading'>Results: {props.info.fraction}</p>
            <p className='percentHeading'>Percent: {props.info.percent}%</p>

            <div className='questionsCntr'>
                <div className='previewQuestion' onClick={props.onClick}>1</div>
                <div className='previewQuestion' onClick={props.onClick}>2</div>
                <div className='previewQuestion' onClick={props.onClick}>3</div>
                <div className='previewQuestion' onClick={props.onClick}>4</div>
            </div>

            {/* <IndQuestion /> */}

            <div className='returnBtn' onClick={props.onClick}>Return to Main View</div>
            <div className='saveBtn' onClick={props.onClick}>Save Quiz</div>
        </div>
    );
}

export default ResultsQuizView;