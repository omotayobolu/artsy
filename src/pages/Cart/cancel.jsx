import React from "react";

const cancel = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <div className="">
        <h3>Error.</h3>
        <h4 className="text-pure-black flex flex-row items-center font-normal mt-7">
          Your payment was not successful.
        </h4>
      </div>
    </div>
  );
};

export default cancel;
