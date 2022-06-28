import logo from "./images/polygon.png";
// import bg from "./images/build.jpeg";
// import Form from "./UserDetails";
import Verification from "./Verification"
import Setup from "./Setup"
import UserDetails from "./UserDetails";
import { useState } from "react";
import {FaRegEyeSlash} from "react-icons/fa"




function Tab() {
    return (
        <>
            <div className="bg-primary text-center text-green p-4 flex items-center hidden md:flex">
                <img src={logo} alt="logo icon"/>
                <h1 className="text-sm font-bold font-family ml-4">REIC</h1>
            </div>
        </>
    )
}

function Login() {
    
    
    return (
        <div className="font-family">
            <Tab />
            <div className="lg:flex justify-between">
                <div className="lg:px-24 md:px-24 px-10 lg:pt-20 pt-14 pb-5 w-full lg:w-1/2">
                    <form className="form">
                <div>
                    <h1 className="page-text">Welcome Back</h1>
                    <p className="description">Login to your account</p>
                </div>
                <div className="input">
                    <label className="">Email Address</label>
                    <input 
                        type="email" 
                        placeholder="enter email address" 
                        className="box" 
                        />
                </div>
               
                <div className="input relative">
                    <label>Password</label>
                    <input type="password" placeholder="enter password" className="box" id="pass"
                        required/>
                        <FaRegEyeSlash  className="text-grey absolute top-11 right-4 cursor-pointer" onClick={() => {
                            let x = document.getElementById('pass')
                            if (x.type === "password" ) {
                                x.type = "text"
                            } else {
                                x.type = "password"
                            }
                        }}/>
                </div>
                
                <div className=" flex items-start">
                    {/* <input type="checkbox" required className="border mr-2"/> */}
                    <p className="text-xs tracking-wide">Forgot Password?</p>
                </div>

            </form>
                    <div className="w-80">
                        <button className="bg-green text-white w-full p-3 rounded-xl mt-6 font-medium">
                            Log in
                        </button>
                    </div>
                    <p className="text-sm font-medium text-sec mt-8 mb-48 text-center md:text-left">You are new ? <span className="text-green">sign up</span></p>

                </div>
                <div className=" bg-[url('../src/assets/images/build.jpeg')] bg-black lg:w-1/2 relative bg-cover bg-center build hidden lg:block">
                    {/* <img src={bg} className=" w-full h-full object-cover absolute"/>     */}
                </div>
            </div>
        </div>
    );
}

export default Login;