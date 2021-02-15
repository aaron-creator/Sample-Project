import React , {Component} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import UserService from "../services/UserService";
import axios from "axios";
import ReactTable from "react-table";  

export default class Register extends Component {
    
    constructor(props){
        super(props);

        this.onChangeDob = this.onChangeDob.bind(this);
        this.onChangeClass = this.onChangeClass.bind(this);
        this.onChangeDiv = this.onChangeDiv.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       
        this.state = {
            name : "",
            selectedclass:"",
            selecteddiv:"",
            dob :"",
            classes :[
                {
                    label: "Choose",
                    value: null,
                },
                {
                  label: "I",
                  value: "I",
                },
                {
                  label: "II",
                  value: "II",
                },
                {
                  label: "III",
                  value: "III",
                },
                {
                  label: "IV",
                  value: "IV",
                },
                {
                    label: "V",
                    value: "V",
                },
                {
                    label: "VI",
                    value: "VI",
                },
                {
                    label: "VII",
                    value: "VII",
                },
                {
                    label: "VIII",
                    value: "VIII",
                },
                {
                    label: "IX",
                    value: "IX",
                },
                {
                    label: "X",
                    value: "X",
                },
                {
                    label: "XI",
                    value: "XI",
                },
                {
                    label: "XII",
                    value: "XII",
                },
              ],
            div : [
                {
                    label: "Choose",
                    value: null,
                },
                {
                  label: "A",
                  value: "A",
                },
                {
                  label: "B",
                  value: "B",
                },
                {
                  label: "C",
                  value: "C",
                },
              ],
            gender :"Male",
            users:[],
        }
        
    }
    componentDidMount(){
        axios
          .get("http://localhost:8080/findAllUsers")
          .then(res => this.setState({users : res.data}))
          .catch(err => console.error(err));

        console.log("Users array",this.state.users); 
    }
      
    onChangeName(e){
        this.setState({name : e.target.value});
    }
    onChangeDob(dob){
        let md= document.getElementById("meet-date").value;
        this.setState({dob : md});
    }
    onChangeClass(e){
        this.setState({selectedclass : e.target.value});
    }
    onChangeDiv(e){
        console.log("class value",e.target.value);
        this.setState({selecteddiv : e.target.value});
    }
    onChangeGender(e){
        this.setState({gender : e.target.value});
    }
    onSubmit(e){
        e.preventDefault();

        const regName = /^[A-Z][a-z]{3,30}(\s[A-Z](\.|[a-z]{2,30})?)*$/;
        const name = this.state.name;
        if(!regName.test(name)){
            alert('Invalid name given.');
        }else{
            const userList ={
                name :this.state.name,
                dob : this.state.dob.substring(0,10),
                classes : this.state.selectedclass,
                div : this.state.selecteddiv,
                gender : this.state.gender
            }

            console.log("User list is ", userList);
            //UserService.addUser(userList);
            axios
              .post("http://localhost:8080/reg",userList)
              .then(res => console.log("User Added",res.data))
              .catch(err => console.error(err));
             
              window.location = "/register";  
        }
        
        
    }
    render(){
        return(
            <div class="container">
            <div class="row">
                <div class="col-sm" style = {{padding: "50px"}}>
                <h3>Student Registration</h3>
                <form onSubmit = {this.onSubmit}> 
                    <div className = "form-group">
                        <label>Name :</label>
                        <input 
                        type = "text"
                        className ="form-control"
                        required
                        onChange ={this.onChangeName}
                        />
                    </div>
                    <div className = "form-group">
                        <label>Date of Birth :</label>
                        <div>
                            <input type="date" id="meet-date"
                                onChange = {this.onChangeDob}

                                ></input>
                             </div>
                    </div>
                    <div className = "form-group">
                        <label>Class :</label>
                        <div>
                            <select className ="form-control"
                             onChange = {this.onChangeClass}
                            >
                                {this.state.classes.map((option) => (
                                <option value={option.value}>
                                    {option.label}</option>
                                ))}
                            </select>   
                        </div>
                        
                    </div>
                    <div className = "form-group">
                        <label>Division :</label>
                        <div>
                            <select className ="form-control"
                            onChange = {this.onChangeDiv}
                            >
                                {this.state.div.map((option) => (
                                <option value={option.value}
                                >{option.label}</option>
                                ))}
                            </select>   
                        </div>
                        
                    </div>
                    <div className = "form-group">
                        <label>Gender :</label>
                        <table>
                            <tr>
                                <td>
                                <div className ="radio">
                                        <label>
                                            <input
                                            type="radio"
                                            value="Male"
                                            checked={this.state.gender === "Male"}
                                            onChange={this.onChangeGender}
                                            required
                                            />
                                            Male
                                        </label>  
                                    </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                    <div className ="radio">
                                        <label>
                                            <input
                                            type="radio"
                                            value="Female"
                                            checked={this.state.gender === "Female"}
                                            onChange={this.onChangeGender}
                                            required
                                            />
                                            Female
                                        </label>  
                                    </div>
                                </td>    
                            </tr>
                        </table>    
                    </div>
                    <div className = "form-group">
                        <input 
                        type ="submit"
                        value="Submit"
                        className ="btn btn-success"
                        />
                    </div>
                </form>
                </div>
                <div class="col-sm" style = {{padding: "50px"}}>
                <h3>Student Details </h3>
                     <table border="1" cellPadding="10">
                             <tr>
                                <td>S.No</td>
                                <th>Name</th>
                                <th>Date of Birth</th>
                                <th>Class</th>
                                <th>Division</th>
                                <th>Gender</th>
                             </tr>
                             
                     {this.state.users.map((user,index) => <tr>
                         
                                <td>{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.dob}</td>
                                <td>{user.classes}</td>
                                <td>{user.div}</td>
                                <td>{user.gender}</td>
                            </tr>)}
                        
                     </table>
                </div>
            </div>
            </div>
            
        );
    }
}
