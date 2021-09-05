import React from 'react'
// import laptop from '../images/laptop.svg'
import logo from '../images/zsahildhillon2.jpeg'
import './About.css'
const About = () => {
    const onCopy = (e) => {
        navigator.clipboard.writeText(e.target.innerText);
        document.querySelector(".about-copy-toast").classList.add("about-copy-toast-call")
        setTimeout(() => {
            document.querySelector(".about-copy-toast").classList.remove("about-copy-toast-call");

        }, 2000)
    }

    return (
        <section className="about-section">
            <div className="about-hero">

                <div className="about-hero-left">
                    <img className="about-blob-big blob-1" src={logo} alt="Blob" />
                </div>
                <div className="about-hero-right">
                    <span className="about-hero-hi-tag">Hi</span>
                    <h1>I am Sahil Dhillon</h1>
                    <p>I am a full stack developer currrently studying in Thapar Institute Patiala, India as a 2nd year engineering student. Designing as a passion I dived into the world of web and now unable to come back.</p>
                    <div className="about-cta">
                        <span className="about-cta-tag">Hire Me!</span>
                        <button className="about-cta-email" onClick={(e) => onCopy(e)}>
                            zsahildhillon@protonmail.com
                        </button>
                    </div>
                    <div className="about-copy-toast">Copied to Clipboard</div>
                </div>
            </div>

            {/* model for more about me */}
            {/* <article className="about-main">
                <h1>More About Me</h1>
                <p className="about-main-p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem sed molestias veniam facere, exercitationem, repudiandae doloremque in natus distinctio unde suscipit at a qui vero tenetur expedita corporis tempore.
                </p>
                <p className="about-main-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, repellat quam nemo excepturi dicta hic asperiores facere amet eum, repudiandae nostrum. Eveniet, hic saepe error omnis reiciendis sint debitis officiis dolor aspernatur, fugiat, facere tempore expedita veniam qui vel doloremque ipsa unde. Dolorem quasi pariatur omnis in corporis. Ab, repellat.</p>
                <p className="about-main-p">Temporibus excepturi tempora animi, magni accusamus recusandae amet suscipit nemo saepe debitis expedita facilis natus impedit tenetur dicta porro sed quidem nihil mollitia iste corrupti unde quibusdam magnam. Asperiores vitae dolorum nemo quae vero repellat doloremque nam autem quisquam incidunt inventore eveniet quidem voluptatum iusto hic magnam, nisi voluptatibus porro.</p>
            </article> */}

        </section>
    )
}
export default About