import React from 'react'
import Link from 'next/link'



const myAccount = () => {
  return (
    <div>
      
    {/* Page Header */}
    {/* <form name='Home' add1='Home . Page' add2=' . My Account'/> */}
  <div className="h-[286px] bg-[#F6F5FF] flex items-center py-16">
  <div className="container md:w-[1170px] mx-auto px-4">
    <h1 className="text-3xl text-center md:text-left font-bold mb-4">My Account</h1>
    <div className="flex justify-center md:justify-start items-center gap-2 text-sm">
      <Link href="/">Home</Link>
      <span>•</span>
      <Link href="/Pages">Pages</Link>
      <span>•</span>
      <span className="text-[#FB2E86]">My Account</span>
    </div>
  </div>
</div>

    <section className='contact-form border max-w-lg mx-auto my-20 p-8 bg-white shadow-md rounded-md'>
        <h2 className='text-4xl font-bold mb-6 text-center' data-aos="fade-up">Login</h2>
        <p className='text-1xl text-gray-400 font-medium mb-6 text-center' data-aos="fade-up">Please login using account detail bellow.</p>
       <form>
        <input type='text' placeholder='Email Address' className='w-full mb-4 px-4 py-3 border border-gray-600 rounded-md' required />
        <input type='password' placeholder='Password' className='w-full mb-4 px-4 py-3 border border-gray-600 rounded-md' required />
        <p className='text-1xl text-gray-400 font-medium mb-6 text-left' data-aos="fade-up">Forgot your password?</p>
        <button type='submit' className='w-full text-white hover:text-white py-2 bg-[#FB2E86] rounded-md'>Sing In</button>
        <p className='text-1xl text-gray-400 font-medium mb-6 py-10 text-center' data-aos="fade-up">Donnot have an Account?Create account</p>
       </form>
    </section>

    <img className="flex justify-center item-center md:ml-[300px] lg:h-20 md:h-4 w-70" src="/transp.png" alt="image" />

    </div>

  )
}

export default myAccount
