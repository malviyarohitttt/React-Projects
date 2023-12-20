import { Component } from "react";

export default class counterCom extends Component{
    constructor(){
        super();
        this.state={
            counter : 0
        }
    }
    increment=()=>{
        this.setState({counter:this.state.counter+1})
    }
    decrement=()=>{
        this.setState({counter:this.state.counter-1})
    }
    render(){
        return <>
            <p>{this.state.counter}</p>
            <button onClick={this.increment} className="btn btn-primary">Increment</button><br/>
            <button onClick={this.decrement} className="btn btn-primary">Decrement</button>
        </>
    }
}