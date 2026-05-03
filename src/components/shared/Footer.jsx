// components/Footer.jsx


import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaLocationDot, FaMessage, FaSquareXTwitter } from "react-icons/fa6";
import { MdAddIcCall } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="space-y-5">
<h1>Contact info</h1>
	<p className="flex items-center gap-2"><FaMessage /> email@gmail.com</p>
	<p className="flex items-center gap-2"><MdAddIcCall />+888801</p>
	<p className="flex items-center gap-2"><FaLocationDot /> Chattogram, Bangladesh</p>
</div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className=" space-y-4  ">
            <span className="flex items-center gap-2"><FaFacebook />Facebook</span>
            <span className="flex items-center gap-2"><FaSquareXTwitter />Twitter</span>
            <span className="flex items-center gap-2"><FaInstagramSquare />Instagram</span>
          </div>

        </div>
      </div>


      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
}