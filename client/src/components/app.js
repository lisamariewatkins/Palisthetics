import React, { Component } from 'react';


var containerFluid ={
    paddingLeft: 0,
    paddingRight: 0
}
 

class App extends Component {
  render() {
    return (
      <div>
      

      <div className="container-fluid" style={containerFluid}>
        {this.props.children}
      </div>

      
      </div>
    );
  }
}

export default App;
