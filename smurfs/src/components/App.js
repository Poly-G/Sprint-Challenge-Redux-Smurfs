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

  handleSubmit = e => {
    e.preventDefault();
    const { name, age, height } = this.state;
    const newSmurf = { name, age, height };
    this.props.addSmurfs(newSmurf);
    this.setState({ name: '', age: '', height: '' });
  };

  changeHandler = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS</h1>

        <h2>Add Smurfs</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.changeHandler}
            value={this.state.name}
          />
          <input
            type="number"
            name="age"
            onChange={this.changeHandler}
            placeholder="Age"
            value={this.state.age}
          />
          <input
            type="text"
            name="height"
            onChange={this.changeHandler}
            placeholder="Height"
            value={this.state.height}
          />
          <button>ADD</button>
        </form>

        {this.props.smurfs.map(smurf => {
          return (
            <div key={smurf.id}>
              <p>
                <strong>Name:</strong> {smurf.name}
              </p>
              <p>
                <strong>Age:</strong> {smurf.age}
              </p>
              <p>
                <strong>Height:</strong> {smurf.height}
              </p>
              <br />
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
