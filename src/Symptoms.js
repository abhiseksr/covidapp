import React from "react";
import Heading from "./Heading";



class Symptoms extends React.Component{
    render(){
        return (
            <div className="parent">
            {/* <Heading data={this.props.data.country_name} /> */}
                <Heading data={"Symptoms"} />
            <div className="Symptoms">
                <p>COVID-19 is a respiratory condition caused by a coronavirus. Some people are infected but don’t notice any symptoms. Most people will have mild symptoms and get better on their own and recover without hospitalization.</p>
                <h2>Most common symptoms:</h2>
                <ul>
                    <li>Fever</li>
                    <li>Dry cough</li>
                    <li>Tiredness</li>
                </ul>
                <h2>Less common symptoms:</h2>
                <ul>
                    <li>Aches and pains</li>
                    <li>Sore throat</li>
                    <li>Diahrrhoea</li>
                    <li>Conjunctivits</li>
                    <li>Headached</li>
                    <li>Loss of taste or smell</li>
                    <li>A rahs on skin</li>
                    <li>Discolouration of fingers or toes</li>
                </ul>
                <h2>Serious symptoms</h2>
                <ul>
                    <li>Difficulty breathing or shortness of breath</li>
                    <li>Chest pain or pressure</li>
                    <li>Loss of speech or movement</li>
                </ul>
                <p>
                On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.
                </p>
                <img src="https://shrutig-287.github.io/Covid-Website/images/sym.png" alt="img" />
                <p>People with mild symptoms who are otherwise healthy should manage their symptoms at home.</p>
                <h2>When to see a doctor</h2>
                <p>If you have COVID-19 signs or symptoms or you've been in contact with someone diagnosed with COVID-19, contact your doctor or clinic right away for medical advice. Tell your health care team about your symptoms and possible exposure before you go to your appointment.</p>
            </div>
            </div>
        );
    }
}

export default Symptoms;