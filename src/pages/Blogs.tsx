import React from 'react'
import '../Styles/portfolio.scss';
function Blogs(props: { color: String }) {
    React.useEffect(() => {
        const fetchRecord = async () => {
            await fetch('https://blog.devgenius.io/future-mobile-app-development-6ac77fe3a54c').then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
        }
        fetchRecord();

    }, [])
    return (
        <>
            {props.color == "black" ? <div className="portfolio-container-dark">
                <div className="portfolio" >
                    <div className="option">
                        <button className="btn">BLOGS</button>
                        <p className="port-head">Latest Blogs</p>
                        <div className="portfolio-grid">
                            <div className="grid" onClick={res => window.open("https://blog.devgenius.io/future-mobile-app-development-6ac77fe3a54c", "_blank")}>
                                <img src="https://1z1euk35x7oy36s8we4dr6lo-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/zymr8_steps_the_mobile_app_dev_lifecycle_cover.jpg" alt="img" style={{ width: 350, height: 450, objectFit: 'cover' }} />
                                <h3 className="title">Mobile App Development in 2021</h3>
                                {/* <p className="description">segjskgkjsgnjkdkndekjnjng</p> */}
                            </div>
                            <div className="grid" onClick={res => window.open("https://blog.devgenius.io/future-mobile-app-development-6ac77fe3a54c", "_blank")}>
                                <img src="https://miro.medium.com/max/1400/1*EeOM7ygLa1CjVcWOvHVUVg.jpeg" alt="img" style={{ width: 350, height: 450, objectFit: 'cover' }} />
                                <h3 className="title">Relationship with Carrier benefit</h3>
                                {/* <p className="description">segjskgkjsgnjkdkndekjnjng</p> */}
                            </div>
                            <div className="grid" onClick={res => window.open("https://blog.devgenius.io/future-mobile-app-development-6ac77fe3a54c", "_blank")}>
                                <img src="https://miro.medium.com/max/1400/1*rZPXj6sk8iApQ_PCvQYnhQ.png" alt="img" style={{ width: 350, height: 450, objectFit: 'cover' }} />
                                <h3 className="title">Vue as a Magical Tool For Web Developer</h3>
                                {/* <p className="description">segjskgkjsgnjkdkndekjnjng</p> */}
                            </div>
                            <div className="grid" onClick={res => window.open("https://blog.devgenius.io/future-mobile-app-development-6ac77fe3a54c", "_blank")}>
                                <img src="https://miro.medium.com/max/1400/1*qgg4R07GUQnmbnD5jTda6A.png" alt="img" style={{ width: 350, height: 450, objectFit: 'cover' }} />
                                <h3 className="title">Ready To Be Your Own Boss</h3>
                                {/* <p className="description">segjskgkjsgnjkdkndekjnjng</p> */}
                            </div>
                            <div className="grid" onClick={res => window.open("https://rightmajay.medium.com/youngster-marriage-perception-d131333d1fde", "_blank")}>
                                <img src="https://www.brides.com/thmb/RltxTLOFDjmIGl0OB7mTbPGviQ4=/560x420/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__brides__public__brides-services__production__2016__10__24__580e63fefac24a31e1fb13a2_blogs-aisle-say-signs-your-relationship-is-ready-for-marriage-Main-932526ebc23b4145a1af0572e1cecc1b.jpg" alt="img" style={{ width: 350, height: 450, objectFit: 'cover' }} />
                                <h3 className="title">Youngster Marriage Perception</h3>
                                {/* <p className="description">segjskgkjsgnjkdkndekjnjng</p> */}
                            </div>
                        </div>

                    </div>

                </div>
            </div> : <div className="portfolio-container-normal">

                <div className="portfolio" >
                    <div className="option">
                        <button className="btn">BLOGS</button>
                        <p className="port-head">Latest Blogs</p>
                        <div className="portfolio-grid">
                            <div className="grid" onClick={res => window.open("https://blog.devgenius.io/future-mobile-app-development-6ac77fe3a54c", "_blank")}>
                                <img src="https://1z1euk35x7oy36s8we4dr6lo-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/zymr8_steps_the_mobile_app_dev_lifecycle_cover.jpg" alt="img" style={{ width: 350, height: 300, objectFit: 'cover' }} />
                                <h3 className="title">Mobile App Development in 2021</h3>
                                {/* <p className="description">segjskgkjsgnjkdkndekjnjng</p> */}
                            </div>
                            <div className="grid" onClick={res => window.open("https://blog.devgenius.io/relationship-with-carrier-benefit-23addc483758", "_blank")}>
                                <img src="https://miro.medium.com/max/1400/1*EeOM7ygLa1CjVcWOvHVUVg.jpeg" alt="img" style={{ width: 350, height: 450, objectFit: 'cover' }} />
                                <h3 className="title">Relationship with Carrier benefit</h3>
                                {/* <p className="description">segjskgkjsgnjkdkndekjnjng</p> */}
                            </div>
                            <div className="grid" onClick={res => window.open("https://blog.devgenius.io/vue-as-a-magical-tool-for-web-developer-d9a06ed6a811", "_blank")}>
                                <img src="https://miro.medium.com/max/1400/1*rZPXj6sk8iApQ_PCvQYnhQ.png" alt="img" style={{ width: 350, height: 450, objectFit: 'cover' }} />
                                <h3 className="title">Vue as a Magical Tool For Web Developer</h3>
                                {/* <p className="description">segjskgkjsgnjkdkndekjnjng</p> */}
                            </div>
                            <div className="grid" onClick={res => window.open("https://blog.devgenius.io/ready-to-be-your-own-boss-869bc23d1b12", "_blank")}>
                                <img src="https://miro.medium.com/max/1400/1*qgg4R07GUQnmbnD5jTda6A.png" alt="img" style={{ width: 350, height: 450, objectFit: 'cover' }} />
                                <h3 className="title">Ready To Be Your Own Boss</h3>
                                {/* <p className="description">segjskgkjsgnjkdkndekjnjng</p> */}
                            </div>
                            <div className="grid" onClick={res => window.open("https://rightmajay.medium.com/youngster-marriage-perception-d131333d1fde", "_blank")}>
                                <img src="https://www.brides.com/thmb/RltxTLOFDjmIGl0OB7mTbPGviQ4=/560x420/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__brides__public__brides-services__production__2016__10__24__580e63fefac24a31e1fb13a2_blogs-aisle-say-signs-your-relationship-is-ready-for-marriage-Main-932526ebc23b4145a1af0572e1cecc1b.jpg" alt="img" style={{ width: 350, height: 450, objectFit: 'cover' }} />
                                <h3 className="title">Youngster Marriage Perception</h3>
                                {/* <p className="description">segjskgkjsgnjkdkndekjnjng</p> */}
                            </div>
                        </div>

                    </div>

                </div>
            </div>}
        </>
    )
}

export default Blogs;
