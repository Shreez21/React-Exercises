import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["ready", "set", "GO"],
      text: ""
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem() {
    let newItems = [...this.state.list, this.state.text];
    this.setState({ list: newItems, text: ""});
  }

  deleteItem(item) {
    let filteredItems = this.state.list.filter((value) => value != item);
    this.setState({ list: filteredItems });
  }
  render() {
    let listItems = this.state.list.map((item, idx) =>(
      <Item key={idx} content={item} onDelete={() => this.deleteItem(item)} />
    ));

    let heading = <h1>Hello World</h1>

    return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <ul>
         {listItems}</ul>
         <div><input 
         type="text" 
         name="newTask" 
         id="newTask"
         value={this.state.text}
         onChange={(event) => this.setState({ text: event.target.value})}/>
         <button onClick={this.addItem}>Add</button>
         </div>
       
      </header>
    </div>
  );
}
}
export default App;

export default App;
