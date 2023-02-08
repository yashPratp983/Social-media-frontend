import { Dialog, Box, Typography, List, ListItem, styled } from '@mui/material';
import { useOpenDialog } from '../../contexts/openFollowerDialog';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import classes from './followingDialog.module.css'
import { useState, useEffect } from 'react';
import { useAuth } from '../../auth/auth';
import { useParams } from 'react-router';
import axios from 'axios';
import { useNavigate } from 'react-router';

const dialogStyle = {
    width: '350px',
    height: '400px',
}

const Image = styled('img')({
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px'

})

const Header = styled(Box)`
    border-bottom: 1px solid lightgray;
    padding: 10px;
    text-align:left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    `
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

const Following = ({ user, following, setUser }) => {
    const [allFollowing, setAllFollowing] = useState(following);
    const { openfollowingdialog, setOpenfollowingdialog } = useOpenDialog();
    const auth = useAuth();
    const [rerender, setRerender] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        setAllFollowing(following);
    }, [following])

    const removeFollowing = async (id) => {
        const token = localStorage.getItem("token");
        try {
            const res = await axios.put(`https://social-media-api-d16d.onrender.com/api/v1/user/unfollow/${id}`, {},
                { headers: { authorisation: `Bearer ${token}` } });
            console.log(res);
            setAllFollowing(allFollowing.filter((following) => following._id != id));
            let u = auth.user;
            console.log(id, "id")
            console.log(u, "before change")
            u.user.following = u.user.following.filter((following) => following !== id);
            u.following = u.following - 1;
            console.log(u, "after change")
            auth.setUser({ ...u, user: u.user, following: u.following });
            setUser({ ...user, following: user.following - 1 })
            setRerender(!rerender);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Dialog open={openfollowingdialog} PaperProps={{ sx: dialogStyle }} onClose={() => { setOpenfollowingdialog(false) }}>
            <Header>
                <Typography>Following</Typography>
                <FontAwesomeIcon icon={faXmark} onClick={() => { setOpenfollowingdialog(false) }} className={classes.xmark}></FontAwesomeIcon>
            </Header>
            {
                allFollowing.map((follower) => {
                    return (
                        <Follower key={follower._id}>
                            <FollowerList>
                                <Image src={follower.profilePic.url} style={{ cursor: 'pointer' }} onClick={() => { navigate(`/profile/${follower._id}`); setOpenfollowingdialog(false) }}></Image>
                                <Typography>{follower.name}</Typography>
                            </FollowerList>
                            {(auth.user.user._id == id) && (<Box>
                                <button className={classes.button} onClick={() => { removeFollowing(follower._id) }}>Unfollow</button>
                            </Box>)}
                        </Follower>
                    )
                })
            }
        </Dialog>
    )
}

export default Following;