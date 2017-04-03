{
    componentDidMount: function () {
      this.setState({eurotaxData: {}});
    },

    componentDidUpdate: function (prevProps, prevState) {
      var self = this;

      if (self.props.step.stepKey === 'eurotax' &&
          prevState.isStepByStepQuestionsFormCompleted &&
          _.isEmpty(prevState.eurotaxData)) {

          var stepQuestions = self.props.step.questions.map(function (q) { return q.id });
          var eurotaxData = stepQuestions.reduce(function (acc, q) {
            var label = self.props.calculateable.options.find(function (o) { return o.id === q }).questionText;
            var answer = self.props.calculationAnswers[q];

            if (label && answer) {
              if (q === "OB_1_TYPE_SELECTION" || q === "OB_2_TYPE_SELECTION") {
                acc.unshift({label: label , value: answer});
              }else {
                acc.push({label: label , value: answer});
              }
            }

            return acc;
          }, [])

          this.setState({eurotaxData: eurotaxData});
      }
    }
}
