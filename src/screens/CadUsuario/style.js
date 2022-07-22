import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#555',
  },
  Label: {
    textAlign: 'center',
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 40
  },
  Input: {
    backgroundColor: '#eee',
    margin: 10,
    width: '90%',
    fontSize: 14,
    borderRadius: 8
  },
  Button: {
    marginTop: 40,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: '90%',
    backgroundColor: '#fff',
  },
  textButton: {
    textAlign: 'center',
    color: '#000',
    fontSize: 16
  }
})

export default estilo;