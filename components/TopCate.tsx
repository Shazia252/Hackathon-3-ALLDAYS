import React from 'react'

const TopCate = () => {
    return (
    <section className="text-gray-600 body-font">
        <h2 className="text-2xl md:text-3xl font-bold text-[#151875] text-center mb-1">Top Categories</h2>
        <div className="container px-1 py-24">
          <div className="flex justify-center m-4">
          <div className="lg:w-1/4 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-purple-500 shadow-purple-500 bg-gray-100" src="/chairt1.png" />
                <h2 className="text-[#151875] font-medium title-font tracking-wider text-sm">Mini LCW Chair</h2>
                <p className="text-[#151875]">$56.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block bg-gray-100" src="/chairt2.png" />
                <h2 className="text-[#151875] font-medium title-font tracking-wider text-sm">Mini LCW Chair</h2>
                <p className="text-[#151875]">$56.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block bg-gray-100" src="/chairt3.png" />
                <h2 className="text-[#151875] font-medium title-font tracking-wider text-sm">Mini LCW Chair</h2>
                <p className="text-[#151875]">$56.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block bg-gray-100" src="/chairt4.png" />
                <h2 className="text-[#151875] font-medium title-font tracking-wider text-sm">Mini LCW Chair</h2>
                <p className="text-[#151875]">$56.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
  )
}

export default TopCate
