import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./addPost.module.css";
import { faChampagneGlasses, faImages, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { useAuth } from "../../auth/auth";
const AddPost = () => {
    const navigate = useNavigate();
    const auth = useAuth();
    const clickHandler = () => {
        navigate('/fileupload')
    }

    return (
        <div className={classes.addPost}>
            <div className={classes.profile}>
                <img src={auth.user.user.profilePic.url} className={classes.image} onClick={() => { navigate(`/profile/${auth.user.user._id}`) }}></img>
                <p>{`Whats in your mind ${auth.user.user.name}?`}</p>

            </div>
            <div className={classes.icons}>
                <FontAwesomeIcon icon={faImages} className={classes.images} onClick={clickHandler} />
                {/* <FontAwesomeIcon icon={faLocationDot} className={classes.location} /> */}
            </div>
        </div>
    )
}

export default AddPost;