import React from 'react';
import IndResult from './IndResult';

const AllResultsView = (props) => {
    let indResultsCntr = [];

    // console.log(props.quizzes)
    for (let i = 0; i < props.quizzes.length; i++) {
        indResultsCntr.push( <IndResult number={i} quiz={props.quizzes[i]} onClick={props.onClick} key={'quiz ' + i}/>);
    }
    
    return (
        <div className='allResultsCntr'>
            <p className='allResultsHeading'>Result Quizzes</p>
            
            {indResultsCntr}
        </div>
    );
}

export default AllResultsView;