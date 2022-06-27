import { FaCheck } from 'react-icons/fa'

function Verification({formData , setFormData}) {
    return (
        <>
            <div className="flex items-center justify-between mb-12 rule relative text-base">
                <div className="tabs">
                    <span className="indicator create border-green OTP pl-2.5 !pt-2 text-green">
                        <FaCheck />
                    </span>
                    <p>Create Account</p>
                </div>
                <div className="tabs">
                    <span className="indicator">2</span>
                    <p className="">OTP Verification</p>
                </div>
                <div className="tabs">
                    <span className="indicator">3</span>
                    <p className="text-grey">Account Setup</p>
                </div>
            </div>
            <form className="w-80 font-family">
                <div>
                    <h1 className="text-green text-4xl font-semibold mb-3">OTP Verification</h1>
                    <p className="text-base mb-10 font-normal w-72">Enter the 5digit code sent to <b>email....@gmail.com</b> for verification</p>
                </div>
                <div className="input">
                    <label className="">Enter Code </label>
                    <input type="number" placeholder="5 digit code" className="box" required
                    value={formData.OTPCode}
                        onChange={(event) => setFormData({...formData, OTPCode: event.target.value})}/>
                </div>
                
                <div className=" flex items-start mb-7">
                    {/* <input type="checkbox" required className="border mr-2"/> */}
                    <p className="text-xs tracking-wide">Didn’t get an code? <span className="text-green font-semibold">Resend </span> </p>
                </div>
                {/* <div>
                    <button className="bg-green text-white w-full p-3 rounded-xl mt-6 font-medium">Next</button>
                </div> */}
            </form>
        </>
    )
}

export default Verification