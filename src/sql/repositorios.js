import api from './api'

export async function buscarServicos(){
  try{
    const resultado = await api.get('/')
    return resultado.data
  }
  catch(error){
    console.log(error)
    return []
  }
}

export async function buscarServico(id){
  try{
    const resultado = await api.get(`/${id}`)
    return resultado.data
  }
  catch(error){
    console.log(error)
    return []
  }
}

export async function deletarServico(id) {
  try {
    const resultado = await api.delete(`/${id}`)
    return resultado.data
  }
  catch (error) {
      console.log(error)
      return []
  }
}

export async function insertService(serv){
  try{
    const resultado = await api.post(`/add`)
    return resultado.data
  }
  catch (error) {
    console.log(error)
    return []
  }
}