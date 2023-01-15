import classes from './changeDetails.module.css';
const ChangeDetails = ({ setChange }) => {
    return (
        <div className={classes.editProfile}>
            <div className={classes.change}>
                <div className={classes.header}>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" className={classes.profileimage}></img>
                    <h2>Heisenberg</h2>
                </div>
                <form >
                    <div className={classes.fields}>
                        <div className={classes.form}>
                            <p className={classes.name}>Name</p>
                            <p className={classes.bio}>Bio</p>
                            <p className={classes.name}>Location</p>
                            <p>Email</p>
                        </div>
                        <div className={classes.forminput}>
                            <input type="text" ></input>
                            <textarea type="text"></textarea>
                            <input type="text" ></input>
                            <input type="email" ></input>
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