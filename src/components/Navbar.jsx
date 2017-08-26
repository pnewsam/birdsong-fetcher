import React from 'react';
import AppBar from 'material-ui/AppBar';

function Navbar () {
  return(
  <AppBar
    title="Birdsong Fetcher"
    titleStyle={{textAlign: "center"}}
    showMenuIconButton={false}
  />
  )
}

export default Navbar;