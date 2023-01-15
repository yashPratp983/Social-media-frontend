import { Dialog, Box, Typography, List, ListItem, styled } from '@mui/material';
import { useOpenDialog } from '../../contexts/openFollowerDialog';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import classes from './followersDialog.module.css'

const dialogStyle = {
    width: '350px',
    height: '400px',
}

const Image = styled('img')({
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px'

})

const Header = styled(Box)`
    border-bottom: 1px solid lightgray;
    padding: 10px;
    text-align:left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    `
const Follower = styled(Box)`
  padding: 10px;
    text-align:left;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const FollowerList = styled(Box)`
display: flex;
align-items: center;
`

const Followers = () => {
    const { opendialog, setOpendialog } = useOpenDialog();
    return (
        <Dialog open={opendialog} PaperProps={{ sx: dialogStyle }} onClose={() => { setOpendialog(false) }}>
            <Header>
                <Typography>Followers</Typography>
                <FontAwesomeIcon icon={faXmark} onClick={() => { setOpendialog(false) }} className={classes.xmark}></FontAwesomeIcon>
            </Header>
            <Follower>
                <FollowerList>
                    <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"></Image>
                    <Typography>Heisenberg</Typography>
                </FollowerList>
                <Box>
                    <button className={classes.button}>Remove</button>
                </Box>
            </Follower>
            <Follower>
                <FollowerList>
                    <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"></Image>
                    <Typography>Heisenberg</Typography>
                </FollowerList>
                <Box>
                    <button className={classes.button}>Remove</button>
                </Box>
            </Follower>
            <Follower>
                <FollowerList>
                    <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"></Image>
                    <Typography>Heisenberg</Typography>
                </FollowerList>
                <Box>
                    <button className={classes.button}>Remove</button>
                </Box>
            </Follower>
            <Follower>
                <FollowerList>
                    <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"></Image>
                    <Typography>Heisenberg</Typography>
                </FollowerList>
                <Box>
                    <button className={classes.button}>Remove</button>
                </Box>
            </Follower>
            <Follower>
                <FollowerList>
                    <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"></Image>
                    <Typography>Heisenberg</Typography>
                </FollowerList>
                <Box>
                    <button className={classes.button}>Remove</button>
                </Box>
            </Follower>
            <Follower>
                <FollowerList>
                    <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"></Image>
                    <Typography>Heisenberg</Typography>
                </FollowerList>
                <Box>
                    <button className={classes.button}>Remove</button>
                </Box>
            </Follower>
            <Follower>
                <FollowerList>
                    <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"></Image>
                    <Typography>Heisenberg</Typography>
                </FollowerList>
                <Box>
                    <button className={classes.button}>Remove</button>
                </Box>
            </Follower>
            <Follower>
                <FollowerList>
                    <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"></Image>
                    <Typography>Heisenberg</Typography>
                </FollowerList>
                <Box>
                    <button className={classes.button}>Remove</button>
                </Box>
            </Follower>
            <Follower>
                <FollowerList>
                    <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"></Image>
                    <Typography>Heisenberg</Typography>
                </FollowerList>
                <Box>
                    <button className={classes.button}>Remove</button>
                </Box>
            </Follower>
            <Follower>
                <FollowerList>
                    <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"></Image>
                    <Typography>Heisenberg</Typography>
                </FollowerList>
                <Box>
                    <button className={classes.button}>Remove</button>
                </Box>
            </Follower>
        </Dialog>
    )
}

export default Followers;