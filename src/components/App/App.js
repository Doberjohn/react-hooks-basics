import React, {Component, useState} from 'react';

import ResourceList from '../ResourceList/ResourceList';
import UserList from '../UserList/UserList';

const App = ()=> {
    // array destructuring. The first thing that 
    // useState function returns is the state object,
    // the second is the setState method which we assign
    // to the resource and setResource functions accordingly.
    // useState('posts') sets a default value of 'posts' in the
    // state resource
    const [resource, setResource] = useState('posts');
    
    return (
        <div>
            <UserList />
            <div>
                <button onClick={()=> setResource('posts')}>Posts</button>
                <button onClick={()=> setResource('todos')}>Todos</button>
            </div>
            <ResourceList resource = {resource}/>
        </div>
    );
}

export default App;