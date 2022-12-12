import React from "react";
import Country from "./Country";
import {Routes,Route} from "react-router-dom";

const getpercent = (x,y)=>{
    x = parseInt(x.replace(/,/g, ''));
    y = parseInt(y.replace(/,/g, ''));
    return parseInt(x*100/y);
}

class World extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            mediancases: undefined,
            medianrecoveredpercent: undefined,
            mediandensity: undefined
        }
    }

    async componentDidMount(){
        const data = this.props.worldCovidData.countries_stat;
        let mid = parseInt(data.length/2), x,y,z;
        data.sort((a,b)=> a.cases - b.cases);
        x = data[mid].cases;
        data.sort((a,b)=> a.total_cases_per_1m_population - b.total_cases_per_1m_population);
        y = data[mid].total_cases_per_1m_population;
        data.sort((a,b)=>getpercent(a.total_recovered, a.cases) - getpercent(b.total_recovered, b.cases));
        z = getpercent(data[mid].total_recovered, data[mid].cases);
        console.log(x,y,z);
        this.setState({mediancases: x, mediandensity: y, medianrecoveredpercent: z});
    }

    render(){
        return (
            <div className="World" id="World">
                <Routes>
                    {this.props.worldCovidData.countries_stat.map(cntry=>{
                        return <Route exact path={`/${cntry.country_name}`} element={<Country key={cntry.country_name} mediancases={this.state.mediancases} mediandensity={this.state.mediandensity}
                        getpercent={getpercent} medianrecoveredpercent  = {this.state.medianrecoveredpercent} data={cntry} />} /> // key is passed so as to remount the country component otherwise the url will be same for all countries(equal to first mounted country)
                    })}
                </Routes>
            </div>
        );
    }
}

export default World;