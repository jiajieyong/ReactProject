const Modal = ReactBootstrap.Modal;
const Button = ReactBootstrap.Button;

class Result extends React.Component {
      render() {
        return (
          <Modal {...this.props} bsSize="medium" aria-labelledby="contained-modal-title-md">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-md">Your score</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              You got {this.props.correct} correct out of {this.props.total}!
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
    }

module.exports=Result; 