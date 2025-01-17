import React from 'react'

const Navbar = () => {
    return(
       <section>
        <header className="body-font bg-blue-400 text-white">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white-900 mb-4 md:mb-0">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      <span className="ml-3 text-xl">Syamala</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a href='#home' className="mr-5 hover:text-white-900">Home</a>
      <a href='#about' className="mr-5 hover:text-white-900">About</a>
      <a href='#skills' className="mr-5 hover:text-white-900">Skills</a>
      <a href='#contact' className="mr-5 hover:text-white-900">Contact</a>
    </nav>
    <button className="inline-flex items-center bg-white-100 text-black-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
    >Dark / Light
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
       </section> 
    )
}
export default Navbar;