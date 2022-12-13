import { time } from "console";
import React from "react";
import axios from "axios";
import Heading from "./Heading";

const baseurl = "https://quickchart.io/chart?backgroundColor=white&&width=800&&height=400e&&c=";

let timelinedata = {
    type: 'line',
    width: 800,
    height: 400,
    bgcolor: "snow",
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Dogs',
                data: [50, 60, 70, 180, 190],
                fill: false,
                borderColor: 'blue',
            },
            {
                label: 'Cats',
                data: [100, 200, 300, 400, 500],
                fill: false,
                borderColor: 'red',
            },
            {
                label: 'Cats',
                data: [100, 200, 300, 400, 500],
                fill: false,
                borderColor: 'green',
            },
        ],
    },
};

let toptenstates = {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{ data: [50, 60, 70, 180, 190], label: "active" }, { data: [50, 60, 70, 180, 190], label: "confirmed" }, { data: [50, 60, 70, 180, 190], label: "deaths" }, { data: [50, 60, 70, 180, 190], label: "recovered" }],
    },
    bgcolor: "snow",
    width: 800,
    height: 400
};

class Timeline extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lineurl: undefined,
            barurl: undefined
        }
    }

    async componentDidMount() {
        const fulldata = this.props.indiaTimelineData;
        let newdata = fulldata.filter((k, idx) => {
            if (idx % 30 === 0) return true;
            return false;
        })
        timelinedata.data.labels = newdata.map(k => {
            return k.dateymd.slice(0, 7);
        });
        timelinedata.data.datasets[0].label = "totalconfirmed";
        timelinedata.data.datasets[1].label = "totaldeceased";
        timelinedata.data.datasets[2].label = "totalrecovered";
        timelinedata.data.datasets[0].data = newdata.map(k => {
            return k.totalconfirmed;
        })
        timelinedata.data.datasets[1].data = newdata.map(k => {
            return k.totaldeceased;
        })
        timelinedata.data.datasets[2].data = newdata.map(k => {
            return k.totalrecovered;
        })

        let statestop5 = this.props.indiaCovidData.state_wise;
        statestop5 = Object.keys(statestop5).map(k => {
            return { state: k, ...statestop5[k] };
        });
        statestop5.sort((a, b) => b.confirmed - a.confirmed);

        toptenstates.data.labels = statestop5.map(k => k.state).slice(0, 5);
        toptenstates.data.datasets[0].data = statestop5.map(k => k.active).slice(0, 5);
        toptenstates.data.datasets[1].data = statestop5.map(k => k.confirmed).slice(0, 5);
        toptenstates.data.datasets[2].data = statestop5.map(k => k.deaths).slice(0, 5);
        // toptenstates.data.datasets[2].data = statestop5.map(k=>k.recovered).slice(0,5);

        this.setState({ lineurl: "dummy", barurl: "dummy" });
    }

    render() {

        return (
            <div className="parent">
                {/* <Heading data={this.props.data.country_name} /> */}
                <Heading data={"India Timeline"} />
                <div className="Timeline">
                    <div className="imagecontainer">
                        <div className="text">
                            <p>With 243 new coronavirus cases on Dec 09 2022, India now has registered a total of 4,46,74,439 COVID-19 infections across the country. This includes 0 new deaths which have taken the total count to 5,30,653. The total number of coronavirus cases also includes 4,41,39,558 people who have recovered and 4,228 who are currently being treated. There were 243 new active cases and 259 new recovered cases on Dec 09 2022. The data for this was released by the Union Health Ministry at 5:30 am</p>
                            <p>As the number of infections rises exponentially, the number of deaths is also increasing rapidly. To date, more than 200,000 people in India have died of COVID-19. The mortality rate is 1.14%. So if 1.14% of the 18 million people currently infected die, that would be another 205,200 deaths. If the number of infected people doubles, that's an additional 410,400 deaths.</p>
                        </div>
                        <img src="https://static.dw.com/image/52827779_7.png" alt="exponential" />
                    </div>
                    <p>According to the latest numbers, Maharashtra has the highest number of coronavirus cases at <span className="total">81,36,107</span>. Of this <span className="active">1,48,660</span> are active, <span className="recovered">79,87,447</span> are recovered and <span className="death">1,48,407</span> have died. Kerala and Karnataka are next with 68,26,959 and 40,71,493 total COVID-19 cases respectively. Andaman and Nicobar Islands, Lakshadweep and Dadra and Nagar Haveli and Daman and Diu have the lowest number coronavirus cases with 10,741, 11,415 and 11,591 respectively.</p>
                    <div className="container">
                        <div className="timeline">
                            <img src={baseurl+JSON.stringify(timelinedata)} alt="timeline" />
                            <p>Covid-19 cases in Top 5 states of India</p>
                        </div>
                    </div>
                    <p>India currently has a fatality rate of 1.19 per cent due to coronavirus. The government has said more than 70 per cent of the people recover from COVID-19 with mild or very mild symptoms. Such cases may not even require admission to COVID-19 blocks or dedicated hospitals, the Health Ministry said.</p>
                    <div className="container">
                        <div className="timeline">
                            <img src={baseurl+JSON.stringify(toptenstates)} alt="timeline" />
                            <p>Rise of COVID recorded from Jan 2020 to August 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timeline;