import { Drawer, Box, Typography, styled } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex';
import { faRss, faMessage, faVideo, faUserGroup, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { borderBottom } from '@mui/system';
import { useNavigate } from 'react-router';
import { useAuth } from '../../auth/auth';
import { allUsers } from '../../App';
import { useContext } from 'react';
import { useOnlineuser } from '../../contexts/onlineusers';

const LeftBar = () => {
    const navigate = useNavigate();
    const { users, setUsers } = useContext(allUsers)
    const auth = useAuth();
    const { onlineusers, setOnlineusers } = useOnlineuser()
    const leftBar = {
        // position: 'absolute',
        top: '70px',
        width: '210px',
        minWidth: '200px',
        height: '100%',
        paddingBottom: '4px',
        zIndex: 1500,
        marginRight: '10px',
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
        },
        display: {
            xs: 'none',
            sm: 'none',
            md: 'block',
            lg: 'block',
            xl: 'block'
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

    const logoutHandler = () => {
        localStorage.removeItem('token');
        auth.setUser(null)
        navigate('/login');
    }

    return (
        <Drawer anchor='left' open={true} className='leftBar' BackdropProps={{ invisible: true }} PaperProps={{
            sx: leftBar, elevation: 9,
        }} variant="persistent"  >
            <Component>
                <Section onClick={() => { navigate('/') }}>
                    <FontAwesomeIcon icon={faRss} style={{ paddingRight: '20px', width: '20px' }} />
                    <Typography>Feed</Typography>
                </Section>
                <Section onClick={() => { navigate('/chats') }}>
                    <FontAwesomeIcon icon={faMessage} style={{ paddingRight: '20px', width: '20px' }} />
                    <Typography>Chats</Typography>
                </Section>
                <Section onClick={logoutHandler}>
                    <FontAwesomeIcon icon={faRightFromBracket} style={{ paddingRight: '20px', width: '20px' }} />
                    <Typography>Sign out</Typography>
                </Section>
            </Component>
            <Component2>
                {
                    users.length > 0 && users.map((user) => {
                        if (user._id !== auth.user._id && auth.user.user.following.includes(user._id)) {
                            return (
                                <Friends onClick={() => { navigate(`/profile/${user._id}`) }}>
                                    <img src={user.profilePic.url}></img>
                                    <Typography>{user.name}</Typography>
                                </Friends>
                            )
                        }
                    }
                    )}
            </Component2>
        </Drawer>
    )
}

export default LeftBar;