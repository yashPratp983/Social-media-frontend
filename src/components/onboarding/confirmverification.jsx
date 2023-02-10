

import { useNavigate } from "react-router";
import classes from './confirmverification.module.css';
const confirmverification = () => {
    const navigate = useNavigate();

    return (
        <div className={classes.parent}>
            <h1 className={classes.heading}>Email Verified!!</h1>
            <p className={classes.para}>Congratulations your email has been successfully verified.Please click on next button to proceed.</p>
            <button className={classes.button} onClick={() => { navigate('/uploadphoto') }}>Next</button>
        </div>
    );
}

export default confirmverification;