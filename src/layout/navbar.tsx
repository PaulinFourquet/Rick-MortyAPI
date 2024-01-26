import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

const Navbar = () => {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '168px',
        height: '57px',
        borderRadius: '50px',
        border: '1px solid #0090A3',
        background: '#00B2CA',
        flexShrink: 0,
        zIndex: 1000,
    };

    const svgStyle = {
        display: 'flex',
        width: '37px',
        height: '37px',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5px',
        flexShrink: 0,
    };

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/home');
    };

    const handleEpisodesClick = () => {
        navigate('/episodes');
    };

    return (
        <div style={containerStyle}>
            <AppBar position="static" style={{ width: '100%', height: '100%', padding: 0, borderRadius: '50px', overflow: 'hidden' }}>
                <Toolbar>
                    <IconButton edge="start" aria-label="menu" onClick={handleHomeClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" style={svgStyle} fill="none" viewBox="0 0 37 37">
                            <path d="M32.375 29.2917V18.9116C32.375 18.0752 32.2048 17.2475 31.8749 16.4789C31.5449 15.7103 31.062 15.0169 30.4556 14.4408L20.6244 5.10292C20.0514 4.55854 19.2912 4.255 18.5008 4.255C17.7104 4.255 16.9502 4.55854 16.3771 5.10292L6.54437 14.4408C5.93796 15.0169 5.45509 15.7103 5.12512 16.4789C4.79516 17.2475 4.625 18.0752 4.625 18.9116V29.2917C4.625 30.1094 4.94985 30.8937 5.52809 31.4719C6.10632 32.0502 6.89058 32.375 7.70833 32.375H29.2917C30.1094 32.375 30.8937 32.0502 31.4719 31.4719C32.0501 30.8937 32.375 30.1094 32.375 29.2917Z" stroke="#0090A3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </IconButton>
                    <IconButton edge="end" aria-label="notifications" onClick={handleEpisodesClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" style={svgStyle} fill="none" viewBox="0 0 36 36">
                            <path fillRule="evenodd" clipRule="evenodd" d="M24.8571 28.2857V18C24.8571 17.0907 24.4959 16.2186 23.8529 15.5756C23.21 14.9327 22.3379 14.5714 21.4286 14.5714H6C5.09069 14.5714 4.21862 14.9327 3.57563 15.5756C2.93265 16.2186 2.57143 17.0907 2.57143 18V28.2857C2.57143 29.195 2.93265 30.0671 3.57563 30.7101C4.21862 31.3531 5.09069 31.7143 6 31.7143H21.4286C22.3379 31.7143 23.21 31.3531 23.8529 30.7101C24.4959 30.0671 24.8571 29.195 24.8571 28.2857Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M28.2857 28.2857V16.2943C28.2857 14.9303 27.7439 13.6222 26.7794 12.6577C25.8149 11.6933 24.5068 11.1514 23.1429 11.1514H23.1343L7.71428 11.1789" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M31.7143 24.8571V14.5834C31.7143 12.7648 30.9918 11.0207 29.7059 9.7347C28.4199 8.44873 26.6758 7.72629 24.8571 7.72629H24.8451L11.1429 7.74857" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;