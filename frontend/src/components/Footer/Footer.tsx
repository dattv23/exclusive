// import { QRCode } from 'antd';
import Image from 'next/image';
import React from 'react';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  SendIcon,
  TwitterIcon,
} from '../Icons';

const Footer = () => {
  return (
    <footer className="bottom-0 bg-black pb-6 pt-20 text-white">
      <div className="flex justify-around px-32 pb-[60px]">
        <div>
          <h3 className="mb-6">Exclusive</h3>
          <h4 className="mb-6">Subscribe</h4>
          <div className="flex flex-col gap-4">
            <p>Get 10% off your first order</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full rounded-md border-2 border-white bg-transparent px-4 py-3"
              />
              <div className="my-auto -ml-8 h-full">
                <SendIcon />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="mb-6">Support</h4>
          <div className="flex flex-col gap-4">
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </div>
        <div>
          <h4 className="mb-6">Account</h4>
          <div className="flex flex-col gap-4">
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>
        </div>
        <div>
          <h4 className="mb-6">Quick Link</h4>
          <div className="flex flex-col gap-4">
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
        </div>
        <div>
          <h4 className="mb-6">Download App</h4>
          <p>Save $3 with App New User Only</p>
          <div className="mt-2 flex gap-2">
            <div className="h-40 w-40 bg-white">
              {/* <QRCode value="https://www.google.com/" /> */}
            </div>
            <div className="flex flex-col gap-1">
              <Image
                width={104}
                height={34}
                src={'/images/appstore.png'}
                alt="Download with appstore"
                className="h-auto w-full"
              />
              <Image
                src={'/images/chplay.png'}
                alt="Download with chplay"
                width={104}
                height={34}
                className="h-auto w-full"
              />
            </div>
          </div>
          <div className="mt-6 flex gap-6">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedinIcon />
          </div>
        </div>
      </div>
      <hr className="text-white opacity-40" />
      <div className="pt-4 text-center">
        <p>Copyright Dat Dev 2024. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
