//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
const SimpleCounter = (props) => {
    return(
        <div className="bigClock">
            <div className="six">{props.digitSix % 10}</div>
            <div className="five">{props.digitFive % 10}</div>
            <div className="four">{props.digitFour % 10}</div>
            <div className="three">{props.digitThree % 10}</div>
            <div className="two">{props.digitTwo % 10}</div>
            <div className="one">{props.digitOne % 10}</div>
        </div>
    )
};
SimpleCounter.proptype ={
    digitSix: propTypes.number,
    digitFive: propTypes.number,
    digitFour: propTypes.number,
    digitThree: propTypes.number,
    digitTwo: propTypes.number,
    digitOne: propTypes.number,
};

let clock = 0;
setInterval(function(){
    const six = Math.floor(clock/100000);
    const five= Math.floor(clock/10000);
    const four = Math.floor(clock/1000);
    const three = Math.floor(clock/100);
    const two = Math.floor(clock/10);
    const one = Math.floor(clock/1);
    console.log(one, two,three,four,five,six);
    clock++;

// render your react application
ReactDOM.render(<SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six}/>, document.querySelector("#app"));

},1000);
