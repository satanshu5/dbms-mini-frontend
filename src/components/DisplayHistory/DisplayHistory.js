import React,{useState,useEffect} from 'react';
import DisplayHistoryTable from './DisplayHistoryTable';
import Axois from 'axios';

function DisplayHistory(){

    const [data,setData] = useState([]);

    useEffect(()=>{
        Axois.post("http://localhost:3001/history").then((response)=>{
            //console.log(response.data);
            setData(response.data);
        })
    },[])
    return (
        <DisplayHistoryTable currentData={data}></DisplayHistoryTable>
    )
}

export default DisplayHistory;