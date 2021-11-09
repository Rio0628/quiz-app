import React from 'react';
import IndQuestion from './IndQuestion';

const CurrentQuizView = () => {
    return (
        <div className='quizView'>
            <div className='questionsCntr'>
                <div className='previewQuestion'>1</div>
                <div className='previewQuestion'>2</div>
                <div className='previewQuestion'>3</div>
                <div className='previewQuestion'>4</div>
            </div>

            <div className='returnBtn'>Return</div>
            <div className='submitBtn'>Submit Quiz</div>

            <IndQuestion />

            <div className='backBtn'>Back</div>
            <div className='nextBtn'>Next Question</div>
        </div>
    );
}

export default CurrentQuizView;