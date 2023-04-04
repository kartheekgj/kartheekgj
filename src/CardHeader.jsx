import React, { useState } from 'react'
import { CompaniesList } from './CompaniesList';
import { ApplicationInfo } from './ApplicationInfo';
import { Footer } from './Footer';
import { ExperienceDetails } from './ExperienceDetails';

export const CardHeader = () => {
  const [toggle, setToggle] = useState(false);
  const [currData, setCurrData] = useState({title: '',description: [],startDate:"", endDate:""});
  const [expPanel, setExpPanel] = useState(false)
  const handleClick = () =>{
    setToggle(!toggle);
  }
  const handleExpPanel = () =>{
    setExpPanel(!expPanel);
  }
  const handleAddMoreData = (data) => {
    setCurrData(data);
    handleExpPanel();
  }
  return (
    <div className="container mx-auto">
      <div className="p-4 bg-white">
        <div className="md:flex md:items-center md:justify-between md:space-x-5 mb-8 p-4 border-b-2">
          <div className="flex items-start space-x-5">
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  className="h-16 w-16 rounded-full"
                  src="https://avatars.githubusercontent.com/u/1484950?v=4"
                  alt=""
                />
                <span className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
              </div>
            </div>
            <div className="pt-1.5">
              <h1 className="text-2xl -mdd:text-xl font-bold text-gray-900 text-justify">Jayendra Kartheek G</h1>
              <p className="text-sm font-medium text-gray-500">
                Currently Working as Senior Engineer at Builder.ai
              </p>
            </div>
          </div>
          <div className="justify-stretch mt-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
            <button type="button" onClick={handleClick} className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Download Profile</button>
            </div>
        </div>
        
        <ApplicationInfo showModal={toggle} handleClick={handleClick}/>
        <CompaniesList handData={handleAddMoreData}/>
      </div>
      <Footer/>
      <ExperienceDetails clickedData={currData} showExperience={expPanel} handleExpPanel={handleExpPanel}/>
      
    </div>
  );
};


