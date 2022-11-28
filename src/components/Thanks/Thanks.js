import React from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import './Thanks.css';
function Thanks(){
    return (
        <div className="thanks">
            <h1 className="thanksWords">Thank you... :)</h1>
            <ThumbUpAltIcon style={{ fontSize: 70 }}/>
        </div>
    )
}

export default Thanks;