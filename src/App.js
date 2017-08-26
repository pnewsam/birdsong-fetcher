import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Navbar from "./components/Navbar";
import SongSearch from "./components/SongSearch";

const muiTheme = getMuiTheme({
  "palette": {
    "primary1Color": "#7cb342",
    "primary2Color": "#689f38",
    "primary3Color": "#689f38",
    "accent1Color": "#ffeb3b",
    "accent2Color": "#fb8c00",
    "accent3Color": "#e65100",
    "textColor": "#424242",
    "pickerHeaderColor": "#ffffff",
    "alternateTextColor": "#fafafa"
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Navbar />
          <section className="section">
            <div className="container">
                <SongSearch />
            </div>
          </section>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;