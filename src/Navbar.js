import React from "react";

function takeme(evt){
    evt.preventDefault();
    const states = ['Maharashtra', 'Kerala', 'Karnataka', 'Tamil Nadu', 'Andhra Pradesh', 'Uttar Pradesh', 'West Bengal', 'Delhi', 'Chhattisgarh', 'Odisha', 'Rajasthan', 'Gujarat', 'Madhya Pradesh', 'Haryana', 'Bihar', 'Telangana', 'Punjab', 'Assam', 'Jharkhand', 'Uttarakhand', 'Jammu and Kashmir', 'Himachal Pradesh', 'Goa', 'Puducherry', 'Manipur', 'Tripura', 'Meghalaya', 'Chandigarh', 'Arunachal Pradesh', 'Mizoram', 'Nagaland', 'Sikkim', 'Ladakh', 'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Andaman and Nicobar Islands', 'State Unassigned']
    let isstate = states.some(k=>{
        if (k==evt.target[0].value) return true;
        return false;
    });
    window.open(`http://localhost:3000/${isstate?"India":"World"}/${evt.target[0].value}`,"_self");
}
class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <span className="text">C<i class="fa-solid fa-virus"></i>VID-19</span>
                <form action="" onSubmit={takeme} method="get" id="regioncontainer">
                    <input placeholder="Search by a country/state" list="regions" name="region" id="region" />
                    <datalist id="regions">
                        {Object.keys(this.props.indiaCovidData.state_wise).map(state => {
                            return (
                                <option value={`${state}`} />
                            )
                        })}
                        {this.props.worldCovidData.countries_stat.map(country => {
                            return (
                                <option value={`${country.country_name}`} />
                            )
                        })}
                    </datalist>
                </form>
            </div>
        );
    }
}

export default Navbar;