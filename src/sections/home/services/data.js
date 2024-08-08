import { TbBrandReact } from "react-icons/tb";
import { TbBrandWordpress } from "react-icons/tb";
import { TbBrandFramer } from "react-icons/tb";
import { TbBrandFigma } from "react-icons/tb";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { TbDeviceMobileDollar } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { TbBrandFirebase } from "react-icons/tb";

export const cardsData =
[
    {
        title: 'WEB DEVELOPMENT',
        icons: [TbBrandReact, TbBrandFramer, TbBrandWordpress],
        desc: `Craft high-performance websites using cutting-edge
                technologies like React, Framer, and WordPress.
                My focus is on delivering robust CMS integration,
                seamless user experiences, and optimized performance
                to elevate your online presence and drive measurable results.`
    },{
        title: 'APP DEVELOPMENT',
        icons: [TbBrandReactNative, TbBrandFirebase],
        desc: `Develop versatile mobile applications using React Native, 
                ensuring top-tier performance across both iOS and Android platforms.
                I specialize in creating apps that are not only visually appealing but
                also user-friendly and safe, providing a seamless experience for your
                users on any device.`
    },{
        title: 'WEB DESIGN',
        icons: [TbBrandFigma],
        desc: `Deliver premium, bespoke web design services tailored to your brand’s
                unique identity. My designs are clean, sharp, and visually compelling,
                engineered to engage users while providing an intuitive and fluid browsing
                experience that maximizes conversions.`
    },{
        title: 'CONTENT & SEO',
        icons: [TbDeviceDesktopCode, TbDeviceMobileDollar],
        desc: `Offer comprehensive content creation and SEO services
                that enhance your online authority. I produce high-quality,
                engaging content optimized for search engines, helping your business
                connect with the right audience and drive sustainable growth.`}
]