import { useState } from "react";
import Item from "./components/item.jsx";
import FilmsList from "./components/filmslist.jsx";

function App(props) {
  let [list, setList] = useState(["ready", "set", "GO"])
  let [text, setText] = useState("")

  function onSubmit (event) {
    event.preventDefault();

    let newList = [...list, text];
    setList(newList);
    setText("");
  }
 
  function addItem(event) {
    let newItems = [...list, text];
    setList (newItems)
    setText("");
  }

 function deleteItem(item) {
    let filteredItems = list.filter((value) => value != item);
    setList( filteredItems );
  }
//Exercise 6 step 5: Update the return statement to map over list instead of this.state.list?

    return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <FilmsList/>
        <ul>
         {listItems}</ul>
         <div><input 
         type="text" 
         name="newTask" 
         id="newTask"
         value={text}
         onChange={(event) => setText({ text: event.target.value})}/>
         <button onClick={this.addItem}>Add</button>
         </div>
       
      </header>
    </div>
  );
}
export default App;


