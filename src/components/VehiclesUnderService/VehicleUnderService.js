import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import VehicleUnderServiceDisplay from './VehicleUnderServiceDisplay';

function VehicleUnderService(){

    const [data,setData] = useState([]);
    useEffect(()=>{
        Axios.post("http://localhost:3001/vehiclesunderservice").then((response)=>{
            console.log(response);
            setData(response.data);
        })
    },[])

    return (
        <VehicleUnderServiceDisplay currentData = {data}></VehicleUnderServiceDisplay>
    )
}

export default VehicleUnderService;