import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './uploadPhoto.scss'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const uploadPhoto = () => {


    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const types = ['image/png', 'image/jpeg'];
    const handleChange = (e) => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    };
    const submitHandler = async () => {
        setDisabled(true)
        if (file) {
            try {
                const formData = new FormData();
                formData.append('files', file);
                const token = localStorage.getItem('token')
                const user = await axios.put('https://social-media-api-d16d.onrender.com/api/v1/user/uploadProfilePic', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'authorisation': `Bearer ${token}`
                    }
                })
                console.log(user)
                navigate('/description')
                setDisabled(false)
            }
            catch (err) {
                setDisabled(false)
                console.log(err)
            }
        } else {
            alert('Please upload an image')
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
        reader.readAsDataURL(file);
    }, [file]);
    return (
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
                            <p className="main">Upload your photo</p>
                            <p className="info">This will be your profile photo</p>
                            <p className="main">Supported files</p>
                            <p className="info">PDF, JPG, PNG</p>
                        </div>
                    }

                </div>
                <div className='buttoms'>
                    <button className='buttom' type='button' onClick={() => { navigate('/description') }} >Skip</button>
                    <button className='buttom2' type='button' onClick={submitHandler} disabled={disabled}>Next</button>
                </div>
                {error && <div className="error">{error}</div>}
            </div>
        </div>
    );
}

export default uploadPhoto;