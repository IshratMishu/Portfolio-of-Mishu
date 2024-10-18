import { FaWhatsapp } from "react-icons/fa";
import { MdLocationPin, MdOutlineMarkEmailRead } from "react-icons/md";
import { useEffect } from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

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
        <div className="mx-0 md:mx-10">
            <h2 className="text-center mt-32 text-2xl mb-16">CONTACT ME</h2>
            <div className="flex flex-col md:flex-row justify-between">
                <div className="md:w-1/2 w-auto">
                    <h4 className="text-2xl mb-2">Drop Me a Message</h4>
                    <p className="text-balance">I would love to hear from you! Whether you have a question, <br /> an opportunity, or just want to say hi, feel free to reach out. <br /> You can contact me via:</p>
                    <div className="flex items-center gap-2 mt-4"><FaWhatsapp className="border border-secondary shadow-sm shadow-white text-xl" /> +880 1640 724013</div>
                    <div className="flex items-center gap-2 mt-2"><MdOutlineMarkEmailRead className="border border-secondary shadow-sm shadow-white text-xl" /> ishratjahan0425@gmail.com</div>
                    <div className="flex items-center gap-2 mt-2"><MdLocationPin className="border border-secondary shadow-sm shadow-white text-xl" /> Jamalpur, Dhaka, Bangladesh</div>
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
                                    className="form-input bg-neutral mt-1 block w-full p-2 rounded"
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
                                    className="form-input bg-neutral mt-1 block w-full p-2 rounded"
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
                                    className="form-textarea mt-1 block w-full h-24 p-2 bg-neutral rounded"
                                    placeholder="Your Message"
                                    required
                                />
                            </label>
                        </div>
                        <div className="md:text-right text-center">
                            <button
                                type="submit"
                                value="Send"
                                className="shadow-md shadow-secondary border-2 border-secondary bg-primary hover:bg-neutral font-bold py-2 px-4 rounded">
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