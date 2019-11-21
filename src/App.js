import React from 'react';
import './App.css';
import HomePage from './Components/HomePage'
import { Route, withRouter } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Login from './Components/Login'
import API from './Helpers/API';

class App extends React.Component {

  state = {
    username: "",
    user_image_url: "",
  }

  guestLogin = () => {
    this.setState({ username: 'Guest' })
    this.props.history.push('/')
  }

  authenticate = (resp) => {
    console.log(resp);
    if (resp.error) throw Error(resp.error)
    API.login(resp.id, { name: resp.name, image_url: resp.picture.data.url, fb_id: resp.id })
    this.setState({ username: resp.name, user_image_url: resp.picture.data.url })
    this.props.history.push('/')
  };

  render() {
    return (
      <div className='site'>
        <NavBar
          username={this.state.username}
          userImage={this.state.user_image_url}
        />
        <div className='site-body'>
          <Route exact path="/" render={(routerProps) =>
            <HomePage
              {...routerProps}
              user={this.state.username}
            />
          } />
          <Route path="/login" render={(routerProps) =>
            <Login
              {...routerProps}
              guestLogin={this.guestLogin}
              user={this.state.username}
              authenticate={this.authenticate}
            />
          } />
        </div>
      </div>

    );
  }

}

export default withRouter(App);
