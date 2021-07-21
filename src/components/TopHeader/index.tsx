import React from 'react'
import { IconContext } from 'react-icons'
import '../../Styles/topheader.scss';
import { AiFillHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { RiFileList3Fill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import { normalIcons } from '../../Values/index'
function TopHeader(props: { color: string, func: Function }) {
    return (
        <>
            <IconContext.Provider value={normalIcons}>
                <div className="top-container">
                    <div>
                        <h2 className="font-style top-head">R8AJAY</h2>
                    </div>
                    <div className="nav">
                        <AiFillHome className="icon" onClick={() => props.func("Home")} />
                        <FaUserAlt className="icon" onClick={() => props.func("About")} />
                        <BsFillBriefcaseFill className="icon" onClick={() => props.func("Portfolio")} />
                        <RiFileList3Fill className="icon" onClick={() => props.func("Blogs")} />
                        <MdEmail className="icon" onClick={() => props.func("Contact")} />
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default TopHeader
