import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import './FileUpload.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './FileUplod.module.scss'
import { faHeart, faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import Header from '../profile/header'
import LeftBar from '../home/left-bar'

const FileUpload = () => {
    const navigate = useNavigate()
    const [files, setFiles] = useState([]);
    const [file, setFile] = useState(null)
    const [src, , setSrc] = useState([]);
    const [show, setShow] = useState(0);
    const [index, setIndex] = useState(0);
    console.log(Object(files[0]).type)

    const uploadHandler = async (e) => {
        const f = files;
        f.push(e.target.files[0]);
        setFile(e.target.files[0])


        setFiles(f);
        // console.log(e, f);
        // console.log(files.length)
        console.log(e.target.files[0])
        setShow(f.length)

    }

    const leftHandler = () => {
        setIndex(index - 1);
    }

    const rightHandler = () => {
        setIndex(index + 1);
    }

    useEffect(() => {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const s = src;
            s.push(reader.result);

            console.log(reader.result)
            console.log(src)
            setSrc(s)
        };
        reader.readAsDataURL(file);
    }, [file]);

    return (
        <>
            <Header></Header>
            <LeftBar></LeftBar>
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

                    <p className="info">Upload photos and videos with wonderful title and description</p>

                    <button className='button1' onClick={() => { navigate('/') }}>
                        Cancel
                    </button>

                </div>) : (
                    <div className={classes.SinglePost}>
                        <div className={classes.image}>
                            {(Object(files[index]).type == 'image/jpeg' || Object(files[index]).type == 'image/png') && <img src={src[index]} style={{ width: '100%', height: '300px' }}></img>}
                            {(Object(files[index]).type == 'video/mp4' || Object(files[index]).type == 'videos/ogg') && <video style={{ width: '100%', height: '300px' }} controls><source src={src[index]} type={Object(files[index]).type}></source></video>}
                            {index !== 0 && <FontAwesomeIcon icon={faCircleArrowLeft} className={classes.left} onClick={leftHandler} />}
                            {(index !== files.length - 1) && <FontAwesomeIcon icon={faCircleArrowRight} className={classes.right} onClick={rightHandler} />}
                        </div>
                        <div className={classes.plusFile}>
                            <FontAwesomeIcon icon={faCirclePlus} className={classes.plus}></FontAwesomeIcon>
                            <input type="file" className={classes.inputFile} onChange={uploadHandler}></input>
                        </div>
                        <div className={classes.inputs}>
                            <input placeholder='Title' className={classes.title}></input>
                            <input placeholder="description" className={classes.description}></input>
                        </div>
                        <button className={classes.buttonUpload}>Upload</button>
                    </div>)
            }
        </>
    )
}

export default FileUpload