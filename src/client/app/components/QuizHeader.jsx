export const Jumbotron = ReactBootstrap.Jumbotron;
export const Button = ReactBootstrap.Button;
export const Grid = ReactBootstrap.Grid;
    
    class QuizHeader extends React.Component {
      render () {
        return(
          <Jumbotron>
            <Grid>
              <h1>How Smart Are You?</h1>
              <p>A slightly interesting quiz consisting of seven questions that I scraped from some place I can't remember.</p>
              <p><Button bsStyle="primary" href="https://github.com/jiajieyong/ReactProject"
                target="_blank">What's this?</Button></p>
            </Grid>
          </Jumbotron>
        );
      }
    }

    module.exports=QuizHeader;