import { useNavigate } from "react-router";
import classes from './confirmverification.module.css';
const WrongUrl = () => {
    const navigate = useNavigate();

    return (
        <div className={classes.parent}>
            <h1 className={classes.heading}>Invalid Token</h1>
            <p className={classes.para}>Your token is invalid.</p>
            <button className={classes.button} onClick={() => { navigate('/login') }}>Sign in</button>
        </div>
    );
}

export default WrongUrl;