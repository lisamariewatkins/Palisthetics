import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import cookie from 'react-cookie';
import { protectedTest } from '../../actions/auth';
import HeaderTemplate from '../template/header';
import FooterTemplate from '../template/footer';

var crclBlue = {
    backgroundColor: '#9BF0F2',
	height: 50,
	width: 50,
	borderRadius: '50%',
	marginBottom: -45,
    left: 60,
    marginTop: 30,
	color: '#fff',
	position: 'relative',
	zIndex: 1000,
	fontSize: 30
};

var crclRed = {
    backgroundColor: '#F57777',
	height: 50,
	width: 50,
	borderRadius: '50%',
	marginBottom: -80,
    left: 110,
    marginTop: 30,
	color: '#fff',
	position: 'relative',
	zIndex: 1000,
	fontSize: 30
};
var flex = {
    display: flex
};
var crclImg = {
	flex: 0
};

var edit = {
	display: 'none'
};

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.props.protectedTest();
  }

  isRole(roleToCheck, toRender) {
    let userRole = cookie.load('user').role;

    if (userRole == roleToCheck) {
      return toRender;
    }

    return false;
  }

  adminMenu() {
    return (
      <div className="admin-menu">
        <Link to="/admin">Admin</Link>
      </div>
    );
  }

  ownerMenu() {
    return (
      <div className="trainer-menu">
        Owner menu coming soon.
      </div>
    );
  }

  clientMenu() {
    return (
      <div className="client-menu">
        Client menu coming soon.
      </div>
    );
  }

  render() {
    return (
      <div>
      <HeaderTemplate logo="Palisthetics" />
        <span style={edit}> | <Link to="/profile/edit">Edit Profile</Link> | <Link to="/billing/settings">Billing</Link></span>
        {this.isRole("Admin", this.adminMenu())}
        {this.isRole("Owner", this.ownerMenu())}
        {this.isRole("Client", this.clientMenu())}
        <p>{this.props.content}</p>
        <div className="text-center">
			<h2>Name</h2>
			<p>Gender, Age</p>
			</div>
			<div className="container" style={flex}>
				<Link to="/dashboard/inbox"><img src="/../../images/message.png" style={crclBlue} className="center-block text-center" /></Link>
				<a style={crclRed} className="center-block text-center">X</a>
					<img src="http://placehold.it/300x300" className="center-block img-circle img-responsive" style={crclImg} />
				

			</div>
        <FooterTemplate />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { content: state.auth.content };
}

export default connect(mapStateToProps, { protectedTest })(Dashboard);
