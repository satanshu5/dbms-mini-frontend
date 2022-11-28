import React,{useEffect,useState} from 'react';
import Axois from 'axios';
import DisplayTable from './DisplayTable';

function Display(props){

    const type = props.type.location.aboutProps.type;
   // console.log(type);

    const [currentData,setCurrentData] = useState([]);
    useEffect(()=>{
        Axois.post("http://localhost:3001/currentvehicle/display",{
            type : type
        }).then((response) => {
            //console.log(response.data);
           setCurrentData(response.data);
            //console.log(currentData);
        })
        //eslint-disable-next-line 
    },[]);
    //console.log(currentData);
    return (
        <DisplayTable currentData={currentData} />
    )
}

export default Display;