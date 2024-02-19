import React from "react";
function Home() {
 
    
  return (
    <>
      <div className="relative md:py-[4rem] py-[4rem] bg-black" id="Home">
 

        <div className=" md:max-w-[1400px]  md:px-10 px-5 mx-auto w-full relative ">
          <div className="flex   items-center justify-center mx-auto">
            <div className="md:w-1/2 w-full mt-[5rem] ">
             
              <div className="text-white justify-center items-center text-center flex-col md:my-0 my-4">
                <h1 className=" text-[55px] font-bold leading-[54px] ">
              Let's Connect!
                </h1>
                <p className="text-white font-semibold text-[18px] leading-[30px] my-8">
                 Feedback Matters - Give Us Your Review
                </p>
         
        <div className="flex  mt-[2rem] flex-row justify-center items-center mx-auto w-fulll">
        <a
                    href="https://www.instagram.com/paubhajiwala_?igsh=MWVmbTkzYXloeDZ0cw=="
                      target="_blank"
                      rel="noopener noreferrer">
                       <img
                src="./instt.png"
                className="h-[4rem]  w-[4rem]  cursor-pointer"
                alt="instagram"
              />
                    </a>
       



                    <a
                    href="https://g.co/kgs/vLMhuwu"
                      target="_blank"
                      rel="noopener noreferrer">
                       <img
                src="./grv.png"
                className="h-[4rem]  w-[8rem]  cursor-pointer"
                alt="Google-review"
              />
                    </a>
        </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
