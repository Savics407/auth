import React from "react";
import Header from "./Admin_header";
import SideBar from "./SideBar";
import InvestmentCard from "./InvestmentCard";
import InvestmentList from "./InvestmentList";
import OngoingInvestments from "./OngoingInvestments";

function AllInvestments() {
  return (
    <div className="bg-dashbg font-family">
      <Header />
      <div className="flex justify-between">
        <div className="w-1/5 border-r bg-white">
          <SideBar />
        </div>
        <div className=" w-4/5 p-5 mb-20">
          <div className=" bg-white p-10 rounded-lg">
            <h1 className="text-dark  font-black text-3xl mb-3">Investments</h1>
          </div>
          <div className="flex justify-between">
            <div className="w-4/6">
              <InvestmentCard />

              <InvestmentList />
            </div>
            <div className="w-2/6">
              <OngoingInvestments />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllInvestments;
