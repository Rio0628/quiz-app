import React from 'react';

const CreateQuizView = (props) => {
    let previewQstCntr = [];

    const showIndQuestion = () => {
        if (props.addQuestion) { return 'active' }
        else return '';
    };
    
    for (let i = 0; i < props.newQuiz.questions.length; i++) {
        previewQstCntr.push( <div className='previewQuestion' onClick={props.onClick} key={'previewQuestion ' + i}>{i + 1}</div> );
    }
    
    return (
        <div className='createQuizCntr'>
            <input className='nameQuizInput' type='text' placeholder='Name of Quiz...' onChange={props.onChange}/>
            <input className='creatorNameInput' type='text' placeholder='Creator Name...' onChange={props.onChange}/>

            <div className='questionsCntr'>
                {previewQstCntr}
            </div>

            <div className='addBtn' onClick={props.onClick}>Add Question</div>
        
            
            <div className={'indQuestionCntr ' + showIndQuestion()}>
                <p className='questionHeading'>Question #</p>
                <input className='qstDescInput' placeholder='This is the question itself' onChange={props.onChange}/>

                <div className='indChoice'>A: <input placeholder='This is one Choice' choice='A' className='choice' onChange={props.onChange}/></div>
                <div className='indChoice'>B: <input placeholder='This is one Choice' choice='B' className='choice' onChange={props.onChange}/></div>
                <div className='indChoice'>C: <input placeholder='This is one Choice' choice='C' className='choice' onChange={props.onChange}/></div>
                <div className='indChoice'>D: <input placeholder='This is one Choice' choice='D' className='choice' onChange={props.onChange}/></div>
                
                
                <div className='cancelBtn' onClick={props.onClick}>Cancel</div>
                <div className='addQstBtn' onClick={props.onClick}>Add Question</div>
            </div>

            <div className='createQuizBtn' onClick={props.onClick}>Create Quiz</div>
            <div className='cancelQzBtn' onClick={props.onClick}>Cancel</div>
        </div>
    );
}

export default CreateQuizView;