import SinglePost from "./singlePost";
import classes from './posts.module.css'
import { useEffect, useState } from "react";
import axios from "axios";

const Posts = ({ posts }) => {
    const [pos, setPosts] = useState(posts)

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