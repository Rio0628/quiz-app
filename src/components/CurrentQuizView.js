import React from 'react';
import IndQuestion from './IndQuestion';

const CurrentQuizView = (props) => {
    let previewQstnsCntr = [];
    
    // Takes care of showing each preview question 
    for (let i = 0; i < props.quiz.questions.length; i++) {
        previewQstnsCntr.push( <div className='previewQuestion ' id='currentQuizPrvQst' number={i + 1} onClick={props.onClick} key={'PreviewQuestion ' + i}>{i + 1}  </div> );
    }

    return (
        <div className='quizView'>
            <div className='questionsCntr'>
                {previewQstnsCntr}
            </div>

            <div className='returnBtn' onClick={props.onClick}>Return</div>
            <div className='submitBtn' onClick={props.onClick}>Submit Quiz</div>

            <IndQuestion choiceClk={props.choiceClk} currentQstNmb={props.currentQstNmb} currentQst={props.currentQstQuiz} onClick={props.onClick} />

            <div className='backBtn' onClick={props.onClick}>Back</div>
            <div className='nextBtn' onClick={props.onClick}>Next Question</div>
        </div>
    );
}

export default CurrentQuizView;