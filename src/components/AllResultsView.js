import React from 'react';

const AllResultsView = () => {
    return (
        <div className='allResultsCntr'>
            <p className='allResultsHeading'>Result Quizzes</p>

            <div className='resultQuizOpened'>
                <p className='quizName'>Quiz Name</p>
                <p className='resultsQuiz'>Results: 9/10</p>
                <p className='creatorName'>Creator Name</p>
                <p className='quizQuestions'>Question: 10</p>
                
                <select className='qstDropdown'>
                    <option>Question 1</option>
                    <option>Question 2</option>
                    <option>Question 3</option>
                </select>

                <p className='questionDesc'>This is the text for the question</p>

                <div className='rightChoice'>Right Answer for question</div>
                <div className='userChoice'>Your Answer for question</div>
            </div>

            <div className='resultQuizClosed'>
                <p className='quizName'>Quiz Name</p>
                <p className='resultsQuiz'>Results: 9/10</p>
                <p className='creatorName'>Creator Name</p>
                <p className='quizQuestions'>Question: 10</p>
            </div>
            <div className='resultQuizClosed'>
                <p className='quizName'>Quiz Name</p>
                <p className='resultsQuiz'>Results: 9/10</p>
                <p className='creatorName'>Creator Name</p>
                <p className='quizQuestions'>Question: 10</p>
            </div>
            
        </div>
    );
}

export default AllResultsView;