import React from 'react'
// import image from './image.jpeg'

const Hero = () => {
    return(
        <section className="text-gray-600 body-font " id = "home">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-1/6 md:w-3/6 mx-auto mb-5 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105 " alt="hero" src="./image.jpeg"/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Syamala Kirla</h1>
      <p className="mb-8 leading-relaxed"> I am a Front-end Developer</p>
      {/* <div className="flex justify-center">
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div> */}
    </div>
  </div>
</section>
    )
}

export default Hero;