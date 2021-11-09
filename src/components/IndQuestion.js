import React from 'react';

const IndQuestion = () => {
    return (
        <div className='indQuestionCntr'>
            <p className='questionHeading'>Question #</p>
            <p className='questionDesc'>This is the question itself</p>

            <div className='indChoice'><p>A: This is one Choice</p></div>
            <div className='indChoice'><p>B: This is one Choice</p></div>
            <div className='indChoice'><p>C: This is one Choice</p></div>
            <div className='indChoice'><p>D: This is one Choice</p></div>
        </div>
    );
}

export default IndQuestion;