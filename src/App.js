import logo from './logo.svg';
import './App.css';

function App() {

  let posts = 'Vancouver based full-stact developer'

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color:'lavender', fontSize:'30pt'}}>Blog by React</div>
      </div>
      <img src= {logo} alt="logo" />
      <h4> {posts} </h4>
    </div>
  );
}

export default App;
