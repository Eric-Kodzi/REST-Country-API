import { Header } from './components/Header';
import { Search } from './components/Search';
import { Filter } from './components/Filter';
import { AllCountries } from './components/AllCountries';
//import { Country } from './components/Country';
import { Details } from './components/Details';
import './App.css';
import { useState, useEffect } from 'react';


function App() {

  const [state, setState] = useState({
    allCountries: [],
    searchTerm: '',
    regionSelected: 'all'
  });

  const searchInputHandler = (event) => {
    setState({...state, searchTerm: event.target.value});
  }
  const regionSelectHandler = (event) => {
    setState({...state, regionSelected: event.target.value});
  
  }

  const selectedByRegion = state.regionSelected == 'all'? state.allCountries : 
    state.allCountries.filter( country => country.region == state.regionSelected);

  const countriesToDisplay = selectedByRegion.filter(country => 
    country.name.toLowerCase().includes(state.searchTerm.toLocaleLowerCase()))

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
      
    .then(data => setState({...state, allCountries: data.map(country => ({
      flag: country.flags.svg,
      name: country.name.common,
      population: country.population,
      region: country.region,
      capital: country.capital

    }))}))
  },[ ])

  

  return (

    <div>
        <Header />
        <Search 
        value={state.searchTerm}
        searchInputHandler={searchInputHandler}
        />
        <Filter 
        value={state.regionSelected}
        regionSelectHandler={regionSelectHandler}
        />
        <AllCountries 
        countriesToDisplay={countriesToDisplay}
        />
        <Details />        
    </div>
  );
}

export default App;
