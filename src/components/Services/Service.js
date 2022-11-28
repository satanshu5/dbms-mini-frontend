import React from 'react';
import {Link} from 'react-router-dom';
import './Service.css';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import DeleteIcon from '@material-ui/icons/Delete';
import CachedIcon from '@material-ui/icons/Cached';
function Service(){
    return(
        <div className="Buybody">
            <h1 className="title">Service Section</h1>
            <div className="quotes">
            <Link to={{
                        pathname :"/currentservices",
                        aboutProps:{
                            type : "currentservices"
                        }
                    }}>
                    <div className="card">
                        <div className="box box1">
                            <RoomServiceIcon style={{ fontSize: 70 }}/>
                            <h1 className="vehicleName">Current Services</h1>
                        </div>
                        <div className="bg"></div>
                    </div>
                </Link>
                <Link to={{
                        pathname :"/addservice",
                        aboutProps:{
                            type : "addservice"
                        }
                    }}>
                    <div className="card">
                        <div className="box box2">
                            <AddToPhotosIcon style={{ fontSize: 70 }}/>
                            <h1 className="vehicleName">Add Service</h1>
                        </div>
                        <div className="bg"></div>
                    </div>
                </Link>
                <Link to={{
                        pathname :"/vehiclesunderservice",
                        aboutProps:{
                            type : "vehiclesunderservice"
                        }
                    }}>
                    <div className="card">
                        <div className="box box3">
                            <CachedIcon style={{ fontSize: 70 }}/>
                            <h1 className="vehicleName">Vehicles Under Service</h1>
                        </div>
                        <div className="bg"></div>
                    </div>
                </Link>
                <Link to={{
                        pathname :"/deleteservice",
                        aboutProps:{
                            type : "deleteservice"
                        }
                    }}>
                    <div className="card">
                        <div className="box box4">
                            <DeleteIcon style={{ fontSize: 70 }}/>
                            <h1 className="vehicleName">Delete Service</h1>
                        </div>
                        <div className="bg"></div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Service;