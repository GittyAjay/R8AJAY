import React from 'react'
import '../Styles/about.scss';
import normalImg from '../assets/profile.jpg'
import darkImg from '../assets/greyprofile.jpg'
function About(props: { color: String }) {
    return (
        <>

            {props.color == "black" ? <div className="about-container-dark">
                <img src={darkImg} style={{ objectFit: 'contain', maxHeight: '30%', maxWidth: '40%' }} />
                <div className="bio">
                    <div className="bio1">
                        <p style={{ color: 'white', fontSize: 25, fontFamily: 'Poppins, sans-serif' }}>Ajay & Developer</p>
                        <p style={{ color: 'white', maxWidth: 600, fontFamily: 'Poppins, sans-serif' }}>
                            Hello, I am a creative photographer based in New York and happy to travel all over Europe to capture your big day in candid and authentic photos. I will create a lasting memory of the people.
                        </p>
                        <button className="learn-more-btn">Learn More</button>
                    </div>
                    <div className="bio2">
                        <div className="item">
                            <p style={{ color: 'white', fontSize: 20, fontFamily: 'Poppins, sans-serif', paddingRight: 20 }}>Birthday</p>
                            <p style={{ color: 'white', maxWidth: 600, fontFamily: 'Poppins, sans-serif' }}>10.11.1998</p>
                        </div>
                        <div className="item">
                            <p style={{ color: 'white', fontSize: 20, fontFamily: 'Poppins, sans-serif', paddingRight: 20 }}>Age</p>
                            <p style={{ color: 'white', maxWidth: 600, fontFamily: 'Poppins, sans-serif' }}>22</p>
                        </div>
                        <div className="item">
                            <p style={{ color: 'white', fontSize: 20, fontFamily: 'Poppins, sans-serif', paddingRight: 20 }}>Email</p>
                            <p style={{ color: 'white', maxWidth: 600, fontFamily: 'Poppins, sans-serif' }}>Rightmajay@gmail.com</p>
                        </div>
                        <div className="item">
                            <p style={{ color: 'white', fontSize: 20, fontFamily: 'Poppins, sans-serif', paddingRight: 20 }}>Phone</p>
                            <p style={{ color: 'white', maxWidth: 600, fontFamily: 'Poppins, sans-serif' }}>+91 6392363003</p>
                        </div>
                        <div className="item">
                            <p style={{ color: 'white', fontSize: 20, fontFamily: 'Poppins, sans-serif', paddingRight: 20 }}>Study</p>
                            <p style={{ color: 'white', maxWidth: 600, fontFamily: 'Poppins, sans-serif' }}>G.C.E.T</p>
                        </div>
                    </div>

                </div>

            </div> :
                <div className="about-container-normal">
                    <img src={darkImg} style={{ objectFit: 'contain', maxHeight: '30%', maxWidth: '40%' }} />
                    <div className="bio">
                        <div className="bio1">
                            <p style={{ color: 'black', fontSize: 25, fontFamily: 'Poppins, sans-serif' }}>Ajay & Developer</p>
                            <p style={{ color: 'black', maxWidth: 600, fontFamily: 'Poppins, sans-serif' }}>
                                Hello, I am a creative photographer based in New York and happy to travel all over Europe to capture your big day in candid and authentic photos. I will create a lasting memory of the people.
                            </p>
                            <button className="learn-more-btn">Learn More</button>
                        </div>
                        <div className="bio2">
                            <div className="item">
                                <p style={{ color: 'black', fontSize: 20, fontFamily: 'Poppins, sans-serif', paddingRight: 20 }}>Birthday</p>
                                <p style={{ color: 'black', maxWidth: 600, fontFamily: 'Poppins, sans-serif' }}>10.11.1998</p>
                            </div>
                            <div className="item">
                                <p style={{ color: 'black', fontSize: 20, fontFamily: 'Poppins, sans-serif', paddingRight: 20 }}>Age</p>
                                <p style={{ color: 'black', maxWidth: 600, fontFamily: 'Poppins, sans-serif' }}>22</p>
                            </div>
                            <div className="item">
                                <p style={{ color: 'black', fontSize: 20, fontFamily: 'Poppins, sans-serif', paddingRight: 20 }}>Email</p>
                                <p style={{ color: 'black', maxWidth: 600, fontFamily: 'Poppins, sans-serif' }}>Rightmajay@gmail.com</p>
                            </div>
                            <div className="item">
                                <p style={{ color: 'black', fontSize: 20, fontFamily: 'Poppins, sans-serif', paddingRight: 20 }}>Phone</p>
                                <p style={{ color: 'black', maxWidth: 600, fontFamily: 'Poppins, sans-serif' }}>+91 6392363003</p>
                            </div>
                            <div className="item">
                                <p style={{ color: 'black', fontSize: 20, fontFamily: 'Poppins, sans-serif', paddingRight: 20 }}>Study</p>
                                <p style={{ color: 'black', maxWidth: 600, fontFamily: 'Poppins, sans-serif' }}>G.C.E.T</p>
                            </div>
                        </div>

                    </div>

                </div>
            }
        </>
    )
}

export default About
