import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { HashRouter as Router } from 'react-router-dom';

class ManageOwners extends Component {
    render() {
        return (
            <>
            <h2>Add Owner</h2>
            <input placeholder='Owner Name' />
            <button>SUBMIT</button>
            <h2>Owners</h2>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Number of Pets</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dummy Data</td>
                    </tr>
                </tbody>
            </table>
            </>
        )
    }
}

// const mapStateToProps = state => ({

// });

export default connect()(ManageOwners);