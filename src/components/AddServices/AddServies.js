import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import './AddServices.css';



function AddServices(){

    const [Name,setName] = useState("");
    const [vehicleNo,setVehicleNo] = useState("");
    const [serviceId,setServiceId] = useState("");
    const [employeeId,setEmployeeId] = useState("");

    function AddServicesToDataBase(){
        Axios.post("http://localhost:3001/addservices",{
            name : Name,
            vehicleno : vehicleNo,
            serviceid : serviceId,
            employeeid : employeeId
        }).then((response)=>{
            console.log(response);
        });
    }
    return (
        <div className="AddServices">
            <div className="AddServicesForm">
                <label>Name</label>
                <input placeholder="Name..."onChange={(e) =>{
                    setName(e.target.value);
                }}/>
                <label>Vehicle-No</label>
                <input placeholder="Vehicle-No"onChange={(e) =>{
                    setVehicleNo(e.target.value);
                }}/>
                <label>Service-Id</label>
                <input placeholder="Service-Id"onChange={(e) =>{
                    setServiceId(e.target.value);
                }}/>
                <label>Employee-Id</label>
                <input placeholder="Employee-Id"onChange={(e) =>{
                    setEmployeeId(e.target.value);
                }}/>
                <Link to="/thanks"><button className="button" onClick={AddServicesToDataBase}>Submit</button></Link>
            </div>
        </div>
    )
}

export default AddServices;