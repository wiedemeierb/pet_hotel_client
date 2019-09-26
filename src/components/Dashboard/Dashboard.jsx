import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { HashRouter as Router } from 'react-router-dom';

class Dashboard extends Component {
    render(){
        return(
            <h2>Dashboard Webpage</h2>
        )
    }
}

// const mapStateToProps = state => ({

// });

export default connect()(Dashboard);