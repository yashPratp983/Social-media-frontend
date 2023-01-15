import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import classes from './profileheader.module.css'
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { useOpenDialog } from '../../contexts/openFollowerDialog';
const Background = () => {
    const navigate = useNavigate();
    const openDialog = useOpenDialog();
    return (
        <div className={classes.parent}>
            <div className={classes.header}>
                <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' className={classes.image}></img>
                <div>
                    <h2 className={classes.name}>Heisenberg</h2>
                    <div className={classes.description}>
                        <p className={classes.para}>FGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGTYFTYFTYDR56EDTYFD65EDF56ER56ED5454ED</p>
                        <div style={{ display: 'flex' }}>
                            <p style={{ paddingRight: '15px' }} className={classes.posts}>0 Posts</p>
                            <p style={{ paddingRight: '15px' }} className={classes.social} onClick={() => { openDialog.setOpendialog(true) }}>5 Followers</p>
                            <p className={classes.social} onClick={() => { openDialog.setOpendialog(true) }}>8 Following</p>
                        </div>
                        <button className={classes.button} onClick={() => { navigate('/editprofile') }}>Edit Profile</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Background;