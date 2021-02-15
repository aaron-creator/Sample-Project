import axios from "axios";

const user_api_url="http://localhost:8080/finduser";

class UserService {
    
    getUsers(){
        axios
          .get("http://localhost:8080/finduser")
          .then(res => console.log("All Users Displayed"))
          .catch(err => console.error(err));
    }
    addUser(){
        axios
          .post("http://localhost:8080/reg")
          .then(res => console.log("User Added"))
          .catch(err => console.error(err));
    }
}

export default new UserService()