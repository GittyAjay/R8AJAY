import React from 'react'
import { IconContext } from 'react-icons'
import '../../Styles/topheader.scss';
import { AiFillHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { RiFileList3Fill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
function TopHeader(props: { color: string, func: Function }) {

    return (
        <>
            <div className="top-container">
                <div>
                    <h2 className="font-style top-head">R8AJAY</h2>
                </div>
                <div className="nav">
                    <AiFillHome className="icon" color="black" size={18} onClick={() => props.func("Home")} />
                    <FaUserAlt className="icon" color="black" size={18} onClick={() => props.func("About")} />
                    <BsFillBriefcaseFill className="icon" color="black" size={18} onClick={() => props.func("Portfolio")} />
                    <RiFileList3Fill className="icon" color="black" size={18} onClick={() => props.func("Blogs")} />
                    <MdEmail className="icon" color="black" size={18} onClick={() => props.func("Contact")} />
                </div>
            </div>
        </>
    )
}

export default TopHeader
