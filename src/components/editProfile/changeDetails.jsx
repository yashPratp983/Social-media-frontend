import classes from './changeDetails.module.css';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import axios from 'axios';
const ChangeDetails = ({ setChange }) => {
    const formSchema = Yup.object().shape({
        email: Yup.string(),
        bio: Yup.string()
            .max(200, 'Bio must not be more than 200 characters'),
        name: Yup.string()
    })

    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState: { errors } } = useForm(formOptions)

    const submitHandler = async (data) => {
        let d;
        console.log(data);
        if (data.email !== '') {
            d.email = data.email;
        }
        if (data.bio !== '') {
            d.bio = data.bio;
        }
        if (data.email !== '') {
            d.name = data.name;
        }
        try {
            let dat = await axios.put('http://localhost:4000/api/v1/user/update', d);
            console.log(dat);



        } catch (err) {
            console.log(err)
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
        <div className={classes.editProfile}>
            <div className={classes.change}>
                <div className={classes.header}>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" className={classes.profileimage}></img>
                    <h2>Heisenberg</h2>
                </div>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className={classes.fields}>
                        <div className={classes.form}>
                            <p className={classes.name}>Name</p>
                            <p className={classes.bio}>Bio</p>
                            {/* <p className={classes.name}>Location</p> */}
                            <p>Email</p>
                        </div>
                        <div className={classes.forminput}>
                            <input type="text" {...register("name")}></input>
                            <textarea type="text" maxLength="200" {...register("bio")}></textarea>
                            {/* <input type="text" ></input> */}
                            <input type="email" {...register("email")}></input>
                        </div>
                    </div>
                    <div className={classes.footer}>
                        <button type='submit' className={classes.button}>Save Changes</button>
                        <p className={classes.password} onClick={() => { setChange(2) }}>Change Password</p>
                        <p className={classes.email} onClick={() => { setChange(1) }}>Change info</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangeDetails;