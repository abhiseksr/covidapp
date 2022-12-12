import React from "react";
import Heading from "./Heading";

class State extends React.Component{
    render(){
        return (
            <div className="parent">
            <Heading data={this.props.state} />
            <div className="State">
            {/* this.props.data */}
                {/* <Heading data={this.props.state} /> */}
            </div>
            </div>
        );
    }
}

export default State;