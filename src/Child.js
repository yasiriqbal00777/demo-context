import React from 'react';
import ValueContext from './ValueContext'

function Child(props){
    let value = React.useContext(ValueContext);
    return(
        <div>
            Child Number {value}
        </div>
    );
}

export default Child;
