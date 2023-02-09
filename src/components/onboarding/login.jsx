import { NavLink } from "react-router-dom";
import classes from './login.module.css';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useAuth } from '../../auth/auth';
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [disabled, setDisabled] = useState(false);
    const auth = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const formSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is mendatory')
            .email('Email is invalid'),
        password: Yup.string()
            .required('Password is mendatory')
            .min(6, 'Password must be at 6 char long'),

    })
    const location = useLocation();
    const redirectPath = location.state?.path || '/'

    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState: { errors } } = useForm(formOptions)
    let user1;

    const getUser = async () => {
        try {
            const token = (localStorage.getItem('token'));
            console.log(token)
            if (token) {
                axios.defaults.headers.common['authorisation'] = `Bearer ${token}`;
                user1 = await axios.get('https://social-media-api-d16d.onrender.com/api/v1/user')
                // console.log(user1)
                if (user1.data.data.user) {
                    auth.setUser(user1.data.data);
                    navigate(redirectPath, { replace: true });
                }
            }
        }
        catch (err) {
            // console.log(err.response.data.error)
        }
    };


    const submitHandler = async (data) => {
        setDisabled(true);
        setLoading(true);
        console.log(data);
        try {
            let tok = await axios.post('https://social-media-api-d16d.onrender.com/api/v1/user/login', data);

            console.log(tok.data.token);
            localStorage.setItem('token', tok.data.token);
            getUser();
            setDisabled(false);
            setLoading(false);

        } catch (err) {
            console.log(err.response.data.error)
            setDisabled(false);
            setLoading(false);
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
            <div className={classes.login}>
                <h1 className={classes.heading}>Socialise</h1>
                <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
                    <input placeholder="Email" className={classes.input} {...register("email")}></input>
                    <p className={classes.error}>{errors.email?.message}</p>
                    <input placeholder="Password" type="password" className={classes.input} {...register('password')}></input>
                    <p className={classes.error}>{errors.password?.message}</p>
                    <p className={classes.forgotpassword} onClick={() => { navigate('/forgotpassword') }}>Forgot Password?</p>
                    {!loading && <button type="submit" className={classes.button} disabled={disabled}>Sign in</button>}
                    {loading && <div type="submit" className={classes.button1} >Loading...</div>}
                    <p className={classes.question}>Don't have an account? <NavLink to='/register' className={classes.signIn}>Sign up</NavLink></p>
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

export default Login;