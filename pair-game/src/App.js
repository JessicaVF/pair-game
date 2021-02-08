import React, { Component } from 'react'; 
import './App.css';

import FlipCards from "./Flip-cards/Flip-cards";
import axios from 'axios';

import Button from 'react-bootstrap/Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      flipCardNums: [1,2,3,4,5,6,7,8,],
    };
  }

  //Life Cycle Methode
  componentDidMount() {
    this.performSearch();
    }

  performSearch = () => {
    axios.get(`https://picsum.photos/v2/list?page=2&limit=4`)
  .then(response => {
    this.setState({
      photos: response.data,
      loading: false,
    });
  })
     .catch(error => {
     console.log('Error fetching and parsing data', error);
     });
  }
  
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>pair-game</h1>
        <FlipCards value={this.state.photos}></FlipCards>
        <Button variant="danger">BT Button</Button>
      </header>
    </div>
  )};
}

export default App;
