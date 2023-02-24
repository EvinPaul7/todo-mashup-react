import Listcontainer from './components/Listcontainer.js'
import { useState } from 'react';
import Addtodolist from './components/Addtodolist.js';
import Navbar from './components/Navbar.js';

function App(){
  const [state,setState]=useState({
    todos:[{ id: 1, title: "My first state", completed: false },
    { id: 2, title: "My second state", completed: false },
    { id: 3, title: "My third state", completed: false },
    { id: 4, title: "My fourth state", completed: false },
    { id: 5, title: "My fifth state", completed: false },
  ]
  });

  

  
  return(
    <div>
       <Navbar></Navbar>
    <div className='container'>
      <Listcontainer/>
      <Addtodolist/>        
    </div>
    </div>
  );
  }

export default App;