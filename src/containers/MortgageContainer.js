import React, {Component} from 'react';
import FormComponent from '../components/FormComponent';
import CalculatorComponent from '../components/CalculatorComponent';
class MortgageContainer extends Component {

  constructor(props) {
      super(props);

      this.state = {
        salary: 0

      }

  }

    render(){
      return(
        <div>
        <h1>MortgageContainer</h1>
        <FormComponent handleMortgageSubmit={this.handleMortgageSubmit}/>
        <CalculatorComponent/>
        </div>
      )
    }



}


export default MortgageContainer;
