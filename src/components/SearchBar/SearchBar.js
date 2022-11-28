import React,{useState}from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import './Searchbar.css';
function Searchbar(props){

    //console.log(props.type.location.aboutProps.type);
    let types = props.type.location.aboutProps.type;
    const type = props.type.location.aboutProps.type;
    const [name,setName] = useState('');
    const [selectedNo,setSelectedNo] = useState('');
    const [id,setId] = useState('');

    const search = () =>{
       // console.log(type,brandname,price,km);
        Axios.post("http://localhost:3001/buyvehicle/search",{
            type : type,
            name : name,
            selectedNo : selectedNo,
            id : id
        }).then((response) =>{
           console.log(response);
        })
    };
    if(type === "scooter"){
        types = "Scooter"
    }
    if(type === "bike"){
        types = "Bike"
    }
    if(type === "car"){
        types = "Car"
    }
    if(type === "truck"){
        types = "Truck"
    }
    const info = `Details Of Your Dream ${types}`;
    return(
        <div className="SearchBar">
           <h1 className="title">{info}</h1>
            <div className="SearchBarForm">
                <label>Buyer Name</label>
                <input placeholder="Name..."onChange={(e) =>{
                    setName(e.target.value);
                }}/>
                <label>{types} No</label>
                <input placeholder="No..."onChange={(e) =>{
                    setSelectedNo(e.target.value);
                }}/>
                <label>Employee ID</label>
                <input placeholder="ID..."onChange={(e) =>{
                    setId(e.target.value);
                }}/>
                <Link to="/thanks"><button className="button" onClick={search}>Submit</button></Link>
            </div>
        </div>
    );
}

export default Searchbar;