import React from 'react';

const CreateQuizView = (props) => {
    return (
        <div className='createQuizCntr'>
            <input className='nameQuizInput' type='text' placeholder='Name of Quiz...'/>
            <input className='creatorNameInput' type='text' placeholder='Creator Name...'/>

            <div className='questionsCntr'>
                <div className='previewQuestion' onClick={props.onClick}>1</div>
                <div className='previewQuestion' onClick={props.onClick}>2</div>
                <div className='previewQuestion' onClick={props.onClick}>3</div>
                <div className='previewQuestion' onClick={props.onClick}>4</div>
            </div>

            <div className='addBtn' onClick={props.onClick}>Add Question</div>

            <div className='indQuestionCntr'>
                <p className='questionHeading'>Question #</p>
                <p className='questionDesc'>This is the question itself</p>

                <div className='indChoice'>A: <input placeholder='This is one Choice'/></div>
                <div className='indChoice'>B: <input placeholder='This is one Choice'/></div>
                <div className='indChoice'>C: <input placeholder='This is one Choice'/></div>
                <div className='indChoice'>D: <input placeholder='This is one Choice'/></div>
                
                
                <div className='cancelBtn' onClick={props.onClick}>Cancel</div>
                <div className='addQstBtn' onClick={props.onClick}>Add Question</div>
            </div>

            <div className='createQuizBtn' onClick={props.onClick}>Create Quiz</div>
            <div className='cancelQzBtn' onClick={props.onClick}>Cancel</div>
        </div>
    );
}

export default CreateQuizView;