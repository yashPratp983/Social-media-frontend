import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import classes from './profileheader.module.css'
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { useOpenDialog } from '../../contexts/openFollowerDialog';
import { useAuth } from '../../auth/auth';
import { useContext } from 'react';
import { allNotifications } from '../../App';
import { allUsers } from '../../App';
import axios from 'axios';
import { useState } from 'react';

const Background = ({ user, posts, followers, following }) => {
    const auth = useAuth();
    const notification = useContext(allNotifications)
    // const { user, setUser } = useAuth()
    const { notifications, setNotifications } = useContext(allNotifications)
    const navigate = useNavigate();
    console.log(notification.notifications, "userjnn")
    const openDialog = useOpenDialog();
    const [follow, setFollow] = useState(false)
    const [unfollow, setUnfollow] = useState(false)
    const [request, setRequest] = useState(false)
    // console.log(user, "user")
    const followHandler = async () => {
        try {
            const token = localStorage.getItem('token')
            const notificatio = await axios.post(`https://social-media-api-d16d.onrender.com/api/v1/notifications`, { user: user._id },
                { headers: { 'authorisation': `Bearer ${token}` } }
            )
            const notify = notification.notifications;
            console.log(notify, "notify")
            notify.status.push(user._id);
            console.log(notify, "notify")
            notification.setNotifications(notify)
            setNotifications(notify)
            setFollow(!follow)
            console.log(notification)
        } catch (err) {
            console.log(err)
        }
    }

    const unfollowHandler = async () => {
        try {
            const token = localStorage.getItem('token')
            const unfollow = await axios.put(`https://social-media-api-d16d.onrender.com/api/v1/user/unfollow/${user._id}`,
                { headers: { 'authorisation': `Bearer ${token}` } }
            )
            console.log(unfollow)
            const u = auth.user;
            u.user.following = u.user.following.filter((item) => item !== user._id)
            u.following = u.following - 1;
            auth.setUser((u) => ({ ...u, user: u.user, following: u.following }))
            // setUser(u)
            setFollow(!follow)
        } catch (err) {
            console.log(err)
        }
    }

    const unrequestHandler = async () => {
        try {
            const token = localStorage.getItem('token')
            const unrequest = await axios.put(`https://social-media-api-d16d.onrender.com/api/v1/notifications/delete/${user._id}`,
                { headers: { 'authorisation': `Bearer ${token}` } }
            )
            console.log(unrequest)
            const notify = notification.notifications;
            console.log(notify, "notify")
            notify.status = notify.status.filter((item) => item !== user._id);
            console.log(notify, "notify")
            notification.setNotifications(notify)
            setNotifications(notify)
            setRequest(!request)
            console.log(notification)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className={classes.parent}>
            <div className={classes.header}>
                <img src={Object(user).profilePic.url} className={classes.image}></img>
                <div>
                    <h2 className={classes.name}>{user.name}</h2>
                    <div className={classes.description}>
                        <p className={classes.para}>{user.bio}</p>
                        <div style={{ display: 'flex' }}>
                            {posts && <p style={{ paddingRight: '15px' }} className={classes.posts}>{posts.length} Posts</p>}
                            <p style={{ paddingRight: '15px' }} className={classes.social} onClick={() => { if (followers) { openDialog.setOpendialog(true) } }}>{user.followers} Followers</p>
                            <p className={classes.social} onClick={() => { if (following) { openDialog.setOpenfollowingdialog(true) } }}>{user.following} Following</p>
                        </div>
                        {(user._id == auth.user.user._id) && <button className={classes.button} onClick={() => { navigate('/editprofile') }}>Edit Profile</button>}
                        {(user._id != auth.user.user._id && !auth.user.user.following.includes(user._id) && !notification.notifications.status.includes(user._id)) && <div className={classes.button} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={(() => { followHandler() })}>Follow</div>}
                        {(user._id != auth.user.user._id && auth.user.user.following.includes(user._id)) && <div className={classes.button} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => { unfollowHandler() }}>Unfollow</div>}
                        {((user._id != auth.user.user._id && notification.notifications.status.includes(user._id))) && <div className={classes.button} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={unrequestHandler}>Requested</div>}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Background;