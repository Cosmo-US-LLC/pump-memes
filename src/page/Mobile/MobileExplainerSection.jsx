import React from "react"

function MobileExplainerSection() {
    return (
      <div className="relative  py-[70px] flex justify-center items-center w-[100%] relative z-[9] h-[763px] explbgimgmob">
          <div className="w-[100%] max-w-[380px]  mx-auto">
          <div className="explframbgimgmob min-h-[318px] h-[100%] flex justify-center pt-[1.3rem]">
       <iframe 
      width="264" 
      className="rounded-[12px]"
      height="186" 
      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
          </div>
          </div>
      </div>
    );
  }
  
  export default MobileExplainerSection;
  