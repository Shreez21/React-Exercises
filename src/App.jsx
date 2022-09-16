import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         React is so cool!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
      
        </a>
        <h1>Hey, I'm walkin here!</h1>
        <p>Its been a long day, and I'm just writing whatever pops up in my head.</p>
        <ul>
          <li>Grit</li>
          <li>spit</li>
          <li>And a whole lotta duct tape!</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
