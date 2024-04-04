import React, { Component } from "react";
import "./List.css"; // Import CSS file for styling

class List extends Component {
  renderList() {
    const items = this.props.items.map((item) => {
      return <li key={item.name}>{item.name}</li>;
    });
    return items;
  }
  render() {
    return <ul className="cute-list">{this.renderList()}</ul>; // Apply class name for styling
  }
}
export default List;
