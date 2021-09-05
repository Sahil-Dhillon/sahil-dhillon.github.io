import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com'
import { CgShapeZigzag } from 'react-icons/cg'
import React from 'react'
import './Contact.css'
// import growth from '../images/growthpng.png'
const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const ctaClick = () => {
        document.querySelector(".contact-form").classList.toggle("contact-form-display")
        document.querySelector(".contact-quote").classList.toggle("contact-form-display")
    }
    const cancelForm = () => {
        document.querySelector(".contact-form").classList.toggle("contact-form-display")
        document.querySelector(".contact-quote").classList.toggle("contact-form-display")

    }
    const onSubmit = async (data) => {
        const { name, email, subject, message } = data;
        try {
            const templateParams = {
                name,
                email,
                subject,
                message
            };
            await Promise.all([emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
            ), document.querySelector(".contact-form-submit").innerHTML = "Sending..."]);
            // await emailjs.send(
            //     process.env.REACT_APP_SERVICE_ID,
            //     process.env.REACT_APP_TEMPLATE_ID,
            //     templateParams,
            //     process.env.REACT_APP_USER_ID
            // );

            document.querySelector(".contact-form-submit").innerHTML = "Send";
            onSent()
            reset();
        } catch (e) {
            console.log(e);
        }
    };
    const onCopy = () => {
        document.querySelector(".about-copy-toast").innerHTML = "Copied to Clipboard!"
        navigator.clipboard.writeText("zsahildhillon@protonmail.com");
        document.querySelector(".about-copy-toast").classList.add("about-copy-toast-call")
        setTimeout(() => {
            document.querySelector(".about-copy-toast").classList.remove("about-copy-toast-call");

        }, 2000)
    }
    const onSent = () => {
        document.querySelector(".about-copy-toast").innerHTML = "Message Sent!"
        document.querySelector(".about-copy-toast").classList.add("about-copy-toast-call")
        setTimeout(() => {
            document.querySelector(".about-copy-toast").classList.remove("about-copy-toast-call");

        }, 2000)
    }
    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-hero">
                    <div className="contact-textbox">
                        <h1 className="contact-h1">
                            Next Level
                            <CgShapeZigzag className="contact-h1-line" style={{ width: "100%" }} />
                        </h1>
                        <p className="contact-p">
                            Every business who understand the part of web in its development should strive for better user experienced web designs to take their standards to next level.
                        </p>
                    </div>
                    {/* <img src={growth} alt="" /> */}
                    {/* <div className="contact-img">
                    </div> */}
                </div>

                <div className="contact-div">
                    <div className="contact-form">
                        <h1>Message me :)</h1>
                        <div className="contact-form-container">
                            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                                <div className="contact-form-user-info-div">
                                    <div className="contact-form-input-div">

                                        <input type="text" name="name" id="name" className="contact-form-input" placeholder="Name" {...register('name', {
                                            required: { value: true, message: 'Please enter your name' },
                                            maxLength: {
                                                value: 30,
                                                message: 'Please use 30 characters or less'
                                            }
                                        })} />{errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                                    </div>
                                    <div className="contact-form-input-div">

                                        <input type="email" name="email" id="email" className="contact-form-input" placeholder="Email" {...register('email', {
                                            required: true,
                                            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                        })} />
                                        {errors.email && (
                                            <span className='errorMessage'>Please enter a valid email address</span>
                                        )}
                                    </div>
                                </div>
                                <div className="contact-form-user-message-div">
                                    <div className="contact-form-input-div">
                                        <input type="text" name="subject" id="subject" className="contact-form-input" required placeholder="Subject" {...register('subject', {
                                            required: { value: true, message: 'Please enter a subject' },
                                            maxLength: {
                                                value: 75,
                                                message: 'Subject cannot exceed 75 characters'
                                            }
                                        })} />
                                        {errors.subject && (
                                            <span className='errorMessage'>{errors.subject.message}</span>
                                        )}
                                    </div>
                                    <div className="contact-form-input-div">

                                        <textarea type="text" id="message" rows={2}
                                            name='message'
                                            {...register('message', {
                                                required: true
                                            })}
                                            className="contact-form-input" placeholder="Message" />
                                        {errors.message && <span className='errorMessage'>Please enter a message</span>}
                                    </div>
                                </div>
                                <div className="contact-form-btn-div">

                                    <button type="reset" className="contact-form-cancel" onClick={cancelForm}>Cancel</button>
                                    <button type="submit" className="contact-form-submit" >Send</button>
                                </div>
                                <div className="contact-email">
                                    or email me
                                    <span className="contact-email-link" onClick={(e) => onCopy(e)}>here.</span>
                                    <span className="contact-email-tooltip">zsahildhillon@protonmail.com</span>


                                </div>

                            </form>
                        </div>

                    </div>
                    <div className="contact-quote contact-form-display">
                        <h1>
                            Give amusing experience to your visitors with a meticulous <span style={{ borderBottom: "4px solid var(--primary2)" }}>
                                Website Design.
                            </span>
                        </h1>
                        <div className="contact-cta contact-form-display" onClick={ctaClick}>Get in Touch</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact