import React from 'react';
import './App.css';
import HomePage from './Components/HomePage'
import { Route, withRouter } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Login from './Components/Login'
import API from './Helpers/API';
import AddCountry from './Components/AddCountry'
import SecondaryNav from './Components/SecondaryNav'
import Profile from './Components/Profile'

class App extends React.PureComponent {

  state = {
    userID: "",
    username: "",
    userAge: "",
    user_image_url: "",
    userBadges: [],
    visitedCountries: [],
    visitedCountriesByName: [],
    countries: {},
    selectedCountry: "",
    sidebarVisible: false,
    activeIndex: 0,
    mouseXPosition: 0,
    mouseYPosition: 0,
    countryNamePopUpValue: "",
    countryNamePopUp: false,
  }

  componentDidMount() {
    !this.state.username && this.props.history.push('/login')
    fetch('http://localhost:3000/countries-and-info')
      .then(res => res.json())
      .then(countries => this.setState({ countries }))
  }

  //home page map functions

  handleHover = (e) => {
    e.target && e.target.attributes && e.target.attributes.name && e.target.attributes.name.value ?
      this.setState({
        countryNamePopUpValue: e.target.attributes.name.value,
        countryNamePopUp: true
      })
      :
      this.setState({
        countryNamePopUp: false
      })
  }

  mousePosition = (e) => {
    this.setState({
      mouseXPosition: e.clientX,
      mouseYPosition: e.clientY
    })
  }

  handleMapClick = (e) => {
    const country = this.state.countries.find(country => country.code === e.target.id)
    e.target && e.target.attributes && e.target.attributes.name && e.target.attributes.name.value &&
      console.log(country)
    this.setState({
      selectedCountry: country,
      sidebarVisible: true
    })
  }

  //country list functions

  handleCountryListClick = (countryName) => {
    const country = this.state.countries.find(country => country.name === countryName)
    this.setState({
      selectedCountry: country,
      sidebarVisible: true
    })
  }

  //sidebar functions

  addOrRemoveCountryButtonClick = (countryName) => {
    const country = this.state.countries.find(country => country.name === countryName)
    if (!this.state.visitedCountries.includes(country.code)) {
      this.setState({
        visitedCountries: [...this.state.visitedCountries, country.code],
        visitedCountriesByName: [...this.state.visitedCountriesByName, country.name],
      })
      API.addCountryToUser(this.state.userID, country.id)
    } else {
      const filteredCountries = this.state.visitedCountries.filter(cntry => cntry !== country.code)
      const filteredCountriesByName = this.state.visitedCountriesByName.filter(cntry => cntry !== country.name)
      this.setState({
        visitedCountries: filteredCountries,
        visitedCountriesByName: filteredCountriesByName,
      })
      API.addCountryToUser(this.state.userID, country.id)
    }
  }

  closeSideBar = () => {
    this.setState({
      selectedCountry: "",
      sidebarVisible: false,
      activeIndex: 0
    })
  }

  handleSideBarAccordionClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  //login functions

  guestLogin = () => {
    this.setState({ username: 'Guest' })
    this.props.history.push('/')
  }

  authenticate = (resp) => {
    if (resp.error) throw Error(resp.error)
    API.login(resp.id, { name: resp.name, image_url: resp.picture.data.url, fb_id: resp.id })
    this.setState({ userID: resp.id, username: resp.name, user_image_url: resp.picture.data.url })
    this.props.history.push('/')
  };

  setUser = (user) => {
    const visited = user.countries && user.countries.map(country => country.code)
    const visitedByName = user.countries && user.countries.map(country => country.name)
    this.setState({
      userID: user.id,
      username: user.name,
      userAge: user.age,
      user_image_url: user.image_url,
      userBadges: user.badges,
      visitedCountries: visited,
      visitedCountriesByName: visitedByName
    })
    this.props.history.goBack()
  }

  render() {
    return (
      <div className='site'>
        <div className="App" >
          <NavBar
            username={this.state.username}
            userImage={this.state.user_image_url}
            logout={this.logout}
          />
          {this.state.username && <SecondaryNav />}
          <div className='site-body'>
            <Route exact path="/" render={(routerProps) =>
              <HomePage
                {...routerProps}
                user={this.state.userID}
                countries={this.state.countries}
                handleMapClick={this.handleMapClick}
                visitedCountries={this.state.visitedCountries}
                selectedCountry={this.state.selectedCountry}
                sidebarVisible={this.state.sidebarVisible}
                closeSideBar={this.closeSideBar}
                addOrRemoveCountry={this.addOrRemoveCountryButtonClick}
                activeIndex={this.state.activeIndex}
                handleSideBarAccordionClick={this.handleSideBarAccordionClick}
                countryNamePopUp={this.state.countryNamePopUp}
                countryNamePopUpValue={this.state.countryNamePopUpValue}
                mouseXPosition={this.state.mouseXPosition}
                mouseYPosition={this.state.mouseYPosition}
                mousePosition={this.mousePosition}
                handleHover={this.handleHover}

              />
            } />
            <Route path="/login" render={(routerProps) =>
              <Login
                {...routerProps}
                guestLogin={this.guestLogin}
                user={this.state.userID}
                authenticate={this.authenticate}
                setUser={this.setUser}
              />
            } />
            <Route path="/add-country" render={(routerProps) =>
              <AddCountry
                {...routerProps}
                guestLogin={this.guestLogin}
                user={this.state.userID}
                authenticate={this.authenticate}
                setUser={this.setUser}
                countries={this.state.countries}
                handleCountryListClick={this.handleCountryListClick}
                visitedCountries={this.state.visitedCountries}
                selectedCountry={this.state.selectedCountry}
                sidebarVisible={this.state.sidebarVisible}
                closeSideBar={this.closeSideBar}
                addOrRemoveCountry={this.addOrRemoveCountryButtonClick}
                activeIndex={this.state.activeIndex}
                handleSideBarAccordionClick={this.handleSideBarAccordionClick}
              />
            } />
            <Route exact path="/profile" render={(routerProps) =>
              <Profile
                {...routerProps}
                countries={this.state.countries}
                handleMapClick={this.handleMapClick}
                visitedCountries={this.state.visitedCountries}
                visitedCountriesByName={this.state.visitedCountriesByName}
                userName={this.state.username}
                userAge={this.state.userAge}
                badges={this.state.badges}
                userImage={this.state.user_image_url}
              />
            } />
          </div>
        </div>
      </div>
    );
  }

}

export default withRouter(App);
