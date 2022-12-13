import React from "react";
import Heading from "./Heading";

const baseurl = "https://quickchart.io/chart?backgroundColor=white&&width=800&&height=400e&&c=";

let toptendistricts = {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{ data: [50, 60, 70, 180, 190], label: "active" }, { data: [50, 60, 70, 180, 190], label: "confirmed" }, { data: [50, 60, 70, 180, 190], label: "deaths" }, { data: [50, 60, 70, 180, 190], label: "recovered" }],
    },
    bgcolor: "snow",
    width: 800,
    height: 400
};

class State extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            barurl: undefined
        }
    }

    async componentDidMount(){
        const data = this.props.data.district;
        // console.log(data);
        let arr = Object.keys(data).map(k=> { return {district_name:k,...data[k]}});
        arr = arr.sort((a,b)=>b.confirmed-a.confirmed).slice(0,5);
        toptendistricts.data.labels = arr.map(k=> k.district_name);
        toptendistricts.data.datasets[0].data = arr.map(k=> parseInt(k.active));
        toptendistricts.data.datasets[1].data = arr.map(k=> parseInt(k.confirmed));
        toptendistricts.data.datasets[2].data = arr.map(k=> parseInt(k.deaths));
        toptendistricts.data.datasets[3].data = arr.map(k=> parseInt(k.recovered));
        this.setState({barurl: "dummy"});
    }

    render() {
        const state = this.props.data;
        const districts = state.district;
        const desc = state.statenotes;
        return (
            <div className="parent statehead">
                <Heading data={this.props.state} />
                <div className="State">
                    <div>There has been a total of <span className="total">{state.confirmed}</span> confirmed cases in {this.props.state}. Out of which <span className="recovered">{state.recovered}</span> have been recovered and <span className="death">{state.deaths}</span> have died. {state.migratedother+" "}
                    migrated to other regions.</div>
                    <div className="description">{desc}</div>
                    <div className="visuals">
                        <img src={baseurl+JSON.stringify(toptendistricts)} alt="top10districts" />
                        <p>Covid-19 cases in Top 5 districts of {this.props.state}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default State;