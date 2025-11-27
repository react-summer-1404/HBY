import React from 'react'

const InputSearch = ({titel , color} ) => {
  return (
    <div>
      

<form class="max-w-lg mx-auto">
    <div class="flex">
       
             
        <div class="relative w-full">
            <input type="search" className="block p-2.5 w-full z-20 text-sm text-gray-900  rounded-e-lg
             rounded-xl border  border-[#9B0EE1]  dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder={titel} required />
            <button type="submit" style={{ backgroundColor: color }} className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full   text-white  rounded-e-lg border border-fuchsia-700 hover:bg-fuchsia-800 dark:hover:bg-fuchsia-700">
                {/* <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg> */}
                <img src="../../../../../public/imgHero/search.svg" className='w-5' alt="" />
                {/* <span class="sr-only">Search</span> */}
            </button>
        </div>
    </div>
</form>


    </div>
  )
}

export default InputSearch
