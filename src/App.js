/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, titleEdit] = useState(['Men Jacket Review', 'Men Pants Review']);
  let [title2, titleEdit2] = useState('Women Dress Review');
  let [good, goodEdit] = useState(0);
  let [title3, titleEdit3] = useState('Women Coat Review');

  let [modal, modalEdit] = useState(false);

  let [userInput, userInputEdit] =useState('');

  // array_map_function
  let array = [2,3,4];
  let newArray = array.map((a)=>{
    return a * 2
  });
  console.log(newArray);
  //


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
        <h3> {title[0]} <span onClick={() => { goodEdit(good+1) }}>👍</span> {good} </h3>
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



    {/* {
      title.map((a) => {
       return (
        <div className="list">
        <h3> {a} </h3>
        <p>Published by December 2021</p>
        <hr/>
        </div>
        )
      })
    }   */}


      {/* <input type="text" onChange={(e)=>{
        userInputEdit(e.target.value);
      }}/> <br /> */}

      
      <button onClick={titleChange}>Change</button>
      <button onClick={() => modalEdit(true)}>Open</button>
      <button onClick={() => modalEdit(false)}>Close</button>

      {
        modal === true
        ? <Modal title={title} ></Modal>
        : null
      }


      <div className='publish'>
        <input type="text" onChange={(e) => {
          userInputEdit(e.target.value)
        }}/>
        <button onClick={()=>{
          let arrayCopy = [...title];
          arrayCopy.unshift(userInput);
          titleEdit(arrayCopy);
        }}>Add Post</button>
      </div>
     
    </div>
  );
}
 
function Modal(props) {
  return (
    <div className='modal'>
        <h2>{props.title[0]}</h2>
        <p>Date</p>
        <p>Detail</p>
    </div>
  )
  
}

export default App;
