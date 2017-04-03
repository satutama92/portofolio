{
  componentDidMount: function () {
    var sortedCalculations = [];
    var products = _.groupBy(this.props.calculations, 'productName');

    for (product in products) {
      sortedCalculations.push(products)
    }

    this.setState({sortedCalculations: sortedCalculations});
  }
}
