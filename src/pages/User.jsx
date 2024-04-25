import React from "react";
// import NothingToShow from "../../components/nothingToShow/NothingToShow";

function User() {
  return (
    <div className="md:[80%] mb-0 ml-auto mr-auto mt-32 h-[100vh] w-[100%]  bg-white">
      <div className="space"></div>
      <div className="flex h-[2.5rem] flex-col items-center justify-center pb-[1rem]">
        <div className="flex h-[4rem] items-center justify-center pt-[1rem]">
          <span className="font-sans text-4xl font-normal text-black">
            Sign In
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex w-[100%] flex-col p-4">
            <label htmlFor="emailLogin">Email address</label>
            <input type="email" id="emailLogin" placeholder="Enter email" />
          </div>
          <div className="1-[100%] mt-[8px] h-[2.5rem] rounded-[5px] border-white pl-[10px] pr-[10px] text-gray-500 outline-none">
            <label className="text-xl text-gray-500" htmlFor="passwordLogin">
              Password
            </label>
            <input
              type="password"
              id="passwordLogin"
              placeholder="Enter password"
            />
          </div>
        </div>
        <div className="mb-0 ml-auto  mt-auto flex h-auto w-[90%] flex-col justify-center rounded-[5px] bg-white p-[1rem] shadow-md md:flex-row md:justify-between">
          <div className="md:[47%] mb-[1rem] flex h-[2.5rem] w-[100%] items-center justify-center rounded-[5px] bg-blue-500 font-semibold text-white hover:bg-blue-400">
            Sign in
          </div>
          <span className="mb-[1rem] flex items-center justify-center font-semibold text-gray-500">
            Or
          </span>
          <div className="md:[47%] mb-[1rem] flex h-[2.5rem] w-[100%] items-center justify-center rounded-[5px] bg-blue-500 font-semibold text-white hover:bg-blue-400">
            Sign up
          </div>
        </div>
        <div className="forget">
          <span className="font-semibold text-blue-500">Forgot password?</span>
        </div>
      </div>
      <div className="signup"></div>
    </div>

    // <div>
    //   <NothingToShow />
    // </div>
  );
}

export default User;
