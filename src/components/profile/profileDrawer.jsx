import { Drawer, Box, Typography, styled } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex';
import { faRss, faMessage, faVideo, faUserGroup, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { borderBottom } from '@mui/system';
import { useOpenDrawer } from '../../contexts/open-drawer';

const MobileDrawer = () => {
    const { opendrawer, setOpendrawer } = useOpenDrawer();
    const leftBar = {
        position: 'absolute',
        width: '250px',
        minWidth: '200px',
        height: '100%',
        paddingBottom: '4px',
        marginLeft: 'auto',
        zIndex: 1000000,
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

    const Section2 = styled(Typography)`
    font-size:20px;
    padding-left:25px;
    padding-bottom:30px;
    direction:'ltr'
    `

    return (
        <Drawer anchor='right' open={opendrawer} onClose={() => { setOpendrawer(false) }} PaperProps={{
            sx: leftBar, elevation: 24
        }}   >
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
                <Section2>Online Friends</Section2>
                <Friends>
                    <span style={{ position: "relative" }}><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" ></img><div style={{ width: "15px", height: "15px", borderRadius: "50%", background: "green", position: 'absolute', top: '23px', left: '22px' }}></div></span>
                    <Typography>Heisenberg</Typography>
                </Friends>
                <Friends>
                    <span style={{ position: "relative" }}><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" ></img><div style={{ width: "15px", height: "15px", borderRadius: "50%", background: "green", position: 'absolute', top: '23px', left: '22px' }}></div></span>
                    <Typography>Heisenberg</Typography>
                </Friends>
                <Friends>
                    <span style={{ position: "relative" }}><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" ></img><div style={{ width: "15px", height: "15px", borderRadius: "50%", background: "green", position: 'absolute', top: '23px', left: '22px' }}></div></span>
                    <Typography>Heisenberg</Typography>
                </Friends>
                <Friends>
                    <span style={{ position: "relative" }}><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" ></img><div style={{ width: "15px", height: "15px", borderRadius: "50%", background: "green", position: 'absolute', top: '23px', left: '22px' }}></div></span>
                    <Typography>Heisenberg</Typography>
                </Friends>
                <Friends>
                    <span style={{ position: "relative" }}><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" ></img><div style={{ width: "15px", height: "15px", borderRadius: "50%", background: "green", position: 'absolute', top: '23px', left: '22px' }}></div></span>
                    <Typography>Heisenberg</Typography>
                </Friends>
                <Friends>
                    <span style={{ position: "relative" }}><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" ></img><div style={{ width: "15px", height: "15px", borderRadius: "50%", background: "green", position: 'absolute', top: '23px', left: '22px' }}></div></span>
                    <Typography>Heisenberg</Typography>
                </Friends>
                <Friends>
                    <span style={{ position: "relative" }}><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" ></img><div style={{ width: "15px", height: "15px", borderRadius: "50%", background: "green", position: 'absolute', top: '23px', left: '22px' }}></div></span>
                    <Typography>Heisenberg</Typography>
                </Friends>
                <Friends>
                    <span style={{ position: "relative" }}><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" ></img><div style={{ width: "15px", height: "15px", borderRadius: "50%", background: "green", position: 'absolute', top: '23px', left: '22px' }}></div></span>
                    <Typography>Heisenberg</Typography>
                </Friends>
                <Friends>
                    <span style={{ position: "relative" }}><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" ></img><div style={{ width: "15px", height: "15px", borderRadius: "50%", background: "green", position: 'absolute', top: '23px', left: '22px' }}></div></span>
                    <Typography>Heisenberg</Typography>
                </Friends>
                <Friends>
                    <span style={{ position: "relative" }}><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" ></img><div style={{ width: "15px", height: "15px", borderRadius: "50%", background: "green", position: 'absolute', top: '23px', left: '22px' }}></div></span>
                    <Typography>Heisenberg</Typography>
                </Friends>
                <Friends>
                    <span style={{ position: "relative" }}><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" ></img><div style={{ width: "15px", height: "15px", borderRadius: "50%", background: "green", position: 'absolute', top: '23px', left: '22px' }}></div></span>
                    <Typography>Heisenberg</Typography>
                </Friends>
            </Component2>


        </Drawer>
    )
}

export default MobileDrawer;