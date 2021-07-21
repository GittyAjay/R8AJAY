import React from 'react'
import '../Styles/contact.scss';
function Blogs(props: { color: String }) {
    const visitedLink = (e: any) => {
        for (let index = 0; index < document.getElementsByTagName("a").length; index++) {
            document.getElementsByTagName("a")[index].style.fontWeight = "normal"
        }
        e.target.style.fontWeight = "bold";
    }
    return (
        <>
            {props.color == "black" ? <div className="contact-container-dark">
                <div className="contact" >
                    <button className="btn">CONTACT</button>
                    <p className="contact-head">Get In Touch</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1804.0713289449766!2d82.96566807593275!3d25.265786071570048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e324947a385c1%3A0x99b8b9b7e47d2b7f!2sVishwakarma%20Nagar%2C%20Mohanpuri%20Colony%2C%20Karaundi%2C%20Varanasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1626860555102!5m2!1sen!2sin" style={{ border: 0, width: 600, height: 600 }} loading="lazy"></iframe>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="email" />
                    <textarea id="txtid" name="txtname" placeholder="message" />
                    <button className="submit__button">submit</button>
                </div>

            </div> : <div className="contact-container-normal">
                <div className="contact" >
                    <button className="btn">CONTACT</button>
                    <p className="contact-head">Get In Touch</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1804.0713289449766!2d82.96566807593275!3d25.265786071570048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e324947a385c1%3A0x99b8b9b7e47d2b7f!2sVishwakarma%20Nagar%2C%20Mohanpuri%20Colony%2C%20Karaundi%2C%20Varanasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1626860555102!5m2!1sen!2sin" style={{ border: 0, width: 600, height: 600 }} loading="lazy"></iframe>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="email" />
                    <textarea id="txtid" name="txtname" placeholder="Message" />
                    <button className="submit__button">submit</button>
                </div>

            </div>}
        </>
    )
}

export default Blogs;
