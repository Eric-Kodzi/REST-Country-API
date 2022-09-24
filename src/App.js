import { Header } from './components/Header';
import { AllCountries } from './components/AllCountries';
import { Details } from './components/Details';
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { SearchAndFilter } from './components/SearchAndFilter';


function App() {

  const [state, setState] = useState({
    allCountries: [],
    searchTerm: '',
    regionSelected: 'all',
    theme: 'light'
  });

const searchInputHandler = (event) => {
    setState({...state, searchTerm: event.target.value});
  }

const regionSelectHandler = (event) => {
    setState({...state, regionSelected: event.target.value});
  }

const toggleTheme = () => {
    setState({...state, theme : state.theme ==='light'? 'dark' : 'light'});
  }

const briefCountryInfo = state.allCountries.map(country => ({
    flag: country.flags.png,
    name: country.name,
    population: country.population,
    region: country.region,
    capital: country.capital

  }));

const selectedByRegion = state.regionSelected === 'all'? briefCountryInfo : 
    briefCountryInfo.filter( country => country.region === state.regionSelected);

const countriesToDisplay = selectedByRegion.filter(country => 
    country.name.toLowerCase().includes(state.searchTerm.toLocaleLowerCase()))

  useEffect(() => {
    setState({...state, loading: true });
    fetch("https://restcountries.com/v2/all")
    .then(response => response.json())
      
    .then(data => setState({...state, allCountries: data, loading: false}))
  },[ ])


  return (

    <Router>
      <div>

        <Header 
        theme = {state.theme}
        toggleTheme = {toggleTheme}
        />

        <Route path = '/REST-Country-API/details/:name'>
        <Details 
        theme = {state.theme}
        countries = {state.allCountries}
        /> 
        </Route> 

        <Route exact path = '/REST-Country-API'>
          <SearchAndFilter
          searchTerm = {state.searchTerm}
          regionSelected = {state.regionSelected}
          searchInputHandler = {searchInputHandler}
          regionSelectHandler = {regionSelectHandler}
          />
         </Route> 

        <Route exact path = '/REST-Country-API'>
        <AllCountries 
        loading = {state.loading}
        countriesToDisplay = {countriesToDisplay}
        />  
        </Route> 

      </div>    
    </Router>
  );
}

export default App;

