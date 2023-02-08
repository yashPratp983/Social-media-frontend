import classes from './comments.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAuth } from '../../auth/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

const Comments = ({ comments, id, commentsState }) => {
    const token = localStorage.getItem('token')
    const { user } = useAuth()
    console.log(commentsState.comment, "id")
    const [comments1, setComments] = useState()
    const [edit, setEdit] = useState({ id: '', comment: '' })
    const [editComment, setEditComment] = useState({ id: '', comment: '' })


    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`https://social-media-api-d16d.onrender.com/api/v1/posts/comment/${id}`, {
                comment: comments1
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'authorisation': `Bearer ${token}`
                }
            })
            commentsState.setComment([...commentsState.comment, { comment: comments1, name: user.user.name, profilePic: user.user.profilePic, user: user.user._id }])
            setComments('')
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }

    const deleteHandler = async (commentId) => {
        try {
            const res = await axios.delete(`https://social-media-api-d16d.onrender.com/api/v1/posts/comment/${id}/${commentId}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            commentsState.setComment(commentsState.comment.filter((comment) => comment._id != commentId))
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }

    const editHandler = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token')
        try {
            const res = await axios.put(`https://social-media-api-d16d.onrender.com/api/v1/posts/comment/${id}/${edit.id}`, {
                comment: edit.comment
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'authorisation': `Bearer ${token}`
                }
            })
            console.log(res)
            commentsState.setComment(commentsState.comment.map((comment) => {
                if (comment._id == edit.id) {
                    return { ...comment, comment: edit.comment }
                }
                return comment
            }))
            setEdit({ id: '', comment: '' })
        }
        catch (err) {
            console.log(err)
        }
    }



    return (
        <div className={classes.comments}>
            <form className={classes.form} onSubmit={submitHandler}>
                <img src={user.user.profilePic.url} className={classes.images}></img>
                <input placeholder="Add a comment" value={comments1} onChange={(e) => { setComments(e.target.value) }} className={classes.inputfield}></input>
            </form>
            {
                Object(commentsState.comment).map((comment) => {
                    return (
                        (edit.id != comment._id) ? (
                            <div key={comment._id}>
                                <div className={classes.profile}>
                                    <img src={comment.profilePic.url} className={classes.images}></img>
                                    <p style={{ paddingLeft: '10px' }}>{comment.name}</p>
                                    <p style={{ marginLeft: 'auto' }}>15 mins ago</p>
                                </div>
                                <div className={classes.content}>
                                    <p className={classes.comment}>{comment.comment}</p>
                                    <div className={classes.update}>
                                        {user.user._id == comment.user && <FontAwesomeIcon icon={faTrash} style={{ color: 'red', cursor: 'pointer' }} onClick={() => { deleteHandler(comment._id) }} />}
                                        {user.user._id == comment.user && <FontAwesomeIcon icon={faPen} style={{ color: 'blue', cursor: 'pointer' }} onClick={() => {
                                            setEdit({ id: comment._id, comment: comment.comment })
                                        }} />}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div key={comment._id}>
                                <div className={classes.profile}>
                                    <img src={comment.profilePic.url} className={classes.images}></img>
                                    <p style={{ paddingLeft: '10px' }}>{comment.name}</p>
                                    <p style={{ marginLeft: 'auto' }}>15 mins ago</p>
                                </div>
                                <form className={classes.form2} onSubmit={editHandler}>
                                    <input placeholder="Edit comment" value={edit.comment} onChange={(e) => { setEdit({ comment: e.target.value, id: comment._id }) }} className={classes.inputfield}></input>
                                    <div className={classes.buttons}>
                                        <button type='button' className={classes.cancel} onClick={() => {
                                            setEdit({ id: '', comment: '' })
                                        }}>Cancel</button>
                                        <button type='submit' className={classes.save}>Save</button>
                                    </div>
                                </form>
                            </div>
                        )


                    )
                })
            }
        </div>

    )
}

export default Comments