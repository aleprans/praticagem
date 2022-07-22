import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Menu from '../screens/Menu';
import CadServico from '../screens/CadServico';
// import CadEmbarcacao from '../screens/CadEmbarcacao';
// import CadEquipamento from '../screens/CadEquipamento';
// import CadUsuario from '../screens/CadUsuario';
import ListServ from '../screens/ListServ';

const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName='menu'
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen name="login" component={Login}/>
    <Stack.Screen name="menu" component={Menu}/>
    <Stack.Screen name="cadServico" component={CadServico}/>
    {/* <Stack.Screen name="cadEmbarcacao" component={CadEmbarcacao}/> */}
    {/* <Stack.Screen name="cadEquipamento" component={CadEquipamento}/> */}
    {/* <Stack.Screen name="cadUsuario" component={CadUsuario}/> */}
    <Stack.Screen name="listServ" component={ListServ}/>
  </Stack.Navigator>
)