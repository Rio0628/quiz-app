import React, { Component } from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';

export default class App extends Component {
  render () {
    return (
      <div className="container">
        <div className='main-nav-bar'>
          < AiOutlineMenu className='menuBtn' />
          < AiOutlineSearch className='searchBtn' />

          <div className='searchbarContainer '>
            <input type='text' placeholder='Search Quiz...' />
            < AiOutlineSearch className='searchBtn'/> 
          </div>
        </div>
        
      </div>
    );
  }
}

// export default App;
