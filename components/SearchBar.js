// - Filterable Product Table
//   - SearchBar
//   - ProductTable
//     - ProductCategoryRow
//     - ProductRow

var SearchBar = React.createClass({
  handleChange: function() {
    this.props.onUserInput(  // this.props allows access to all properties assigned to SearchBar in the parent Component
      this.refs.filterTextInput.value,  // this.refs = a way to reference an object w/React (jquery would use id)
      this.refs.inStockOnlyInput.checked  // 
    );
  },
  render: function() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
    // {' '} = evaluate ' ' as a string; injects a space between the check box and it's label
  }
});