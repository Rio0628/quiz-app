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
      mainQuizViewOn: false,
      quizResultsViewOn: true,
      newQuiz: {name: '', creator: '', questions: [] },
      currentQuiz: {},
      currentQuizAnswers: [],
      currentQuizResults: {},
      quizzes: [
        {name: 'Test Quiz', creator: 'The Creator', questions: [{question: 'What programming language is this done with?', choiceA: 'Java', choiceB: 'Python', choiceC: 'JS / React', choiceD: 'Kotlin', answer: 'C' }, {question: 'What is 9 + 10?', choiceA: '22', choiceB: '20', choiceC: '19', choiceD: '21', answer: 'D' }, {question: 'UwU? ', choiceA: 'Como que UwU?', choiceB: ':v', choiceC: 'Si', choiceD: 'No', answer: 'A' }]}, 
        {name: 'Example 2', creator: 'Creator 2', questions: [{question: 'qstText', choiceA: 'inputA', choiceB: 'inputB', choiceC: 'Choice C', choiceD: 'Choice D', answer: 'choiceA'} ]}
      ],
      resultsQuizzes: [
        {quiz: {name: 'Test Quiz', creator: 'The Creator', questions: [{question: 'What programming language is this done with?', choiceA: 'Java', choiceB: 'Python', choiceC: 'JS / React', choiceD: 'Kotlin', answer: 'C' }, {question: 'What is 9 + 10?', choiceA: '22', choiceB: '20', choiceC: '19', choiceD: '21', answer: 'D' }, {question: 'UwU? ', choiceA: 'Como que UwU?', choiceB: ':v', choiceC: 'Si', choiceD: 'No', answer: 'A' }]},
        questions: [
          {question: {question: 'What programming language is this done with?', choiceA: 'Java', choiceB: 'Python', choiceC: 'JS / React', choiceD: 'Kotlin', answer: 'C' },
          userChoice: 'C'},
        ],
        fraction: '1/3',
        percent: .33,
        },
        {quiz: {name: 'Test Quiz', creator: 'The Creator', questions: [{question: 'What programming language is this done with?', choiceA: 'Java', choiceB: 'Python', choiceC: 'JS / React', choiceD: 'Kotlin', answer: 'C' }, {question: 'What is 9 + 10?', choiceA: '22', choiceB: '20', choiceC: '19', choiceD: '21', answer: 'D' }, {question: 'UwU? ', choiceA: 'Como que UwU?', choiceB: ':v', choiceC: 'Si', choiceD: 'No', answer: 'A' }]},
        questions: [
          {question: {question: 'What programming language is this done with?', choiceA: 'Java', choiceB: 'Python', choiceC: 'JS / React', choiceD: 'Kotlin', answer: 'C' },
          userChoice: 'C'},
          {question: {question: 'What is 9 + 10?', choiceA: '22', choiceB: '20', choiceC: '19', choiceD: '21', answer: 'D' },
          userChoice: 'D'},
          {question: {question: 'UwU? ', choiceA: 'Como que UwU?', choiceB: ':v', choiceC: 'Si', choiceD: 'No', answer: 'A' },
          userChoice: 'A'},
        ],
        fraction: '3/3',
        percent: 100,
        },
      ],
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

    const handleClick = async (e) => {
      console.log(e.target);
      // console.log(e.target.id)

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
        let resultsStates = [];

        for (let i = 0; i < this.state.resultsQuizzes.length; i++) {
          const obj = {name: this.state.resultsQuizzes[i].quiz.name, results: this.state.resultsQuizzes[i].fraction,  isOpen: false}
          resultsStates.push(obj);
        }
  
        this.setState({ resultsStates: resultsStates });

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

        this.setState({ choiceClicked: '' });

        try {
          if (this.state.currentQuizAnswers[parseInt(e.target.getAttribute('number')) - 1].answer.length === 1) {
            this.setState({ choiceClicked: this.state.currentQuizAnswers[parseInt(e.target.getAttribute('number')) - 1].answer});
          }
          else { this.setState({ choiceClicked: ' ' }); }
        } catch(err) { console.log ('No ChoiceCLicked for question') }
      }

      if (e.target.className === 'backBtn') {

        if (this.state.currentQstNmb > 1) {
          this.setState({ currentQstNmb: this.state.currentQstNmb - 1})
          this.setState({ currentQstQuiz: this.state.currentQuiz[0].questions[this.state.currentQstNmb - 2] });
        }

        this.setState({ choiceClicked: '' });
        try {
          if (this.state.currentQuizAnswers[this.state.currentQstNmb - 2].answer.length === 1) {
            this.setState({ choiceClicked: this.state.currentQuizAnswers[this.state.currentQstNmb - 2].answer});
          }
          else { this.setState({ choiceClicked: ' ' }); }
        } catch(err) { console.log ('No ChoiceCLicked for question') }
      }

      if (e.target.className === 'nextBtn') {
        
        if (this.state.currentQuiz[0].questions.length !== this.state.currentQstNmb)  { 
          this.setState({ currentQstQuiz: this.state.currentQuiz[0].questions[this.state.currentQstNmb] });
          await this.setState({ currentQstNmb: parseInt(this.state.currentQstNmb) + 1});
        }
       
        this.setState({ choiceClicked: '' });
        
        try {
          if (this.state.currentQuizAnswers[this.state.currentQstNmb - 1].answer.length !== 1) {
            console.log('this ios being tyirggered')
            this.setState({ choiceClicked: '' });
          } else { 
            console.log('this is triggered')
            this.setState({ choiceClicked: this.state.currentQuizAnswers[this.state.currentQstNmb - 1].answer});
          }
        } catch(err) { console.log ('No ChoiceCLicked for question') }
        
      }

      if (e.target.className === 'indChoice ')  {
        this.setState({ choiceClicked: e.target.getAttribute('choice') });

        const answerQst = {question: this.state.currentQstQuiz.question, answer: e.target.getAttribute('choice')}
        await this.setState({ answerQst: answerQst });

        const currentQuizAnswers = this.state.currentQuizAnswers;
        
        if (currentQuizAnswers.length > 0 ) {
          const question = currentQuizAnswers.filter( indQst => indQst.question === this.state.answerQst.question);
          
         
          if (question.length > 0) {
            for (let i = 0; i < currentQuizAnswers.length; i++) {
              if (currentQuizAnswers[i].question === this.state.answerQst.question) {
                currentQuizAnswers[i] = this.state.answerQst;
              }
            }
            this.setState({ currentQuizAnswers: currentQuizAnswers });
          }
          else {
            this.setState(prevState => ({ currentQuizAnswers: [...prevState.currentQuizAnswers, this.state.answerQst] }));
          }
        }
        else { this.setState(prevState => ({ currentQuizAnswers: [...prevState.currentQuizAnswers, this.state.answerQst] })); }
        console.log(this.state.currentQuizAnswers[0].answer.length)
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
        this.setState({ currentQstNmb: 1 });
      }

      if (e.target.className === 'submitBtn') {
        let rightAnswers = 0, questionRslt = [];
        let results = {quiz: this.state.currentQuiz[0], questions: [], fraction: '', percent: ''};

        // Function to check results 
        try {
          for (let i = 0; i < this.state.currentQuiz[0].questions.length; i++) {
            if (this.state.currentQuiz[0].questions[i].answer === this.state.currentQuizAnswers[i].answer) { rightAnswers += 1; }

            if (this.state.currentQuiz[0].questions[i].question === this.state.currentQuizAnswers[i].question) {
              questionRslt = {question: this.state.currentQuiz[0].questions[i], userChoice: this.state.currentQuizAnswers[i].answer}
              results.questions.push(questionRslt);
              // console.log(questionRslt)
            }
            // console.log(this.state.currentQuizAnswers[i])
          }
        } catch(err) { console.log('All questions not answered') }
        
        const fraction = `${rightAnswers}/${this.state.currentQuiz[0].questions.length}`
        const percent = Math.round( (rightAnswers / this.state.currentQuiz[0].questions.length) * 100);

        results.fraction = fraction;
        results.percent = percent;
        // console.log(this.state.currentQuizAnswers[0].answer)
        console.log(results)
        
        await this.setState({ currentQuizResults: results });
        this.setState(prevState => ({ resultsQuizzes: [...prevState.resultsQuizzes, results]} ));

        const question = results.quiz.questions[0];
        await this.setState({ currentRsltQst: question });
        
        this.setState({ isQuizOn: false });
        this.setState({ isResultOn: true });
        this.setState({ currentRsltQstNmb: 0});
      }

      if (e.target.className === 'previewQuestion') {
        const question = this.state.currentQuizResults.quiz.questions[e.target.getAttribute('number')];
        this.setState({ currentRsltQst: question });
        this.setState({ currentRsltQstNmb: e.target.getAttribute('number') });
      }

      if (e.target.className === 'returnBtn') {
        this.setState({ isQuizOn: false });
        this.setState({ isResultOn: false });
      }

      if (e.target.className === 'resultQuizClosed') {
        await this.setState({ currentQuizResults: this.state.resultsQuizzes[e.target.getAttribute('number')] });

        const question = await this.state.currentQuizResults.quiz.questions[0];
        await this.setState({ currentRsltQst: question });

        // console.log(this.state.currentQuizResults.quiz)

        this.setState({ currentRsltQstNmb: 0});
        this.setState({ quizResultsViewOn: false });
        this.setState({ isResultOn: true });
       
      }
    }

    
    // console.log(this.state.resux


    return (
      <div className="container">
        <div className='main-nav-bar'>
          < AiOutlineMenu className='menuBtn' onClick={handleSidebar} />
          
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
        
        {this.state.isResultOn ? <ResultsQuizView info={this.state.currentQuizResults} resultQstNmb={this.state.currentRsltQstNmb} currentQst={this.state.currentRsltQst} onClick={handleClick}/> : null}

        {this.state.savedQzsViewOn ? <SavedQuizzesView savedQuizzes={this.state.savedQuizzes} onClick={handleClick}/>  : null}
        
        {this.state.quizResultsViewOn ? <AllResultsView isResultOpened={'adw'} quizzes={this.state.resultsQuizzes}  onClick={handleClick} /> : null}
       
        {this.state.isPreviewOn ?
          <div className='previewQuizView'>
            <p className='quizName'>{this.state.currentQuiz[0].name}</p>
            <p className='creatorName'>{this.state.currentQuiz[0].creator}</p>
            <p className='questionsPreview'>Questions: {this.state.currentQuiz[0].questions.length}</p>
        
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
