import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';

export default class PureComponentEG extends PureComponent{

  constructor(props)
  {
    super(props);
    this.state = {
      firstName : 'Priyanka Pure',
      lastName : 'Gat',
      salary : 100,
      arr: ['test1','test2'] 
    };

    this.IncreametSalary = this.IncreametSalary.bind(this);
  }

  render()  {
    return (
    <div>
      <div>First Name : {this.state.firstName}</div>
      <div>Last Name : {this.state.lastName}</div>
      <div>Salary : {this.state.salary}</div>
      <div> arr:{this.state.arr} </div>
      <button onClick = {this.IncreametSalary}> Submit </button>
    </div>
    )
  };

  IncreametSalary()
  {
    // alert('clicked');
    // this.setState({
    //   firstName : 'Priyanka',
    //   lastName : 'Gat',
    //   salary : this.state.salary+100
    // });
const arr1 = this.state.arr;
this.state.arr.push('test');

 this.setState({arr:arr1 });
 console.log('arr:',this.state.arr);

  //   this.setState({
  //     ...this.state,
  //     salary : this.state.salary+100
  //   });
   }

}