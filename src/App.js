import logo from './logo.svg';
import img from './img.png';
import './App.css';

function App() {
  return (
    <div className="">
      <header className="">
        <img src={img} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
