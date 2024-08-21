import axios from "axios";

const BASE_URL = 'http://localhost:8082'

export const login = (email,password) =>  axios.post(BASE_URL+"/auth/authenticate",{email,password})


