{
  componentWillMount: function () {
    this.setState({incidentLength: 0});
  },

  componentDidUpdate: function () {
    if (this.props.incidents.length > this.state.incidentLength) {
      var sortedIncidents = [];
      var contracts = _.groupBy(this.props.incidents, 'contractId');

      for (contract in contracts) {
        var singleContract = contracts[contract];
        sortedIncidents.push(singleContract);

        for (incident in singleContract) {
          if (singleContract[incident].state !== 'Finished') {
            singleContract['active'] = true;
          }
        }
      }

      this.setState({incidentLength: this.props.incidents.length, sortedIncidents: sortedIncidents});
    }
  }
}
