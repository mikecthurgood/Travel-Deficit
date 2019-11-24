import React from 'react';
import FacebookAuth from 'react-facebook-auth';
import API from '../Helpers/API'
import './Login.css';


const MyFacebookButton = ({ onClick }) => (
    <img src={(require('../Assets/facebook-login.png'))} onClick={onClick} alt='facebook login button' />
);
// setInterval(() => console.log(window.FB), 1)

class Login extends React.Component {

    componentDidMount() {
        this.props.user && this.props.history.push('/')
        window.fbLoaded.then(() => {
            window.FB.getLoginStatus((response) => {
                if (response.status === 'connected') {
                    // const accessToken = response.authResponse.accessToken;
                    API.validate(response.authResponse.userID).then((user) => this.props.setUser(user))
                }
            })
        })
    }

    render() {
        return (
            <div className='login-images'>
                <img
                    src={(require('../Assets/guest-login.png'))}
                    onClick={this.props.guestLogin}
                    alt='guest login button'
                />
                <FacebookAuth
                    appId="742673452879481"
                    callback={this.props.authenticate}
                    component={MyFacebookButton}
                    reAuthenticate={true}
                    scope={'user_friends'}
                />
            </div >
        )
    }
};

export default Login