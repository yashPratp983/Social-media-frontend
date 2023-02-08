import classes from './chatbox.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faMagnifyingGlass, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { allUsers } from '../../App';
import { useContext } from 'react';
import { useAuth } from '../../auth/auth';
import axios from 'axios';
import { useRef, useEffect } from 'react';
import { useOnlineuser } from '../../contexts/onlineusers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { io } from "socket.io-client";
import { useMessageNotification } from '../../contexts/messageNotification';

const socket = io("http://localhost:4000");



const Chatbox = ({ messageReceive }) => {
    const [selectChat, setSelectChat] = useState({ _id: '', name: '', email: '', profilePic: '' })
    const { messageNotification, setMessageNotification } = useMessageNotification()
    const [search, setSearch] = useState('')
    const [disabled, setDisabled] = useState(false)

    const [isSelected, setIsSelected] = useState(false)
    const [messages, setMessages] = useState([])
    const { onlineusers, setOnlineusers } = useOnlineuser()
    const allusers = useContext(allUsers);
    const [filteredUsers, setFilteredUsers] = useState(allusers.users)
    const [messageInput, setMessageInput] = useState('')
    const el = useRef(null)
    const [rerender, setRerender] = useState(false)

    const auth = useAuth();
    console.log(allusers.users)

    useEffect(() => {
        setFilteredUsers(allusers.users)
    }, [allusers.users])

    const blockHandler = async () => {
        try {
            const token = localStorage.getItem('token');
            const block = await axios.put(`http://localhost:4000/api/v1/user/blockUser/${selectChat._id}`, {}, {
                headers: {
                    authorisation: `Bearer ${token}`
                }
            })
            console.log(auth.user)
            const obj = { user: block.data.data, following: auth.user.following, followers: auth.user.followers }
            auth.setUser(obj)
        } catch (err) {
            console.log(err)
        }
    }

    const unblockHandler = async () => {
        try {
            const token = localStorage.getItem('token');
            const unblock = await axios.put(`http://localhost:4000/api/v1/user/unblockUser/${selectChat._id}`, {}, {
                headers: {
                    authorisation: `Bearer ${token}`
                }
            })
            const obj = { user: unblock.data.data, following: auth.user.following, followers: auth.user.followers }
            auth.setUser(obj)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (messageReceive) {

            if (selectChat._id == messageReceive.senderId) {
                console.log(messageReceive.text, "chatbox")
                setMessages([...messages, { message: messageReceive.text, sender: messageReceive.senderId }])
                try {
                    const token = localStorage.getItem('token');
                    const del = axios.delete(`https://social-media-api-d16d.onrender.com/api/v1/messageNotification/${selectChat._id}`, {
                        headers: {
                            authorisation: `Bearer ${token}`
                        }
                    })
                } catch (err) {
                    console.log(err)
                }
            }
            else {
                const obj = { sender: messageReceive.senderId, receiver: messageReceive.receiverId, message: messageReceive.text }
                const m = messageNotification
                m.push(obj)
                setMessageNotification(m)
                setRerender(!rerender)
            }
        }
    }, [messageReceive])

    const getMessages = async (id) => {
        const token = localStorage.getItem('token');
        try {
            const mess = await axios.get(`https://social-media-api-d16d.onrender.com/api/v1/messages/${id}`, {
                headers: {
                    authorisation: `Bearer ${token}`
                }
            })

            console.log(mess.data.data)
            setMessages(mess.data.data);
        } catch (err) {
            console.log(err)
        }
    }

    const selectChatHandler = (id) => {
        const token = localStorage.getItem('token');
        try {
            const del = axios.delete(`https://social-media-api-d16d.onrender.com/api/v1/messageNotification/${id}`, {
                headers: {
                    authorisation: `Bearer ${token}`
                }
            })
            setMessageNotification(messageNotification.filter((message) => message.sender != id))
        } catch (err) {
            console.log(err)
        }
    }

    const submitHandler = async () => {
        const token = localStorage.getItem('token');

        const data = {
            message: messageInput
        }
        if (!disabled && messageInput !== '') {
            setDisabled(true)
            try {
                const mess = await axios.post(`https://social-media-api-d16d.onrender.com/api/v1/messages/${selectChat._id}`, data, {
                    headers: {
                        authorisation: `Bearer ${token}`
                    }
                })

                console.log(mess.data.data)
                setMessages([...messages, mess.data.data]);
                setDisabled(false)
                socket.emit('send-message', { text: messageInput, receiverId: selectChat._id, senderId: auth.user.user._id })
                setMessageInput('')
            } catch (err) {
                console.log(err)
                setDisabled(false)
                toast.info(`${err.response.data.error}`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        }
    }

    const searchHandler = (e) => {
        setSearch(e.target.value)
        const filtered = allusers.users.filter((user) => user.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilteredUsers(filtered)
        console.log("called")
    }

    const deleteChat = async (id) => {
        const token = localStorage.getItem('token');
        try {
            const mess = await axios.delete(`https://social-media-api-d16d.onrender.com/api/v1/messages/delete/${id}`, {
                headers: {
                    authorisation: `Bearer ${token}`
                }
            })

            console.log(mess.data.data)
            setMessages(messages.filter((message) => message._id != id))

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (el.current) {
            el.current.scrollIntoView({ block: 'nearest', behavior: 'smooth', inline: 'nearest' })
        }
    }, [messages])

    return (
        <>
            <div className={classes.chatbox}>
                <div className={classes.leftbox}>
                    <div className={classes.leftheader}>
                        <div className={classes.inputfield}>
                            <div className={classes.icon}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                            <input className={classes.input} placeholder="Search your conversation" onChange={searchHandler} value={search}></input>
                        </div>
                    </div>
                    <div className={classes.leftbody}>
                        {
                            filteredUsers && filteredUsers.length > 0 &&
                            (filteredUsers.map((alluser) => {
                                if (alluser._id != auth.user.user._id) {
                                    return (
                                        <div className={classes.leftbodylist} onClick={() => {
                                            setSelectChat(alluser);
                                            getMessages(alluser._id);
                                            setIsSelected(true);
                                            selectChatHandler(alluser._id)

                                        }} key={alluser._id}>
                                            <div className={classes.profile}>
                                                <img src={alluser.profilePic.url} className={classes.images}></img>
                                                <p className={classes.names}>{alluser.name}</p>
                                            </div>
                                            <div className={classes.notification}>
                                                {messageNotification.length > 0 && messageNotification.filter((mess) => mess.sender == alluser._id).length > 0 && <p className={classes.number}>
                                                    {
                                                        messageNotification.filter((mess) => mess.sender == alluser._id).length
                                                    }
                                                </p>}
                                            </div>
                                        </div>
                                    )
                                }
                            }))


                        }
                    </div>

                </div>
                {
                    isSelected &&
                    <div className={classes.rightbox}>

                        <div className={classes.rightheader}>
                            <div className={classes.profile}>
                                <img src={selectChat.profilePic.url} className={classes.image}></img>

                                <div className={classes.status}>
                                    <p className={classes.name}>{selectChat.name}</p>
                                    <p className={classes.stats}>{
                                        onlineusers.find((user) => user.userId == selectChat._id) ? 'Online' : 'Offline'
                                    }</p>
                                </div>

                            </div>
                            <div>
                                {auth.user.user.blocklist.includes(selectChat._id) && <button className={classes.button} onClick={unblockHandler}>Unblock</button>}
                                {!auth.user.user.blocklist.includes(selectChat._id) && <button className={classes.button} onClick={blockHandler}>Block</button>}
                            </div>
                        </div>

                        <div className={classes.rightbody}>
                            {
                                messages.map((message, index) => {
                                    return (
                                        <p ref={el} className={message.sender == auth.user.user._id ? classes.sent : classes.received}>{message.message}  {message.sender == auth.user.user._id && <FontAwesomeIcon icon={faTrash} className={classes.trash} key={index} onClick={() => { deleteChat(message._id) }} />}</p>
                                    )
                                })
                            }

                        </div>
                        <div className={classes.rightfooter}>
                            <div className={classes.inputfield}>
                                <input className={classes.input} placeholder="Type your message" value={messageInput} onChange={(e) => { setMessageInput(e.target.value) }} ></input>
                                <div className={classes.icon}>
                                    <FontAwesomeIcon icon={faPaperPlane} onClick={submitHandler} />
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {
                    !isSelected && <div className={classes.rightbox}>
                        <div style={{ height: '100px', width: '100px', display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center', paddingLeft: '40%', paddingTop: '200px' }}>
                            <img src="https://cdn-icons-png.flaticon.com/512/457/457975.png" style={{
                                height: '100%', width: '100%', marginLeft: 'auto', marginRight: 'auto'
                            }}></img>
                        </div>
                    </div>

                }

            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}

export default Chatbox