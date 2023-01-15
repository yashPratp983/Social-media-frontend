import { Drawer, Box, Typography, styled } from "@mui/material";

const RightBar = () => {
    const drawerStyle = {
        // position: 'absolute',
        top: '70px',
        width: '210px',
        minWidth: '200px',

        paddingBottom: '4px',
        marginLeft: '10px',

        // direction: 'rtl',
        "&::-webkit-scrollbar": {
            width: '5px',

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

    const Section = styled(Typography)`
    font-size:20px;
    padding-left:25px;
    padding-top:30px;
    padding-bottom:30px;
    direction:'ltr'
    `

    const Component2 = styled(Box)`
    direction:'ltr'
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
        <Drawer anchor='right' open={true} BackdropProps={{ invisible: true }} variant='persistent' PaperProps={{ sx: drawerStyle, elevation: 9 }}  >
            <Section>Online Friends</Section>
            <Component2>
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
        </Drawer >

    );
}

export default RightBar;