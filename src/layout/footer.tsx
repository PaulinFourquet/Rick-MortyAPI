import { CSSProperties, useState } from 'react';
import '../fonts.css';

const footerStyle: CSSProperties = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '180px',
    backgroundColor: '#363636',
    zIndex: 1,
    transition: 'height 0.3s ease',
};

const barStyle: CSSProperties = {
    height: '2px',
    backgroundColor: '#00B2CA',
    position: 'absolute',
    bottom: '40%',
    left: '6%',
    right: '6%',
    visibility: 'visible',
};

const paragraphContainerStyle: CSSProperties = {
    position: 'absolute',
    left: '6%',
    right: '6%',
    bottom: '15%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#FFF',
    fontFamily: 'MontserratAlternates, sans-serif',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    visibility: 'visible',
};

const links: CSSProperties = {
    display: 'flex',
    gap: '50px',
    visibility: 'visible',
};

export default function Footer() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <footer
            style={{ ...footerStyle, height: isHovered ? '180px' : '40px' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src="/images/logo.png" alt="Logo" style={{ position: 'absolute', top: 20, left: 100, zIndex: 1, width: '185px', height: '65px' }} />
            <div style={{...barStyle, visibility: isHovered ? 'visible' : 'hidden',}}></div>
            <div style={{...paragraphContainerStyle, visibility: isHovered ? 'visible' : 'hidden',}}>
                <p>RICK AND MORTY DB | ALL RIGHTS RESERVED</p>
                <div style={{...links, visibility: isHovered ? 'visible' : 'hidden',}}>
                    <a href="/home"><p>HOME</p></a>
                    <a href="/episodes"><p>EPISODES</p></a>
                </div>
            </div>
        </footer>
    );
}