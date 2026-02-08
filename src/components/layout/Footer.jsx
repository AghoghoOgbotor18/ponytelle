import React from "react";
import { FiInstagram, FiTwitter, FiFacebook, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-300 mt-20">
      {/* Top */}
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">Ponytelle</h3>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
            Premium ponytail extensions designed to elevate your everyday look.
            Sleek. Effortless. Confident.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
              <FiInstagram />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
              <FiTwitter />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
              <FiFacebook />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">All Products</a></li>
            <li><a href="#" className="hover:text-white transition">Best Sellers</a></li>
            <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
            <li><a href="#" className="hover:text-white transition">Ponytelle Specials</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-4">Stay in the loop</h4>
          <p className="text-sm text-zinc-400 mb-3">
            Get exclusive offers and styling tips straight to your inbox.
          </p>
          <div className="flex items-center gap-2">
            <div className="relative w-full">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="email"
                placeholder="Your email"
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
            <button className="shrink-0 bg-white text-black px-4 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Ponytelle. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
