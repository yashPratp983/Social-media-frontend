import classes from './comments.module.css'
const Comments = () => {
    const submitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <div className={classes.comments}>
            <form className={classes.form} onSubmit={submitHandler}>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" className={classes.images}></img>
                <input placeholder="Add a comment" className={classes.inputfield}></input>
            </form>

            {
                // comments.map((comment) => {
                //     return (
                //         <div>
                //             <img src={comment.profile}></img>
                //             <p>{comment.name}</p>
                //             <p>{comment.comment}</p>
                //         </div>
                //     )
            }
            <div className={classes.profile}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7sBbNy3szqtZSStWsRJ_nCnEr10MDl5FKw&usqp=CAU" className={classes.images}></img>
                <p style={{ paddingLeft: '10px' }}>Heisenberg</p>
                <p style={{ marginLeft: 'auto' }}>15 mins ago</p>
            </div>
            <div className={classes.content}>
                <p>JHIBUIBBBBBBBBHIUGUTFUYGUTFRUTVGBYUHVBGYUGFVT5FYUGVHJVTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUJHB,,,,,,,,,,,,,,,,,,,G G G G G G G G G G G G G G G G G G G G G G G G G G G G BUIUHJNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNUJHNUJHNUJHNUJHNUJHNUJHNUJHNUJHNUJHNUJHNUJHNJ</p>
            </div>
            <div className={classes.profile}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7sBbNy3szqtZSStWsRJ_nCnEr10MDl5FKw&usqp=CAU" className={classes.images}></img>
                <p style={{ paddingLeft: '10px' }}>Heisenberg</p>
                <p style={{ marginLeft: 'auto' }}>15 mins ago</p>
            </div>
            <div className={classes.content}>
                <p>JHIBUIBBBBBBBBHIUGUTFUYGUTFRUTVGBYUHVBGYUGFVT5FYUGVHJVTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUJHB,,,,,,,,,,,,,,,,,,,G G G G G G G G G G G G G G G G G G G G G G G G G G G G BUIUHJNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNUJHNUJHNUJHNUJHNUJHNUJHNUJHNUJHNUJHNUJHNUJHNJ</p>
            </div>
            <div className={classes.profile}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7sBbNy3szqtZSStWsRJ_nCnEr10MDl5FKw&usqp=CAU" className={classes.images}></img>
                <p style={{ paddingLeft: '10px' }}>Heisenberg</p>
                <p style={{ marginLeft: 'auto' }}>15 mins ago</p>
            </div>
            <div className={classes.content}>
                <p>JHIBUIBBBBBBBBHIUGUTFUYGUTFRUTVGBYUHVBGYUGFVT5FYUGVHJVTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUJHB,,,,,,,,,,,,,,,,,,,G G G G G G G G G G G G G G G G G G G G G G G G G G G G BUIUHJNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNUJHNUJHNUJHNUJHNUJHNUJHNUJHNUJHNUJHNUJHNUJHNJ</p>
            </div>
            <div className={classes.profile}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7sBbNy3szqtZSStWsRJ_nCnEr10MDl5FKw&usqp=CAU" className={classes.images}></img>
                <p style={{ paddingLeft: '10px' }}>Heisenberg</p>
                <p style={{ marginLeft: 'auto' }}>15 mins ago</p>
            </div>
            <div className={classes.content}>
                <p>JHIBUIBBBBBBBBHIUGUTFUYGUTFRUTVGBYUHVBGYUGFVT5FYUGVHJVTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUJHB,,,,,,,,,,,,,,,,,,,G G G G G G G G G G G G G G G G G G G G G G G G G G G G BUIUHJNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNUJHNUJHNUJHNUJHNUJHNUJHNUJHNUJHNUJHNUJHNUJHNJ</p>
            </div>
            <div className={classes.profile}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7sBbNy3szqtZSStWsRJ_nCnEr10MDl5FKw&usqp=CAU" className={classes.images}></img>
                <p style={{ paddingLeft: '10px' }}>Heisenberg</p>
                <p style={{ marginLeft: 'auto' }}>15 mins ago</p>
            </div>
            <div className={classes.content}>
                <p>JHIBUIBBBBBBBBHIUGUTFUYGUTFRUTVGBYUHVBGYUGFVT5FYUGVHJVTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUTUJHB,,,,,,,,,,,,,,,,,,,G G G G G G G G G G G G G G G G G G G G G G G G G G G G BUIUHJNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNUJHNUJHNUJHNUJHNUJHNUJHNUJHNUJHNUJHNUJHNUJHNJ</p>
            </div>

        </div >
    )
}

export default Comments