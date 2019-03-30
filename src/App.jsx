import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>Hello Robinhood from App.jsx</div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
