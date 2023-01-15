import { Drawer, Box, Typography, styled } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex';
import { faRss, faMessage, faVideo, faUserGroup, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { borderBottom } from '@mui/system';

const LeftBar = () => {
    const leftBar = {
        // position: 'absolute',
        top: '70px',
        width: '210px',
        minWidth: '200px',
        height: '100%',
        paddingBottom: '4px',
        zIndex: 1500,
        marginRight: '10px',
        "&::-webkit-scrollbar": {
            width: '5px'
        },
        "&::-webkit-scrollbar-track": {
            background: '#f1f1f1'
        },
        "&::-webkit-scrollbar-thumb": {
            background: '#888'
        },
        "&::-webkit-scrollbar-thumb:hover": {
            background: '#555'
        },
        display: {
            xs: 'none',
            sm: 'none',
            md: 'block',
            lg: 'block',
            xl: 'block'
        }

    }


    const Section = styled(Box)`
    display:flex;
    padding-top:30px;
    padding-left:25px;
    cursor:pointer;
    `
    const Component = styled(Box)`
    padding-bottom:30px;
    border-bottom:solid 2px grey;
    margin-bottom:30px;
    `
    const Component2 = styled(Box)`
    
    `
    const Friends = styled(Box)`
    display:flex;
    padding-bottom:30px;
    padding-left:25px;
    cursor:pointer;
    align-items:center;
    img{
        width:40px;
        height:40px;
        border-radius:50%;
        margin-right:20px;
    }
    `
    return (
        <Drawer anchor='left' open={true} className='leftBar' BackdropProps={{ invisible: true }} PaperProps={{
            sx: leftBar, elevation: 9,
        }} variant="persistent"  >
            <Component>
                <Section>
                    <FontAwesomeIcon icon={faRss} style={{ paddingRight: '20px', width: '20px' }} />
                    <Typography>Feed</Typography>
                </Section>
                <Section>
                    <FontAwesomeIcon icon={faMessage} style={{ paddingRight: '20px', width: '20px' }} />
                    <Typography>Chats</Typography>
                </Section>
                <Section>
                    <FontAwesomeIcon icon={faVideo} style={{ paddingRight: '20px', width: '20px' }} />
                    <Typography>Videos</Typography>
                </Section>
                <Section>
                    <FontAwesomeIcon icon={faUserGroup} style={{ paddingRight: '20px', width: '20px' }} />
                    <Typography>Groups</Typography>
                </Section>
                <Section>
                    <FontAwesomeIcon icon={faBookmark} style={{ paddingRight: '20px', width: '20px' }} />
                    <Typography>Bookmarks</Typography>
                </Section>
            </Component>
            <Component2>
                <Friends>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"></img>
                    <Typography>Heisenberg</Typography>
                </Friends>
                <Friends>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"></img>
                    <Typography>Heisenberg</Typography>
                </Friends>
                <Friends>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"></img>
                    <Typography>Heisenberg</Typography>
                </Friends>
                <Friends>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"></img>
                    <Typography>Heisenberg</Typography>
                </Friends>
                <Friends>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"></img>
                    <Typography>Heisenberg</Typography>
                </Friends>
                <Friends>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"></img>
                    <Typography>Heisenberg</Typography>
                </Friends>
                <Friends>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"></img>
                    <Typography>Heisenberg</Typography>
                </Friends>
                <Friends>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"></img>
                    <Typography>Heisenberg</Typography>
                </Friends>
                <Friends>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"></img>
                    <Typography>Heisenberg</Typography>
                </Friends>
                <Friends>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"></img>
                    <Typography>Heisenberg</Typography>
                </Friends>
                <Friends>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"></img>
                    <Typography>Heisenberg</Typography>
                </Friends>
            </Component2>
        </Drawer>
    )
}

export default LeftBar;