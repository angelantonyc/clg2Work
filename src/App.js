import logo from './logo.svg';
import './App.css';
import FoodList from './components/List/List';

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "green" }}>Does somebody say FOOD?</h1>
      <h2 style={{ color: "green" }}>Feel free to try ..Must Try Dishes</h2>
      <FoodList />
      {/* <p>What about a movie after dinner? Here is my favorite movie list</p>
      <button>Movies</button> */}
    </div>
   
  );
}

export default App;
