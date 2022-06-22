import './css/normalize.css';
import './css/App.css';
import SearchBar from './components/SearchBar';
import Wrapper from './components/Wrappers/Wrapper';
import styled from 'styled-components';
import ContainerTop from './components/Wrappers/ContainerTop';
import Card from './components/Card/Card';
import Autocomplete from './components/Autocomplete/Autocomplete';

function App() {
  return (
    <Wrapper>
      <ContainerTop />

      <SearchBar />

      <Card />

    </Wrapper>
  );
}

export default App;
