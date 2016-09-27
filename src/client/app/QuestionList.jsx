import Question from './Question.jsx'

const Grid = ReactBootstrap.Grid;

class QuestionList extends React.Component {
      constructor(props) {
        super(props);
        this.state = { values: this.props.data.map(q => 'select') };
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(i) {
        return e => {
          this.setState({
            values: React.addons.update(this.state.values, {
              [i]: {$set: e.target.value}
            })
          }, () => {
            console.log(this.state.values)
            if (this.state.values.every(v => v != 'select')) {
              this.props.onComplete(this.state.values);
              this.setState({ values: this.props.data.map(q => 'select') });
            }
          });
        };
      }
      render() {
        return (
          <Grid>
            {this.props.data.map((question, i) =>
              <Question key={i} data={question} value={this.state.values[i]} ch={this.handleChange(i)} />)}
          </Grid>
        );
      }
    }

module.exports = QuestionList;