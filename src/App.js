import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import countries from './countries.json';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  state = {
    countries: null,
  };

  componentDidMount() {
    this.setState({
      countries,
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div class="container">
          <div class="row">
            <CountriesList countries={this.state.countries} />
            <Route
              path="/:countryId"
              render={(props) => {
                return (
                  <CountryDetails countries={this.state.countries} {...props} />
                );
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
