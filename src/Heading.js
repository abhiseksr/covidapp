import React from "react";

class Heading extends React.Component{
    render(){
        return (
            <div className="Heading">
                <h2>{this.props.data}</h2>
            </div>
        );
    }
}

export default Heading;