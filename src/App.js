import React from 'react';
import './App.css';
import HomePage from './Components/HomePage'
import { Route, withRouter } from 'react-router-dom'
import NavBar from './Components/NavBar'

const App = () => {
  return (
    <div className='site'>
      <NavBar />
      <div className='site-body'>
        <Route path="/" render={(routerProps) =>
          <HomePage
            {...routerProps}
          />
        } />
      </div>
    </div>

  );
}

export default withRouter(App);
