import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { HashRouter as Router } from 'react-router-dom';

class ManageOwners extends Component {

    state = {
        owner: ''
    }

    handleChangeInput = (event) => {
        this.setState({
            owner: event.target.value
        })
    }

    handleSubmit = () =>{
        console.log('submit clicked');
        
        this.props.dispatch({
            type: 'ADD_OWNER',
            payload: this.state
        })
    }



    render() {
        return (
            <>
            <h2>Add Owner</h2>
            <input placeholder='Owner Name'
                    type="text"
                    name="owner"
                    value={this.state.owner}
                    onChange={(event) => this.handleChangeInput(event)}
                     />
            <button onClick={this.handleSubmit}>SUBMIT</button><br/>
            {JSON.stringify(this.state)}
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