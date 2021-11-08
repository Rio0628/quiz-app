import React, { Component } from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import MainQuizView from './components/MainQuizView';

export default class App extends Component {
  render () {
    return (
      <div className="container">
        <div className='main-nav-bar'>
          < AiOutlineMenu className='menuBtn' />
          {/* < AiOutlineSearch className='searchBtn' /> */}

          <div className='searchbarContainer '>
            <input className='searchbar' type='text' placeholder='Search Quiz...' />
            < AiOutlineSearch className='searchBtn'/> 
          </div>
        </div>
        
        <MainQuizView />

      </div>
    );
  }
}

// export default App;
