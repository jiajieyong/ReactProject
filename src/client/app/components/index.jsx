import QuizHeader from './QuizHeader.jsx';
import QuestionList from './QuestionList.jsx';
import Result from './Result.jsx';
import $ from 'jquery';

export const Jumbotron = ReactBootstrap.Jumbotron;
export const Button = ReactBootstrap.Button;
export const Grid = ReactBootstrap.Grid;
export const Panel = ReactBootstrap.Panel;
export const Input = ReactBootstrap.Input;
export const Modal = ReactBootstrap.Modal;
  
    class QuizApp extends React.Component {
      constructor(props) {
        super(props);
        this.state = { quiz: {questions: []}, showResult: false, correct: 0 };
        this.completed = this.completed.bind(this);
      }
      componentDidMount() {
        $.ajax({    
            type: 'GET',    
            url: '../client/app/assets/quizQuestions.json',
            dataType: 'json',           
            success: function(data) {
              this.setState({quiz: data});
            }.bind(this),
            error : function(data){
            }
        });
      }
      completed(values) {
        console.log('complete');
        let correct = 0;
        values.forEach((v, i) => {
          if (v == this.state.quiz.questions[i].answer) correct++;
        });
        console.log(correct);
        this.setState({ correct: correct}, () => {
          this.setState({ showResult: true });
        });
      }
      render() {
        const closeResult = e => this.setState({ showResult: false });
        const questions = this.state.quiz.questions;
        const questionList = questions.length > 0 
          ? <QuestionList data={questions} onComplete={this.completed} />
          : null;
        return (
          <div>
            <QuizHeader/>
            {questionList}
            <Result show={this.state.showResult} onHide={closeResult}
            correct={this.state.correct} total={questions.length} />
          </div>
        );
      }
    }

    React.render(<QuizApp i="0" />, document.getElementById('app'));

