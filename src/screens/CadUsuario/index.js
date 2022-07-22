import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

import estilos from './style';
// import { SelectQuery } from '../../sql';


export default ({route}) => {
  
  const [embarcacao, setEmbarcacao] = useState('')
  const [equipamento, setEquipamento] = useState('')
  const [data, setData] = useState('')
  const [horimetro, setHorimetro] = useState('')
  const [descricao, setDescricao] = useState('')
  const id = route.params.id
  
  useEffect(() => {
    if( id > 0) {
      SelectQuery(id)
    }
  }, []);

  const SelectQuery = async (id) => {
    ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
      db.transaction((trans) => {
        trans.executeSql(sql, params, (trans, results) => {
          resolve(results);
        },
          (error) => {
            reject(error);
          });
      });
    });
    let selectQuery = await this.ExecuteQuery("SELECT * FROM servicos WHERE id= ?",[id]);
    var rows = selectQuery.rows;
    setEmbarcacao(rows.item(0).embarcacao);
    setEquipamento(rows.item(0).equipamento);
    setData(rows.item(0).data);
    setHorimetro(String(rows.item(0).horimetro));
    setDescricao(rows.item(0).descricao);
  }

  return (
    <View style={estilos.Container}>
      <Text
        style={estilos.Label}
      >
        Cadastro de Usuário
      </Text>
      <TextInput
        style={estilos.Input}
        placeholder="DATA"
        autoCapitalize="none"
        value={data}
        onChangeText={setData}
      />
      <TextInput
        style={estilos.Input}
        placeholder="EMBARCAÇÃO"
        autoCapitalize="none"
        value={embarcacao}
        onChangeText={setEmbarcacao}
      />
      <TextInput
        style={estilos.Input}
        placeholder="EQUIPAMENTO"
        autoCapitalize="none"
        value={equipamento}
        onChangeText={setEquipamento}
      />
      <TextInput
        style={estilos.Input}
        keyboardType='numeric'
        placeholder="HORIMETRO"
        autoCapitalize="none"
        value={horimetro}
        onChangeText={setHorimetro}
      />
      <TextInput
        style={estilos.Input}
        placeholder="SERVIÇO"
        autoCapitalize="none"
        value={descricao}
        onChangeText={setDescricao}
      />
      <TouchableOpacity
        style={estilos.Button}
        // onPress={carregar}
      >
        <Text style={estilos.textButton}>Salvar</Text>
      </TouchableOpacity>
    </View>
  )
}