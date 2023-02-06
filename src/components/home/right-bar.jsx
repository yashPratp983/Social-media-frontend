import { Drawer, Box, Typography, styled } from "@mui/material";
import { useOnlineuser } from "../../contexts/onlineusers";
import { useContext, useState, useEffect } from "react";
import { allUsers } from "../../App";
import { useAuth } from "../../auth/auth";
import { useNavigate } from "react-router";

const RightBar = () => {
    const { onlineusers, setOnlineusers } = useOnlineuser()
    const auth = useAuth();
    const { users, setUsers } = useContext(allUsers);
    const navigate = useNavigate();
    const [onlineFriends, setOnlineFriends] = useState([])

    const drawerStyle = {
        // position: 'absolute',
        top: '70px',
        width: '210px',
        minWidth: '200px',

        paddingBottom: '4px',
        marginLeft: '10px',

        // direction: 'rtl',
        "&::-webkit-scrollbar": {
            width: '5px',

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


    useEffect(() => {
        let online = onlineusers;
        online = online.filter((user) => user.userId !== auth.user.user._id)
        online = online.filter((user) => auth.user.user.following.includes(user.userId))
        console.log(online, "online")
        console.log(users, "allusers")
        setOnlineFriends(users.filter((user) => online.map((user) => user.userId).includes(user._id)))
    }, [onlineusers, users])

    return (
        <Drawer anchor='right' open={true} BackdropProps={{ invisible: true }} variant='persistent' PaperProps={{ sx: drawerStyle, elevation: 9 }}  >
            <Section>Online Friends</Section>
            {/* <Component2>
                <Friends>
                    <span style={{ position: "relative" }}><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" ></img><div style={{ width: "15px", height: "15px", borderRadius: "50%", background: "green", position: 'absolute', top: '23px', left: '22px' }}></div></span>
                    <Typography>Heisenberg</Typography>
                </Friends>

            </Component2> */}

            <Component2>
                {
                    onlineFriends.length !== 0 &&
                    onlineFriends.map((user) => {
                        return (

                            <Friends key={user._id} onClick={() => { navigate(`/profile/${user._id}`) }}>
                                <span style={{ position: "relative" }}><img src={user.profilePic.url}></img><div style={{ width: "15px", height: "15px", borderRadius: "50%", background: "green", position: 'absolute', top: '23px', left: '22px' }}></div></span>
                                <Typography>{user.name}</Typography>
                            </Friends>
                        )
                    })
                }
            </Component2>
        </Drawer >

    );
}

export default RightBar;