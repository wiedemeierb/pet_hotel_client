import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { HashRouter as Router } from 'react-router-dom';

class Dashboard extends Component {

    componentDidMount(){
        this.getHistory();
    }
    state = {
        pet_name: '',
        pet_color: '',
        pet_breed: '',
        owner_name: '',
        check_in: 'no',
    }

    getHistory = () => {
        this.props.dispatch({
            type: 'GET_HISTORY'
        });
    }

    handleChangeForInputs = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
        // console.log(this.state);
    };

    handleSubmit = () => {
        // console.log('handleSubmit is working')
        this.props.dispatch({
            type: 'ADD_PET',
            payload: this.state
        })
    };

    handleDeletePet = (id) => {
        console.log('handleDeletePet is clicked')
        // this.props.dispatch({
        //     type: 'DELETE_PET',
        //     payload: {id: id}
        // })
    }

    handleCheckIn = (id) => {
        // console.log('checkedIn is clicked')
        this.setState({
            check_in: 'yes',
        })
        console.log(this.state)
        this.props.dispatch({
            type: 'UPDATE_CHECKIN',
            payload: this.state
        })
    }

    handleChangeAddOwner = (event) => {
        this.setState({
            owner_name: event.target.value
        })
    }

    render(){
        // let historyTable = this.props.reduxStore.map((allPets) => {
        //     return(<tr key={allPets.id}>
        //         <td>{allPets.owner_name}</td>
        //         <td>{allPets.pet_name}</td>
        //         <td>{allPets.pet_breed}</td>
        //         <td>{allPets.pet_color}</td>
        //         <td>{allPets.check_in}</td>
        //         </tr>)
        // })
        return(
            <>
            <br />
            <h2>Add Pet</h2>
            <br />
            {/* {JSON.stringify(this.state)} */}
            <div className="inputsDashboard">
            <input 
                placeholder='Pet Name' 
                type="text"
                name="pet_name"
                value={this.state.pet_name}
                onChange={this.handleChangeForInputs('pet_name')}
            />
            <input 
                placeholder='Pet Color'
                type="text"
                name="pet_color"
                value={this.state.pet_color}
                onChange={this.handleChangeForInputs('pet_color')} />
            <input 
                placeholder='Pet Breed'
                type="text"
                name="pet_breed"
                value={this.state.pet_breed}
                onChange={this.handleChangeForInputs('pet_breed')} />
            <select defaultValue={'DEFAULT'} value={this.state.value} onChange={this.handleChangeAddOwner}>
                <option value="DEFAULT">Owner Name</option>
                <option>Brandon</option>
                
                {/* {this.props.reduxStore.map(allOwners => {
                    return(
                        <option value={allOwners.id} key={allOwners.id}>{this.props.reduxStore.owner_name}</option>
                    )
                })} */}
            </select>
            <button onClick={this.handleSubmit}>SUBMIT</button>
            </div>
            <br />
            <h2>History</h2>
            {/* table should eventually have its own component */}
                <table class="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Owner</th>
                        <th>Pet</th>
                        <th>Breed</th>
                        <th>Color</th>
                        <th>Checked in</th>
                        <th>Complete Checkin</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {/* dummy data can eventually be deleted and replaced with mapped reducer to display db data */}
                <tbody>
                    <tr>
                        {/* {historyTable} */}
                        <td>Chris</td>
                        <td>Charlie</td>
                        <td>Shih-tzu</td>
                        <td>Black</td>
                        <td>no</td>
                            {/* <td><button onClick={() => { if (window.confirm('Are you sure you wish to delete this pet?')) this.handleDeletePet(id) }}>Delete</button>
                            <button onClick={this.handleCheckIn(id)}>Checked In</button></td> */}
                            <td><button onClick={this.handleDeletePet}>Delete</button></td>
                            <td><button onClick={this.handleCheckIn}>Checked In</button></td>
                    </tr>
                </tbody>
                <tfoot>
                </tfoot>
            </table>
            </>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(Dashboard);