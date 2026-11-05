function Register() {
  return (
    <div className="flex  justify-center mt-7">
    <div className="bg-blue-200 text-[20px] flex flex-col border-2 h-[530px] w-[500px] gap-6 pl-[40px] pt-7 rounded-3xl">
    
      <h1 className="justify-center flex pr-[40px] font-bold text-2xl">Create your account</h1>
      <div className=" flex flex-col gap-2">
        <label htmlFor="" className="font-bold">Name</label>
        <input type="text" name="" id="" className="border-2 outline-0 w-[420px] h-[40px] rounded-lg pl-1.5" />

        <label htmlFor="" className="mt-5 font-bold">Email</label>
        <input type="email" name="" id="" className="border-2 outline-0 w-[420px] h-[40px] rounded-lg pl-1.5" />

        <label htmlFor="" className="mt-5 font-bold">Password</label>
        <input type="password" name="" id="" className="border-2 outline-0 w-[420px] h-[40px] rounded-lg pl-1.5" />
      </div>

      <div className="flex justify-center pr-[40px]">
        <button type="submit" className="bg-blue-600 text-white hover:bg-blue-800 w-[420px] h-[50px] rounded-xl cursor-pointer font-bold">Register Now</button>
      </div>
      <div>
        <p className="justify-center gap-2 flex pr-[40px]">Already have an account <a href="" className="text-blue-500 hover:underline font-bold">Log in</a></p>
      </div>
      </div>
    </div>
  )
}

export default Register
