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
        check_in: '',
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

    

    render(){
        return(
            <>
            <h2>Dashboard Webpage</h2>
            <h2>Add Pet</h2>
            {/* {JSON.stringify(this.state)} */}
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
            <select>
                <option value="Owner"></option>
            </select>
            <button onClick={this.handleSubmit}>SUBMIT</button>
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