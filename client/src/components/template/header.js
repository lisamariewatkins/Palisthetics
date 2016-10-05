import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


var containerFluid ={
    paddingLeft: 0,
    paddingRight: 0
}

var navLogo = {
    fontFamily: 'Exo',
    fontWeight: 600,
    fontSize: 40,
    color: '#F98100'
    }

var navbar ={
    backgroundColor: '#F1FFE2'
}
    

class HeaderTemplate extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li key={1 + "header"} >
          <Link to="/" className="blue">Home</Link>
        </li>,
        <li key={2 + "header"}>
          <Link to="dashboard" className="blue">Dashboard</Link>
        </li>,
        <li key={3 + "header"}>
          <Link to="logout" className="blue">Logout</Link>
        </li>
      ]
    } else {
      return [
        // Unauthenticated navigation
        <li key={1}>
          <Link to="/" className="blue">Home</Link>
        </li>,
        <li key={2}>
          <Link to="login">Login</Link>
        </li>,
        <li key={3}>
          <Link to="register">Register</Link>
        </li>
      ];
    }
  }

  render() {

    return (
        <nav className="navbar navbar-default" style={navbar}>
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
     <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" style={navLogo} to="/">{this.props.logo}</Link>
          </div>

          <div className="collapse navbar-collapse" id="nav-collapse">
            <ul className="nav navbar-nav navbar-right">
              {this.renderLinks()}
            </ul>
          </div>
        </div>
        </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(HeaderTemplate);
