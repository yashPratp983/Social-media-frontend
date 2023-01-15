import Header from "./header";
import MobileDrawer from "./profileDrawer";
import { useOpenDrawer } from "../../contexts/open-drawer";
import ProfileBar from "./profileBar";
import Background from "./profileheader";
import AddPost from "./addPost";
import Posts from "./Posts";
import Followers from "./followersDialog";

const Profile = () => {
    const { opendrawerProfile, setOpendrawerProfile } = useOpenDrawer();

    return (
        <div style={{ overfloeX: 'hidden' }} >
            <Header />
            <ProfileBar />
            <Background />
            <AddPost />
            <Posts />
            <MobileDrawer />
            <Followers />

        </div>
    );
};

export default Profile;