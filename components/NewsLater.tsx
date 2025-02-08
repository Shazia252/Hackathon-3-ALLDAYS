import React from 'react'

const NewsLater = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container py-24 mx-auto flex flex-wrap">
      <div className="w-full mx-auto">
        <div className="flex flex-wrap w-[100%] bg-gray-100 py-32 px-10 relative mb-4">
        <img alt="img" className="w-full object-cover h-full absolute inset-0" src="/leatest.jpg" />
          <div className="text-center relative z-10 w-full">
            <h2 className="text-2xl text-[#151875] font-semibold title-font mb-2">Get Leatest Update By Subscribe</h2>
            <p className="leading-relaxed font-semibold text-[#151875]">0ur Newslater.</p>
            <button className="mt-8 bg-pink-500 text-white font-medium px-6 py-0.5 rounded shadow-md hover:bg-pink-600">Shop Now
              {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24"> */}
                <path d="M5 12h14M12 5l7 7-7 7" />
              {/* </svg> */}
            </button>
          </div>
        </div>
        <div className="flex flex-wrap -mx-2">
        </div>
      </div>
    </div>
  </section>
  )
}

export default NewsLater
