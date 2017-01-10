// Import a lib to help create a Component
import React, {Component} from 'react';
import { AppRegistry , View , Navigator } from 'react-native';
import Header from './src/components/Header';
import CarList from './src/components/CarList';
import LoginForm from './src/components/LoginForm';

import Router from './src/Router';



//AppRegistry.registerComponent('AwesomeProject',() => App); // open when using auth






 //Create a Component
//const App = () => {
//return (

//<View style={{flex:1}}>
//<Header headerText={'My Vehicle Dashboard'} />

//<LoginForm />

//</View>

//);
//};

//export default App;
// Render it to the device
AppRegistry.registerComponent('AwesomeProject',() => Router); // only the root component uses AppRegistry
