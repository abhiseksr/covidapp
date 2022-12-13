import React from "react";
import axios from "axios";
import Heading from "./Heading";

const baseurl = "https://quickchart.io/chart?backgroundColor=white&&width=800&&height=400e&&c=";

let topten = {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{ data: [50, 60, 70, 180, 190], label: "Total" }, { data: [50, 60, 70, 180, 190], label: "Deaths" }],
    },
    bgcolor: "whitesmoke",
    width: 800,
    height: 400
};

let worldstats = {
    type: 'pie',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{ data: [50, 60, 70, 180, 190] }],
    },
    bgcolor: "whitesmoke",
    width: 800,
    height: 400
}

function getInt(s){
    return parseInt(`${s}`.replace(/,/g, ''));
};


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            barurl: undefined,
            pieurl: undefined
        }
    }

    async componentDidMount() {
        const data = this.props.worldCovidData.countries_stat;
        const world = this.props.worldCovidData.world_total;
        data.sort((a, b) => b.cases - a.cases);
        topten.data.labels = data.map(country => {
            return country.country_name;
        })
        let max = getInt(data[0].cases);
        topten.data.datasets[0].data = data.map(country => {
            let x = getInt(country.cases);
            return getInt(x * 100 / max);
        })
        topten.data.datasets[1].data = data.map(country => {
            let x = getInt(country.deaths);
            return (x / max) < 1 ? 1 : getInt(x*100 / max);
        })
        topten.data.labels = topten.data.labels.slice(0, 5);
        topten.data.datasets[0].data = topten.data.datasets[0].data.slice(0, 5);
        topten.data.datasets[1].data = topten.data.datasets[1].data.slice(0, 5);

        worldstats.data.labels = Object.keys(world).map(k => {
            return k;
        })
        worldstats.data.datasets[0].data = Object.keys(world).map(k => {
            let x = getInt(world[k]);
            return x;
        })
        worldstats.data.labels = worldstats.data.labels.slice(0, 6);
        worldstats.data.datasets[0].data = worldstats.data.datasets[0].data.slice(0, 6);

        this.setState({ barurl: "dummy", pieurl: "dummy" });

    }

    render() {
        const data = this.props.worldCovidData.countries_stat;
        const world = this.props.worldCovidData.world_total;
        data.sort((a, b) => b.cases - a.cases);
        const first = data[0], second = data[1], third = data[2];
        return (
            <div className="Main">
                <div className="imagecontainer">
                    <div className="text">
                        <p>
                            The novel coronavirus is a highly contagious new virus that emerged in China's Wuhan late last year quickly spread to the rest of the world. The coronavirus causes a respiratory disease called COVID-19. The disease, similar to flu, triggers symptoms like cough, fever, and in more severe cases, difficulty breathing. Doctors across the world have advised that people can protect themselves by frequently washing hands, not touching your face and avoiding physical contact with people. India registered its first coronavirus case on January 30. Many countries, including India, have enforced strong physical distancing protocols that urge people to practise self-isolation at homes to stop the spread of the disease. Only those involved in essential services and those trying to buy basic necessities are advised to go out and wear a mask when doing so.
                        </p>
                    </div>
                    <img src="https://www.goindigo.in/content/dam/indigov2/6e-website/header/information/2020/02/Coronaa-mobile.jpg" alt="mask" />
                </div>
                <p>
                    Across the world, there have been a total of <span className="total">{world.total_cases}</span> confirmed coronavirus cases, according to the latest update. This includes <span className="recovered">{world.total_recovered}</span> people who have recovered and <span className="death">{world.total_deaths}</span> who have died. There are total of <span className="active">{world.active_cases}</span> active cases around the world.
                </p>
                <div className="container">
                    <div className="statistics left">
                        <div className="Top5CovidCountries">
                            <img src={baseurl+JSON.stringify(topten)} alt="Top5CovidCountries" />
                            <p>COVID-19 cases in Top 5 countries</p>
                        </div>
                    </div>
                    <div className="statistics right">
                        <div className="worldstats">
                            <img src={baseurl+JSON.stringify(worldstats)} alt="worldstats" />
                            <p>Proportion of various types of cases</p>
                        </div>
                    </div>
                </div>
                <p>
                    The highest number of coronavirus cases currently is in {first.country_name} which has registered <span className="total">{first.cases}</span> confirmed COVID-19 cases. <span className="death">{first.deaths}</span> people have died of coronavirus in the country. {second.country_name} and {third.country_name} are next in line with <span className="total">{second.cases}</span> and <span className="total">{third.cases}</span> confirmed coronavirus cases and <span className="death">{second.deaths}</span> and <span className="death">{third.deaths}</span> deaths respectively.
                </p>
            </div>
        );
    }
}

export default Main;