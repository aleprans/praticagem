import axios from "axios";
// teste 
const api = axios.create({
  baseURL: "http://192.168.10.21:21262"
})

export default api;