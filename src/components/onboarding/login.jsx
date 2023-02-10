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
import Dialog from '@mui/material/Dialog';
import { Drawer, Box, Typography, styled, Button } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import zIndex from "@mui/material/styles/zIndex";

const Login = () => {
    const [disabled, setDisabled] = useState(false);
    const auth = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('')
    const [loading1, setLoading1] = useState(false);

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

    const dialogStyle = {
        width: '500px',
        height: '250px',
        zIndex: '1'
    }

    const Heading = styled(Typography)`
    font-size: 20px;
    font-weight: 600;
    color:#318CE7;
    text-align: center;
    padding-bottom: 15px;
    `

    const Content = styled(Typography)`
    font-size: 16px;
    font-weight: 400;
    color:#000000;
    text-align: center;
    `
    const Button1 = styled(Button)`
    background-color: #318CE7;
    color: #FFFFFF;
    border-radius: 5px;
    margin-top: 20px;
    &:hover{
        background-color: #0CAFFF;
    }
    
    `

    const Button2 = styled(Button)`
    background-color: grey;
    color: white;
    border-radius: 5px;
    margin-top: 20px;
    &:hover{
        background-color: grey;
    }
    `

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

    const handleClose = () => {
        setOpen(false)
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
            console.log(err)
            setDisabled(false);
            setLoading(false);
            if (err.response.status === 401) {
                setOpen(true);
            }

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

    const resendEmail = async () => {
        try {
            setLoading1(true)
            const u = await axios.put('https://social-media-api-d16d.onrender.com/api/v1/user/resendEmailVerification', { email: email })
            console.log(u)
            setOpen(false)
            setLoading1(false)
            toast.info(`${u.data.data}`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                zIndex: '65657678678678678678678687'
            });
        }
        catch (err) {
            console.log(err)
            setLoading1(false)
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
                    <input placeholder="Email" className={classes.input} {...register("email")} onChange={(e) => { setEmail(e.target.value) }}></input>
                    <p className={classes.error}>{errors.email?.message}</p>
                    <input placeholder="Password" type="password" className={classes.input} {...register('password')}></input>
                    <p className={classes.error}>{errors.password?.message}</p>
                    <p className={classes.forgotpassword} onClick={() => { navigate('/forgotpassword') }}>Forgot Password?</p>
                    {!loading && <button type="submit" className={classes.button} disabled={disabled}>Sign in</button>}
                    {loading && <div type="submit" className={classes.button1} >Loading...</div>}
                    <p className={classes.question}>Don't have an account? <NavLink to='/register' className={classes.signIn}>Sign up</NavLink></p>
                </form>
            </div>
            <Dialog onClose={handleClose} open={open} style={{ zIndex: '434343665456465' }} PaperProps={{ sx: dialogStyle }}>
                <Box style={{ padding: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <FontAwesomeIcon icon={faXmark} onClick={handleClose} style={{ cursor: 'pointer', marginLeft: '95%', marginBottom: '20px' }} />
                    <Heading>Email not Veified</Heading>
                    <Content>Check your email for verification link</Content>
                    {!loading1 && <Button1 onClick={resendEmail}>Resend Email</Button1>}
                    {loading1 && <Button2>Sending...</Button2>}
                </Box>
            </Dialog>
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