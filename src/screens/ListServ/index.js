import React, { useState, useEffect } from 'react';
import { useNavigation} from '@react-navigation/native';
import { FlatList, View, Text, TouchableOpacity, Modal, ToastAndroid } from 'react-native';

import estilo from './style'
// import ExecuteQuery from '../../sql'
import { buscarServicos, deletarServico } from '../../sql/repositorios';

export default () => {
  
    const navigation = useNavigation()
    const [dados, setDados] = useState([])
    const [visivel, setVisivel] = useState(false)
  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      SelectQuery();
    })
    return unsubscribe;
  }, [navigation]);

  async function SelectQuery(){
    // let selectQuery = await ExecuteQuery("SELECT * FROM servicos",[]);
    let selectQuery = await buscarServicos()
    var temp = [];
    for (let i = 0; i < selectQuery.length; ++i)
      temp.push(selectQuery[i]);
    setDados([...dados,...temp])
  }

  function servico(){
    navigation.navigate('cadServico', {id: 0});
  }

  async function deleteItem(id) {
    const confirm = await deletarServico(id.id)
    setVisivel(false)
    if(confirm.affectedRows > 0){
      ToastAndroid.show("Serviço Deletado com sucesso!", ToastAndroid.LONG)
    }else {
      ToastAndroid.show("Erro ao Deletar Serviço!", ToastAndroid.LONG)
    }
    navigation.goBack()
  }
  
  function editItem(data) {
    navigation.navigate('cadServico', {id: data.id})
  }

  function ListItem({ data }){
    return(
      <View style={estilo.listItem}>
        <Modal
          animationType="fade"
          transparent={false}
          visible={visivel}
        >
          <View style={estilo.modal}>
            <Text style={estilo.titulo}>Confirmação</Text>
            <Text style={estilo.conteudo}>Confirma exclusão do serviço?</Text>
            <View style={estilo.viewBtnModal}>
              <TouchableOpacity
                style={estilo.btnModal}
                onPress={()=>{deleteItem(data)}}
              >
                <Text style={estilo.textBtn}>OK</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={estilo.btnModal}
                onPress={()=>{setVisivel(false)}}
              >
                <Text style={estilo.textBtn}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={estilo.item1}>
          <View>
            <Text style={estilo.label}>DATA</Text>
            <Text style={estilo.listData}>{data.data}</Text>
          </View>
          <View>
            <Text style={estilo.label}>Emb.</Text>
            <Text style={estilo.listData}>{data.embarcacao}</Text>
          </View>
          <View>
            <Text style={estilo.label}>Equip.</Text>
            <Text style={estilo.listData}>{data.equipamento}</Text>
          </View>
          <View>
            <Text style={estilo.label}>Horim.</Text>
            <Text style={estilo.listData}>{data.horimetro}</Text>
          </View>
        </View>
        <View style={estilo.item2}>
          <View>
            <Text style={estilo.label2}>Descrição</Text>
            <Text style={estilo.listData2}>{data.descricao}</Text>
          </View>
        </View>
        <View style={estilo.viewBtn}>
          <TouchableOpacity
            style={estilo.btnEditar}
            onPress={()=>{editItem(data)}}
            >
            <Text style={estilo.textBtn}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={estilo.btnExcluir}
            onPress={()=>{setVisivel(true)}}
            >
            <Text style={estilo.textBtn}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <View style={estilo.container}>
      <FlatList 
        maxToRenderPerBatch = {10}
        removeClippedSubviews={true}
        extraData={dados}
        style={{marginTop: 35, width: '100%'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginHorizontal: 20}}
        data={dados.reverse()}
        keyExtractor={ item => String(item.id)}
        renderItem={({ item }) => <ListItem data={item}/>}
        ListEmptyComponent={<Text style={estilo.alert}>Nenhum Serviço Encontrado</Text>}
      />
      <TouchableOpacity
        style={estilo.btn}
        onPress={servico}
      >
        <Text style={estilo.textBtn}>Adicionar Serviço</Text>
      </TouchableOpacity>
    </View>
  )
};