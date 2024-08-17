
import axios from "axios";
import { FaLinkedin, FaGithub, FaTwitter, FaReddit } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EmailSection = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        
        try {
            toast("sending email....")
            const res = await axios.post('https://portfolio-web-ji8e.onrender.com/sendemail', data);
            console.log(res)
            if (res.status === 200) {
                toast.success('Email sent successfully!');
            }
        } catch (error) {
            toast.error('Failed to send email. Please try again.', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };
    

    return (
        <section
            id="contact"
            className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative px-10 bg-white rounded-2xl"
        >
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="z-10 space-y-3">
                <h5 className="text-2xl font-bold text-[#EDA751] my-2">
                    Let&apos;s Connect
                </h5>
                <p className="text-black mb-4 max-w-md">
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is always
                    open. Whether you have a question or just want to say hi, I&apos;ll
                    try my best to get back to you! <br></br>
                    <br />
                    <span className="text-xl font-semibold text-gray-500"> chistym17@gmail.com
                    </span>
                </p>
                <div className="flex space-x-4 mt-6">
                    <a
                        href="https://www.linkedin.com/in/mynuddin-chisty/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700"
                    >
                        <FaLinkedin size={30} />
                    </a>
                    <a
                        href="https://github.com/chisty17"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-gray-900"
                    >
                        <FaGithub size={30} />
                    </a>
                    <a
                        href="https://twitter.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-600"
                    >
                        <FaTwitter size={30} />
                    </a>
                    <a
                        href="https://www.reddit.com/user/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-orange-800"
                    >
                        <FaReddit size={30} />
                    </a>
                    <a
                        href="https://leetcode.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-500 hover:text-yellow-600"
                    >
                        <SiLeetcode size={30} />
                    </a>
                </div>
            </div>
            <div>
                
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="text-black block mb-2 text-sm font-medium"
                            >
                                Your email
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                required
                                className=" border border-[#EDA751] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                                placeholder="YourEmail@gmail.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="subject"
                                className="text-black block text-sm mb-2 font-medium"
                            >
                                Subject
                            </label>
                            <input
                                name="subject"
                                type="text"
                                id="subject"
                                required
                                className=" border border-[#EDA751] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                                placeholder="Just saying hi"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="text-black block text-sm mb-2 font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                className=" border border-[#EDA751] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                                placeholder="Let's talk about..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#EDA751] text-white font-medium py-2.5 px-5 rounded-lg w-full"
                        >
                            Send Message
                        </button>
                    </form>
                
            </div>
        </section>
    );
};

export default EmailSection;