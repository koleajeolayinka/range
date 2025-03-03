import React from 'react';
import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="h-[85vh] w-screen relative overflow-hidden rounded-bl-[126px]">
            <Image src={'/img.png'} layout="fill" objectFit="cover" alt={'home'} />
        </div>
    );
};

export default HeroSection;