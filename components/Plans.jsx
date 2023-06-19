import React from 'react'
import PlanCard from './PlanCard'

const Plans = () => {

  // Defining colors
  const green = "#5FCCA0";
  const black = "#0A0A0A";
  const purple = "#CB9BFB";
  const yellow = "#F9FD91";

  return (
    <div className='min-h-[100%] bg-white w-[100%] p-20 lg:px-24 py-16'>
        <div className='flex items-center justify-between'>
            <h1 className='font-bold text-xl md:text-2xl'>Featured Plans</h1>
            <h2 className='font-normal md:font-semibold text-normal md:text-lg'>Explore All</h2>
        </div>
        <div className="mt-11 flex justify-center flex-col md:flex-row sm:gap-5 md:justify-center lg:justify-center lg:gap-7">

            <PlanCard  bg={green} type={"STRATEGY"} title={"Money Momentum"} desc={"Tract Premium helps you start over investments insights covering"} years={"3yrs CAGR"} rate={"7.20%"} />

            <PlanCard  bg={black} status={"black"} type={"PLAN"} title={"Long-Term"} desc={"Create a vision. To get started, imagine your dream life."} years={"25yrs CAGR"} rate={"14.70%"}/>

            <PlanCard  bg={purple} type={"STRATEGY"} title={"Focussed"} desc={"Be focussed. Life planning however can serve as a roadmap or guide."} years={"1yr returns"} rate={"11.20%"}/>

            <PlanCard  bg={yellow} type={"PLAN"} title={"Fixed Income"} desc={"Create a vision. To get started, imagine your dream life."} years={"5yrs CAGR"} rate={"8.20%"}/>
        </div>
    </div>
  )
}

export default Plans