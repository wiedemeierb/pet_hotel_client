import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { HashRouter as Router } from 'react-router-dom';

class Dashboard extends Component {
    render(){
        return(
            <>
            <h2>Dashboard Webpage</h2>
            <h2>Add Pet</h2>
            <input placeholder='Pet Name' />
            <input placeholder='Pet Color' />
            <input placeholder='Pet Breed' />
            <select>
                <option value="Owner"></option>
            </select>
            <button>SUBMIT</button>
            <br />
            <h2>History</h2>
            {/* table should eventually have its own component */}
            <table>
                <thead>
                    <tr>
                        <th>Owner</th>
                        <th>Pet</th>
                        <th>Breed</th>
                        <th>Color</th>
                        <th>Checked in</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {/* dummy data can eventually be deleted and replaced with mapped reducer to display db data */}
                <tbody>
                    <tr>
                        <td>Chris</td>
                        <td>Charlie</td>
                        <td>Shih-tzu</td>
                        <td>Black</td>
                        <td>no</td>
                        <td>Delete | Checked In</td>
                    </tr>
                    <tr>
                        <td>Chris</td>
                        <td>Thorin</td>
                        <td>Rabbit</td>
                        <td>White</td>
                        <td>no</td>
                        <td>Delete | Checked In</td>
                    </tr>
                </tbody>
                <tfoot>

                </tfoot>
            </table>

            </>
        )
    }
}

// const mapStateToProps = state => ({

// });

export default connect()(Dashboard);