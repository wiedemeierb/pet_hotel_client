import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { HashRouter as Router } from 'react-router-dom';

class ManageOwners extends Component {
    render() {
        return (
            <h2>ManageOwners Webpage</h2>
        )
    }
}

// const mapStateToProps = state => ({

// });

export default connect()(ManageOwners);