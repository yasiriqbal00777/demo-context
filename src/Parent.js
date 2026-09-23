import React from 'react';
import Child from './Child'
import Child02 from './Child02'


function Parent(props){
    return(
        <div>
            Parent
            <Child> </Child>
            <Child02></Child02>
        </div>
    );
}

export default Parent;
