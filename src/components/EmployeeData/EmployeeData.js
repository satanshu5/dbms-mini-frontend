import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import DisplayEmployeeData from './DisplayEmployeeData';

function EmployeeData(){

    const [data,setData] = useState([]);
    useEffect(()=>{
        Axios.post("http://localhost:3001/employeedetails").then((response)=>{
            console.log(response);
            setData(response.data);
        })
    },[])

    return (
        <DisplayEmployeeData currentData={data}></DisplayEmployeeData>
    )
}

export default EmployeeData;