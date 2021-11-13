import React from 'react';

const IndQuestion = (props) => {
    
    console.log(props.currentQst)

    const choiceClkA = () => props.choiceClk === 'A' ? 'clicked' : '';
    const choiceClkB = () => props.choiceClk === 'B' ? 'clicked' : '';
    const choiceClkC = () => props.choiceClk === 'C' ? 'clicked' : '';
    const choiceClkD = () => props.choiceClk === 'D' ? 'clicked' : '';

    return (
        <div className='indQuestionCntr'>
            <p className='questionHeading'>Question {props.currentQstNmb}</p>
            <p className='questionDesc'>{props.currentQst.question}</p>

            <div className={'indChoice ' + choiceClkA()} choice='A' onClick={props.onClick}><p>A: {props.currentQst.choiceA}</p></div>
            <div className={'indChoice ' + choiceClkB()} choice='B' onClick={props.onClick}><p>B: {props.currentQst.choiceB}</p></div>
            <div className={'indChoice ' + choiceClkC()} choice='C' onClick={props.onClick}><p>C: {props.currentQst.choiceC}</p></div>
            <div className={'indChoice ' + choiceClkD()} choice='D' onClick={props.onClick}><p>D: {props.currentQst.choiceD}</p></div>
        </div>
    );
}

export default IndQuestion;