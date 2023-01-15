import AddPost from "./posts/addPost";
import Post from "./posts/posts";
const Posts = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <AddPost />
            <Post />
        </div>
    )
}

export default Posts;