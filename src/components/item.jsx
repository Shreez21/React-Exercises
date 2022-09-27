import { Component } from "react";

class Item extends Component {
    render() {
        return (
        <li>
            {this.props.content} <button onClick={this.props.onDelete}>
                X
            </button>
        </li>)
    }
}

export default Item;