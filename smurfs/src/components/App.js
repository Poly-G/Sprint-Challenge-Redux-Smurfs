import React, { Component } from 'react';
import './App.css';
import { getSmurfs, addSmurfs } from '../actions';
import { connect } from 'react-redux';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    isEditing: false,
    name: '',
    age: '',
    height: ''
  };

  componentDidMount = () => {
    this.props.getSmurfs();
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS</h1>
        {this.props.smurfs.map(smurf => {
          return (
            <div key={smurf.id}>
              <p>{smurf.name}</p>
              <p>{smurf.age}</p>
              <p>{smurf.height}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurfs }
)(App);
