import React from 'react';
import logo from './logo.svg';
import './App.css';
import Team from './components/Team';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="md">
      <Team/>
     
    </Container>
  </React.Fragment>
  );
}

export default App;
