import React from 'react';
import { Link } from 'react-router-dom';
import  { connect } from 'react-redux';
// import './Nav.css';

const Nav = (props) => (
    <div className="nav">
        <h2>Pet Hotel</h2>
    
        <div className="links">
            <Link to="/">Dashboard</Link>
            <Link to="/ManageOwners">Manage Owners</Link>
        </div>
    </div>
)

export default connect()(Nav);