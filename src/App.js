import { Header } from './components/Header';
import { Search } from './components/Search';
import { Filter } from './components/Filter';
import { AllCountries } from './components/AllCountries';
import { Details } from './components/Details';
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


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
    flag: country.flags.svg,
    name: country.name.common,
    population: country.population,
    region: country.region,
    capital: country.capital

  }));

  const selectedByRegion = state.regionSelected === 'all'? briefCountryInfo : 
    briefCountryInfo.filter( country => country.region === state.regionSelected);

  const countriesToDisplay = selectedByRegion.filter(country => 
    country.name.toLowerCase().includes(state.searchTerm.toLocaleLowerCase()))

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
      
    .then(data => setState({...state, allCountries: data}))
  },[ ])

  const style = {
    backgroundColor: state.theme === 'light'? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 17%)'
  }

  return (

    <Router>
      <div style={style}>
        <Header 
        theme={state.theme}
        toggleTheme={toggleTheme}
        />
        <Route path='/details/:name' exact>
        <Details 
        theme={state.theme}
        countries={state.allCountries}
        />  
        </Route> 
        <Route exact path='/'>
        <Search 
        theme={state.theme}
        value={state.searchTerm}
        searchInputHandler={searchInputHandler}
        />
        </Route>
        <Route exact path='/'>
        <Filter 
        theme={state.theme}
        value={state.regionSelected}
        regionSelectHandler={regionSelectHandler}
        />
        </Route>
        <Route exact path='/'>
        <AllCountries 
        theme={state.theme}
        countriesToDisplay={countriesToDisplay}
        />  
        </Route> 
      </div>    
    </Router>
  );
}

export default App;

