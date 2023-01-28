import { faRss, faMessage, faVideo, faUserGroup, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { Typography, Box, styled } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './profileBar.module.css';
import { useNavigate } from 'react-router';
const ProfileBar = () => {
    const Navigate = useNavigate();
    const Section = styled(Typography)`
    font-size:20px;
    padding-left:25px;
    padding-top:30px;
    padding-bottom:30px;
    direction:'ltr'
    `

    const Component2 = styled(Box)`
    direction:'ltr'
    `
    const Friends = styled(Box)`
    display:flex;
    padding-bottom:30px;
    padding-left:25px;
    cursor:pointer;
    align-items:center;
    img{
        width:40px;
        height:40px;
        border-radius:50%;
        margin-right:20px;
    }
    `
    return (
        <div className={classes.ProfileBar}>
            <div className={classes.links}>
                <div className={classes.icons} onClick={() => { Navigate('/') }}>
                    <FontAwesomeIcon icon={faRss} style={{ paddingRight: '20px', width: '20px' }} />
                    <Typography>Feed</Typography>
                </div>
                <div className={classes.icons}>
                    <FontAwesomeIcon icon={faMessage} style={{ paddingRight: '20px', width: '20px' }} />
                    <Typography>Chats</Typography>
                </div>
                <div className={classes.icons}>
                    <FontAwesomeIcon icon={faVideo} style={{ paddingRight: '20px', width: '20px' }} />
                    <Typography>Videos</Typography>
                </div>
                <div className={classes.icons}>
                    <FontAwesomeIcon icon={faUserGroup} style={{ paddingRight: '20px', width: '20px' }} />
                    <Typography>Groups</Typography>
                </div>
                <div className={classes.icons}>
                    <FontAwesomeIcon icon={faBookmark} style={{ paddingRight: '20px', width: '20px' }} />
                    <Typography>Bookmarks</Typography>
                </div>
            </div>
            <Section>Online Friends</Section>
            <Component2>
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((res, i) => {
                    return <Friends>
                        <span style={{ position: "relative" }}><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" ></img><div style={{ width: "15px", height: "15px", borderRadius: "50%", background: "green", position: 'absolute', top: '23px', left: '22px' }}></div></span>
                        <Typography>Heisenberg {i + 1}</Typography>
                    </Friends>
                })
                }
            </Component2>
        </div>
    );
}

export default ProfileBar;