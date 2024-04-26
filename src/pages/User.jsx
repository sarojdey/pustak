function User() {
  return (
    <div className="mx-auto my-0 h-screen w-full bg-white md:w-4/5">
      <div className="mx-auto my-0 h-auto w-11/12 rounded bg-white shadow-lg">
        <div className="flex h-16 items-center justify-center pt-4">
          <span className="font-font1 text-4xl font-bold text-gray-900">
            Sign In
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="email flex w-full flex-col p-4">
            <label className="text-lg text-gray-500" htmlFor="emailLogin">
              Email address
            </label>
            <input
              className="mt-2 h-10 w-full rounded border border-gray-400 px-2 py-0 text-gray-600 outline-none"
              type="email"
              id="emailLogin"
              placeholder="Enter email"
            />
          </div>
          <div className="flex w-full flex-col p-4">
            <label className="text-lg text-gray-500" htmlFor="passwordLogin">
              Password
            </label>
            <input
              className="mt-2 h-10 w-full rounded border border-gray-400 px-2 py-0 text-gray-600 outline-none"
              type="password"
              id="passwordLogin"
              placeholder="Enter password"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center p-4 md:flex-row md:justify-between">
          <div className=" mb-4 flex h-10 w-full items-center justify-center  rounded bg-blue-600 font-medium text-white hover:bg-blue-500 md:w-[47%]">
            Sign in
          </div>
          <span className="mb-4 flex items-center justify-center font-medium text-gray-600">
            Or
          </span>
          <div className="mb-4 flex h-10 w-full items-center justify-center   rounded bg-blue-600 font-medium text-white hover:bg-blue-500 md:w-[47%]">
            Sign up
          </div>
        </div>
        <div className="flex h-10 items-center justify-center pb-4">
          <span className="font-medium text-blue-600">Forgot password?</span>
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
