import React from 'react';
import IndQuestion from './IndQuestion';

const ResultsQuizView = () => {
    return (
        <div className='resultsQuizCntr'>
            <p className='resultsHeading'>Results</p>
            <p className='quizNameHeading'>Quiz Name</p>

            <p className='resultHeading'>Results: 8/10</p>
            <p className='percentHeading'>Percent: 80%</p>

            <div className='questionsCntr'>
                <div className='previewQuestion'>1</div>
                <div className='previewQuestion'>2</div>
                <div className='previewQuestion'>3</div>
                <div className='previewQuestion'>4</div>
            </div>

            <IndQuestion />

            <div className='returnBtn'>Return to Main View</div>
            <div className='saveBtn'>Save Quiz</div>
        </div>
    );
}

export default ResultsQuizView;