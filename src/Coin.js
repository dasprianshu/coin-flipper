import { Component } from "react";

const tail = "https://qph.cf2.quoracdn.net/main-qimg-9c81a54813716fccd8e3608ab2f51dcf-lq";
const head = "https://qph.cf2.quoracdn.net/main-qimg-148ae81e6fe0500e130fb547026a9b26-lq";

class Coin extends Component{
    render() {
        
        let source;
        if(this.props.face === 1)
            source = head;
        if(this.props.face === 0)
            source = tail;

        return (
            <div className="Coin">
                <img src= {source} ></img>
            </div>
        );
    }
}

export default Coin;