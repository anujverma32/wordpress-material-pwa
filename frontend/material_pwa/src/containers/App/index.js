import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import Cookies from 'universal-cookie';

class App extends Component {
    componentDidMount() {
        const cookies = new Cookies();
        const configStr = cookies.get("wpmpwa_config");
        console.log(configStr);
    }
    render() {
        return(
            <div className="app-root">
                <h1>Wordpress Material App</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);