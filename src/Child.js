import React from 'react';
import ValueContext from './ValueContext'

function Child(props){
    let value = React.useContext(ValueContext);
    return(
        <div>
            Child Number {value[0]}
            <button onClick = {()=> { value[1](++value[0])}}>Update Value</button> 
        </div>
    );
}

export default Child;
