import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./singlePost.module.css";
import { faHeart, faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Comments from "./comments";
import { useNavigate } from "react-router";
const SinglePost = () => {
    const navigate = useNavigate();
    const [showComment, setShowComment] = useState(false);
    const [src, setSrc] = useState(0);
    const [address, setAddress] = useState('https://www.curvyerotic.com/thumbs/angela29.jpg')
    let add = (['https://www.curvyerotic.com/thumbs/angela29.jpg', 'https://boombo.biz/en/uploads/posts/2022-09/thumbs/1662413763_1-boombo-biz-p-angela-white-naked-erotika-pinterest-1.jpg', 'https://boombo.biz/en/uploads/posts/2022-09/thumbs/1662413774_3-boombo-biz-p-angela-white-naked-erotika-pinterest-3.jpg', 'https://boombo.biz/en/uploads/posts/2022-09/thumbs/1662413814_16-boombo-biz-p-angela-white-naked-erotika-pinterest-20.jpg', 'https://boombo.biz/en/uploads/posts/2022-09/1662413807_26-boombo-biz-p-angela-white-naked-erotika-pinterest-33.jpg'])
    let n = add.length - 1;
    const commentHandler = () => {
        setShowComment(!showComment);
    }

    return (
        <div className={classes.SinglePost}>
            <div className={classes.upper}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7sBbNy3szqtZSStWsRJ_nCnEr10MDl5FKw&usqp=CAU" className={classes.profile} onClick={() => { navigate('/profile') }}></img>
                <p style={{ paddingRight: '20px' }}>Heisenberg</p>
                <p>5 mins ago</p>
            </div>
            <div>
                <h2 style={{ fontSize: '25px' }}>First pic</h2>
                <h3 style={{ color: 'grey', fontSize: '15px' }}>Enjoying something in cold weather</h3>
            </div>
            <div className={classes.image}>
                <img src={address} style={{ width: '100%', aspectRatio: '0.66' }}></img>
                {(src != 0) && <FontAwesomeIcon icon={faCircleArrowLeft} className={classes.left} onClick={() => { setSrc(src - 1); setAddress(add[src - 1]) }} />}
                {(src != n) && <FontAwesomeIcon icon={faCircleArrowRight} className={classes.right} onClick={() => { setSrc(src + 1); setAddress(add[src + 1]) }} />}
            </div>
            <div className={classes.footer}>
                <div className={classes.likes}>
                    <FontAwesomeIcon icon={faHeart} className={classes.heart} />
                    <p style={{ paddingLeft: '10px' }}>15 likes</p>
                </div>
                <div className={classes.comments} onClick={commentHandler}>
                    <p>15 comments</p>
                </div>

            </div>
            <div>
                {showComment && <Comments />}
            </div>
        </div >
    )
}

export default SinglePost;