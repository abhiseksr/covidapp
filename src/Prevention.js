import React from "react";
import Card from "./Card";
import Heading from "./Heading";



class Prevention extends React.Component{
    render(){
        return (
            <div className="parent">
                <Heading data={"Prevention"} />
            <div className="Prevention">
                <Card content="Maintain a safe distance from others (at least 1 metre), even if they don’t appear to be sick." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-gP26kV5znocH0qrtb8s8kIEfi5a6Zz89w&usqp=CAU"
                alt="distance"/><Card content="Wear a mask in public, especially indoors or when physical distancing is not possible." src="https://shrutig-287.github.io/Covid-Website/images/protect-1.png"
                alt="mask"/><Card content="Clean your hands often. Use soap and water, or an alcohol-based hand rub." src="https://shrutig-287.github.io/Covid-Website/images/protect-2.png"
                alt="wash"/><Card content="Get vaccinated when it’s your turn. Follow local guidance about vaccination." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3iN--uANcxwMPm9JuwiJhm9sQjU5QTQ-RQ&usqp=CAU"
                alt="distance"/><Card content="Choose open, well-ventilated spaces over closed ones. Open a window if indoors." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTzIkqe3L5JVbRGC3S4lS1At6AJ_ZkiyW92Q&usqp=CAU"
                alt="sneeze"/>
                <Card content="Stay home if you feel unwell." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh4b9djjelQyg5lRdwm-WxW6rNFYoxPu7fEw&usqp=CAU" alt="home" />
                <Card content="Monitor temperature daily." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe2ZUm3ND5GW5i8XZ7xr1N73CbBFEykC9Dhg&usqp=CAU" alt="temperature" />
                <Card content="Take rest and drink a lot of fluids to maintain adequate hydration" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDojjzCXdaL1TGGSpHGBm5s1d8LgeeqYOi4A&usqp=CAU" alt="rest" />
            </div>
            </div>
        );
    }
}

export default Prevention;