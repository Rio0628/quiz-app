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
      createQuizViewOn: false,
      newQuiz: {name: '', creator: '', questions: [] },
      currentQuiz: {},
      quizzes: [
        {name: 'Test Quiz', creator: 'The Creator', questions: [{question: 'What programming language is this done with?', choiceA: 'Java', choiceB: 'Python', choiceC: 'JS / React', choiceD: 'Kotlin', answer: 'C' }, {question: 'What is 9 + 10?', choiceA: '22', choiceB: '20', choiceC: '19', choiceD: '21', answer: 'D' }, {question: 'UwU? ', choiceA: 'Como que UwU?', choiceB: ':v', choiceC: 'Si', choiceD: 'No', answer: 'C' }]}, 
        {name: 'Example 2', creator: 'Creator 2', questions: [{question: 'qstText', choiceA: 'inputA', choiceB: 'inputB', choiceC: 'Choice C', choiceD: 'Choice D', answer: 'choiceA'} ]}
      ],
      resultsQuizzes: [],
      savedQuizzes: [],
    }
  }

  componentDidMount () {
    this.setState(prevState => ({ savedQuizzes: [...prevState.savedQuizzes, this.state.quizzes[1]] }));
  }
  
  render () {
    let newQuiz = this.state.newQuiz;

    const handleOnChange = (e) => {
      console.log(e.target)
      console.log(e.target.value)

      if (e.target.className === 'searchbar') {
        this.setState({ searchInput: e.target.value });
      }

      if (e.target.className === 'nameQuizInput') {
        this.setState({ nameQuizInput: e.target.value });
      }

      if (e.target.className === 'creatorNameInput') {
        this.setState({ creatorQuizInput: e.target.value });
      } 

      if (e.target.className === 'qstDescInput') {
        this.setState({ qstDescInput: e.target.value });
      }

      if (e.target.className === 'choice') {
        if (e.target.getAttribute('choice') === 'A') { this.setState({ inputChoiceA: e.target.value }); };
        if (e.target.getAttribute('choice') === 'B') { this.setState({ inputChoiceB: e.target.value }); };
        if (e.target.getAttribute('choice') === 'C') { this.setState({ inputChoiceC: e.target.value }); };
        if (e.target.getAttribute('choice') === 'D') { this.setState({ inputChoiceD: e.target.value }); };
      }
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
      console.log(e.target.id)

      if (e.target.className === 'searchQuiz' || e.target.className === 'returnBtn' || e.target.className === 'cancelQzBtn') { 
        this.setState({ isSidebarActive: false });
        this.setState({ createQuizViewOn: false });
        this.setState({ savedQzsViewOn: false });
        this.setState({ quizResultsViewOn: false});
        this.setState({ mainQuizViewOn: true }); 
      }

      if (e.target.className === 'createQuiz') {
        this.setState({ isSidebarActive: false });
        this.setState({ mainQuizViewOn: false });
        this.setState({ savedQzsViewOn: false });
        this.setState({ quizResultsViewOn: false});
        this.setState({ createQuizViewOn: true })

        this.setState({ addQuestion: true });
      }

      if (e.target.className === 'cancelBtn') {
        this.setState({ addQuestion: false });
      }

      if (e.target.className === 'addBtn') {
        this.setState({ addQuestion: true });
      }

      if (e.target.className === 'iptIndChoice ')  {
        this.setState({ qstRightChoice: e.target.getAttribute('choice') });
      }
      
      if (e.target.className === 'addQstBtn') {
        let qstText, inputA, inputB, inputC, inputD;
        
        qstText = this.state.qstDescInput;
        if (this.state.inputChoiceA) { inputA = this.state.inputChoiceA }
        if (this.state.inputChoiceA) { inputB = this.state.inputChoiceB }
        if (this.state.inputChoiceA) { inputC = this.state.inputChoiceC }
        if (this.state.inputChoiceA) { inputD = this.state.inputChoiceD }

        let question = {question: qstText, choiceA: inputA, choiceB: inputB, choiceC: inputC, choiceD: inputD, answer: this.state.qstRightChoice };
        newQuiz.questions.push(question);
        
        this.setState({ addQuestion: false });
        alert('Question Added');
      }

      if (e.target.className === 'createQuizBtn') {
        newQuiz.name = this.state.nameQuizInput;
        newQuiz.creator = this.state.creatorQuizInput;

        this.setState(prevState => ({ quizzes: [...prevState.quizzes, newQuiz] }));
        this.setState(prevState => ({ savedQuizzes: [...prevState.savedQuizzes, newQuiz] }));

        this.setState({ createQuizViewOn: false });
        this.setState({ mainQuizViewOn: true });

        console.log(newQuiz)
      }

      if (e.target.className === 'savedQuizzes') {
        this.setState({ isSidebarActive: false });
        this.setState({ mainQuizViewOn: false })
        this.setState({ createQuizViewOn: false });
        this.setState({ quizResultsViewOn: false});
        this.setState({ savedQzsViewOn: true });
      }

      if (e.target.className === 'saveBtn') {
        const quiz = this.state.quizzes.filter( quiz => quiz.name === e.target.getAttribute('name') );
      
        this.setState(prevState => ({ savedQuizzes: [...prevState.savedQuizzes, quiz[0]] }));
      }

      if (e.target.className === 'removeBtn') {
        const savedQuizzes = this.state.savedQuizzes.filter( quiz => quiz.name !== e.target.getAttribute('name') );

        this.setState({ savedQuizzes: savedQuizzes });
      }

      if (e.target.className === 'resultQuizzes') {
        this.setState({ isSidebarActive: false });
        this.setState({ mainQuizViewOn: false })
        this.setState({ createQuizViewOn: false });
        this.setState({ savedQzsViewOn: false });
        this.setState({ quizResultsViewOn: true});
      }

      if (e.target.className === 'startBtn' || e.target.className === 'startQuizBtn' || e.target.className === 'cancelPrvBtn') {
        this.setState({ isPreviewOn: !this.state.isPreviewOn });
      }

      if (e.target.className === 'startBtn') {
        const quiz = this.state.quizzes.filter( quiz => quiz.name === e.target.getAttribute('name'))

        this.setState({ currentQuiz: quiz });
      }

      if (e.target.id === 'currentQuizPrvQst') {
        const question = this.state.currentQuiz[0].questions[e.target.getAttribute('number') - 1];
        this.setState({ currentQstQuiz: question });
        this.setState({ currentQstNmb: e.target.getAttribute('number') });
      }

      if (e.target.className === 'indChoice ')  {
        this.setState({ choiceClicked: e.target.getAttribute('choice') });
      }

      if (e.target.className === 'startQuizBtn') {
        this.setState({ isSidebarActive: false });
        this.setState({ mainQuizViewOn: false })
        this.setState({ createQuizViewOn: false });
        this.setState({ savedQzsViewOn: false });
        this.setState({ quizResultsViewOn: false});
        this.setState({ isQuizOn: true });

        const question = this.state.currentQuiz[0].questions[0];
        this.setState({ currentQstQuiz: question });
      }

      if (e.target.className === 'submitBtn') {
        this.setState({ isQuizOn: false });
        this.setState({ isResultOn: true });
      }

      if (e.target.className === 'returnBtn') {
        this.setState({ isQuizOn: false });
        this.setState({ isResultOn: false });
      }
    }

    // console.log(this.state.currentQuiz[0]);
    // console.log(this.state.currentQstQuiz)
    // console.log(this.state.currentQstNmb)

    return (
      <div className="container">
        <div className='main-nav-bar'>
          < AiOutlineMenu className='menuBtn' onClick={handleSidebar} />
          {/* < AiOutlineSearch className='searchBtn' onClick={handleClick} /> */}
          
          {this.state.createQuizViewOn ? <p className='createQuizNavHdng'>Create Quiz</p> : null}
          {/* <p className='quizNavHdng'>Quiz Name</p> */}

          {this.state.mainQuizViewOn || this.state.quizResultsViewOn || this.state.savedQzsViewOn ? 
            <div className='searchbarContainer '>
              <input className='searchbar' type='text' placeholder='Search Quiz...' onChange={handleOnChange} />
              < AiOutlineSearch className='searchBtn' onClick={handleClick}/> 
            </div>
          : null}
          
        </div>

        {this.state.mainQuizViewOn ? <MainQuizView quizzes={this.state.quizzes} savedQuizzes={this.state.savedQuizzes} onClick={handleClick}/> : null}

        {this.state.createQuizViewOn ?  <CreateQuizView  newQuiz={newQuiz} addQuestion={this.state.addQuestion} nQstChoice={this.state.qstRightChoice} onClick={handleClick} onChange={handleOnChange}/> : null}
        
        {this.state.isQuizOn ? <CurrentQuizView choiceClk={this.state.choiceClicked} currentQstNmb={this.state.currentQstNmb} currentQstQuiz={this.state.currentQstQuiz} quiz={this.state.currentQuiz[0]} onClick={handleClick}/> : null}
        
        {this.state.isResultOn ? <ResultsQuizView onClick={handleClick}/> : null}

        {this.state.savedQzsViewOn ? <SavedQuizzesView savedQuizzes={this.state.savedQuizzes} onClick={handleClick}/>  : null}
        
        {this.state.quizResultsViewOn ? <AllResultsView  onClick={handleClick} /> : null}
       
        

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
