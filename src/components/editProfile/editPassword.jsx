import classes from './editPassword.module.css';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChangeDetails = ({ setChange }) => {

    const formSchema = Yup.object().shape({
        oldpassword: Yup.string()
            .required('Password is mendatory')
            .min(6, 'Password must be at 6 char long'),
        confirmPwd: Yup.string()
            .required('Password is mendatory')
            .oneOf([Yup.ref('newPwd')], 'Passwords does not match'),
        newPwd: Yup.string()
            .required('Password is mendatory')
            .min(6, 'Password must be at 6 char long'),
    })


    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState: { errors } } = useForm(formOptions)

    const submitHandler = async (data) => {

        try {
            const d = {
                currentPassword: data.oldpassword,
                newPassword: data.newPwd,
            }
            const tok = localStorage.getItem('token');
            axios.defaults.headers.common['authorisation'] = `Bearer ${tok}`;
            let dat = await axios.put('http://localhost:4000/api/v1/user/updatePassword', d);
            console.log(dat);
            localStorage.setItem('token', dat.data.token);
            toast.info(`Successfully changed password`, {
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
        catch (err) {
            console.log(err);
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
    return (
        <>
            <div className={classes.editProfile}>
                <div className={classes.change}>
                    <div className={classes.header}>
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" className={classes.profileimage}></img>
                        <h2>Heisenberg</h2>
                    </div>
                    <form onSubmit={handleSubmit(submitHandler)}>
                        <div className={classes.fields}>
                            <div className={classes.form}>
                                <p className={classes.name} >Old Password</p>
                                <p className={classes.bio} >New Password</p>
                                <p style={{ marginTop: '0%' }}>Confirm Password</p>
                            </div>
                            <div className={classes.forminput}>
                                <div>
                                    <input type="password" name='oldpassword'  {...register("oldpassword")}></input>
                                    <p className={classes.error}>{errors.oldpassword?.message}</p>
                                </div>
                                <div>
                                    <input type="password" name='newPwd'  {...register("newPwd")}></input>
                                    <p className={classes.error}>{errors.newPwd?.message}</p>
                                </div>
                                <div>
                                    <input type="password" name='confirmPwd'  {...register("confirmPwd")}></input>
                                    <p className={classes.error}>{errors.oldPwd?.message}</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.footer}>
                            <button type='submit' className={classes.button} >Save Changes</button>
                            <p className={classes.password} onClick={() => { setChange(2) }}>Change Password</p>
                            <p className={classes.email} onClick={() => { setChange(1) }}>Change Info</p>
                        </div>
                    </form>
                </div>
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

export default ChangeDetails;