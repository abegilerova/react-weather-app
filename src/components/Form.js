import React from "react";



class Form extends React.Component {
    render() {
        return (
            <form clssName="formWeather" onSubmit={this.props.getWeather}>
                <input className="inputForm" type="text" name="city" placeholder="city" />
                <input className="inputForm" type="text" name="country" placeholder="country" />
                <button>Get Weather</button>
            </form>
        );
    }
};

export default Form;