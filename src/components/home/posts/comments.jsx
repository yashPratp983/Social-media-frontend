import classes from './comments.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAuth } from '../../../auth/auth'

const Comments = ({ comments, id, commentsState }) => {
    const token = localStorage.getItem('token')
    const { user } = useAuth()
    console.log(comments[0], "id")
    const [comments1, setComments] = useState()

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:4000/api/v1/posts/comment/${id}`, {
                comment: comments1
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'authorisation': `Bearer ${token}`
                }
            })
            commentsState.setComment([...commentsState.comment, { comment: comments1, name: user.user.name, profilePic: user.user.profilePic }])
            setComments('')
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className={classes.comments}>
            <form className={classes.form} onSubmit={submitHandler}>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" className={classes.images}></img>
                <input placeholder="Add a comment" value={comments1} onChange={(e) => { setComments(e.target.value) }} className={classes.inputfield}></input>
            </form>
            {
                Object(commentsState.comment).map((comment) => {
                    return (
                        <>
                            <div className={classes.profile}>
                                <img src={comment.profilePic.url} className={classes.images}></img>
                                <p style={{ paddingLeft: '10px' }}>{comment.name}</p>
                                <p style={{ marginLeft: 'auto' }}>15 mins ago</p>
                            </div>
                            <div className={classes.content}>
                                <p>{comment.comment}</p>
                            </div>
                        </>
                    )
                })
            }
        </div >
    )
}

export default Comments