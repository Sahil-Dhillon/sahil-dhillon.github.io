import React from 'react'
import { ImSwitch } from 'react-icons/im'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import './Works.css'
const Works = () => {

    // ScrollOut({
    //     targets: '.works-item'
    // })
    const handleHover = (id) => {
        document.getElementById(id).style.display = "block"
    }
    const handleLeave = (id) => {
        document.getElementById(id).style.display = "none"
    }
    const onClicked = (e, id) => {
        // window.open(link, '_blank');
        document.getElementsByClassName("works-item-span")[0].style.color = "var(--text2)";
        document.getElementsByClassName("works-item-span")[1].style.color = "var(--text2)";
        document.getElementsByClassName("works-item-span")[2].style.color = "var(--text2)";
        document.getElementsByClassName("works-item-span")[3].style.color = "var(--text2)";
        document.getElementsByClassName("works-item-span")[4].style.color = "var(--text2)";
        e.target.style.color = "var(--secondary2)";

        document.getElementById("iFrame").style.display = "block";
        document.getElementById("iFrame").src = document.getElementById(id).src;
        document.querySelector('.works-monitor-switch').style.display = "block";
    }
    const switchClick = () => {
        document.getElementsByClassName("works-item-span")[0].style.color = "var(--text2)";
        document.getElementsByClassName("works-item-span")[1].style.color = "var(--text2)";
        document.getElementsByClassName("works-item-span")[2].style.color = "var(--text2)";
        document.getElementsByClassName("works-item-span")[3].style.color = "var(--text2)";
        document.getElementsByClassName("works-item-span")[4].style.color = "var(--text2)";
        document.getElementById("iFrame").style.display = "none";
        document.querySelector('.works-monitor-switch').style.display = "none";
    }
    return (
        <section className="works-section">
            <h1>Works</h1>
            <div className="works-main">
                <div className="works-container-items">

                    <div className="works-item">
                        <span className="works-item-tooltip">Learning Management System for Students
                            <br />
                            <a href="https://sahil-dhillon.github.io/t14/" target="_blank" rel="noreferrer" style={{ color: 'skyblue', float: 'right' }}>Go to website <BsBoxArrowUpRight /> </a>
                        </span>
                        <span className="works-item-span" onClick={(e) => onClicked(e, "iFrame1")} onMouseOver={() => handleHover("iFrame1")} onMouseLeave={() => handleLeave("iFrame1")}>
                            1.
                        </span>
                    </div>
                    <div className="works-item">
                        <span className="works-item-tooltip">A Pixel Perfect Youtube UI Clone
                            <br />
                            <a href="https://sahil-dhillon.github.io/youtube-ui-clone/" target="_blank" rel="noreferrer" style={{ color: 'skyblue', float: 'right' }}>Go to website <BsBoxArrowUpRight /> </a>
                        </span>
                        <span className="works-item-span" onClick={(e) => onClicked(e, "iFrame2")} onMouseOver={() => handleHover("iFrame2")} onMouseLeave={() => handleLeave("iFrame2")}>
                            2.
                        </span>
                    </div>


                    <div className="works-item">
                        <span className="works-item-tooltip">Landing Page Design
                            <br />
                            <a href="https://sahil-dhillon.github.io/sunnyside-agency-landing-page-main/" target="_blank" rel="noreferrer" style={{ color: 'skyblue', float: 'right' }}>Go to website <BsBoxArrowUpRight /> </a>
                        </span>
                        <span className="works-item-span" onClick={(e) => onClicked(e, "iFrame3")} onMouseOver={() => handleHover("iFrame3")} onMouseLeave={() => handleLeave("iFrame3")}>
                            3.
                        </span>
                    </div>
                    <div className="works-item">
                        <span className="works-item-span" >
                            4.
                        </span>
                    </div>
                    <div className="works-item">
                        <span className="works-item-span">
                            5.
                        </span>
                    </div>
                </div>
                <span className="works-vr-bar"></span>

                <div className="works-gallery-container">
                    <div className="works-gallery-bg">
                        <div className="monitor">
                            <iframe id="iFrame" className="works-iframes" src="" frameborder="2" allowFullScreen loading="lazy" title="General"></iframe>
                            <iframe id="iFrame1" className="works-iframes" src="https://sahil-dhillon.github.io/t14/" frameborder="2" allowFullScreen title="General"></iframe>
                            <iframe id="iFrame2" className="works-iframes" src="https://sahil-dhillon.github.io/youtube-ui-clone/" frameborder="2" allowFullScreen loading="lazy" title="General"></iframe>
                            <iframe id="iFrame3" className="works-iframes" src="https://sahil-dhillon.github.io/sunnyside-agency-landing-page-main/" frameborder="2" allowFullScreen loading="lazy" title="General"></iframe>
                            <iframe id="iFrame4" className="works-iframes" src="" frameborder="2" allowFullScreen loading="lazy" title="General"></iframe>
                            <iframe id="iFrame5" className="works-iframes" src="" frameborder="2" allowFullScreen loading="lazy" title="General"></iframe>
                        </div>

                        <ImSwitch className="works-monitor-switch" onClick={switchClick} />
                        {/* <img src={bg} alt="" /> */}
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Works