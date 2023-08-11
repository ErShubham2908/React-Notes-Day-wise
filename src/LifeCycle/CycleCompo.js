import React, { Component } from 'react';
import '../Style.css'
class CycleCompo extends Component{
    constructor(){
        super();
        this.state = {
            count : 0, 
            changeCompo : true
        }
        console.log('1. This is constructor...');
    }
    componentDidMount(){
        console.log('2. componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState);
    }


    render(){
        console.log('3. This is Render call');
        return(
            <>
            <h1>{this.state.count}</h1>
            <p>{this.state.changeCompo ? <Unmount /> : ""}</p>
                <button className='btn' onClick={() => this.setState({count : this.state.count + 1})} >Button CLick</button>
                <button className='btn' onClick={() => this.setState({count : !this.state.changeCompo })} >Component</button>
            </>
        )
    }
}

export default CycleCompo;

export class Unmount extends Component{
    componentWillUnmount(){
        console.log('unmount called....');
    }
    render(){
        return(
            <>
                <h1>This is a Child compo</h1>
            </>
        )
    }
}