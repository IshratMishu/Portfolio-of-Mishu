import { FaWhatsapp } from "react-icons/fa";
import { MdLocationPin, MdOutlineMarkEmailRead } from "react-icons/md";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { Typewriter } from "react-simple-typewriter";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_6e0sqnz', 'template_9pu4yka', form.current, {
                publicKey: 'x4O8mT1iEdQeFypa3',
            })
            .then(
                () => {
                    Swal.fire({
                        color: '#ffffff',
                        title: 'Success!',
                        text: 'Your message has been sent successfully.',
                        icon: 'success',
                        background: '#ac859e',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2e2c39'
                    });
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="mx-5 mb-24" data-aos="fade-up"
            data-aos-duration="3000">
            <h2 className="text-center mt-16 text-4xl md:text-5xl mb-16">Let's
                <Typewriter
                    words={[' Talk!']}
                    loop={100}
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />🤝</h2>
            <div className="flex flex-col-reverse md:flex-row gap-16 items-center">
                <div className="md:w-1/2 w-auto md:mx-auto mx-5">
                    <p className="text-balance mb-5">I would love to hear from you! Whether you have a question, an opportunity, or just want to say hi, feel free to reach out. <br /> You can contact me via:</p>
                    <div className="flex items-center gap-2 mt-4"><FaWhatsapp className="border border-[#ac859e] shadow-sm shadow-[#2e2c39] text-xl rounded-md text-white bg-[#ac859e]" /> +880 1640 724013</div>
                    <div className="flex items-center gap-2 mt-2"><MdOutlineMarkEmailRead className="border border-[#ac859e] shadow-sm shadow-[#2e2c39] text-xl rounded-md text-white bg-[#ac859e]" /> ishratjahan0425@gmail.com</div>
                    <div className="flex items-center gap-2 mt-2"><MdLocationPin className="border border-[#ac859e] shadow-sm shadow-[#2e2c39] text-xl rounded-md text-white bg-[#ac859e]" /> Jamalpur, Dhaka, Bangladesh</div>
                    {/* <p className="text-balance mt-4">📌 I’m always excited to connect with fellow developers, potential employers, and anyone interested in my work. Let’s get in touch and create something amazing together!</p> */}
                </div>

                <div className="md:w-1/2 w-auto">
                    <form className="space-y-4" ref={form} onSubmit={sendEmail}>

                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input placeholder="Your Name" className="input input-bordered w-full" required />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered w-full" required />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Message</span>
                            </label>
                            <textarea placeholder="Your Message" className="textarea textarea-bordered w-full" required></textarea>
                        </div>

                        <input type="submit" value="Send Message" className="btn btn-block text-white text-xl md:text-2xl shadow-md shadow-[#2e2c39] border-2 border-[#ac859e] bg-[#2e2c39] rounded-md hover:bg-[#ac859e]" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;