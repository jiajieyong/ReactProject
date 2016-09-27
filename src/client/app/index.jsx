import QuestionList from './QuestionList.jsx';
import Result from './Result.jsx';

	const Jumbotron = ReactBootstrap.Jumbotron;
    const Button = ReactBootstrap.Button;
    const Grid = ReactBootstrap.Grid;
    const Panel = ReactBootstrap.Panel;
    const Input = ReactBootstrap.Input;
    const Modal = ReactBootstrap.Modal;

    class QuizApp extends React.Component {
      constructor(props) {
        super(props);
        this.state = { quiz: {questions: []}, showResult: false, correct: 0 };
        this.completed = this.completed.bind(this);
      }
      componentDidMount() {
        const quizRef = new Firebase('https://firequiz.firebaseio.com/quizzes/' + this.props.i);
        quizRef.on('value', snapshot => this.setState({
          quiz: snapshot.val()
        }));
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
            {quizHeader}
            {questionList}
            <Result show={this.state.showResult} onHide={closeResult}
            correct={this.state.correct} total={questions.length} />
          </div>
        );
      }
    }

    const quizHeader = (
      <Jumbotron>
        <Grid>
          <h1>How Smart Are You?</h1>
          <p>A slightly interesting quiz consisting of seven questions that I scraped from some place I can't remember.</p>
          <p><Button bsStyle="primary" href="https://github.com/prashcr/firequiz"
            target="_blank">What's this?</Button></p>
        </Grid>
      </Jumbotron>
    );

    React.render(<QuizApp i="0" />, document.getElementById('app'));

