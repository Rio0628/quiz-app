import React from 'react';

const ResultsQuizView = (props) => {
    let previewQstCntr = [], rightChoice, wrongChoice, noInputMsg;

    for (let i = 0; i < props.info.quiz.questions.length; i++) {
        
        const checkIfRight = () => {
            try {
                if (props.info.quiz.questions[i].answer === props.info.questions[i].userChoice) {
                    return 'correct';
                }
                else return 'incorrect';
            } catch(err) { 
                return 'incorrect';
            }
            
        }
        previewQstCntr.push(<div className='previewQuestion' id={checkIfRight()} onClick={props.onClick} number={i} key={'preview ' + (i + 1)} >{i + 1}</div>)
    }

    const showAnswers = () => {
        const question = props.info.quiz.questions.filter( qst => qst.question === props.currentQst.question);
        const userAnswer = props.info.questions.filter( qst => qst.question.question === props.currentQst.question);

        try {
            if (question[0].answer === userAnswer[0].userChoice) {
                    rightChoice = userAnswer[0].userChoice;
                }
            else {
                rightChoice = question[0].answer;
                wrongChoice = userAnswer[0].userChoice;
                console.log('incorrect');
            }
        } catch(err) { 
            rightChoice = question[0].answer 
            noInputMsg = 'No User Answer';
        }
        
    }
    showAnswers();

    const choiceA = () => rightChoice === 'A' ? ' correct' : '' || wrongChoice === 'A' ? ' incorrect': '';
    const choiceB = () => rightChoice === 'B' ? ' correct' : '' || wrongChoice === 'B' ? ' incorrect': '';
    const choiceC = () => rightChoice === 'C' ? ' correct' : '' || wrongChoice === 'C' ? ' incorrect': '';
    const choiceD = () => rightChoice === 'D' ? ' correct' : '' || wrongChoice === 'D' ? ' incorrect': '';

    // console.log(props.info)

    return (
        <div className='resultsQuizCntr'>
            <p className='resultsHeading'>Results</p>
            <p className='quizNameHeading'>{props.info.quiz.name}</p>

            <p className='resultHeading'>Results: {props.info.fraction}</p>
            <p className='percentHeading'>Percent: {props.info.percent}%</p>

            <div className='questionsCntr'>
               {previewQstCntr}
            </div>
            
            <div className='indQuestionCntr'>
                <p className='questionHeading'>Question {props.resultQstNmb + 1}</p>
                <p className='questionDesc'>{props.currentQst.question}</p>

                    <div className={'indChoice ' + choiceA()} choice='A' onClick={props.onClick}><p>A: {props.currentQst.choiceA}</p></div>
                    <div className={'indChoice ' + choiceB()} choice='B' onClick={props.onClick}><p>B: {props.currentQst.choiceB}</p></div>
                    <div className={'indChoice ' + choiceC()} choice='C' onClick={props.onClick}><p>C: {props.currentQst.choiceC}</p></div>
                    <div className={'indChoice ' + choiceD()} choice='D' onClick={props.onClick}><p>D: {props.currentQst.choiceD}</p></div>

                    {noInputMsg ? <p className='noInputMsg'>{noInputMsg}</p> : null}
            </div>

            {/* <IndQuestion /> */}

            <div className='returnBtn' onClick={props.onClick}>Return to Main View</div>
            <div className='saveBtn' name={props.info.quiz.name} onClick={props.onClick}>Save Quiz</div>
        </div>
    );
}

export default ResultsQuizView;