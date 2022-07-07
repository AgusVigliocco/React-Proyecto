import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <header>
        <Navbar />
        <ItemListContainer greeting="item list container" />
      </header>
    </>
  );
}

export default App;
