{
  componentWillMount: function () {
    var contractToLoad     = this.props.contractToLoad;

    if (contractToLoad && contractToLoad.customer) {
      var customerToLoad = contractToLoad.customer.options;
      var customer = {
        FirstName:        _.find(customerToLoad, {id: 'Private_1_FirstName'}).value+' ',
        MiddleName:       _.find(customerToLoad, {id: 'Private_1_MiddleName'}).value+' ',
        LastName:         _.find(customerToLoad, {id: 'Private_1_LastName'}).value,
        StreetName:       _.find(customerToLoad, {id: 'Private_1_StreetName'}).value+' ',
        HouseNumber:      _.find(customerToLoad, {id: 'Private_1_HouseNumber'}).value,
        HouseNumberSuffix:_.find(customerToLoad, {id: 'Private_1_HouseNumberSuffix'}).value,
        ZipCode:          _.find(customerToLoad, {id: 'Private_1_ZipCode'}).value+' ',
        City:             _.find(customerToLoad, {id: 'Private_1_City'}).value,
        TelephoneNumber:  _.find(customerToLoad, {id: 'Private_1_TelephoneNumber'}).value,
        Email:            _.find(customerToLoad, {id: 'Private_1_Email'}).value,
        name: function () {
          return this.FirstName+this.MiddleName+this.LastName;
        },
        street: function () {
          return this.StreetName+this.HouseNumber+this.HouseNumberSuffix;
        },
        address: function () {
          return this.ZipCode+this.City;
        }
      };
      this.setState({customer: customer});
    }
  }
}
