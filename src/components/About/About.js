import React from 'react';
import {Link} from 'react-router-dom';
import './About.css';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import HistoryIcon from '@material-ui/icons/History';
function About(){
    return(
        <div className="Buybody">
            <h1 className="title">Employees Section</h1>
            <div className="quotes">
                <Link to={{
                        pathname :"/addemployee",
                        aboutProps:{
                            type : "scooter"
                        }
                    }}>
                    <div className="card">
                        <div className="box box1">
                            <GroupAddIcon style={{ fontSize: 70 }}/>
                            <h1 className="vehicleName">Add Employees</h1>
                        </div>
                        <div className="bg"></div>
                    </div>
                </Link>
                <Link to={{
                    pathname :"/employeedetails",
                    aboutProps:{
                        type : "bike"
                        }
                    }}>
                    <div className="card">
                        <div className="box box2">
                            <EmojiPeopleIcon style={{ fontSize: 70 }}/>
                            <h1 className="vehicleName">Current Employees</h1>
                        </div>
                        <div className="bg"></div>
                    </div>
                </Link>
                <Link to={{
                        pathname :"/history",
                        aboutProps:{
                            type : "car"
                        }
                    }}>
                    <div className="card">
                        <div className="box box3">
                            <HistoryIcon style={{ fontSize: 70 }}/>
                            <h1 className="vehicleName">History</h1>
                        </div>
                        <div className="bg"></div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default About;