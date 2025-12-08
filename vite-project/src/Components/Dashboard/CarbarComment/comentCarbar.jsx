import React from 'react'


const CommentCarbar = () => {
  return (
    <div className='border border-gray-400 p-1 rounded-2xl w-[495px] h-[60px]'>
          <div className='h-[50px] flex justify-around'>
            <div className='rounded-4xl w-10 h-10'>
              <img className='rounded-4xl w-10 mt-1 h-10' src="/public/comment/ec1fcb714dd9fbf1c934fb21cd1d77bc00bc0c64.png" alt="" />
            </div>
            <div>
              <p className='font-bold text-[14px] text-gray-600 dark:text-gray-400'>محمد علی راه نشین</p>
              <p className='font-bold dark:text-gray-100'>دوره ی بسیار مفیدی بود ، استادانی عالی با تدریس متعالی </p>
            </div>
            <div className='font-bold text-[12px] text-gray-600 dark:text-gray-400'> 27 تیر 1404</div>
          </div>
    </div> 
  )
}

export default CommentCarbar
