import axios from 'axios';

const BASE_URL = 'http://localhost:5000';


class Auth {

    constructor(){
      this.BASE_URL = 'http://localhost:5000'
    }

    login(){
      console.log('Login');
    }

    logout(){
      console.log('Log Out');
    }
}



const instance = new Auth();
export { instance as Auth};
//export {login, logout, refresh_token};
