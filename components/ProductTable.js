// - Filterable Product Table
//   - SearchBar
//   - ProductTable
//     - ProductCategoryRow
//     - ProductRow

var ProductTable = React.createClass({
  render: function() {
    var rows = [];
    var lastCategory = null; // way to be able to stop 
    this.props.products.forEach(function(product) {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) { // -1 means if product.name is not in the index this.props.filterText
        return;  // do we even list the row (or just disregard it)
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);  // do we add a new category row; 'key' is equivalent to 'id' in React
      }
      rows.push(<ProductRow product={product} key={product.name} />); // add the row to the table
      lastCategory = product.category; 
    }.bind(this));  // 'this' is relevant to the thing that called it.  forcing the 'this' to bind to what you want it to bind to.
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});