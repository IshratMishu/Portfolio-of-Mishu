import { FaWhatsapp } from "react-icons/fa";
import { MdLocationPin, MdOutlineMarkEmailRead } from "react-icons/md";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { Typewriter } from "react-simple-typewriter";

const Contact = () => {

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
                        color: 'oklch(var(--nc))',
                        title: 'Success!',
                        text: 'Your message has been sent successfully.',
                        icon: 'success',
                        background: 'oklch(var(--n))',
                        confirmButtonText: 'OK',
                        confirmButtonColor: 'oklch(var(--p))'
                    });
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="mx-5 mb-24">
            <h2 className="text-center mt-16 text-4xl md:text-5xl mb-20">Let's 
            <Typewriter
                    words={[' Talk!']}
                    loop={100}
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />🤝</h2>
            <div className="flex flex-col md:flex-row justify-between">
                <div className="md:w-1/2 w-auto">
                    <p className="text-balance">I would love to hear from you! Whether you have a question, <br /> an opportunity, or just want to say hi, feel free to reach out. <br /> You can contact me via:</p>
                    <div className="flex items-center gap-2 mt-4"><FaWhatsapp className="border border-[#ac859e] shadow-sm shadow-[#2e2c39] text-xl rounded-md text-white bg-[#ac859e]" /> +880 1640 724013</div>
                    <div className="flex items-center gap-2 mt-2"><MdOutlineMarkEmailRead className="border border-[#ac859e] shadow-sm shadow-[#2e2c39] text-xl rounded-md text-white bg-[#ac859e]" /> ishratjahan0425@gmail.com</div>
                    <div className="flex items-center gap-2 mt-2"><MdLocationPin className="border border-[#ac859e] shadow-sm shadow-[#2e2c39] text-xl rounded-md text-white bg-[#ac859e]" /> Jamalpur, Dhaka, Bangladesh</div>
                    <p className="text-balance text-sm mt-4">📌 I’m always excited to connect with fellow developers, potential employers, and anyone interested in my work. Let’s get in touch and create something amazing together!</p>
                </div>
                <div className="md:w-1/2 w-auto mt-10 md:mt-0">
                    <form className="space-y-4" ref={form} onSubmit={sendEmail}>
                        <div>
                            <label className="block mb-1">
                                <span>Name</span>
                                <input
                                    type="text"
                                    name="user_name"
                                    className="form-input placeholder-[#d5d4d6] bg-[#ac859e] mt-1 block w-full p-2 rounded"
                                    placeholder="Your Name"
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label className="block mb-1">
                                <span>Email</span>
                                <input
                                    type="email"
                                    name="user_email"
                                    className="form-input bg-[#ac859e] placeholder-[#d5d4d6] mt-1 block w-full p-2 rounded"
                                    placeholder="Your Email"
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label className="block mb-1">
                                <span>Message</span>
                                <textarea
                                    name="message"
                                    className="form-textarea mt-1 block w-full h-24 p-2 placeholder-[#d5d4d6] bg-[#ac859e] rounded"
                                    placeholder="Your Message"
                                    required
                                />
                            </label>
                        </div>
                        <div className="md:text-right text-center">
                            <button
                                type="submit"
                                value="Send"
                                className="btn text-white text-xl md:text-2xl shadow-md shadow-[#ac859e] border-2 border-[#ac859e] bg-[#2e2c39] rounded-md hover:bg-[#ac859e] hover:border-[#2e2c39]">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;