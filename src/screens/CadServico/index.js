import React, { useState, useRef, useEffect } from 'react';
import { 
  TextInput, 
  Text, 
  TouchableOpacity, 
  ToastAndroid, 
  KeyboardAvoidingView, 
  Image, 
  ScrollView, 
  Alert 
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation} from '@react-navigation/native';

import estilos from './style';
import logo from '../../assets/play_store_512.png';
import { buscarServico, insertService } from '../../sql/repositorios';

export default ({route}) => {
  // const hoje = new Date().toISOString().slice(0, 10).split('-').reverse().join('/')
  const navigation = useNavigation();
  const [date, setDate] = useState('')
  const [Lancha, setLancha] = useState('');
  const [Equipamento, setEquipamento] = useState('');
  const [Servico, setServico] = useState('');
  const [Horimetro, setHorimetro] = useState();
  const dateRef = useRef(null);
  const id = route.params.id
  
  useEffect(() => {
    if( id > 0) {
      SelectQuery(id)
    }
  }, []);

 const SelectQuery = async (id) => {
    // let selectQuery = await ExecuteQuery("SELECT * FROM servicos WHERE id= ?",[id]);
    let selectQuery = await buscarServico(id)
    setLancha(selectQuery.embarcacao);
    setEquipamento(selectQuery.equipamento);
    setHorimetro(String(selectQuery.horimetro));
    setServico(selectQuery.descricao);
    setDate(selectQuery.data)
  }

  async function EditQuery() {
    // await ExecuteQuery(
      // "UPDATE servicos  SET embarcacao = ?, equipamento = ?, descricao = ?, horimetro = ?, data = ? WHERE id = ?", [Lancha, Equipamento, Servico, Horimetro, date, id]);
  }

  function limpar() {
    setDate('');
    setEquipamento('');
    setLancha('');
    setHorimetro('');
    setServico('');
  }

  async function salvar(){

    const dateValid = dateRef?.current.isValid();

    if(!dateValid){
      Alert.alert("Data inválida!");
    }else if (Lancha === "") {
      Alert.alert("Embarcação inválida!");
    }else if (Equipamento === "") {
      Alert.alert("Equipamento inválido!");
    }else if (Servico === "") {
      Alert.alert("Servico inválido!");
    }else if (Horimetro === "") {
      Alert.alert("Horimetro inválido!");
    }else {
      if(id > 0){
        EditQuery()
      }else {
        insertService([ Lancha, Equipamento, Servico, Horimetro, date ])
      }
      ToastAndroid.show("Dados salvos com sucesso!", ToastAndroid.LONG);
      limpar();
      navigation.goBack();
    }
  }

  return (
    <ScrollView>
    <KeyboardAvoidingView 
      style={estilos.Container}
      behavior="padding">
      <Image source={logo} style={estilos.imagem}/>
      <Text
        style={estilos.Label}
      >
        Cadastro de Serviço
      </Text>

      <TextInputMask
        style={estilos.Input}
        type="datetime"
        options={{
          format: 'DD/MM/YY'
        }}
        placeholder="DATA DA EXECUÇÃO"
        value={date}
        onChangeText={text => setDate(text)}
        ref={dateRef}
      >
      </TextInputMask>  

      <TextInput
        style={estilos.Input}
        placeholder="EMBARCAÇÃO"
        value={Lancha}
        onChangeText={setLancha}
        autoCapitalize="none"
      />

      <TextInput
        style={estilos.Input}
        placeholder="EQUIPAMENTO"
        value={Equipamento}
        onChangeText={setEquipamento}
        autoCapitalize="none"
      />
      <TextInput
        style={estilos.Input}
        keyboardType='numeric'
        placeholder="HORIMETRO"
        value={Horimetro}
        onChangeText={setHorimetro}
        autoCapitalize="none"
      />
      <TextInput
        style={estilos.Input}
        placeholder="DESCRIÇÃO DO SERVIÇO"
        value={Servico}
        onChangeText={setServico}
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={estilos.Button}
        onPress={salvar}
      >
        <Text style={estilos.textButton}>Salvar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}