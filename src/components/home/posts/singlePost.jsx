import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./singlePost.module.css";
import { faHeart, faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Comments from "./comments";
import { useNavigate } from "react-router";
import Posts from "./posts";
const SinglePost = ({ post }) => {
    const navigate = useNavigate();
    const [showComment, setShowComment] = useState(false);
    const [comment, setComment] = useState(Object(post).comments[0]);
    const [src, setSrc] = useState(0);
    // console.log(Object(post.photos[0]).url)
    console.log(post, "posts")
    const [address, setAddress] = useState(Object(post.photos[0]).url);
    let add = post.photos;
    let addVideo = post.videos;
    let addBoth = add.concat(addVideo);
    const commentHandler = () => {
        setShowComment(!showComment);
    }

    return (
        <div className={classes.SinglePost}>
            <div className={classes.upper}>
                <img src={post.user.profilePic.url} className={classes.profile} onClick={() => { navigate('/profile') }}></img>
                <p style={{ paddingRight: '20px' }}>{post.user.name}</p>
                <p>{post.created_at}</p>
            </div>
            <div>
                <h2 style={{ fontSize: '25px' }}>{post.title}</h2>
                <h3 style={{ color: 'grey', fontSize: '15px' }}>{post.description}</h3>
            </div>
            {(src < add.length) && <div className={classes.image}>
                <img src={address} style={{ width: '100%', aspectRatio: '0.70' }}></img>
                {(src != 0) && <FontAwesomeIcon icon={faCircleArrowLeft} className={classes.left} onClick={() => { setSrc(src - 1); setAddress(Object(addBoth[src - 1]).url) }} />}
                {(src != addBoth.length - 1) && <FontAwesomeIcon icon={faCircleArrowRight} className={classes.right} onClick={() => { setSrc(src + 1); setAddress(Object(addBoth[src + 1]).url) }} />}
            </div>}
            {(src >= add.length) && <div className={classes.image}>
                <video style={{ width: '100%', aspectRatio: '0.70' }} controls><source src={address} type="video/mp4"></source></video>
                {(src != 0) && <FontAwesomeIcon icon={faCircleArrowLeft} className={classes.left} onClick={() => { setSrc(src - 1); setAddress(addBoth[src - 1]).url }} />}
                {(src != addBoth.length - 1) && <FontAwesomeIcon icon={faCircleArrowRight} className={classes.right} onClick={() => { setSrc(src + 1); setAddress(addBoth[src + 1].url) }} />}
            </div>}
            <div className={classes.footer}>
                <div className={classes.likes}>
                    <FontAwesomeIcon icon={faHeart} className={classes.heart} />
                    <p style={{ paddingLeft: '10px' }}>{post.likes.length - 1} likes</p>
                </div>
                <div className={classes.comments} onClick={commentHandler}>
                    <p>{comment.length} comments</p>
                </div>

            </div>
            <div>
                {showComment && <Comments comments={post.comments} id={post.id} commentsState={{ comment, setComment }} />}
            </div>
        </div >
    )
}

export default SinglePost;