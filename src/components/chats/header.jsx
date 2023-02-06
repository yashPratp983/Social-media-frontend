import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMessage, faBell, faMagnifyingGlass, faBars, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import classes from './header.module.scss'
import { useOpenDrawer } from "../../contexts/open-drawer";
import { useNavigate } from "react-router";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Typography, Box, styled } from "@mui/material";
import React from "react";
import zIndex from "@mui/material/styles/zIndex";
import { useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from "react";
import { allUsers } from "../../App";
import { allNotifications } from "../../App";
import axios from "axios";
import { useAuth } from "../../auth/auth";

const Header = () => {
    const { opendrawer, setOpendrawer } = useOpenDrawer();
    const [filteredArray, setFilteredArray] = useState([])
    const [search, setSearch] = useState('')
    const users = useContext(allUsers)
    const notifications = useContext(allNotifications)
    console.log(users.users, notifications.notifications)
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const auth = useAuth();
    const handleClick = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };

    const searchHandler = (e) => {
        setSearch(e.target.value)
        setFilteredArray(users.users.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase())))
        if (e.target.value === '') {
            setFilteredArray([])
        }

    }

    const handleClick1 = async (id) => {
        try {
            const token = localStorage.getItem('token');
            const accept = await axios.put(`http://localhost:4000/api/v1/notifications/accept/${id}`, {
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

    const handleClick2 = async (id) => {
        try {
            const token = localStorage.getItem('token');
            const accept = await axios.put(`http://localhost:4000/api/v1/notifications/reject/${id}`, {
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

    const dialogStyle = {
        width: '350px',
        height: '400px',
    }

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

    return (
        <div className={classes.header}>
            <div className={classes.heading}>
                <h1>Socialise</h1>
            </div>
            <div className={classes.input}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={classes.search}></FontAwesomeIcon>
                <input className={classes.inputField} placeholder="Search for friend" value={search} onChange={searchHandler}></input>
                {filteredArray.length != 0 && <div className={classes.searchItems}>
                    {filteredArray.map((item) => {
                        return (
                            <div className={classes.item} onClick={() => { navigate(`/profile/${item._id}`) }}>
                                <img src={item.profilePic.url} className={classes.image}></img>
                                <p className={classes.name}>{item.name}</p>
                            </div>)
                    })}
                </div>}
            </div>
            <div className={classes.icons}>
                <FontAwesomeIcon icon={faBell} onClick={handleClick} className={classes.user} style={{ cursor: 'pointer' }} />
                <FontAwesomeIcon icon={faUser} className={classes.message} style={{ cursor: 'pointer' }} />
                <FontAwesomeIcon icon={faMessage} style={{ cursor: 'pointer' }} className={classes.bell} />
            </div>
            <Dialog onClose={handleClose} open={open} style={{ zIndex: '434343665456465' }} PaperProps={{ sx: dialogStyle }}>
                <Header>
                    <Typography>Follow Requests</Typography>
                    <FontAwesomeIcon icon={faXmark} onClick={() => { setOpen(false) }} style={{ cursor: 'pointer' }}></FontAwesomeIcon>
                </Header>
                {
                    notifications.notifications.request.map((req) => {
                        let use = undefined;
                        for (let i = 0; i < users.users.length; i++) {
                            if (users.users[i]._id == req) {
                                use = users.users[i];
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
            <div className={classes.profile} ><img className={classes.image} src={auth.user.user.profilePic.url} onClick={() => { navigate(`/profile/${auth.user.user._id}`) }} ></img></div>
            <div className={classes.bars} onClick={() => { setOpendrawer(!opendrawer); console.log(opendrawer) }}><FontAwesomeIcon icon={faBars} /></div>
        </div>
    )
}

export default Header;