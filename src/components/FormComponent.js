import React, {Component} from 'react';

class FormComponent extends Component {

constructor(props){
  super(props);
  this.state = {
    salary: 0
  }
    this.handleNumberchange = this.handleNumberchange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}


handleSubmit(event){
  event.preventDefault(); //stops page refreshing
  const newMortgage = {
    salary: this.state.salary
  }
  this.props.handleMortgageSubmit(newMortgage);

}

handleNumberchange(event){
  this.setState({salary: event.target.value});
}


render(){
return(
  <div>
    <h1>MortgageForm</h1>

    <form onSubmit={this.handleSubmit}>
      <label htmlFor="salary">Salary</label>
      <input
      id="salary"
      value={this.state.salary}
      type="number"
      onChange={this.handleNumberchange}/>
      <input type="submit"/>
    </form>
  </div>
)}

}

export default FormComponent;
