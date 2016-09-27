const Panel = ReactBootstrap.Panel;
const Input = ReactBootstrap.Input;

class Question extends React.Component {
      render() {
        return (
          <Panel header={this.props.data.text}>
            <Input type="select" value={this.props.value} onChange={this.props.ch}>
              <option value="select">select</option>
              {this.props.data.choices.map((choice, i) => <option key={i} value={i}>{choice}</option>)}
            </Input>
          </Panel>
        );
      }
    }

module.exports = Question;