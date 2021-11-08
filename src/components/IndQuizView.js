import React from 'react';

const IndQuizView = () => {
    return (
        <div className='indQuizView'>
            <p className='quizName'>Quiz Name</p>
            <p className='quizQuestions'>Questions: 10</p>
            <p className='creatorName'>Creator Name</p>

            <ul className='save-startBtns'>
                <li className='saveBtn'>Save</li>
                <li className='startBtn'>Start Quiz</li>
            </ul>
        </div>
    )
}

export default IndQuizView;