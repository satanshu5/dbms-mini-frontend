import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import CurrentServicesDisplay from './CurrentServicesDisplay';
function CurrentServices(){

    const [data,setData] = useState([]);
    useEffect(()=>{
        Axios.post("http://localhost:3001/currentservices").then((response)=>{
            console.log(response);
            setData(response.data);
        })
    },[])
    return (
        <CurrentServicesDisplay currentData = {data}></CurrentServicesDisplay>
    )
}

export default CurrentServices;