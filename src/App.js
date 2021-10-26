import React, {useState} from 'react'
import { NavBar } from './components/NavBar.js/NavBar';
import './App.css';

function App() {

  const[user, setUser] = useState(false)

  return (
    <div id="App">
      <NavBar user={user} setUser = {setUser}/>
      <NavBar user={true} setUser = {setUser}/>
    </div>
  );
}

export default App;
