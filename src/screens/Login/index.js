import React, { useState, useEffect } from 'react';

import { 
  View, 
  TextInput, 
  Text, 
  TouchableOpacity, 
  Alert, 
  KeyboardAvoidingView,
  Image
} from 'react-native';

import estilos from './style';

import async from '@react-native-async-storage/async-storage';

export default () => {

const [nome, setNome] = useState('');
const [nomet, setNomet] = useState('');
const [idade, setIdade] = useState();
const [idadet, setIdadet] = useState();

async function teste(){

  let usuario = {
    nome: nome,
    idade: idade,
  };
  
  // Armazenando dados
  await async.setItem('@manutencao', JSON.stringify(usuario));
  getData()
}
async function getData(){
  const response = await async.getItem('@manutencao');
  const resp = JSON.parse(response)
  if(response){
    setNomet(resp.nome);
    setIdadet(resp.idade);
  }
}
  
  return (
    <KeyboardAvoidingView 
      style={estilos.container}>
      <View style={estilos.contImg}>
        <Image 
        source={require('../../assets/play_store_512.png')}
        style={estilos.img}
        />
        <Text>{nomet}</Text>
        <Text>{idadet}</Text>
        </View>

        <TextInput
          placeholder="Usuario"
          autoCorrect={false}
          value={nome}
          onChangeText={(value) => setNome(value)}
        />

        <TextInput
          placeholder="Senha"
          autoCorrect={false}
          value={idade}
          onChangeText={(value) => setIdade(value)}
        />

        <TouchableOpacity
        onPress={teste}>
          <Text>Acessar</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}