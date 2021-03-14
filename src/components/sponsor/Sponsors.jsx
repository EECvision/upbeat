import React from 'react';
import Button from '../Button.component';

const Sponsors = () => {
    return (
        <div className="w-full flex justify-center bg-purple-900 py-24 px-4 md:px-0">
            <div className="w-full max-w-4xl flex flex-wrap flex-col items-center justify-center">
                <div className="w-full text-center text-3xl text-white mb-12 font-serif font-medium">OUR SPONSORS</div>
                <div className="w-full flex flex-wrap items-center justify-center mb-16">
                    <div className="w-auto text-2xl text-white font-medium p-4">EECvision</div>
                    <div className="w-auto text-2xl text-white font-medium p-4">Gabriel GodHeart</div>
                    <div className="w-auto text-2xl text-white font-medium p-4">Kafa</div>
                    <div className="w-auto text-2xl text-white font-medium p-4">SalvTee Studio</div>
                </div>
                <Button>Support us</Button>

            </div>
        </div>
    )
}

export default Sponsors;