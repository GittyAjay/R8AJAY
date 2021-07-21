import React from 'react'
import '../Styles/portfolio.scss';
function Portfolio(props: { color: String }) {
    const visitedLink = (e: any) => {
        for (let index = 0; index < document.getElementsByTagName("a").length; index++) {
            document.getElementsByTagName("a")[index].style.fontWeight = "normal"
        }
        e.target.style.fontWeight = "bold";
    }
    return (
        <>
            {props.color == "black" ? <div className="portfolio-container-dark">
                <div className="portfolio" >
                    <div className="option">
                        <button className="btn">PRTFOLIO</button>
                        <p className="port-head">Creative Portfolio</p>
                        <div className="nav-options">
                            <a className="port-head-small" href="#" onClick={visitedLink}>ALL</a>
                            <a className="port-head-small" href="#" onClick={visitedLink}>MOBILE</a>
                            <a className="port-head-small" href="#" onClick={visitedLink}>WEB</a>
                            <a className="port-head-small" href="#" onClick={visitedLink}>DESKTOP</a>
                            <a className="port-head-small" href="#" onClick={visitedLink}>AI</a>
                        </div>
                        <div className="portfolio-grid">
                            <iframe src="https://www.youtube.com/embed/hGY6a6xTJF8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style={{ width: 500, height: 400, marginBottom: 20 }} allowFullScreen></iframe>

                            <iframe src="https://www.youtube.com/embed/4JXNod4hFoA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style={{ width: 500, height: 400, marginBottom: 20 }} allowFullScreen></iframe>

                        </div>

                    </div>

                </div>
            </div> : <div className="portfolio-container-normal">
                <div className="portfolio" >
                    <div className="option">
                        <button className="btn">PRTFOLIO</button>
                        <p className="port-head">Creative Portfolio</p>
                        <div className="nav-options">
                            <a className="port-head-small" href="#" onClick={visitedLink}>ALL</a>
                            <a className="port-head-small" href="#" onClick={visitedLink}>MOBILE</a>
                            <a className="port-head-small" href="#" onClick={visitedLink}>WEB</a>
                            <a className="port-head-small" href="#" onClick={visitedLink}>DESKTOP</a>
                            <a className="port-head-small" href="#" onClick={visitedLink}>AI</a>
                        </div>
                        <div className="portfolio-grid">
                            <iframe src="https://www.youtube.com/embed/hGY6a6xTJF8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style={{ width: 500, height: 400, marginRight: 30, marginBottom: 30 }} allowFullScreen></iframe>

                            <iframe src="https://www.youtube.com/embed/4JXNod4hFoA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style={{ width: 500, height: 400, marginRight: 30, marginBottom: 30 }} allowFullScreen></iframe>


                        </div>

                    </div>

                </div>
            </div>}
        </>
    )
}

export default Portfolio
