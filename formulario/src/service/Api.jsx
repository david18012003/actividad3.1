import axios from "axios";

export default BaseURL = axios.create({
    baseURL:'https://localhost:3000/usuarios/registrar'
})