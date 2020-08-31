import React, { useState,useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase'
import firebase from 'firebase'

function App() {
const [todos,setTodos] = useState([]); 
const [input,setInput] = useState('')

// when the app loads we need to listen to the database and fetch new todos as they get added/reoved
useEffect(() => {
//This code get run when the app.js loads   // we need to add the listener when th db changes we nedd to listen
//this todos here is the collection name
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      
    setTodos(snapshot.docs.map(doc => ({id:doc.id ,todo:doc.data().todo})))
 })
},[]);

const addTodos = (event) =>{
  // this will fire when we click button
  event.preventDefault()
  db.collection('todos').add({
    todo:input,
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
  })
  // setTodos([...todos,input])
  setInput('');

}


  return (
    <div className="App">
      <h1>Hello CodeForCoders</h1>
      {/* This form is for only to add todos on enter */}
      <form>   
      {/* <input  value={input} onChange={event => setInput(event.target.value)}/> */}

      <FormControl>
        <InputLabel>write a Todo</InputLabel>
        <Input  value={input} onChange={event => setInput(event.target.value)}/>
        <Button type="submit"  disabled={!input} onClick={addTodos} variant="contained" color="primary">Add Todos
    </Button>
      </FormControl>

      
      
      </form>

      <ul>
        {todos.map(todo=>(
         <Todo todo={todo} />
        ))}
        
      </ul>
      
    </div>
  );
}

export default App;
