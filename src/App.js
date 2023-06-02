import React from 'react';
import Homepage from './Homepage'; // Adjust the file path if needed
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudentLogin from './Studentlogin';
import MainPage from './Mainpage';

const App = () => {
  return (
    <>
    
    <div>
      <Homepage />  
    </div>
    
    </>
  );
};

export default App;
