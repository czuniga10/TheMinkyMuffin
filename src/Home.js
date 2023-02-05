import logo from './logo.png';
import './App.css';
import Header from './components/Header'

function Home() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <p>
          🚧 The Minky Muffin site is under construction 🚧
        </p>
      </header>
    </div>
  );
}

export default Home;
