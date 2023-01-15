import Header from "./header";
import LeftBar from "./left-bar";
import RightBar from "./right-bar";
import Posts from "./posts";
import MobileDrawer from "./posts/mobileDrawer";
const Home = () => {

    return (
        <div>
            <Header />
            <MobileDrawer />
            <LeftBar />
            <RightBar />
            <Posts />

        </div>
    )
}

export default Home;