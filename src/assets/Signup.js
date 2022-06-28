import logo from "./images/polygon.png";
// import bg from "./images/build.jpeg";
// import Form from "./UserDetails";
import Verification from "./Verification"
import Setup from "./Setup"
import UserDetails from "./UserDetails";
import { useState } from "react";



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

function Auth() {
    
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        phoneNumber: "",
        password : "",
        confirmPassword: "",
        OTPCode: "",
        FullName: "",
        state: "",
        city: "",
        address: "",
        dateOfBirth: "",
        annualIncome: "",
    })

    async function signup() {
        console.log(formData);
        let result = await fetch("http://reic.api.simpoo.biz/api/register", {
            method:'POST',
            body:JSON.stringify(formData),
            headers: {
                "Accept" : "application/json"
            }
        })
        result = await result.json()
        console.log(result)
        localStorage.setItem("user-info", JSON.stringify(result))

    }
    const FormTitles = ["User Details", "Verification", "Setup"];

    const PageView = () => {
        if (step === 0) {
            return <UserDetails formData={formData} setFormData={setFormData} />;
        } else if (step === 1) {
            return <Verification formData={formData} setFormData={setFormData}/>
        } else {
            return <Setup formData={formData} setFormData={setFormData}/>
        }
    }
    return (
        <div className="font-family">
            <Tab />
            <div className="lg:flex justify-between">
                <div className="lg:px-24 md:px-24 px-10 lg:pt-20 pt-14 pb-24 w-full lg:w-1/2">
                    {PageView()}
                    <div className="lg:w-80 mb-16">
                        <button className="bg-green text-white w-full p-3 rounded-xl mt-6 font-medium"
                        onClick={() => {
                            if(step === FormTitles.length -1) {
                                alert("Form Submitted");
                                signup();
                            } else {
                                setStep((currentPage) => currentPage + 1)
                            }
                        }}>
                            {step === FormTitles.length -1 ? "Create Account" : "Next"}
                        </button>
                    </div>
                    <div ></div>
                </div>
                <div className=" bg-[url('../src/assets/images/build.jpeg')] bg-black lg:w-1/2 relative bg-cover bg-center build hidden lg:block">
                    {/* <img src={bg} className=" w-full h-full object-cover absolute"/>     */}
                </div>
            </div>
        </div>
    );
}

export default Auth;