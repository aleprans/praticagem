import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import SQLite from 'react-native-sqlite-storage';
import MainStack from './src/stacks/MainStack';

//Para uso com SQLITE

// global.db = SQLite.openDatabase(
//   {
//     name: 'SQLite',
//     location: 'default',
//     createFromLocation: '~SQLite.db',
//   },
//   () => { },
//   error => {
//     console.log("ERROR: " + error);
//   }
// );

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}