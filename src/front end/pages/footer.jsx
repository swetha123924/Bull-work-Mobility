import { MapPin } from "lucide-react";
import { Facebook,Youtube,Linkedin,Instagram } from "lucide-react";

function Footer() {
    return (
        <footer className="bg-black text-white px-6 py-10">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex items-center space-x-3 justify-center mb-8">
                    <img
                        src="https://www.bullworkmobility.com/images/logo.webp"
                        alt="Bull Work Mobility"
                        className="h-10 w-10 object-contain"
                    />
                    <h1 className="text-2xl font-bold tracking-wide">BULL WORK MOBILITY</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 text-sm">
                    <div>
                        <p className="font-bold mb-2 text-xl">Connect with us on</p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/bullworkmobility"  className="text-white hover:text-[#A100B1]">
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a href="https://www.youtube.com/@bullworkmobility"  className="text-white hover:text-[#A100B1]">
                                <Youtube className="h-6 w-6" />
                            </a>
                            <a href="https://www.linkedin.com/company/bullworkmobility"  className="text-white hover:text-[#A100B1]">
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href="https://www.instagram.com/bullworkmobility"  className="text-white hover:text-[#A100B1]">
                                <Instagram className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-bold mb-1 text-xl">Mail us at</h2>
                        <p>sales@bullworkmobility.com</p>
                        <p>info@bullworkmobility.com</p>
                    </div>

                    <div>
                        <h2 className="font-bold mb-1 text-xl">Call us at</h2>
                        <p>For Sales: 8123596969</p>
                        <p>For Information: 8123296969</p>
                    </div>

                    <div>
                        <h2 className="font-bold mb-2 text-xl">Visit us</h2>
                        <div className="flex gap-2">
                            <MapPin className="h-25 w-25 text-white" />
                            <span className="leading-relaxed mt-4">
                                Survey No.26/1 and 27/2, Mallarabanavadi Village, Kunigal Bypass Rd, Nelamangala Town, Karnataka 562123
                            </span>
                        </div>
                    </div>
                </div>

                <hr className="border-white/20 mb-10" />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Company</h3>
                        <ul className="space-y-1">
                            <li><a href="/blogs" className="hover:underline">Blogs</a></li>
                            <li><a href="/about" className="hover:underline">About Us</a></li>
                            <li><a href="/careers" className="hover:underline">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3">Products</h3>
                        <ul className="space-y-1">
                            <li><a href="/products/electric-tractor" className="hover:underline">Electric Tractor</a></li>
                            <li><a href="/products/glx-e-loader" className="hover:underline">GLX E-Loader</a></li>
                            <li><a href="/products/vamana" className="hover:underline">Vamana</a></li>
                            <li><a href="/products/warrior" className="hover:underline">Warrior</a></li>
                            <li><a href="/products/0x-1" className="hover:underline">0X-1</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3">Technology</h3>
                        <ul className="space-y-1">
                            <li><a href="/technology/autonomy" className="hover:underline">Autonomy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3">Order</h3>
                        <ul className="space-y-1">
                            <li><a href="/order/form" className="hover:underline">Order Form</a></li>
                            <li><a href="/order/book-demo" className="hover:underline">Book Demo</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
                        <form className="flex flex-col gap-3">
                            <label htmlFor="email" className="text-sm font-medium">
                                Get the latest updates
                            </label>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    className="flex-1 p-2 rounded-md border border-white bg-transparent text-white placeholder-white/70 focus:outline-none focus:border-[#A100B1] focus:ring-1 focus:ring-[#A100B1] "
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-white text-[#57115E] font-semibold rounded-md hover:bg-gray-200"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/20 pt-4 text-center text-xs text-white/70">
                    © 2025 Bull Work Mobility. All rights reserved.
                    <span className="ml-4">
                        <a href="/privacy-policy" className="underline hover:text-white">Privacy Policy</a>
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
