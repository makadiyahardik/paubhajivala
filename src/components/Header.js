import React from "react";

function Header() {


  return (
    <>
      <div
  className="pt-4"
        >
        <div className="md:max-w-[1400px] w-full  bg-black md:px-10 px-5 mx-auto ">
          <div className="flex  justify-between  md:items-center  ">
            <div className="flex justify-start items-start">
              <img
                src="./logo.jpeg"
                className="h-[3rem] w-auto "
              />
            </div>
          
          

          
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;