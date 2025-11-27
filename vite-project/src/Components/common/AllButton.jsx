import React from 'react'

const AllButton = ({title, handleReserveCourse}) => {
  return (
    <div className="flex justify-center pb-28 h-10">
        <button onClick={handleReserveCourse} className="border-2 border-fuchsia-600 mr-5 bg-fuchsia-700 dark:hover:bg-fuchsia-800 dark:bg-fuchsia-900 p-2 rounded-2xl md:rounded-2xl w-[368px] h-16 text-white text-xl dark:">
          {title}
        </button>
      </div>
  )
}

export default AllButton
