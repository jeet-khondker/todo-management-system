import { useState } from "react"
import './App.css';

function App() {

  // JavaScript

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

    // JSX

    <div className="App">
      <h1>ToDo Application</h1>

      <form>
        <input value={ input } onChange={ event => setInput(event.target.value) }/>

        <button type="submit" onClick={ addToDo }>Add ToDo Item</button>
      </form>

      <ul>
        { todos.map( todo => (
          <li>{ todo }</li>
        ) ) }
      </ul>
    </div>
  );
}

export default App;
