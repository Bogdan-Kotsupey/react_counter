import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    side: true,
  }

  dance = () => {
    this.setState(state => ({ side: !state.side }));
  };

  render() {
    return (
      <>
        {this.state.side
          ? (<div className="right" />)
          : (<div className="left" />)
        }

        <h1 className="title">Press button to dance</h1>
        <button
          className="neon"
          type="button"
          onClick={this.dance}
        >
          Press me
        </button>
      </>
    );
  }
}

export default App;
