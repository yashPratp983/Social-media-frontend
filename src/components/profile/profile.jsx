// import Header from "./header";
import Header from "../home/header";
import MobileDrawer from "./profileDrawer";
import { useOpenDrawer } from "../../contexts/open-drawer";
import ProfileBar from "./profileBar";
import Background from "./profileheader";
import AddPost from "./addPost";
import Posts from "./Posts";
import Followers from "./followersDialog";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";


const Profile = () => {
    const { opendrawerProfile, setOpendrawerProfile } = useOpenDrawer();
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const token = localStorage.getItem('token');

        const getDetails = async () => {
            try {
                const user = await axios.get(`http://localhost:4000/api/v1/user/getProfile/${id}`, {
                    headers: {
                        authorisation: `Bearer ${token}`
                    }

                })
                setUser(user.data.data);
                const posts = await axios.get(`http://localhost:4000/api/v1/all_posts/profile/${id}`, {
                    headers: {
                        authorisation: `Bearer ${token}`
                    }
                })
                console.log(user, posts)

                setPosts(posts.data.data);
                setLoading(false)
            } catch (err) {
                console.log(err)
                setLoading(false)
            }
        }
        getDetails();
    }, [])


    return (
        <>
            {loading ?
                <div className="spin">

                </div>
                :
                <div style={{ overflowX: 'hidden' }} >

                    <Header />
                    <ProfileBar />
                    {(posts) && <Background user={user} posts={posts} />}
                    {((!posts) && <Background user={user} />)}
                    <AddPost />
                    {(posts) && <Posts user={user} posts={posts} />}
                    <MobileDrawer />
                    <Followers />

                </div>
            }
        </>

    );
};

export default Profile;