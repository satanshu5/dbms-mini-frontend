import React,{useState} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import './AddEmployee.css';

function AddEmployee(){


    const [name,setName] = useState('');
    const [phoneNo,setPhoneNo] = useState('');
    const [salary,setSalary] = useState('');
    const [post,setPost] = useState('');
    function AddEmployeeToDataBase(){
        Axios.post("http://localhost:3001/addemployee/add",{

            name:name,
            phoneNo:phoneNo,
            salary:salary,
            post : post

        }).then((response)=>{
            console.log(response);
        })
    }

    return (
        <div className="AddEmployee">
            <div className="AddEmployeeForm">
                <label>Name</label>
                <input placeholder="Name..."onChange={(e) =>{
                    setName(e.target.value);
                }}/>
                <label>Phone-No</label>
                <input placeholder="Phone-No"onChange={(e) =>{
                    setPhoneNo(e.target.value);
                }}/>
                <label>Salary</label>
                <input placeholder="Salary"onChange={(e) =>{
                    setSalary(e.target.value);
                }}/>
                <label>Post</label>
                <input placeholder="Post"onChange={(e) =>{
                    setPost(e.target.value);
                }}/>
                <Link to="/addemployee/add"><button className="button" onClick={AddEmployeeToDataBase}>Submit</button></Link>
            </div>
        </div>
    )
}

export default AddEmployee;