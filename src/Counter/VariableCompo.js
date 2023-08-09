import React, { Component } from 'react'
import DisplayCompo from './DisplayCompo';

class VariableCompo extends Component {
    
  constructor(){
    super();
    this.state = {
      count:0
    }
  }
  render() {
    return (
      <div>
        <DisplayCompo value={this.state.count}  func = {this.setState} />
      </div>
    )
  }
}
export default VariableCompo;