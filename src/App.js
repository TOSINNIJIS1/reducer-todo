import React, {useReducer} from 'react';
import TodoList from '../src/components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm';
import  {reducer, initial} from "./reducer/reducer";
import  './App.css'


function App() {
  const [state, dispatch] = useReducer(reducer, initial)

  const addNewItem = input => {

    
    const newItem = {
      item: input,
      completed: false,
      id: Date.now()
    }





    dispatch({type: "Add", payload: newItem})
  };

  const toggleItem = (id) => {
    dispatch({type: "Completed", payload: id})

    console.log(id)

  }

  const clearItem = () => {
      dispatch({type: "Clear_Completed"})
  }



  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  // render() {
    return (
      <div className="App-header">
        <h2> Welcome to My Todo App </h2>
        <TodoForm addNewItem = {addNewItem} />

        <TodoList state={state}   
        toggleItem={toggleItem}
        clearItem={clearItem}
        />

      </div>
    );
  }
// }

export default App;
