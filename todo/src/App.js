import { useState } from "react"

import { Button, FormControl, InputLabel, Input } from '@material-ui/core';

import './App.css';
import ToDo from "./components/ToDo";

function App() {

  // JavaScript 👇

  const [todos, setToDos] = useState([
    "Work on the TeamLab Challenge",
    "Workout in Gym",
    "Learn ReactJS",
  ])

  const [input, setInput] = useState('')

  // Function : Add ToDo Task Item
  const addToDo = (event) => {

    event.preventDefault() /* Stops the Browser REFRESHING Functionality */

    setToDos([ ...todos, input ])
    setInput('') /* Clear up the input field */
  }


  return (

    // JSX 👇

    <div className="App">
      <h1>ToDo Application</h1>

      <form>

        <FormControl>
          <InputLabel>Add Your ToDo ✅</InputLabel>
          <Input value={ input } onChange={ event => setInput(event.target.value) } />
        </FormControl>

        <Button disabled={ !input } type="submit" onClick={ addToDo } variant="contained" color="primary">
          Add ToDo Item
        </Button>

      </form>

      <ul>
        { todos.map( todo => (
          <ToDo title={ todo } />
        ) ) }
      </ul>
    </div>
  );
}

export default App;
