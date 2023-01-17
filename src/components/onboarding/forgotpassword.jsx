import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import classes from './forgotpassword.module.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
    const formSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is mendatory')
            .email('Email is invalid'),

    })

    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState: { errors } } = useForm(formOptions)

    const submitHandler = async (data) => {
        try {
            const response = await axios.put('http://localhost:4000/api/v1/user/generateResetToken', data)
            console.log(response)
            toast.info(`${response.data.data}`, {
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
            console.log(err)
        }
    }

    return (
        <>
            <div>
                <div className={classes.login}>
                    <h1 className={classes.heading}>Socialise</h1>
                    <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
                        <input placeholder="Email" className={classes.input} {...register("email")}></input>
                        <p className={classes.error}>{errors.email?.message}</p>
                        <button type="submit" className={classes.button}>Submit</button>
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

export default ForgotPassword;