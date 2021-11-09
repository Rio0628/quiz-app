import React from 'react';

const CreateQuizView = () => {
    return (
        <div className='createQuizCntr'>
            <input className='nameQuizInput' type='text' placeholder='Name of Quiz...'/>
            <input className='creatorNameInput' type='text' placeholder='Creator Name...'/>

            <div className='questionsCntr'>
                <div className='previewQuestion'>1</div>
                <div className='previewQuestion'>2</div>
                <div className='previewQuestion'>3</div>
                <div className='previewQuestion'>4</div>
            </div>

            <div className='addBtn'>Add Question</div>

            <div className='indQuestionCntr'>
                <p className='questionHeading'>Question #</p>
                <p className='questionDesc'>This is the question itself</p>

                <div className='indChoice'><p>A: This is one Choice</p></div>
                <div className='indChoice'><p>B: This is one Choice</p></div>
                <div className='indChoice'><p>C: This is one Choice</p></div>
                <div className='indChoice'><p>D: This is one Choice</p></div>
            
                <div className='cancelBtn'>Cancel</div>
                <div className='addQstBtn'>Add Question</div>
            </div>

            <div className='createQuizBtn'>Create Quiz</div>
            <div className='cancelQzBtn'>Cancel</div>
        </div>
    );
}

export default CreateQuizView;