// - Filterable Product Table
//   - SearchBar
//   - ProductTable
//     - ProductCategoryRow
//     - ProductRow

var ProductCategoryRow = React.createClass({
  render: function() {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>);  //this.props.category => comes from ProductTable.js line 16
  }
});