
import { FaCheck } from 'react-icons/fa'

function Form({formData , setFormData}) {
    return (
        <>
            <div className="flex items-center justify-between mb-12 rule  setup relative text-base">
                <div className="tabs">
                    <span className="indicator pl-2.5 !pt-2 text-green border-green ">
                        <FaCheck className='' />
                    </span>
                    <p>Create Account</p>
                </div>
                <div className="tabs">
                    <span className="indicator pl-2.5 !pt-2 text-green border-green ">
                        <FaCheck className=''/>
                    </span>
                    <p className="">OTP Verification</p>
                </div>
                <div className="tabs">
                    <span className="indicator">3</span>
                    <p className="">Account Setup</p>
                </div>
            </div>
            <form className="w-80 font-family">
                <div>
                    <h1 className="text-green text-4xl font-semibold mb-3">Account Setup</h1>
                    <p className="text-base mb-10 font-normal w-72">Kindly provide accurate details and fill every requires below</p>
                </div>
                <div className="input">
                    <label className="">Full Name </label>
                    <input type="text" placeholder="enter full name" className="box" required
                    value={formData.FullName}
                        onChange={(event) => setFormData({...formData, FullName: event.target.value})}/>
                </div>
                
                <div className="input">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="enter phone number" className="box"
                    value={formData.phoneNumber}
                        onChange={(event) => setFormData({...formData, phoneNumber: event.target.value})}/>
                </div>
                <div className="input">
                    <label>State</label>
                    {/* <input type="option" placeholder="Choose State" className="box"/> */}
                    <select className='box text-green'>
                        {/* <option value="" className='text-grey'>--Choose State--</option> */}
                            <option disabled selected>--Choose State--</option>
                            <option value="Abia">Abia</option>
                            <option value="Adamawa">Adamawa</option>
                            <option value="Akwa Ibom">Akwa Ibom</option>
                            <option value="Anambra">Anambra</option>
                            <option value="Bauchi">Bauchi</option>
                            <option value="Bayelsa">Bayelsa</option>
                            <option value="Benue">Benue</option>
                            <option value="Borno">Borno</option>
                            <option value="Cross River">Cross River</option>
                            <option value="Delta">Delta</option>
                            <option value="Ebonyi">Ebonyi</option>
                            <option value="Edo">Edo</option>
                            <option value="Ekiti">Ekiti</option>
                            <option value="Enugu">Enugu</option>
                            <option value="FCT">Federal Capital Territory</option>
                            <option value="Gombe">Gombe</option>
                            <option value="Imo">Imo</option>
                            <option value="Jigawa">Jigawa</option>
                            <option value="Kaduna">Kaduna</option>
                            <option value="Kano">Kano</option>
                            <option value="Katsina">Katsina</option>
                            <option value="Kebbi">Kebbi</option>
                            <option value="Kogi">Kogi</option>
                            <option value="Kwara">Kwara</option>
                            <option value="Lagos">Lagos</option>
                            <option value="Nasarawa">Nasarawa</option>
                            <option value="Niger">Niger</option>
                            <option value="Ogun">Ogun</option>
                            <option value="Ondo">Ondo</option>
                            <option value="Osun">Osun</option>
                            <option value="Oyo">Oyo</option>
                            <option value="Plateau">Plateau</option>
                            <option value="Rivers">Rivers</option>
                            <option value="Sokoto">Sokoto</option>
                            <option value="Taraba">Taraba</option>
                            <option value="Yobe">Yobe</option>
                            <option value="Zamfara">Zamfara</option>

                    </select>
                </div>
                <div className="input">
                    <label>City</label>
                    <input type="option" placeholder="enter city" className="box"/>
                </div>
                <div className="input">
                    <label>Address</label>
                    <input type="text" placeholder="enter address" className="box" required value={formData.address} onChange={(event) => setFormData({...formData, address: event.target.value})}/>
                </div>
                <div className="input">
                    <label>Date Of Birth</label>
                    <input type="date" placeholder="" className="box text-grey" 
                    required value={formData.dateOfBirth}
                        onChange={(event) => setFormData({...formData, dateOfBirth: event.target.value})}/>
                </div>
                <div className="input">
                    <label>Net Worth</label>
                    {/* <input type="range" placeholder="" className="box"/> */}
                     <select className='box text-green' >
                        <option value="Abia" className='text-grey'>choose range </option>
                    </select>
                </div>
                  <div className="input">
                    <label>Annual Income</label>
                    {/* <input type="range" placeholder="" className="box"/> */}
                     <select className='box text-green' >
                        <option value="Abia" className='text-grey'>choose range </option>
                    </select>
                </div>
               
                {/* <div>
                    <button className="bg-green text-white w-full p-3 rounded-xl mt-6 font-medium">Create Account</button>
                </div> */}
            </form>
        </>
    )
}

export default Form