import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from "./components/Navbar";
import FetchSongsButton from "./components/FetchSongsButton";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Navbar />
        <FetchSongsButton />
      </MuiThemeProvider>
    )
  }
}

export default App;