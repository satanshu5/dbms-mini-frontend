import React,{useState} from 'react';
import {Link} from "react-router-dom";
import Axios from 'axios';
import './DeleteService.css';

function DeleteService(){

    const[vehicleNo,setVehicleNo] = useState("");

    function DeleteServicesss(){
        Axios.post("http://localhost:3001/deleteservice",{
            vehicleno : vehicleNo
        });
    }
    return(
        <div className="AddVehicle">
            <h1 className="title">Enter the Vehicle No</h1>
            <div className="AddVehicleForm">
                <label className="label">VehicleNo</label>
                <input type="text" placeholder = "VehicleNo" onChange={(e)=>{
                    setVehicleNo(e.target.value)
                }}/>
                <Link to="/thanks"><button className="button" onClick={DeleteServicesss}>Submit</button></Link>
            </div>
        </div>
    )
}

export default DeleteService;