import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <ItemListContainer />
      </div>
    </>
  );
};

export default App;
