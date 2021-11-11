import React, { Component } from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import CreateQuizView from './components/CreateQuizView';
import CurrentQuizView from './components/CurrentQuizView';
import AllResultsView from './components/AllResultsView';
import ResultsQuizView from './components/ResultsQuizView';
import MainQuizView from './components/MainQuizView';
import SavedQuizzesView from './components/SavedQuizzesView';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainQuizViewOn: true,
      mainQuiz: {},
    }
  }
  
  render () {
    
    const handleOnChange = (e) => {
      console.log(e.target)
      console.log(e.target.value)
    }

    const turnSidebarOn = () => {
      if (this.state.isSidebarActive) { return 'active' }
      else return '';
    }

    const handleSidebar = () => {
      this.setState({ isSidebarActive: !this.state.isSidebarActive });
    }

    const handleClick = (e) => {
      console.log(e.target);

      if (e.target.className === 'searchQuiz') { 
        this.setState({ mainQuizViewOn: true }); 
      }

      if (e.target.className === 'createQuiz') {
        this.setState({ mainQuizViewOn: false });
        this.setState({ createQuizViewOn: true })
      }

      if (e.target.className === 'startBtn' || e.target.className === 'startQuizBtn' || e.target.className === 'cancelPrvBtn') {
        this.setState({ isPreviewOn: !this.state.isPreviewOn });
      }
    }
    
    console.log(this.state.isSidebarActive)

    return (
      <div className="container">
        <div className='main-nav-bar'>
          < AiOutlineMenu className='menuBtn' onClick={handleSidebar} />
          {/* < AiOutlineSearch className='searchBtn' onClick={handleClick} /> */}
          
          {/* <p className='createQuizNavHdng'>Create Quiz</p> */}
          {/* <p className='quizNavHdng'>Quiz Name</p> */}

          <div className='searchbarContainer '>
            <input className='searchbar' type='text' placeholder='Search Quiz...' onChange={handleOnChange} />
            < AiOutlineSearch className='searchBtn' onClick={handleClick}/> 
          </div>
        </div>

        {/* <AllResultsView  onClick={handleClick} /> */}
        {this.state.createQuizViewOn ?  <CreateQuizView  onClick={handleClick} /> : null}
        {/* <ResultsQuizView onClick={handleClick}/> */}
        {/* <CurrentQuizView onClick={handleClick}/> */}
        {/* <SavedQuizzesView onClick={handleClick}/> */}
        {this.state.mainQuizViewOn ? <MainQuizView onClick={handleClick}/> : null}
        

        {this.state.isPreviewOn ?
          <div className='previewQuizView'>
            <p className='quizName'>Quiz Name</p>
            <p className='creatorName'>Creator Name</p>
            <p className='questionsPreview'>Questions: 10</p>
        
            <div className='startQuizBtn' onClick={handleClick}>Start Quiz</div>
            <div className='cancelPrvBtn' onClick={handleClick}>Cancel</div>
        </div>
        : null }
   
        <div className={'sidebar ' + turnSidebarOn() }>
          <p className='searchQuiz' onClick={handleClick}>Search Quiz</p>
          <p className='createQuiz' onClick={handleClick}>Create Quiz</p>
          <p className='savedQuizzes' onClick={handleClick}>Saved Quizzes</p>
          <p className='resultQuizzes' onClick={handleClick}>Result Quizzes</p>
        </div>

      </div>
    );
  }
}

// export default App;
