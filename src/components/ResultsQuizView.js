import React from 'react';
import IndQuestion from './IndQuestion';

const ResultsQuizView = (props) => {
    let previewQstCntr = [];

    for (let i = 0; i < props.info.quiz.questions.length; i++) {
        
        const checkIfRight = () => {
            try {
                if (props.info.quiz.questions[i].answer === props.info.questions[i].userChoice) {
                    return 'correct';
                }
                else return 'incorrect';
            } catch(err) { 
                return 'incorrect';
                console.log('No Anwer Found') 
            }
            
        }
        
        previewQstCntr.push(<div className='previewQuestion' id={checkIfRight()} onClick={props.onClick} key={'preview ' + (i + 1)} >{i + 1}</div>)
    }
    
    return (
        <div className='resultsQuizCntr'>
            <p className='resultsHeading'>Results</p>
            <p className='quizNameHeading'>{props.info.quiz.name}</p>

            <p className='resultHeading'>Results: {props.info.fraction}</p>
            <p className='percentHeading'>Percent: {props.info.percent}%</p>

            <div className='questionsCntr'>
               {previewQstCntr}
            </div>

            {/* <IndQuestion /> */}

            <div className='returnBtn' onClick={props.onClick}>Return to Main View</div>
            <div className='saveBtn' name={props.info.quiz.name} onClick={props.onClick}>Save Quiz</div>
        </div>
    );
}

export default ResultsQuizView;