/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, titleEdit] = useState(['Men Jacket Review', 'Men Pants Review']);
  let [title2, titleEdit2] = useState('Women Dress Review');
  let [good, goodEdit] = useState(0);
  let [title3, titleEdit3] = useState('Women Coat Review');

  let posts = 'Vancouver based full-stack developer'

  function titleChange() {
    let newArray = [...title];
    newArray[0] = 'Women Coat Review';
    titleEdit(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        {/* <div style={{color:'lavender', fontSize:'30pt'}}>Blog by React</div> */}
        <div>Blog by React</div>
      </div>
      
      <div className="list">
        <h3> {title[0]} <span onClick={()=>{ goodEdit(good+1) }}>👍</span> {good} </h3>
        <p>Published by December 2021</p>
        <hr/>
      </div>

      <div className="list">
        <h3> {title[1]} </h3>
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
      
      <button onClick={titleChange}>Button</button>

    </div>
  );
}

export default App;
