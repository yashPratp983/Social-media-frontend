import { useEffect } from "react"
import axios from "axios";
import { useParams } from "react-router-dom"
import { useAuth } from "../../auth/auth";
import { useNavigate } from "react-router-dom";
import "./emailverification.css"
const EmailVerification = () => {
    const { user, setUser } = useAuth();
    const { token } = useParams();
    const navigate = useNavigate();
    console.log(token)
    useEffect(() => {

        let user1;
        const setToken = async () => {
            const data = await axios.get(`http://localhost:4000/api/v1/user/verify/${token}`);
            if (data.data.token) {

                localStorage.setItem("token", data.data.token);
                getUser(data.data.token);
            }
            console.log(token, data)
        }
        const getUser = async (tok) => {
            axios.defaults.headers.common['authorisation'] = `Bearer ${tok}`;
            user1 = await axios.get('http://localhost:4000/api/v1/user')
            console.log(user1)
            if (user1.data.data.user) {
                setUser(user1.data.data);
                navigate("/uploadphoto");
            }

        }

        if (token) {
            setToken();

        }
    }, []);


    return (
        <div className="spin">

        </div>
    )
}

export default EmailVerification