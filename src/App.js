import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, titleEdit] = useState(['Men Jacket Review', 'Men Pants Review']);
  let [title2, titleEdit2] = useState('Women Dress Review');

  let posts = 'Vancouver based full-stact developer'

  return (
    <div className="App">
      <div className="black-nav">
        {/* <div style={{color:'lavender', fontSize:'30pt'}}>Blog by React</div> */}
        <div>Blog by React</div>
      </div>
      
      <div className="list">
        <h3> {title[0]} </h3>
        <p>Published by December 2021</p>
        <hr/>
      </div>

      <div className="list">
        <h3> {title2} </h3>
        <p>Published by December 2021</p>
        <hr/>
      </div>

      <div className="list">
        <h3> {posts} </h3>
        <p>Published by December 2021</p>
        <hr/>
      </div>
      
    </div>
  );
}

export default App;
