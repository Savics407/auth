import logo from "./images/polygon.png";
// import bg from "./images/build.jpeg";
// import Form from "./UserDetails";
import Verification from "./Verification"
import Setup from "./Setup"
import UserDetails from "./UserDetails";



function Tab() {
    return (
        <>
            <div className="bg-primary text-center text-green p-4 flex items-center">
                <img src={logo} alt="logo icon"/>
                <h1 className="text-sm font-bold font-family ml-4">REIC</h1>
            </div>
        </>
    )
}

function Auth() {
   
    return (
        <div>
            <Tab />
            <div className="flex justify-between">
                <div className="px-24 pt-20 pb-5 w-1/2">
                    {/* <UserDetails /> */}
                    <Verification />    
                    {/* <Setup /> */}
                </div>
                <div className=" bg-[url('../src/assets/images/build.jpeg')] bg-black w-1/2 relative bg-cover bg-center build">
                    {/* <img src={bg} className=" w-full h-full object-cover absolute"/>     */}
                </div>
            </div>
        </div>
    );
}

export default Auth;