import { AiFillApple } from 'react-icons/ai';
import React from 'react'
import { IconContext } from 'react-icons'
import '../../Styles/sideheader.scss';
function SideHeader(props: { color: string, func: Function }) {
    return (
        <>
            {props.color == "black" ? <div className="side-container-dark">
                <div>
                    <h2 className="font-style head">R8AJAY</h2>
                    <p className="font-style list" onClick={() => props.func("Home")}>Home</p>
                    <p className="font-style list" onClick={() => props.func("About")}>About</p>
                    <p className="font-style list" onClick={() => props.func("Portfolio")}>Portfolio</p>
                    <p className="font-style list" onClick={() => props.func("Blogs")}>Blogs</p>
                    <p className="font-style list" onClick={() => props.func("Contact")}>Contact</p>
                    <div className="footer">
                        <p className="font-style footer-font">@2021 R8AJAY</p>
                        <p className="font-style footer-font">Created by Ajay</p>
                    </div>
                </div>
            </div> : <div className="side-container-normal">
                <div>
                    <h2 className="font-style head">R8AJAY</h2>
                    <p className="font-style list" onClick={() => props.func("Home")}>Home</p>
                    <p className="font-style list" onClick={() => props.func("About")}>About</p>
                    <p className="font-style list" onClick={() => props.func("Portfolio")}>Portfolio</p>
                    <p className="font-style list" onClick={() => props.func("Blogs")}>Blogs</p>
                    <p className="font-style list" onClick={() => props.func("Contact")}>Contact</p>
                    <div className="footer">
                        <p className="font-style footer-font">@2021 R8AJAY</p>
                        <p className="font-style footer-font">Created by Ajay</p>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default SideHeader
