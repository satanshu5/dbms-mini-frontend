import React from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import './SuccessfullyAdded.css';
function SuccessfullyAdded(){
    return (
        <div className="thanks">
            <h1 className="thanksWords">Successfully Added... :)</h1>
            <ThumbUpAltIcon style={{ fontSize: 70 }}/>
        </div>
    )
}

export default SuccessfullyAdded;