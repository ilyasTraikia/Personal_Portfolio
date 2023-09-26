import React from 'react'
import { github,live } from '../assets'

export default function  Modal({title,image,techs,id,live_link,source_code_link}) {

  return ( 
    
    <div id={`hs-slide-down-animation-modal-${id}`} className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
         <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="flex flex-col  border shadow-sm rounded-xl bg-tertiary border-gray-700 shadow-slate-700/[.7]">
            <div className="flex justify-between items-center py-3 px-4 border-b border-gray-700">


              <h3 className="font-bold  text-white">
                {title}    
              </h3>


              {/* <button type="button" className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2  focus:ring-offset-2 transition-all text-sm focus:ring-gray-700 focus:ring-offset-gray-800" data-hs-overlay="#hs-slide-down-animation-modal">
                <span className="sr-only">Close</span>
                <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
                </svg>
              </button> */}

            </div>



            <div className="p-2 xs:p-6 overflow-y-auto">



             <div className='relative w-full h-[230px] mt-3'>
                  <img
                    src={image}
                    alt='project_image'
                    className='w-full h-full object-cover rounded-xl'
                  />

                  <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                    {/* Live Link */}
                    <div
                      onClick={() => window.open(live_link, "_blank")}
                      className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                    >
                      <img
                        src={live}
                        alt='source code'
                        className='w-1/2 h-1/2 object-contain'
                      />
                    </div>
        
                   {/* Github link */}
                    <div
                      onClick={() => window.open(source_code_link, "_blank")}
                      className='black-gradient ml-[5px] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                    >
                      <img
                        src={github}
                        alt='source code'
                        className='w-1/2 h-1/2 object-contain'
                      />
                    </div>



          </div>
        </div>





              <div className=" text-sm xs:text-base text-gray-400 mt-6 xs:mt-12">
                 {techs.map((element,index)=> {
                        // console.log(element)
                        return (<p className='my-4' key={index}>-{element}.</p>)
              
                 })}
              </div>




            </div>
            {/* <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
              <button type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium  shadow-sm align-middle  focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-blue-600 transition-all text-sm bg-slate-900 hover:bg-slate-800 border-gray-700 text-gray-400 hover:text-white focus:ring-offset-gray-800" data-hs-overlay={`hs-slide-down-animation-modal-${id}`}>
                Close
              </button>    
            </div> */}
          </div>
        </div>
       </div>
    
  
   
     )
}
