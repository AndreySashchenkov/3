import { Component } from "react"


class About extends Component{
    prom = null
    
    // constructor(){
    //     this.prom=new Promise()
    // }
    render(){
        
        return(
            <h1>{this.props.testText}</h1>
        )
    }
}




export default About