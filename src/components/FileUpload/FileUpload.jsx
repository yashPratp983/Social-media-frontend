import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCirclePlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import './FileUpload.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './FileUplod.module.scss'
import { faHeart, faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import Header from '../home/header'
import LeftBar from '../home/left-bar'
import MobileDrawer from '../profile/profileDrawer'
import { useOpenDrawer } from '../../contexts/open-drawer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FileUpload = () => {
    const navigate = useNavigate()
    const [files, setFiles] = useState([]);
    const [file, setFile] = useState(null)
    const [src, , setSrc] = useState([]);
    const [show, setShow] = useState(0);
    const [index, setIndex] = useState(0);
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState(false)
    const [description, setDescription] = useState('');
    const [rerender, setRerender] = useState(false)
    console.log(Object(files[0]).type, src)

    const uploadPostHandler = async () => {
        setLoad(true)
        const formData1 = new FormData();
        const formData2 = new FormData();
        let i = 0;
        let v = 0;
        let res1, res2;


        files.map((file) => {
            if (Object(file).type == 'image/jpeg' || Object(file).type == 'image/png') {
                formData1.append('files', file);
                i++;
            }
        })

        files.map((file) => {
            if (Object(file).type == 'video/mp4' || Object(file).type == 'video/ogg') {
                formData2.append('files', file);
                v++;
            }
        })

        const token = localStorage.getItem('token')

        try {
            const post = await axios.post('https://social-media-api-d16d.onrender.com/api/v1/posts/', { title: title, description: description },
                {
                    headers: {
                        'authorisation': `Bearer ${token}`
                    }
                }
            );
            if (i > 0) {
                res1 = await axios.post(`https://social-media-api-d16d.onrender.com/api/v1/posts/images/${post.data.data.id}`, formData1, {

                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'authorisation': `Bearer ${token}`
                    }

                })
            }
            if (v > 0) {
                res2 = await axios.post(`https://social-media-api-d16d.onrender.com/api/v1/posts/videos/${post.data.data.id}`, formData2, {

                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'authorisation': `Bearer ${token}`
                    }

                })
            }
            toast.info(`Successfully created post`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            console.log(post, res1, res2);
            navigate('/');
            setLoad(false);
            setFiles([]);
            setSrc([]);
            setTitle('');
            setDescription('');
            setShow(0);
            setIndex(0);

            // Promise.all([res1, res2]).then((values) => {
            //     console.log(values)
            // })
        } catch (err) {
            setLoad(false);
            console.log(err);
            // toast.info(`${err.response.data.error}`, {
            //     position: "bottom-right",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "dark",
            // });
        }
    }

    const uploadHandler = async (e) => {
        if (Object(e.target.files[0]).type != 'image/jpeg' && Object(e.target.files[0]).type != 'image/png' && Object(e.target.files[0]).type != 'video/mp4' && Object(e.target.files[0]).type != 'video/ogg') {
            toast.error('Please upload an image or video', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            return
        }
        const f = files;
        f.push(Object(e.target.files[0]));
        setFile(Object(e.target.files[0]))


        setFiles(f);
        // console.log(e, f);
        // console.log(files.length)
        // console.log(e.target.files[0])
        setShow(f.length)

    }

    const leftHandler = () => {
        setIndex(index - 1);
    }

    const rightHandler = () => {
        setIndex(index + 1);
    }

    const removeHandler = () => {
        const f = files;
        setShow(f.length - 1);
        f.splice(index, 1);
        setFiles(f);
        const s = src;
        s.splice(index, 1);
        setSrc(s);


        setIndex(index - 1);

    }

    useEffect(() => {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const s = src;
            s.push(reader.result);

            // console.log(reader.result)
            // console.log(src)
            setSrc(s)
            setRerender(!rerender)
        };
        reader.readAsDataURL(file);
    }, [file, files, src]);

    return (
        <>
            <div style={{ overflowX: 'none', height: '100vh' }}>
                <Header style={{ overflowX: 'none' }}></Header>
                <LeftBar style={{ overflowX: 'none' }}></LeftBar>
                <MobileDrawer style={{ overflowX: 'none' }}></MobileDrawer>
                {
                    (show == 0) ? (<div className="file-card">

                        <div className="file-inputs">
                            <input type="file" onChange={uploadHandler} />
                            <button className='button'>
                                <i>
                                    <FontAwesomeIcon icon={faPlus} />
                                </i>
                                Upload
                            </button>

                        </div>

                        <p className="info">Upload photos and videos with wonderful title and description.<br></br><p style={{ color: "red", fontSize: '14px' }}>Only image/jpeg,image/png,video/mp4 or video/ogg files are accepted</p></p>

                        <button className='button1' onClick={() => { navigate('/') }}>
                            Cancel
                        </button>

                    </div>) : (
                        <div className={classes.SinglePost} style={{ overflowX: 'none', overflowY: 'none' }}>
                            <FontAwesomeIcon icon={faXmark} onClick={removeHandler} style={{ marginLeft: '95%', cursor: 'pointer' }} />
                            <div className={classes.image}>
                                {(Object(files[index]).type == 'image/jpeg' || Object(files[index]).type == 'image/png') && <img src={src[index]} style={{ width: '100%', height: '300px' }}></img>}
                                {(Object(files[index]).type == 'video/mp4' || Object(files[index]).type == 'video/ogg') && <video style={{ width: '100%', height: '300px' }} controls><source src={src[index]} type={Object(files[index]).type}></source></video>}
                                {index !== 0 && <FontAwesomeIcon icon={faCircleArrowLeft} className={classes.left} onClick={leftHandler} />}
                                {(index !== files.length - 1) && <FontAwesomeIcon icon={faCircleArrowRight} className={classes.right} onClick={rightHandler} />}
                            </div>
                            <div className={classes.plusFile}>
                                <FontAwesomeIcon icon={faCirclePlus} className={classes.plus}></FontAwesomeIcon>
                                <input type="file" className={classes.inputFile} onChange={uploadHandler}></input>
                            </div>
                            <div className={classes.inputs}>
                                <input placeholder='Title' className={classes.title} onChange={(e) => { setTitle(e.target.value) }}></input>
                                <input placeholder="description" className={classes.description} onChange={(e) => { setDescription(e.target.value) }}></input>
                            </div>
                            {(!load) && <button className={classes.buttonUpload} onClick={uploadPostHandler}>Upload</button>}
                            {(load) && <div className={classes.spin} />}
                        </div>)
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

export default FileUpload