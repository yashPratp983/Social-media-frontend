import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMessage, faBell, faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import classes from './header.module.scss'
import { useOpenDrawer } from "../../contexts/open-drawer";
import { useNavigate } from "react-router";
import { useAuth } from "../../auth/auth";

const Header = () => {
    const { opendrawerProfile, setOpendrawerProfile } = useOpenDrawer();
    const navigate = useNavigate();
    const auth = useAuth();
    return (
        <div className={classes.header}>
            <div className={classes.heading}>
                <h1>Socialise</h1>
            </div>
            <div className={classes.input}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={classes.search}></FontAwesomeIcon>
                <input className={classes.inputField} placeholder="Search for friend"></input>
            </div>
            <div className={classes.icons}>
                <FontAwesomeIcon icon={faUser} className={classes.user} />
                <FontAwesomeIcon icon={faMessage} className={classes.message} />
                <div className={classes.followNotification}>

                    <FontAwesomeIcon icon={faBell} />
                </div>
            </div>
            <div className={classes.profile} ><img className={classes.image} src={auth.user.user.profilePic.url} onClick={() => { navigate('/profile') }} ></img></div>
            <div className={classes.bars} onClick={() => { setOpendrawerProfile(!opendrawerProfile); console.log(opendrawerProfile) }}><FontAwesomeIcon icon={faBars} /></div>
        </div>
    )
}

export default Header;