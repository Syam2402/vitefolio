import React from 'react'

const About = () => {
    return(
        <section>
            <section className="text-gray-600 body-font" id ="about">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" >
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About
        {/* <br className="hidden lg:inline-block"/>About Me */}
      </h1>
      <p className="mb-8 leading-relaxed"> I'm a passionate Front-end Developer with a focus on modern annd responsive applications and a strong foundation in front-end technologies. I strive to create seamless and efficient user interfaces. </p>
      <p className="mb-8 leading-relaxed"> Click the below button to view my resume and to know more about my self.</p>

      <div className="flex justify-center">
        <a href="https://drive.google.com/file/d/1PyEb_fQSYcvFsUkseytpN33PrMp9nPnw/view?usp=sharing" target = "_blank">
        <button className="inline-flex text-white bg-blue-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg">Resume</button>
        </a>
        {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-3/6">
      <img className="object-cover object-center rounded" alt="hero" src="./quote.png"/>
    </div>
  </div>
</section>
        </section>
    )
}

export default About;