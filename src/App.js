import { Header } from './components/Header';
import { Search } from './components/Search';
import { Filter } from './components/Filter';
import { AllCountries } from './components/AllCountries';
import { Country } from './components/Country';
import { Details } from './components/Details';
import './App.css';

function App() {
  return (
    <div>
        <Header />
        <Search />
        <Filter />
        <AllCountries />
        <Country 
        flag='Flag'
        name='Belgium'
        population={1230000}
        region='Europe'
        capital='Berlin'
        />
        <Details />        
    </div>
  );
}

export default App;
