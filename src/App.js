import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeScreen from './Screens/Home';
import { HomeTemplate } from './Template/Home';
import DetailScreen from './Screens/Detail'

function App() {
  return (
    <BrowserRouter>
        
        <Switch>
            <HomeTemplate path="/home" component={HomeScreen}/>
            <HomeTemplate path="/detail/:maKhoaHoc" component={DetailScreen}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
