import React from "react";
import { NavLink} from "react-router-dom";

document.addEventListener("click",(evt)=>{
  const name = evt.target.getAttribute("name");
  if (name=="home"){
    document.getElementById("menu").checked = false;
  }
})

class Sidebar extends React.Component {

  render() {
    return (
      <div className="Sidebar">
        <NavLink name="home" activeClassName="active-link" to="/">
          <div name="home" className="home contents">
            <label name="home" htmlFor="home"><h3 name="home" id="home">Home</h3></label>
          </div>
        </NavLink>
        <div className="corona contents">
          <input type="checkbox" id="checkcorona" />
          <label htmlFor="checkcorona" className="common">
            <h3>Coronavirus Disease (COVID-19)</h3>
            <i className="dropdown fa-solid fa-caret-down"></i>
          </label>
          {/* label tag not working with navlink */}
          <div className="subcontents"> 
            <NavLink name="home" activeClassName="active-link" to="/symptoms"><span name="home">Symptoms</span></NavLink>
            <NavLink name="home" activeClassName="active-link" to="/prevention"><span name="home">Prevention</span></NavLink>
            <NavLink name="home" activeClassName="active-link" to="/treatments"><span name="home">Treatments</span></NavLink>
            <NavLink name="home" activeClassName="active-link" to="/variants"><span name="home">Variants</span></NavLink>
          </div>
        </div>
        <NavLink name="home" activeClassName="active-link" to="/timeline">
          <div name="home" className="indiatimeline contents">
            <label name="home" htmlFor="timeline" className="common"><h3 name="home" id="timeline">India Timeline</h3></label>
          </div>
        </NavLink>
        <div className="india contents">
          <input type="checkbox" id="checkindia" />
          <label htmlFor="checkindia" className="common">
            <h3>Covid-19 India Stats</h3>
            <i className="dropdown fa-solid fa-caret-down"></i>
          </label>
          <div className="subcontents">
            {Object.keys(this.props.indiaCovidData.state_wise).map(state => {
              return (
                <NavLink name="home" activeClassName="active-link" to={`/india/${state}`}>
                  <span name="home">
                    {state}
                  </span>
                </NavLink>
              )
            })}
          </div>
        </div>
        <div className="world contents">
          <input type="checkbox" id="checkworld" />
          <label htmlFor="checkworld" className="common">
            <h3>Covid-19 World Stats</h3>
            <i className="dropdown fa-solid fa-caret-down"></i>
          </label>
          <div className="subcontents">
            {this.props.worldCovidData.countries_stat.map(country => {
              return (
                <NavLink name="home" activeClassName="active-link" to={`/world/${country.country_name}`}>
                  <span name="home">
                    {country.country_name}
                  </span>
                </NavLink>
              )
            })}
          </div>

        </div>
      </div>
    );
  }
}

export default Sidebar;