import React from "react";

class Card extends React.Component{
    render(){
        return (
            <div className="Card">
                <img src={this.props.src} alt={this.props.alt} />
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default Card;