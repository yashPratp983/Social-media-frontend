import classes from './register.module.css';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useAuth } from '../../auth/auth';
import { useNavigate, useLocation } from "react-router-dom";
import { registerUser } from '../../apicalls/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';

// const API_URL = 'http://localhost:4000';

// const registerUser = async (user) => {
//     try {
//         const data = await axios.post(`${API_URL}/api/v1/user/register`, user)
//         if (data.status === 200) {
//             return data.data.message
//         }

//     } catch (error) {
//         console.log(error)
//         return await error.response.data.error
//     }


// };

const Register = () => {
    const auth = useAuth();
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || '/uploadPhoto'
    const [toastMessage, setToastMessage] = useState('')
    const formSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is mendatory'),
        email: Yup.string()
            .required('Email is mendatory')
            .email('Email is invalid'),
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
        const dat = await registerUser(data)
        setDisabled(false)
        setToastMessage(dat)
        toast.info(`${dat}`, {
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
    // useEffect(() => {
    //     if (toastMessage) {
    //         toast.info(`${toastMessage}`, {
    //             position: "bottom-right",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "dark",
    //         });
    //     }
    // }, [toastMessage])


    return (
        <>
            <div className={classes.register}>
                <h1 className={classes.heading}>Socialise</h1>
                <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
                    <input placeholder="Name" className={classes.input}
                        name="name"
                        type="text" {...register("name")} />
                    <p className={classes.error}>{errors.name?.message}</p>
                    <input placeholder="Email" className={classes.input}
                        name="email"
                        type="text"
                        {...register("email")}
                    ></input>
                    <p className={classes.error}>{errors.email?.message}</p>
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
                    <button type="submit" className={classes.button} onClick={() => { if (errors) { console.log(errors) } }} disabled={disabled}>Sign up</button>
                    <p className={classes.question}>Already have an account? <NavLink to='/login' className={classes.signIn}>Sign in</NavLink></p>
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

export default Register;