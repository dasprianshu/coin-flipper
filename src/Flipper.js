import { Component } from "react";
import Coin from "./Coin.js"

class Flipper extends Component{

    constructor(props){
        super(props);
        this.state = {
            noOfHeads : 0 ,
            noOfTails : 0 
        };
        this.rand = 0 ;
        this.faceGenerator = this.faceGenerator.bind(this);
    }

    faceGenerator(){
        this.rand = (Math.floor(Math.random() * 2));
        if(this.rand)
            this.setState(cur => ({noOfHeads: cur.noOfHeads + 1}));
        else
            this.setState(cur => ({noOfTails: cur.noOfTails + 1}));

        console.log( "Head : " + this.state.noOfHeads);
        console.log( "Tails : " + this.state.noOfTails);
    }
   
    render() {
        return(
            <div className="Flipper">
                <h1>Coin Flipper</h1>
                <Coin face = {this.rand} />
                <p>Out of {this.state.noOfHeads + this.state.noOfTails}, there have been {this.state.noOfHeads} heads and {this.state.noOfTails} tails.</p>
                <button onClick={this.faceGenerator}>Flip!!</button>
            </div>
        );
    }
}

export default Flipper;