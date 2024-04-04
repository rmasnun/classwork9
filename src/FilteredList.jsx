import React, { Component } from "react";
import List from "./List";
import { Dropdown, DropdownButton } from "react-bootstrap";

class FilteredList extends Component {
  constructor(props) {
    super(props);
    // The state is just a list of key/value pair (like a hashmap)
    this.state = {
      search: "",
      filterType: "all", // Initial filter type
    };
  }

  // Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({ search: event.target.value.toLowerCase() });
  };

  // Handler function for dropdown selection
  onSelectFilterType = (eventKey) => {
    this.setState({ filterType: eventKey });
  };

  filterItem = (item) => {
    // Checks if the current search term is contained in this item
    const isSearchMatch =
      item.name.toLowerCase().search(this.state.search) !== -1;
    // Checks if the item matches the selected type or "All" is selected
    const isTypeMatch =
      this.state.filterType === "all" || item.type === this.state.filterType;
    return isSearchMatch && isTypeMatch;
  };

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>
        <DropdownButton id="typeDropdown" title={"Type"}>
          <Dropdown eventKey="all" onSelect={this.onSelectFilterType}>
            All
          </Dropdown>
          {/* Assuming you have a list of unique types in your produce data */}
          {this.props.items.map((item) => (
            <Dropdown
              key={item.type}
              eventKey={item.type}
              onSelect={this.onSelectFilterType}
            >
              {item.name}
            </Dropdown>
          ))}
        </DropdownButton>

        <input type="text" placeholder="Search" onChange={this.onSearch} />

        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
