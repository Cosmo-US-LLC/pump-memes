
function ExplainerSection() {
  return (
    <div className="relative bg-black-300 min-h-[130vh] py-[100px] flex justify-center items-center w-[100%] relative z-[9] explbgimg">
        <div>
        <div className="explframbgimg flex justify-center pt-[3rem]">
     <iframe 
    width="680" 
    className="rounded-[12px]"
    height="325" 
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

export default ExplainerSection;
