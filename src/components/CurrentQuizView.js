import React from 'react';
import IndQuestion from './IndQuestion';

const CurrentQuizView = (props) => {
    return (
        <div className='quizView'>
            <div className='questionsCntr'>
                <div className='previewQuestion' onClick={props.onClick}>1</div>
                <div className='previewQuestion' onClick={props.onClick}>2</div>
                <div className='previewQuestion' onClick={props.onClick}>3</div>
                <div className='previewQuestion' onClick={props.onClick}>4</div>
            </div>

            <div className='returnBtn' onClick={props.onClick}>Return</div>
            <div className='submitBtn' onClick={props.onClick}>Submit Quiz</div>

            <IndQuestion onClick={props.onClick}/>

            <div className='backBtn' onClick={props.onClick}>Back</div>
            <div className='nextBtn' onClick={props.onClick}>Next Question</div>
        </div>
    );
}

export default CurrentQuizView;