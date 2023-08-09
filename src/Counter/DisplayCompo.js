import { Component } from "react";

class DisplayCompo extends Component{
    constructor(props){
        super(props);
        this.state = {
            val : this.props.value
        }
        // console.log(this.state.val);
    }

    handleInc = () => {
        this.setState({val : this.state.val + 1})
        console.log(this.state.val)
    }
    render() {
        return (
            <>  
                <h1>{this.state.val}</h1>
                <button onClick={this.handleInc} >Increment</button>
            </>
        )
    }
}

export default DisplayCompo;