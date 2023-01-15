import SinglePost from "./singlePost";
import classes from './posts.module.css'
const Posts = () => {
    return (
        <div className={classes.posts}>
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
        </div>
    )
}

export default Posts;