import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

import estilos from './style';

export default () => {
  
  return (
    <View style={estilos.Container}>
      <Text
        style={estilos.Label}
      >
        Cadastro de Embarcação
      </Text>
      <TextInput
        style={estilos.Input}
        placeholder="EMBARCAÇÃO"
        autoCapitalize="none"
      />
      <TextInput
        style={estilos.Input}
        placeholder="EQUIPAMENTO"
        autoCapitalize="none"
      />
      <TextInput
        style={estilos.Input}
        keyboardType='numeric'
        placeholder="HORIMETRO"
        autoCapitalize="none"
      />
      <TextInput
        style={estilos.Input}
        placeholder="SERVIÇO"
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={estilos.Button}
      >
        <Text style={estilos.textButton}>Salvar</Text>
      </TouchableOpacity>
      
    </View>
  )
}