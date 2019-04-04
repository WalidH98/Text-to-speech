import React, { Component } from "react";
import countriesData from "./countriesData";²
import ReactCountryFlag from "react-country-flag";

class Flag extends Component {
    render() {
        return (
            <div>
                <ReactCountryFlag code='' />
                <ReactCountryFlag code='' svg />
                <ReactCountryFlag
                    styleProps={{
                        width: '20px',
                        height: '20px'
                    }}
                    code=''
                    svg
                />
            </div>
        );
    }
}

export default Flag;