import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { loginUser } from '../../actions/auth';

var signinBrand = {
fontFamily: 'Exo',
    fontWeight: 600,
    color: '#F98100',
    fontSize: 40,
    textAlign: 'center'
};

var input = {
backgroundColor: '#F1FFE2',
marginBottom: 5
};

const form = reduxForm({
  form: 'login'
});

class Login extends Component {
  handleFormSubmit(formProps) {
    this.props.loginUser(formProps);
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div>
          <span><strong>Error!</strong> {this.props.errorMessage}</span>
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="form-signin col-md-4 col-md-offset-4 col-xs-8 col-xs-offset-2">
        <h2 style={signinBrand}>Palisthenics</h2>
        {this.renderAlert()}
          <div>
    <label for="inputEmail" className="sr-only">Email address</label>
            <Field name="email" className="form-control" component="input" type="text" style={input} />
          </div>
          <div>
           <label for="inputPassword" className="sr-only">Password</label>
            <Field name="password" className="form-control col-md-12" component="input" type="password" style={input} />
          </div>
          <div className="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                    </div>
          <button type="submit" className="btn btn-lg btn-primary btn-block">Login</button>
        <Link to="/forgot-password">Forgot Password? </Link>
        <Link to="/register"> Sign up?</Link>
        </form>
        
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    message: state.auth.message,
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, { loginUser })(form(Login));
