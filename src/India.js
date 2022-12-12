import React from "react";
import Country from "./Country";
import State from "./State";
import {Routes,Route} from "react-router-dom";


class India extends React.Component{
    render(){
        return (
            <div className="India" id="India">
                <Routes>
                    {Object.keys(this.props.indiaCovidData.state_wise).map(state=>{
                        return <Route exact path={`/${state}`} element={<State state={state} data={this.props.indiaCovidData.state_wise[state]} />} />
                    })}
                </Routes>
            </div>
        );
    }
}

export default India;