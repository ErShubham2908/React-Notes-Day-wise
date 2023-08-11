import React, { Component } from 'react'

class LifeCycleCompo extends Component {
    constructor(){
      super();
      console.log("Hi This is constructor");
      this.state ={
        count : 0
      }
    }
    componentDidMount() {
      console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
      console.log('State Updated');
      console.log(prevProps);
      console.log(prevState.count);
    }
  render() {
    console.log('This is render');
    return (
      <>
       <h1>{this.state.count}</h1>
       <button onClick={() => this.setState({count : this.state.count + 1}) } >Increase</button>
      </>
    )
  }
}

export default LifeCycleCompo
