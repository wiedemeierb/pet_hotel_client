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

    ///SET STATE WITH DATA ENTERED
    handleChangeInput = (event) => {
        this.setState({
            owner: event.target.value
        })
    }

    ///SUBMIT DATA ON CLICK
    handleSubmit = () =>{
        console.log('submit clicked');
        
        this.props.dispatch({
            type: 'ADD_OWNER',
            payload: this.state
        })
    }

    ///DELETE AN OWNER FROM THE DB USING THEIR ID
    handleDelete = (id) => {
        console.log('in handleDelete for owner id:', id);
        this.props.dispatch({
            type: 'DELETE_OWNER',
            payload: id
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
                    
                        <tr >
                            <th>owner</th>
                            <th>Number of Pets</th>
                            <th>Action</th>
                        </tr>

                
                </thead>
                <tbody>
                    {/* MAP OWNERS STORE TO PROPS */}
                        {/* {owners.map(each => (
                        <tr key={each.owner_id}>
                            <td>{each.name}</td>
                            <td>Number of Pets</td>
                            <td><button onClick={() => this.handleDelete(each.owner_id)}>delete</button>/td>
                        </tr>
                    ))} */}




                        {/* THIS IS DUMMY DATA TO BE DELETED */}
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


//GET OWNERS AND NUMBER OF PETS REDUCER
const mapStateToProps = reduxStore => ({
    owners: reduxStore.getOwnersReducer
})

export default connect(mapStateToProps)(ManageOwners);