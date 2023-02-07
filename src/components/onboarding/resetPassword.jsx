import classes from './register.module.css';
import { NavLink, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useAuth } from '../../auth/auth';
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ResetPassword = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(false);
    const { token } = useParams();
    const [toastMessage, setToastMessage] = useState('')
    const formSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is mendatory')
            .min(6, 'Password must be at 6 char long'),
        confirmPwd: Yup.string()
            .required('Password is mendatory')
            .oneOf([Yup.ref('password')], 'Passwords does not match'),
    })

    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState: { errors } } = useForm(formOptions)
    const submitHandler = async (data) => {
        setDisabled(true)
        try {
            const dat = await axios.post(`http://localhost:4000/api/v1/user/resetPassword/${token}`, data)
            if (dat.status === 200) {
                localStorage.setItem('token', dat.data.token)
                navigate('/')
            }
            setDisabled(false)
        } catch (err) {
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



    return (
        <>
            <div className={classes.register}>
                <h1 className={classes.heading}>Socialise</h1>
                <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
                    <input placeholder="Password" className={classes.input}
                        name="password"
                        type="password"
                        {...register('password')}
                    ></input>
                    <p className={classes.error}>{errors.password?.message}</p>
                    <input placeholder="Confirm Password" className={classes.input}
                        name="confirmPwd"
                        type="password"
                        {...register('confirmPwd')}
                    ></input>
                    <p className={classes.error}>{errors.confirmPwd?.message}</p>
                    <button type="submit" className={classes.button} onClick={() => { if (errors) { console.log(errors) } }} disabled={disabled}>Submit</button>
                </form>

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

export default ResetPassword;