import classes from './chatbox.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faMagnifyingGlass, faTrash } from "@fortawesome/free-solid-svg-icons";

const Chatbox = () => {
    return (
        <div className={classes.chatbox}>
            <div className={classes.leftbox}>
                <div className={classes.leftheader}>
                    <div className={classes.inputfield}>
                        <div className={classes.icon}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                        <input className={classes.input} placeholder="Search your conversation"></input>
                    </div>
                </div>
                <div className={classes.leftbody}>
                    <div className={classes.leftbodylist}>
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className={classes.images}></img>
                        <p className={classes.names}>Heisenberg</p>
                    </div>
                    <div className={classes.leftbodylist}>
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className={classes.images}></img>
                        <p className={classes.names}>Heisenberg</p>
                    </div>
                    <div className={classes.leftbodylist}>
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className={classes.images}></img>
                        <p className={classes.names}>Heisenberg</p>
                    </div>
                    <div className={classes.leftbodylist}>
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className={classes.images}></img>
                        <p className={classes.names}>Heisenberg</p>
                    </div>
                    <div className={classes.leftbodylist}>
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className={classes.images}></img>
                        <p className={classes.names}>Heisenberg</p>
                    </div>
                    <div className={classes.leftbodylist}>
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className={classes.images}></img>
                        <p className={classes.names}>Heisenberg</p>
                    </div>
                    <div className={classes.leftbodylist}>
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className={classes.images}></img>
                        <p className={classes.names}>Heisenberg</p>
                    </div>
                    <div className={classes.leftbodylist}>
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className={classes.images}></img>
                        <p className={classes.names}>Heisenberg</p>
                    </div>
                    <div className={classes.leftbodylist}>
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className={classes.images}></img>
                        <p className={classes.names}>Heisenberg</p>
                    </div>
                    <div className={classes.leftbodylist}>
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className={classes.images}></img>
                        <p className={classes.names}>Heisenberg</p>
                    </div>
                    <div className={classes.leftbodylist}>
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className={classes.images}></img>
                        <p className={classes.names}>Heisenberg</p>
                    </div>
                    <div className={classes.leftbodylist}>
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className={classes.images}></img>
                        <p className={classes.names}>Heisenberg</p>
                    </div>
                </div>

            </div>
            <div className={classes.rightbox}>
                <div className={classes.rightheader}>
                    <div className={classes.profile}>
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className={classes.image}></img>

                        <div className={classes.status}>
                            <p className={classes.name}>Heisenberg</p>
                            <p className={classes.stats}>offline</p>
                        </div>

                    </div>

                </div>
                <div className={classes.rightbody}>
                    <p className={classes.received}>hello</p>
                    <p className={classes.sent}>hi  <FontAwesomeIcon icon={faTrash} className={classes.trash} ></FontAwesomeIcon></p>
                    <p className={classes.received}>hello</p>
                    <p className={classes.sent}>hi  <FontAwesomeIcon icon={faTrash} className={classes.trash} ></FontAwesomeIcon></p>
                    <p className={classes.received}>hello</p>
                    <p className={classes.sent}>hi  <FontAwesomeIcon icon={faTrash} className={classes.trash} ></FontAwesomeIcon></p>
                    <p className={classes.received}>hello</p>
                    <p className={classes.sent}>hi  <FontAwesomeIcon icon={faTrash} className={classes.trash} ></FontAwesomeIcon></p>
                    <p className={classes.received}>hello</p>
                    <p className={classes.sent}>hi  <FontAwesomeIcon icon={faTrash} className={classes.trash} ></FontAwesomeIcon></p>
                    <p className={classes.received}>hello</p>
                    <p className={classes.sent}>hi  <FontAwesomeIcon icon={faTrash} className={classes.trash} ></FontAwesomeIcon></p>
                    <p className={classes.received}>hello</p>
                    <p className={classes.sent}>hi  <FontAwesomeIcon icon={faTrash} className={classes.trash} ></FontAwesomeIcon></p>
                    <p className={classes.received}>hello</p>
                    <p className={classes.sent}>hi  <FontAwesomeIcon icon={faTrash} className={classes.trash} ></FontAwesomeIcon></p>
                    <p className={classes.received}>hello</p>
                    <p className={classes.sent}>hi  <FontAwesomeIcon icon={faTrash} className={classes.trash} ></FontAwesomeIcon></p>
                    <p className={classes.received}>hello</p>
                    <p className={classes.sent}>hi  <FontAwesomeIcon icon={faTrash} className={classes.trash} ></FontAwesomeIcon></p>
                </div>
                <div className={classes.rightfooter}>
                    <div className={classes.inputfield}>
                        <input className={classes.input} placeholder="Type your message"></input>
                        <div className={classes.icon}>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Chatbox