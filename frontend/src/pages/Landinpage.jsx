import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuSparkles } from "react-icons/lu";
import HERO_IMG from '../assets/hero-img.png';
import { APP_FEATURES } from './utils/data';

const LandingPage = () => {
    const navigate = useNavigate();
    const [openAuthModal, setOpenAuthModal] = useState(false);
    
    const handleCTA = () => {
        setOpenAuthModal(true);
    };

    return (
        <>
            <div className="w-full min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50">
                <div className="container mx-auto px-6 py-6">
                    {/* Header */}
                    <header className="flex justify-between items-center mb-16 relative z-20">
                        <div className="text-xl text-black font-bold">
                            Interview Prep AI
                        </div>
                        <button 
                            className="bg-gradient-to-r from-[#FF9324] to-[#FF7A00] text-white font-semibold px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 relative z-30"
                            onClick={() => setOpenAuthModal(true)}
                        >
                            Login / Sign Up
                        </button>
                    </header>

                    {/* Main Content */}
                    <div className="flex flex-col lg:flex-row items-start gap-12 mb-20">
                        {/* Left Side - Text Content */}
                        <div className="w-full lg:w-5/12 lg:pr-8">
                            {/* Badge */}
                            <div className="flex items-center justify-start mb-8">
                                <div className="flex items-center gap-2 text-sm text-amber-700 font-medium bg-amber-100 px-4 py-2 rounded-full border border-amber-200">
                                    <LuSparkles className="text-amber-600 text-base" />
                                    AI Powered
                                </div>
                            </div>

                            {/* Main Heading */}
                            <h1 className="text-5xl lg:text-6xl text-black font-medium mb-8 leading-tight">
                                Ace Interviews with <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9324] to-[#FF7A00] font-semibold">
                                    AI-Powered
                                </span>{" "}
                                Learning
                            </h1>

                            {/* Description */}
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
                                Get role-specific questions, expand answers when you need them, 
                                dive deeper into concepts, and organize everything your way. From 
                                preparation to mastery — your ultimate interview toolkit is here.
                            </p>

                            {/* CTA Button */}
                            <button 
                                className="bg-black text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 text-lg"
                                onClick={handleCTA}
                            >
                                Get Started
                            </button>
                        </div>

                        {/* Right Side - Hero Image */}
                        <div className="w-full lg:w-7/12 flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-3xl">
                                <img
                                    src={HERO_IMG}
                                    alt="Hero Image"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full min-h-full bg-[#FFFCEF] mt-10">
                <div className="container mx-auto px-4 pt-10 pb-20">
                    <section className="mt-5">
                        <h2 className="text-2xl font-medium text-center mb-12">
                            Features That Make You Shine
                        </h2>

                        <div className="flex flex-col items-center gap-8">
                            {/*First 3 cards*/}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                                {APP_FEATURES.slice(0,3).map((feature) => (
                                    <div
                                        key={feature.id}
                                        className="bg-[#FFFEF8] p-6 rounded-xl shadow-x5 hover:shadow-lg shadow-amber-100 transition border border-amber-100"
                                    >
                                        <h3 className="text-base font-semibold mb-3">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {APP_FEATURES.slice(3).map((feature) => (
                                    <div
                                        key={feature.id}
                                        className="bg-[#FFFEF8] p-6 rounded-xl shadow-x5 hover:shadow-lg shadow-amber-100 transition border border-amber-100"
                                    >
                                        <h3 className="text-base font-semibold mb-3">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div className="text-sm bg-gray-50 text-secondary text-counter p-5 mt-5">
                Made with ❤️... Stay Happy
            </div>

            <Modal
                isOpen={openAuthModal}
                onClose={() => {
                    setOpenAuthModal(false);
                    setCurrentPage("login");

                }}
                hideHeader
                >
                    <div>
                        {currentPage === "login" && (
                            <Login setCurrentPage={setCurrentPage}/>

                        )}
                        {currentPage === "signup" && (
                            <SignUp setCurrentPage={setCurrentPage}/>
                        )}
                    </div>
                </Modal>
        </>
    );
};

export default LandingPage;