import React from "react";
import axios from "axios";
import Heading from "./Heading";

let ratio = {
    type: 'doughnut',
    data: {
      labels: ['cases','deaths','total_recovered'],
      datasets: [{ data: [1111150, 677777660, 3370] }],
    },
    options: {
      plugins: {
        doughnutlabel: {
          labels: [{ text: '550', font: { size: 20, weight: 900 } }, { text: 'total' }],
        },
      },
    },
  }

function getInt(s){
    return parseInt(`${s}`.replace(/,/g, ''));
}

class Country extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            doughnuturl: undefined
        }
    }

    componentDidMount(){
        const countrydata = this.props.data;
        let d = parseInt(countrydata.deaths.replace(/,/g, '')), c  = parseInt(countrydata.cases.replace(/,/g, '')), r =  parseInt(countrydata.total_recovered.replace(/,/g, ''));
        ratio.data.datasets[0].data = [c,d,r];      
        axios.post("http://localhost:8080/api/covid", ratio).then(res=> {this.setState({doughnuturl: res.data})}).catch((err)=>console.log(err));
    }

    render(){
        let countrydata = this.props.data;
        let {mediancases: mc, mediandensity: md, medianrecoveredpercent: mr, getpercent} = this.props;
        return (
            <div className="countryparent">
            <Heading data={countrydata.country_name} />
            <div className="Country">
                <div className="content">
                    <div className="text"><div>There has been a total of <span className="total">{countrydata.cases}</span> confirmed cases in {countrydata.country_name}.
                    Out of which <span className="recovered">{countrydata.total_recovered}</span> have been recovered and <span className="death">{countrydata.deaths}</span> have died.</div>
                    {(getpercent(countrydata.total_recovered,countrydata.cases)>mr)?(<div>{countrydata.country_name} has better <abbr title={`${getpercent(countrydata.total_recovered,countrydata.cases)}%`}>ratio</abbr> of recovered to total cases.</div>):(<div>{countrydata.country_name} has worse ratio of recovered to total cases.</div>)}
                    {(getInt(countrydata.cases)<getInt(mc))?(<div> It has less number of cases than the <abbr title={`${mc}`}>median</abbr> cases.</div>):(<div> It has more number of cases than the <abbr title={mc}>median</abbr> cases.</div>)}
                    {(getInt(countrydata.total_cases_per_1m_population)<getInt(md))?(<div> It has less number of cases per millon population than the <abbr title={md}>median</abbr> cases per million population.</div>):(<div> It has more number of cases per million population than the <abbr title={md}>median</abbr> cases per million population.</div>)}
                    Here are some statistics - </div>
                    <div className="countrystats">
                        <ul>
                            {Object.keys(countrydata).map(k=>{
                                return <li>{k} : {countrydata[k]}</li>
                            })}
                        </ul>
                        <img src={this.state.doughnuturl} alt="ratio" />
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Country;