import React from 'react';
import Switcher from './conponents/Switcher'
import NavBar from './conponents/Navbar'

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switcher />
        {this.props.children}
      </div>
    );
  }
}

export default App;
