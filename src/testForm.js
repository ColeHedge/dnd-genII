import React, { Component } from 'react';

class TestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {environment: 'any',
      mincr: '', /*Represents minmum cr of encounter*/
      maxcr: '', /*Represents maximum cr of encounter*/
      encdiff: '' /*Represents encounter difficult*/
    };

    /*Binds 'this' to functions*/
    this.sendToParent = this.sendToParent.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  /*Overwrites current state 'encdiff' with value inputed by the user
  Runs when user changes the encounter difficulty dropdown
  Sends current state of component to parent*/
  
  handleChange(event) {
    var key = event.target.getAttribute('data-key'); 
    if(key == 'difficulty') {
      this.setState({encdiff: event.target.value}, function() {
        this.sendToParent();
      })
    } else if(key == 'minCr'){
      this.setState({mincr: event.target.value}, function() {
        this.sendToParent();
      });
    } else if(key == 'maxCr') {
      this.setState({maxcr: event.target.value}, function() {
        this.sendToParent();
        });     
    } else if (key == 'environment') {
      this.setState({environment: event.target.value}, function() {
      this.sendToParent();
      });
    } else {
      console.log('how did you get here?');
    }
  }

  /*Sends state to parent component through callback prop*/
  sendToParent() {
    this.props.callBack(this.state);
  }

  render() {

    /*List of possible crs*/
    var crList = ['0', '1/8', '1/4', '1/2', '1', '2', '3', '4', '5', '6', '7', '8',
    '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];

    let minCr = [];
    for(let i = 0; i < crList.length; i++) {
      minCr.push(<option value={crList[i]} data-key='minCr'>{crList[i]}</option>);
    }

    let maxCr = [];
    for(let i = 0; i < crList.length; i++) {
      maxCr.push(<option value={crList[i]} data-key='maxCr'>{crList[i]}</option>);
    }  

    return (
      <div class="container">
        <select environment={this.state.environment} data-key='environment' onChange={this.handleChange} >
          <option value="any">Any Evnironment</option>          
          <option value="aquatic">Aquatic</option>
          <option value="artic">Artic</option>
          <option value="cave">Cave</option>
          <option value="coast">Coast</option>
          <option value="desert">Desert</option>
          <option value="dungeon">Dungeon</option>
          <option value="forest">Forest</option>
          <option value="grassland">Grassland</option>
          <option value="mountain">Mountain</option>
          <option value="planar">Planar</option>
          <option value="ruins">Ruins</option>
          <option value="swamp">Swamp</option>
          <option value="underground">Underground</option>
          <option value="urban">Urban</option>
        </select>
        <select mincr={this.state.mincr} data-key='minCr' onChange={this.handleChange}>
          <option value=''>Min CR</option>
          {minCr}
        </select>
        <select maxcr={this.state.maxcr} data-key='maxCr' onChange={this.handleChange}>
          <option value=''>Max CR</option>
          {maxCr}
        </select>
        <select encdiff={this.state.encdiff} data-key='difficulty' onChange={this.handleChange}>
          <option value=''>Difficulty</option>
          <option value='easy'>Easy</option>
          <option value='medium'>Medium</option>
          <option value='hard'>Hard</option>
          <option value='deadly'>Deadly</option>
        </select>
      </div>  
    );
  }
}

export default TestForm;