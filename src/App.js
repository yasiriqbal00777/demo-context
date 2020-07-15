import React from 'react';
import './App.css';
import Parent from './Parent'
import { useState } from 'react';
import ValueContext from './ValueContext';

function App() {
  let [number,setNumber]= useState(45);
  let value = 81;
  return (
   // <ValueContext.Provider value={value}>
      <div>
      Hello World !!!
      <Parent></Parent>
      <button onClick={()=> {setNumber(++number)}}> Increse Number </button>
      </div>
    //</ValueContext.Provider>
  );
}

export default App;
