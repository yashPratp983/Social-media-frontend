import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faFile, faXmark } from '@fortawesome/free-solid-svg-icons'

import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './FileUpload.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const uploadPhoto = () => {
    //set a default image
    const navigate = useNavigate();
    const [file, setFile] = useState([]);
    const [preview, setPreview] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];

    const handleChange = (e) => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            const file2 = file;
            file2.push(selected);
            setFile(file2);
            console.log(file.length)
            setError(null);
        } else {
            setError('Please select an image file (png or jpeg)');
        }
    };
    const submitHandler = () => {
        if (file.length > 0 && !error) {
            navigate('/profile')
        } else {
            toast.info('Please select an image file (png or jpeg)', {
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
    useEffect(() => {
        if (!file) {
            setPreview(null);
            return;
        }
        if (!error) {
            setPreview(null);
        }
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };

    }, [file]);
    return (
        <>
            <div className="fileDaddy">

                <div className="overlay">
                    <div className="file-card">
                        {preview && <FontAwesomeIcon icon={faXmark} className="xmark" onClick={() => { setFile(null); setPreview(null) }} />}
                        {preview && <img className='image' src={preview} alt="preview" />}
                        {!preview &&
                            <div className="file-inputs-parent">
                                <div className="file-inputs">
                                    <input type="file" onChange={handleChange} />
                                    <button>
                                        <i>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </i>
                                        Upload

                                    </button>

                                </div>
                                {error && <div className="error">{error}</div>}
                                <p className="main">Upload your photo</p>
                                <p className="info">This will be your profile photo</p>
                                <p className="main">Supported files</p>
                                <p className="info">PDF, JPG, PNG</p>
                            </div>
                        }

                    </div>
                    <div className='buttoms'>
                        <button className='buttom' type='button' onClick={() => { navigate('/profile') }} >Cancel</button>
                        <button className='buttom2' type='button' onClick={submitHandler}>Upload</button>
                    </div>

                </div>
                {file.length > 0 &&
                    <div className="files"> {file.map((file, index) => {

                        return (
                            <div key={index}>
                                <div >
                                    <FontAwesomeIcon icon={faFile} className="file-icon" />
                                    <p>{file.name}</p>
                                </div>
                                <FontAwesomeIcon icon={faXmark} className="xmark" onClick={() => {
                                    let del = file;
                                    delete del[index]; setFile(del)
                                }} />
                            </div>
                        )
                    }
                    )}</div>}


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
    );
}

export default uploadPhoto;