import SinglePost from "./singlePost";
import classes from './posts.module.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const Posts = ({ posts }) => {
    const [pos, setPosts] = useState(posts)
    const id = useParams().id;
    useEffect(() => {
        setPosts(posts)
    }, [posts, id])

    return (
        <>
            {
                pos.length > 0 &&
                <div className={classes.posts}>

                    {pos.map((post) => {
                        return <SinglePost key={post.id} post={post} postState={{ pos, setPosts }} />
                    })}
                </div>

            }
            {posts.length == 0 && <div className={classes.noPosts}>No Posts to view</div>}
        </>
    )
}

export default Posts;