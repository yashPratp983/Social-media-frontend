import { useEffect } from "react"
import axios from "axios";
import { useParams } from "react-router-dom"
import { useAuth } from "../../auth/auth";
import { useNavigate } from "react-router-dom";
import "./emailverification.css"
const EditEmailVerification = () => {
    const { user, setUser } = useAuth();
    const { token } = useParams();
    const navigate = useNavigate();
    console.log(token)
    useEffect(() => {

        let user1;
        const setToken = async () => {
            try {
                const data = await axios.get(`https://social-media-api-d16d.onrender.com/api/v1/user/verify/${token}`);
                if (data.data.token) {

                    localStorage.setItem("token", data.data.token);
                    getUser(localStorage.getItem("token"));
                }
                console.log(token, data)
            } catch (err) {
                console.log(err)
            }
        }
        const getUser = async (tok) => {
            try {
                axios.defaults.headers.common['authorisation'] = `Bearer ${tok}`;
                user1 = await axios.get('https://social-media-api-d16d.onrender.com/api/v1/user')
                console.log(user1)
                if (user1.data.data.user) {
                    setUser(user1.data.data);
                    navigate("/confirmverification2");
                }
            } catch (err) {
                console.log(err)
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

export default EditEmailVerification