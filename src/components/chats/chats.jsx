import Header from "./header";
import MobileDrawer from "../home/posts/mobileDrawer";
import Chatbox from "./chatbox";
const Chats = ({ messageReceive }) => {
    return (
        <div>
            <Header />
            <MobileDrawer />
            <Chatbox messageReceive={messageReceive} />
        </div>
    )
}

export default Chats;