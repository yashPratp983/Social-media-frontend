import { Drawer, Box, Typography, styled } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex';
import { faRss, faMessage, faVideo, faUserGroup, faUser, faBell, faRightFromBracket, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { borderBottom } from '@mui/system';
import { useOpenDrawer } from '../../../contexts/open-drawer';
import { useNavigate } from 'react-router';
import { useAuth } from '../../../auth/auth';
import { useOnlineuser } from '../../../contexts/onlineusers';
import { allUsers } from '../../../App';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { allNotifications } from '../../../App';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { useMessageNotification } from '../../../contexts/messageNotification';

const MobileDrawer = () => {
    const { onlineusers, setOnlineusers } = useOnlineuser()
    const { messageNotification, setMessageNotification } = useMessageNotification();
    const auth = useAuth();
    const { users, setUsers } = useContext(allUsers)
    const { opendrawer, setOpendrawer } = useOpenDrawer();
    const navigate = useNavigate();
    const [onlineFriends, setOnlineFriends] = useState([])
    const notifications = useContext(allNotifications)
    const [open, setOpen] = useState(false);

    useEffect(() => {
        console.log(users, "all availabe users")
    }, [users])

    const dialogStyle = {
        width: '350px',
        height: '400px',
    }

    const leftBar = {
        position: 'absolute',
        width: '250px',
        minWidth: '200px',
        height: '100%',
        paddingBottom: '4px',
        marginLeft: 'auto',
        zIndex: '100000454648748787897489999999999999999999999999999999999999999999999999987867468998099999999999999999999999999999',
        paddingTop: '70px',
        opacity: '1',
        "&::-webkit-scrollbar": {
            width: '5px'
        },
        "&::-webkit-scrollbar-track": {
            background: '#f1f1f1'
        },
        "&::-webkit-scrollbar-thumb": {
            background: '#888'
        },
        "&::-webkit-scrollbar-thumb:hover": {
            background: '#555'
        }

    }


    const Section = styled(Box)`
    display:flex;
    padding-top:30px;
    padding-left:25px;
    cursor:pointer;
    `
    const Component = styled(Box)`
    padding-bottom:30px;
    border-bottom:solid 2px grey;
    margin-bottom:30px;
    `
    const Component2 = styled(Box)`
    
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

    const Section2 = styled(Typography)`
    font-size:20px;
    padding-left:25px;
    padding-bottom:30px;
    direction:'ltr'
    `
    const Header = styled(Box)`
    border-bottom: 1px solid lightgray;
    padding: 10px;
    text-align:left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    `

    // const Options=styled(Box)`
    // disply:flex
    // `

    const Follower = styled(Box)`
    padding: 10px;
    text-align:left;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
    const FollowerList = styled(Box)`
    display: flex;
    align-items: center;
`

    const Image = styled('img')({
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        marginRight: '10px'

    })

    const Tick = styled(CheckIcon)`
        color: green;
        cursor:pointer;
        margin-right:10px;
        &:hover{
              font-size:25px;
              color: #03C03C;
        };
    `
    const Cross = styled(CloseIcon)`
    color: red;
    cursor:pointer;  
    &:hover {
           color:#FF3800; 
           font-size:25px;
    };
`

    const logoutHandler = () => {
        localStorage.removeItem('token');
        setOpendrawer(false);
        auth.setUser(null);
        navigate('/login');
    }


    const handleClose = () => {
        setOpen(false)
    };

    const handleClick = () => {
        setOpen(true)
    };

    const handleClick1 = async (id) => {
        try {
            const token = localStorage.getItem('token');
            const accept = await axios.put(`https://social-media-api-d16d.onrender.com/api/v1/notifications/accept/${id}`, {
                headers: {
                    authorisation: `Bearer ${token}`
                }
            })

            let r = notifications.notifications.request;

            r = r.filter((item) => item._id == id)

            notifications.setNotifications({
                ...notifications.notifications, request: r
            })

            const u = auth.user;
            u.user.following.push(id);
            auth.setUser(u);
        } catch (err) {
            console.log(err);
        }


    }

    const handleClick2 = async (id) => {
        try {
            const token = localStorage.getItem('token');
            const accept = await axios.put(`https://social-media-api-d16d.onrender.com/api/v1/notifications/reject/${id}`, {
                headers: {
                    authorisation: `Bearer ${token}`
                }
            })

            let r = notifications.notifications.request;

            r = r.filter((item) => item._id == id)

            notifications.setNotifications({
                ...notifications.notifications, request: r
            })
        } catch (err) {
            console.log(err);
        }

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
        <div>
            <Drawer anchor='right' open={opendrawer} onClose={() => { setOpendrawer(false) }} PaperProps={{
                sx: leftBar, elevation: 24
            }}   >
                <Component>
                    <Section onClick={() => { navigate('/'); setOpendrawer(false) }}>
                        <FontAwesomeIcon icon={faRss} style={{ paddingRight: '20px', width: '20px' }} />
                        <Typography>Feed</Typography>
                    </Section>
                    <Section onClick={() => { navigate('/chats'); setOpendrawer(false) }}>
                        <Box style={{ position: 'relative' }}>
                            <FontAwesomeIcon icon={faMessage} style={{ paddingRight: '20px', width: '20px' }} />
                            {messageNotification.length > 0 && <Typography style={{
                                position: 'absolute',
                                backgroundColor: 'red',
                                color: 'white',
                                display: 'flex',
                                justifyContent: 'center',
                                width: '15px',
                                height: '15px',
                                fontSize: '12px',
                                borderRadius: '50%',
                                top: '5px',
                                right: '13px'
                            }}>{messageNotification.length}</Typography>}
                        </Box>
                        <Typography>Chats</Typography>
                    </Section>
                    <Section onClick={handleClick} >
                        <Box style={{ position: 'relative' }}>
                            <FontAwesomeIcon icon={faBell} style={{ paddingRight: '20px', width: '20px' }} />
                            {notifications.notifications.request > 0 && <Typography style={{
                                position: 'absolute',
                                backgroundColor: 'red',
                                color: 'white',
                                display: 'flex',
                                justifyContent: 'center',
                                width: '15px',
                                height: '15px',
                                fontSize: '12px',
                                borderRadius: '50%',
                                top: '5px',
                                right: '13px'
                            }}>{notifications.notifications.request}</Typography>}
                        </Box>
                        <Typography>Notifications</Typography>
                    </Section>
                    <Section onClick={() => { navigate(`/profile/${auth.user.user._id}`); setOpendrawer(false) }}>
                        <FontAwesomeIcon icon={faUser} style={{ paddingRight: '20px', width: '20px' }} />
                        <Typography>Profile</Typography>
                    </Section>
                    <Section onClick={logoutHandler}>
                        <FontAwesomeIcon icon={faRightFromBracket} style={{ paddingRight: '20px', width: '20px' }} />
                        <Typography>Sign out</Typography>
                    </Section>
                </Component>
                <Section2>Online Friends</Section2>
                <Component2>
                    {
                        onlineFriends.length !== 0 &&
                        onlineFriends.map((user) => {
                            return (

                                <Friends key={user._id} onClick={() => { navigate(`/profile/${user._id}`); setOpendrawer(false) }}>
                                    <span style={{ position: "relative" }}><img src={user.profilePic.url}></img><div style={{ width: "15px", height: "15px", borderRadius: "50%", background: "green", position: 'absolute', top: '23px', left: '22px' }}></div></span>
                                    <Typography>{user.name}</Typography>
                                </Friends>
                            )
                        })
                    }
                </Component2>
            </Drawer>
            <Dialog onClose={handleClose} open={open} style={{ zIndex: '434343665456465' }} PaperProps={{ sx: dialogStyle }}>
                <Header>
                    <Typography>Follow Requests</Typography>
                    <FontAwesomeIcon icon={faXmark} onClick={() => { setOpen(false) }} style={{ cursor: 'pointer' }}></FontAwesomeIcon>
                </Header>
                {

                    users.length > 0 &&
                    notifications.notifications.request.map((req) => {
                        let use = undefined;
                        for (let i = 0; i < users.length; i++) {
                            if (users[i]._id == req) {
                                use = users[i];
                            }

                        }
                        if (use) {
                            return (
                                <Follower>
                                    <FollowerList>
                                        <Image src={use.profilePic.url}></Image>
                                        <Typography>{use.name}</Typography>
                                    </FollowerList>
                                    <Box>
                                        <Tick onClick={() => { handleClick1(use._id) }}></Tick>
                                        <Cross onClick={() => { handleClick2(use._id) }}></Cross>
                                    </Box>
                                </Follower>
                            )
                        }
                    })

                }
            </Dialog>
        </div>
    )
}

export default MobileDrawer;