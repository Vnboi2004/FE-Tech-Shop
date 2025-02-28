import { FooterImage } from "../../Data/imageData";
import { RiFacebookLine } from "react-icons/ri";
import { PiTwitterLogo } from "react-icons/pi";
import { RiLinkedinLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='p-18'>
                <div className='grid grid-cols-[auto_auto_auto] gap-6'>
                    {/* cols 1 */}
                    <div className="flex flex-col gap-6 text-white">
                        <h1 className="text-2xl font-semibold">Exclusive</h1>
                        <h2 className="text-lg font-medium">Subscribe</h2>
                        <span className="text-sm">Get 10% off your first order</span>
                        <div className="flex items-center gap-2 max-w-max text-white border border-gray-100 p-3 rounded-md">
                            <input type="email" placeholder='Enter your email' className="outline-none"/>
                            <img src={FooterImage.VectorRow} alt="" className="w-5 h-5"/>
                        </div>
                    </div>
                    {/* cols 2 */}
                    <div className="grid grid-cols-[auto_auto_auto] gap-6">
                        {/* Cols 2 children 1*/}
                        <div className="flex flex-col gap-6">
                            <h2 className="text-white text-lg font-medium">Support</h2>
                            <ul className="flex flex-col gap-4 text-white text-sm">
                                <li>
                                    48/3/3A Đ. Số 3, Trường Thọ, <br/>
                                    Thủ Đức, Hồ Chí Minh, Việt Nam
                                </li>
                                <li>
                                    truongphuochung@gmail.com
                                </li>
                                <li>
                                    +84 918 488 431
                                </li>
                            </ul>
                        </div>
                        {/* Cols 2 children 2*/}
                        <div className="flex flex-col gap-6">
                            <h2 className="text-white text-lg font-medium">Account</h2>
                            <ul className="flex flex-col gap-4 text-white text-sm">
                                <li>My Acccount</li>
                                <li>Login / Register</li>
                                <li>Cart</li>
                                <li>Wishlist</li>
                                <li>Shop</li>
                            </ul>
                        </div>
                         {/* Cols 2 children 3*/}
                         <div className="flex flex-col gap-6">
                            <h2 className="text-white text-lg font-medium">Quick Link</h2>
                            <ul className="flex flex-col gap-4 text-white text-sm">
                                <li>Privacy Policy</li>
                                <li>Terms Of Use</li>
                                <li>FAQ</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                    {/* cols 3 */}
                    <div className="flex flex-col space-y-6">
                        <h2 className="text-white text-lg font-medium">Download App</h2>
                        <span className="text-xs text-gray-300">Save $3 with App New User Only</span>
                        <div className="flex items-center gap-2">
                            <img src={FooterImage.QRCode} alt="" />
                            <div className="flex flex-col gap-2">
                                <img src={FooterImage.GooglePlay} alt="" />
                                <img src={FooterImage.AppStore} alt="" />
                            </div>
                        </div>
                        <ul className="flex items-center gap-7 text-white text-lg">
                            <li>
                                <a href="">
                                    <RiFacebookLine/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <PiTwitterLogo/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <RiLinkedinLine/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <FaInstagram/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center text-sm text-gray-300/50 py-8">&copy; Truong Phuoc Hung</div>
        </div>
    )
} 

export default Footer
