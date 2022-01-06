import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../img/error.jpg';


const NotFound = () => {
    return (
        <div>
            <img src={error} alt="error" className='w-25' />
            <br />
            <Link to="/home"><button type="button" className="btn buttoncolor text-light rounded-pill m-2 p-2 w-25">Go Back</button></Link>
        </div>
    );
};

export default NotFound;