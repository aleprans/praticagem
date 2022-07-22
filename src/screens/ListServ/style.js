import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#555',
    alignItems: 'center',
  },

  listItem: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#cecece',
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
  },

  item1: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
  item2: {
    flexDirection: 'row'
  },

  listData: {
    fontSize: 16,
    color: '#000',
    marginHorizontal: 5,
    alignSelf: 'center',
  },

  listData2: {
    fontSize: 16,
    color: '#000',
    marginHorizontal: 5,
  },

  label: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#000'
  },
  
  label2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },

  btn: {
    width: '90%',
    height: 50,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f00'
  },

  textBtn: {
    color: '#444',
    fontSize: 16,
    fontWeight: 'bold',
  },

  alert: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  btnExcluir: {
    backgroundColor: '#fff',
    borderColor: '#f00',
    borderWidth: 1,
    borderRadius: 10,
    height:30,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  
  btnEditar: {
    backgroundColor: '#fff',
    borderColor: '#00f',
    borderWidth: 1,
    borderRadius: 10,
    height:30,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },

  viewBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  modal: {
    width: '80%',
    height: '25%',
    marginTop: '65%',
    marginLeft: '10%',
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderRadius: 15,
    borderColor: '#f00',
    borderStyle: 'solid',
    borderWidth: 10,
  },

  btnModal: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 30,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
  },

  titulo: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
  },
  conteudo: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },

  viewBtnModal: {
    flexDirection: 'row',
  }

})

export default estilos;