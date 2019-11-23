
import React, { Component } from "react";
// import logo from './logo.svg';
import Jungkook from './jungkook';



export default class App extends Component {

  state = {
    ninjas: [
      { name: 'jimin' ,age: 12, id: 1 },
      { name: 'hoseok' ,age: 22, id: 2 },
      { name: 'jungkook' ,age: 34, id: 3 }
    ]
  }
  render(){
    return (
    <div className="App">
      <h1>My infinite react app</h1>
      <p>welcome :3</p>
      <Jungkook ninjas={this.state.ninjas} />
    </div>
  );
  }
  
}
