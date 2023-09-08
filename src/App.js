import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('https://form-backend-eta.vercel.app/get-users') 
      .then (res => {
        setUsers(res.data)
      })
  }, [])


  const handleSubmit = () => {
    const name = document.querySelector('.txt-name').value
    const email = document.querySelector('.txt-email').value
    
    axios.post('https://form-backend-eta.vercel.app/create', {name : name, email : email})
      .then (res => {
        if (res.data.status == 200) {
          window.location.reload()
        }
      })
  }



  return (
    <div className="App">
      <div>
        <input type='text' className='txt-name' placeholder='name'/>
        <input type='text' className='txt-email' placeholder='name'/>
        <button onClick={() => handleSubmit()}>Submit</button>
      </div>
      <div>
        <ul>
          {users.map((user , index) => (
            <li key={index}>Name : {user.name} , Email : {user.email}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
