import { faRss, faMessage, faUserGroup, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Typography, Box, styled } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './profileBar.module.css';
import { useNavigate } from 'react-router';
import { useAuth } from '../../auth/auth';
import { useEffect, useState, useContext } from 'react';
import { allUsers } from '../../App';
import { useOnlineuser } from '../../contexts/onlineusers';

const ProfileBar = () => {
    const auth = useAuth();
    const Navigate = useNavigate();
    const { onlineusers, setOnlineusers } = useOnlineuser()
    const { users, setUsers } = useContext(allUsers)
    const [onlineFriends, setOnlineFriends] = useState([])

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
    const logoutHandler = () => {
        localStorage.removeItem('token');
        auth.setUser(null);
        Navigate('/login');
    }

    useEffect(() => {
        let online = onlineusers;
        online = online.filter((user) => user.userId !== auth.user.user._id)
        online = online.filter((user) => auth.user.user.following.includes(user.userId))
        console.log(online, "online")
        console.log(users, "allusers")
        setOnlineFriends(users.filter((user) => online.map((user) => user.userId).includes(user._id)))
    }, [onlineusers, users])

    return (
        <div className={classes.ProfileBar}>
            <div className={classes.links}>
                <div className={classes.icons} onClick={() => { Navigate('/') }}>
                    <FontAwesomeIcon icon={faRss} style={{ paddingRight: '20px', width: '20px' }} />
                    <Typography>Feed</Typography>
                </div>
                <div className={classes.icons} onClick={() => { Navigate('/chats') }}>
                    <FontAwesomeIcon icon={faMessage} style={{ paddingRight: '20px', width: '20px' }} />
                    <Typography>Chats</Typography>
                </div>
                <div className={classes.icons} onClick={logoutHandler}>
                    <FontAwesomeIcon icon={faRightFromBracket} style={{ paddingRight: '20px', width: '20px' }} />
                    <Typography>Sign out</Typography>
                </div>
            </div>
            <Section>Online Friends</Section>
            {/* <Component2>
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((res, i) => {
                    return <Friends>
                        <span style={{ position: "relative" }}><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" ></img><div style={{ width: "15px", height: "15px", borderRadius: "50%", background: "green", position: 'absolute', top: '23px', left: '22px' }}></div></span>
                        <Typography>Heisenberg {i + 1}</Typography>
                    </Friends>
                })
                }
            </Component2> */}

            <Component2>
                {
                    onlineFriends.length !== 0 &&
                    onlineFriends.map((user) => {
                        return (

                            <Friends key={user._id} onClick={() => { Navigate(`/profile/${user._id}`); }}>
                                <span style={{ position: "relative" }}><img src={user.profilePic.url}></img><div style={{ width: "15px", height: "15px", borderRadius: "50%", background: "green", position: 'absolute', top: '23px', left: '22px' }}></div></span>
                                <Typography>{user.name}</Typography>
                            </Friends>
                        )
                    })
                }
            </Component2>
        </div>
    );
}

export default ProfileBar;