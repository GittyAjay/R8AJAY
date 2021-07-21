import React from 'react'
import "../Styles/home.scss";
import normalImg from '../assets/profile.jpg'
import greyImg from '../assets/greyprofile.jpg'
import { TiSocialLinkedin } from 'react-icons/ti';
import { AiOutlineGithub, AiFillTwitterCircle } from 'react-icons/ai';
import { RiInstagramFill } from 'react-icons/ri';
import { IconContext } from 'react-icons'
import { darkIcons, normalIcons } from '../Values';
function Home(props: { color: String }) {
    return (
        <>

            {
                props.color == "black" ? <div className="home-container-dark">
                    <div className="profile">
                        <img src={greyImg} alt="img" style={{ width: 200, height: 200, borderRadius: 100, objectFit: 'cover' }} />
                        <div className="bio">
                            <h1 className="big-head">AJAY  PANDEY</h1>
                            <p className="intro">Creative Photographer based in New York and happy to travel all over Europe to capture photos.</p>
                            <div className="social">
                                <IconContext.Provider value={darkIcons}>
                                    <AiOutlineGithub className="icon" onClick={res => window.open("https://github.com/GittyAjay", "_blank")} />
                                    <TiSocialLinkedin className="icon" onClick={res => window.open("https://www.linkedin.com/in/ajay-pandey-a45483138/", "_blank")} />
                                    <RiInstagramFill className="icon" onClick={res => window.open("https://www.instagram.com/ajay_kr___/", "_blank")} />
                                    <AiFillTwitterCircle className="icon" onClick={res => window.open("https://twitter.com/im_Ajaypandey", "_blank")} />
                                </IconContext.Provider>
                            </div>
                        </div>

                    </div>
                </div> : <div className="home-container-normal">
                    <div className="profile">
                        <img src={normalImg} alt="img" style={{ width: 200, height: 200, borderRadius: 100, objectFit: 'cover' }} />
                        <div className="bio">
                            <h1 className="big-head">AJAY  PANDEY</h1>
                            <p className="intro">Creative Photographer based in New York and happy to travel all over Europe to capture photos.</p>
                            <div className="social">
                                <IconContext.Provider value={normalIcons}>
                                    <AiOutlineGithub className="icon" onClick={res => window.open("https://github.com/GittyAjay", "_blank")} />
                                    <TiSocialLinkedin className="icon" onClick={res => window.open("https://www.linkedin.com/in/ajay-pandey-a45483138/", "_blank")} />
                                    <RiInstagramFill className="icon" onClick={res => window.open("https://www.instagram.com/ajay_kr___/", "_blank")} />
                                    <AiFillTwitterCircle className="icon" onClick={res => window.open("https://twitter.com/im_Ajaypandey", "_blank")} />
                                </IconContext.Provider>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </>

    )
}

export default Home
