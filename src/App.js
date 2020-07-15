import React from 'react';
import './App.css';
import Parent from './Parent'
import { useState } from 'react';

function App() {
  let [number,setNumber]= useState(45);
  return (
    <div>
      Hello World !!!
      <Parent num={number}></Parent>
      <button onClick={()=> {setNumber(++number)}}> Increse Number </button>
    </div>
  );
}

export default App;
