import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { HashRouter as Router } from 'react-router-dom';

class ManageOwners extends Component {
    componentDidMount() {
        this.getOwners();
    }

    state = {
        owner: ''
    }

    //ON LOAD, DISPATCHES A TYPE TO GET ALL OWNERS IN THE DATABASE
    getOwners = () => {
        this.props.dispatch({
            type: 'GET_OWNERS'
        })
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
                        <td>Chris</td>
                        <td>2</td>
                        <td><button>delete</button></td>
                    </tr>
                </tbody>
            </table>
            </>
        )
    }
}

// const mapStateToProps = state => ({

// });

//GET OWNERS AND NUMBER OF PETS REDUCER
const mapStateToProps = reduxStore => ({
    reduxStore
})

export default connect(mapStateToProps)(ManageOwners);