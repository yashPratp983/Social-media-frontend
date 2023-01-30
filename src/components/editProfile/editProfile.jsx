import ChangeDetails from "./changeDetails";
// import Header from "../profile/header"
import Header from '../home/header'
import ProfileBar from "../profile/profileBar";
import ChangePassword from "./editPassword";
import { useState } from "react";
import MobileDrawer from "../home/posts/mobileDrawer";
const EditProfile = () => {
    const [change, setChange] = useState(1);

    return (
        <div>
            <Header />
            <MobileDrawer />
            <ProfileBar />
            {(change == 1) && <ChangeDetails setChange={setChange} />}
            {(change == 2) && <ChangePassword setChange={setChange} />}
        </div>
    )
}

export default EditProfile;