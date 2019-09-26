import React from 'react';
import { Link } from 'react-router-dom';
import  { connect } from 'react-redux';
// import './Nav.css';

const Nav = (props) => (
    <div>
        <Link to="/">Dashboard</Link>
        <br />
        <Link to="/ManageOwners">Manage Owners</Link>
    </div>
)

export default connect()(Nav);