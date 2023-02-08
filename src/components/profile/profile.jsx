// import Header from "./header";
import Header from "../home/header";
import MobileDrawer from "../home/posts/mobileDrawer";
import { useOpenDrawer } from "../../contexts/open-drawer";
import ProfileBar from "./profileBar";
import Background from "./profileheader";
import AddPost from "./addPost";
import Posts from "./Posts";
import Followers from "./followersDialog";
import Following from "./followingDialog";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useAuth } from "../../auth/auth";


const Profile = () => {
    const { opendrawerProfile, setOpendrawerProfile } = useOpenDrawer();
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [followers, setFollowers] = useState(null);
    const [following, setFollowing] = useState(null);
    const { id } = useParams();
    const auth = useAuth();
    const url = window.location.pathname.split('/').pop();

    console.log(id)

    useEffect(() => {
        const token = localStorage.getItem('token');

        const getDetails = async () => {
            let user1, posts1;
            try {
                user1 = await axios.get(`https://social-media-api-d16d.onrender.com/api/v1/user/getProfile/${id}`, {
                    headers: {
                        authorisation: `Bearer ${token}`
                    }

                })
                setUser(user1.data.data);
                console.log(user1)
                posts1 = await axios.get(`https://social-media-api-d16d.onrender.com/api/v1/all_posts/profile/${id}`, {
                    headers: {
                        authorisation: `Bearer ${token}`
                    }
                })
                console.log(user1, posts1)

                setPosts(posts1.data.data);

                setLoading(false)
            } catch (err) {
                console.log(err)
                setLoading(false)
            }
        }

        const getFollows = async () => {


            try {
                let follows = await axios.get(`https://social-media-api-d16d.onrender.com/api/v1/user/getFollows/${id}`, {
                    headers: {
                        authorisation: `Bearer ${token}`
                    }
                })
                console.log(follows.data.data, "follows")
                setFollowers(follows.data.data.followers)
                setFollowing(follows.data.data.following)
                setLoading(false)
            } catch (err) {
                console.log(err)
                setLoading(false)
            }
        }

        getDetails();
        getFollows();
        console.log("reloaded gfhfghfhgjhfgj")
    }, [id, auth.user])




    return (
        <>
            {loading ?
                <div className="spin">

                </div>
                :
                <div style={{ overflowX: 'hidden' }} >

                    <Header />
                    <ProfileBar />
                    {(posts && user) && <Background user={user} posts={posts} followers={followers} following={following} setUser={setUser} />}
                    {((!posts && user) && <Background user={user} followers={followers} following={following} setUser={setUser} />)}
                    <AddPost />
                    {(posts && (posts.length > 0)) && <Posts user={user} posts={posts} />}
                    <MobileDrawer />
                    {followers && <Followers user={user} followers={followers} setUser={setUser} />}
                    {following && <Following user={user} following={following} setUser={setUser} />}

                </div>
            }
        </>

    );
};

export default Profile;