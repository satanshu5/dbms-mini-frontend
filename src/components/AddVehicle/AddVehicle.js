import React,{useState} from "react";
import {Link} from 'react-router-dom';
import Axios from 'axios';
import './AddVehicle.css';

function AddVehicle(props){
   
    //console.log(props.type.location.aboutProps.type);
    const type = props.type.location.aboutProps.type;

    const [sellername,setsellername] = useState('');
    const [phoneNo,setPhoneNo] = useState('');
    const [brandName,setbrandname] = useState('');
    const [yor,setyor] = useState('');
    const [traveled,settraveled] = useState('');
    const [prize,setprize] = useState('');
    const [vehicleNo,setVehicleNo] = useState('');

    const RegisterVehicles = () => {
      //console.log(type,sellername,brandName,yor,traveled,prize);
      Axios.post("http://localhost:3001/sellvehicle/add",
      {   type : type,
          sellername:sellername,
          phoneNo:phoneNo,
          brandName:brandName,
          yor:yor,
          traveled:traveled,
          prize:prize,
          vehicleNo:vehicleNo}).then((response) =>{
          //console.log(response);
      })
    };
    const info = `Details of your ${type}`;
    return(
        <div className="AddVehicle">
            <h1 className="title">{info}</h1>
            <div className="AddVehicleForm">
                <label className="label">Name</label>
                <input type="text" placeholder = "SalerName..." onChange={(e)=>{
                    setsellername(e.target.value)
                }}/>
                <label className="label">Phone-No</label>
                <input type="text" placeholder="Phone-No..." onChange={(e) =>{
                    setPhoneNo(e.target.value);
                }}/>
                <label className="label">BrandName</label>
                <input type="text" placeholder="BrandName..." onChange={(e)=>{
                    setbrandname(e.target.value)
                }}/>
                <label className="label">Year of Registration</label>
                <input type="text" placeholder="Date..." onChange={(e)=>{
                    setyor(e.target.value)
                }}/>
                <label className="label">Travelled</label>
                <input type="text" placeholder="InKm..." onChange={(e)=>{
                    settraveled(e.target.value)
                }}/>
                <label className="label">Expecting Price</label>
                <input type="text" placeholder="InRs..." onChange={(e)=>{
                    setprize(e.target.value)
                }}/>
                <label className="label">Vehicle-No</label>
                <input type="text" placeholder="Vehicle-No" onChange={(e) =>{
                    setVehicleNo(e.target.value);
                }}/>
                <Link to="/thanks"><button className="button" onClick={RegisterVehicles}>Submit</button></Link>
            </div>
        </div>
    )
}

export default AddVehicle;