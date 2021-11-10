import React, { Component } from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import CreateQuizView from './components/CreateQuizView';
import CurrentQuizView from './components/CurrentQuizView';
import AllResultsView from './components/AllResultsView';
import ResultsQuizView from './components/ResultsQuizView';
import MainQuizView from './components/MainQuizView';
import SavedQuizzesView from './components/SavedQuizzesView';

export default class App extends Component {
  render () {
  
    return (
      <div className="container">
        <div className='main-nav-bar'>
          {/* < AiOutlineMenu className='menuBtn' /> */}
          {/* < AiOutlineSearch className='searchBtn' /> */}
          
          {/* <p className='createQuizNavHdng'>Create Quiz</p> */}
          <p className='quizNavHdng'>Quiz Name</p>

          {/* <div className='searchbarContainer '>
            <input className='searchbar' type='text' placeholder='Search Quiz...' />
            < AiOutlineSearch className='searchBtn'/> 
          </div> */}
        </div>

        {/* <AllResultsView /> */}
        <CreateQuizView />
        {/* <ResultsQuizView /> */}
        {/* <CurrentQuizView /> */}
        {/* <SavedQuizzesView /> */}
        {/* <MainQuizView /> */}
   
        {/* <div className='sidebar'>
          <p className='searchQuiz'>Search Quiz</p>
          <p className='createQuiz'>Create Quiz</p>
          <p className='savedQuizzes'>Saved Quizzes</p>
          <p className='resultQuizzes'>Result Quizzes</p>
        </div> */}

      </div>
    );
  }
}

// export default App;
