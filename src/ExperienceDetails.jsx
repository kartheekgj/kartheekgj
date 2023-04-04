import { useState } from 'react'

export const ExperienceDetails = (props) => {
    return (
        <div className={`relative z-10 ${!props.showExperience ? 'hidden' : ''} `} aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0"></div>
            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        {/* <!--
                            Slide-over panel, show/hide based on slide-over state.

                            Entering: "transform transition ease-in-out duration-500 sm:duration-700"
                                From: "translate-x-full"
                                To: "translate-x-0"
                            Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
                                From: "translate-x-0"
                                To: "translate-x-full"
                            --> */}
                        <div className="pointer-events-auto w-screen max-w-md">
                            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                <div className="bg-indigo-700 px-4 py-6 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <div><img src={props.clickedData.icon} className="h-8 w-8" /></div>
                                        <h2 className="text-base font-semibold leading-6 text-white" id="slide-over-title">{props.clickedData.title}
                                            
                                        </h2>
                                        <div className="ml-3 flex h-7 items-center">
                                            <button type="button" className="rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" onClick={props.handleExpPanel}>
                                                <span className="sr-only">Close panel</span>
                                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-1">
                                        <p className="text-sm text-indigo-300">{`${props.clickedData.startDate} - ${props.clickedData.endDate}`}</p>
                                    </div>
                                </div>
                                <div className="relative flex-1 px-4 py-6 sm:px-6 text-justify ">
                                    <ol type="1" >
                                        {props.clickedData.description.map((elem, idx) => { return <li class="leading-relaxed font-light" key={idx}>{idx + 1}. {elem} <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr></li> })}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

