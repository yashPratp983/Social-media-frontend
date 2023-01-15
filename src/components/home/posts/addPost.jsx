import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./addPost.module.css";
import { faChampagneGlasses, faImages, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
const AddPost = () => {
    const navigate = useNavigate();
    return (
        <div className={classes.addPost}>
            <div className={classes.profile}>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" className={classes.image} onClick={() => { navigate('/profile') }}></img>
                <p>Whats in your mind Heisenberg?</p>

            </div>
            <div className={classes.icons}>
                <FontAwesomeIcon icon={faImages} className={classes.images} />
                <FontAwesomeIcon icon={faLocationDot} className={classes.location} />
            </div>
        </div>
    )
}

export default AddPost;