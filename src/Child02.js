import React from 'react';
import { useReducer } from 'react';
import UseReducer from './UseReducer';


function Child02(props){
    let [state,dispatch] = useReducer(UseReducer, 52);
    return(
        <div>
            Child 02 {state}
            <button onClick={ ()=> { dispatch({type: "INCREMENT", val: 44}); } }>Increment</button>
            <button onClick={ ()=> { dispatch({type: "DECREMENT", val: 22}); } }>Decrement</button>
        </div>
    );
}

export default Child02;