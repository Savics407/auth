// import { useState } from "react";


function UserDetails({formData , setFormData}) {
    // const [step, setStep] = useState(0);

    return (
        <>
            <div className="flex items-center justify-between mb-12 rule relative text-base">
                <div className="tabs">
                    <span className="indicator">1</span>
                    <p>Create Account</p>
                </div>
                <div className="tabs">
                    <span className="indicator">2</span>
                    <p className="text-grey">OTP Verification</p>
                </div>
                <div className="tabs">
                    <span className="indicator">3</span>
                    <p className="text-grey">Account Setup</p>
                </div>
            </div>
            <form className="w-80 font-family">
                <div>
                    <h1 className="text-green text-4xl font-semibold mb-3">Create Account</h1>
                    <p className="text-base mb-10 font-normal w-72">Create an account with REIC, this would only take few minutes.</p>
                </div>
                <div className="input">
                    <label className="">Email Address </label>
                    <input 
                        type="text" 
                        placeholder="enter email address" 
                        className="box" 
                        value={formData.email}
                        onChange={(event) => setFormData({...formData, email: event.target.value})}/>
                </div>
                <div className="input">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="enter phone number" className="box"
                    value={formData.phoneNumber}
                        onChange={(event) => setFormData({...formData, phoneNumber: event.target.value})}
                        required />
                </div>
                <div className="input">
                    <label>Password</label>
                    <input type="password" placeholder="enter password" className="box"
                    value={formData.password}
                        onChange={(event) => setFormData({...formData, password: event.target.value})}
                        required/>
                </div>
                <div className="input">
                    <label>Confirm Password</label>
                    <input type="password" placeholder="confirm password" className="box"
                    value={formData.confirmPassword}
                        onChange={(event) => setFormData({...formData, confirmPassword: event.target.value})}
                        required/>
                </div>
                <div className=" flex items-start">
                    <input type="checkbox" required className="border mr-2"/>
                    <p className="text-xs tracking-wide">I agree with REIC <span className="text-blue-500">Terms & Conditions </span> and <span className="text-blue-500">Privacy Policy</span></p>
                </div>
                <div>
                    {/* <button className="bg-green text-white w-full p-3 rounded-xl mt-6 font-medium"
                    onClick={() => {
                        setStep((currentPage) => currentPage + 1)
                    }}>Next</button> */}
                </div>
            </form>
        </>
    )
}

export default UserDetails