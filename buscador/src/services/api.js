import axios from "axios";
//http://viacep.com.br/ws/34012642/json/
const api= axios.create({
  baseURL: "http://viacep.com.br/ws/"
});
export default api;