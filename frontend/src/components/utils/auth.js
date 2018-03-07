import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export {login, logout, refresh_token};

function login(email,password) {
  const url = `${BASE_URL}/login`;
   return axios.post(url, {
    'email': email,
    'password': password
  })
}

function logout(){
  const url = `${BASE_URL}/logout`;
  alert(url);
}


function refresh_token(){
  const url = `${BASE_URL}/refresh_token`;
  alert(url);
}
