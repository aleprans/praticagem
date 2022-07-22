import React, { useEffect, useState } from 'react';
import { View,  Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import estilos from './style';
import logo from '../../imagem/logo.png';

export default () => {


  const navigation = useNavigation(); 

  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate('cadastro')
    }, 2000);
  }, []);

  return (
    <View style={estilos.container}>
      <Image source={logo} style={estilos.imagem}/>
    </View>
  )
};