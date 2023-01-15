import classes from './editPassword.module.css';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
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

    const submitHandler = (e) => {
        e.preventDefault();
    }

    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState: { errors } } = useForm(formOptions)
    return (
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
                                <input type="password" name='oldPwd'  {...register("oldPwd")}></input>
                                <p className={classes.error}>{errors.oldPwd?.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.footer}>
                        <button type='submit' className={classes.button}>Save Changes</button>
                        <p className={classes.password} onClick={() => { setChange(2) }}>Change Password</p>
                        <p className={classes.email} onClick={() => { setChange(1) }}>Change Info</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangeDetails;