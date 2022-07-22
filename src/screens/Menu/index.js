import React from 'react';

import { View, TouchableOpacity, Text, Image, Alert } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import estilos from "./style";
import logo from '../../assets/play_store_512.png';

export default () => {

  const navigation = useNavigation();

  function servico() {
    navigation.navigate('listServ')
  };

  function embarcacao() {
    // navigation.navigate('cadEmbarcacao')
    Alert.alert('AVISO', 'Função indisponivel!')
  };
  
  function equipamento() {
    // navigation.navigate('cadEquipamento')
    Alert.alert('AVISO', 'Função indisponivel!')
  };
  
  function usuario() {
    // navigation.navigate('cadUsuario')
    Alert.alert('AVISO', 'Função indisponivel!')
  };

  return (
    <View style={estilos.container}>
      <Image source={logo} style={estilos.imagem}/>
      <TouchableOpacity 
        style={estilos.item}
        onPress={embarcacao}
      >
        <Text style={estilos.textItem}>Lista de Embarcações</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={estilos.item}
        onPress={equipamento}
      >
        <Text style={estilos.textItem}>Lista de Equipamentos</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={estilos.item}
        onPress={servico}
        >
        <Text style={estilos.textItem}>Lista de Serviços</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={estilos.item}
        onPress={usuario}
      >
        <Text style={estilos.textItem}>Lista de Usuarios</Text>
      </TouchableOpacity>
    </View>
  )
};