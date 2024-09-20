import React, { useState } from 'react';
import workspaceImage from './images/img1.jpeg';
import cloudCrusader from './images/img4.jpeg';
import desktopDefender from './images/img3.jpeg';
import capedCoder from './images/img5.jpg';
import backgroundSurround from './images/background-surround.jpeg';
import './batscript.css'
import html2canvas from 'html2canvas';

const BatmanDayPoster = () => {
    const downloadPageAsImage = () => {
        const element = document.body;  // or any other element you want to capture
        html2canvas(element).then((canvas) => {
            const image = canvas.toDataURL("image/png");
            const link = document.createElement('a');
            link.download = 'batman-day-poster.png';
            link.href = image;
            link.click();
        });
    };

    return (
        <div className="relative text-white font-sans min-h-screen">
            <svg className="hidden">
                <filter id="comic-shadow">
                    <feDropShadow dx="2" dy="2" stdDeviation="0" floodColor="#000" floodOpacity="0.5"/>
                </filter>
                <filter id="wavy">
                    <feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="5" result="turbulence"/>
                    <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="3" xChannelSelector="R"
                                       yChannelSelector="G"/>
                </filter>
            </svg>

            <div
                className="absolute inset-0 bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `url(${backgroundSurround})`,
                    backgroundPosition: 'center',
                    zIndex: -1,
                }}
            ></div>

            <div className="p-8 max-w-4xl mx-auto bg-gray-900 bg-opacity-80 border-8 border-yellow-400">
                <h1 className="text-6xl font-bold text-center mb-8 text-yellow-400 comic-title">
                    Gotham's Geekiest: My Bat-Tech Saga!
                </h1>

                <div className="grid grid-cols-2 gap-8 mb-8">
                    <BatPanel title="Bat-Cave 2.0" description="POW! Where WB magic meets my coding lair!" blastWord="POW!">
                        <div className="w-full h-48 relative overflow-hidden">
                            <img
                                src={workspaceImage}
                                alt="Workspace with WB logo and Batman figurine"
                                className="absolute inset-0 w-full h-full object-cover object-center transform -translate-x-1 -translate-y-1/5"
                            />
                        </div>
                    </BatPanel>

                    <BatPanel title="Desktop Defender" description="BIFF! My trusty sidekick, guarding against bugs!" blastWord="BIFF!">
                        <div className="w-full h-48 relative overflow-hidden">
                            <img
                                src={desktopDefender}
                                alt="Close-up of Batman figurine"
                                className="absolute inset-0 w-full h-full object-cover object-center transform -translate-x-1/5 -translate-y-1/5"
                            />
                        </div>
                    </BatPanel>

                    <BatPanel title="Cloud Crusader!" description="ZAP! Bringing Bat-skills to WB Discovery's cloud!" blastWord="ZAP!">
                        <div className="w-full h-48 relative overflow-hidden">
                            <img
                                src={cloudCrusader}
                                alt="LinkedIn profile"
                                className="absolute inset-0 w-full h-full object-cover object-top -translate-x-1/5 -translate-y-1/5"
                            />
                        </div>
                    </BatPanel>

                    <BatPanel title="Caped Coder" description="WHAM! Coding by day, Bat-signaling by night!" blastWord="WHAM!">
                        <div className="w-full h-48 relative overflow-hidden">
                            <img
                                src={capedCoder}
                                alt="Gaurav in Batman t-shirt"
                                className="absolute inset-0 w-full h-full object-cover object-top"
                            />
                        </div>
                    </BatPanel>
                </div>

                <div className="bg-yellow-400 text-black p-6 rounded-lg transform rotate-2">
                    <h2 className="text-3xl font-bold mb-2">
                        Bat-Tech in Action: Warner Bros. Discovery
                    </h2>
                    <p className="text-lg">
                        As a Senior Software Engineer, I'm bringing Gotham-level innovation to WB every day!
                    </p>
                </div>

                <footer className="mt-12 text-center text-lg italic">
                    <p className="mb-2">From dark IDEs to streaming dreams, the Bat-spirit drives my code!</p>
                    <p className="font-bold text-yellow-400">Biggest Batman Fan At WBD Contest</p>
                </footer>

                <button
                    onClick={downloadPageAsImage}
                    className="mt-4 bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300"
                >
                    Download Poster
                </button>
            </div>
        </div>
    );
};

const BatPanel = ({title, description, children, blastWord}) => {
    const [isBlasting, setIsBlasting] = useState(false);

    const handleImageClick = () => {
        setIsBlasting(true);
        setTimeout(() => setIsBlasting(false), 1000); // Reset after 1 second
    };

    return (
        <div className="bg-gray-800 p-6 rounded-lg relative">
            <div className="comic-chapter-wrapper">
                <h2 className="comic-chapter mb-4">{title}</h2>
                <div className="chime-effect"></div>
            </div>
            <div className="bg-gray-700 mb-4 rounded overflow-hidden relative" onClick={handleImageClick}>
                {children}
                {isBlasting && (
                    <div className="blast-effect">
                        <span className="blast-text">{blastWord}</span>
                    </div>
                )}
            </div>
            <div className="hover-effect">
                <div className="cloud-bubble mt-4">
                    <p className="comic-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BatmanDayPoster;