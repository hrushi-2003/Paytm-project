import React from 'react'

const AppBar = () => {
  return (
    <div className='bg-gray-400 h-20 shadow-lg flex justify-between'>
      <div className='text-4xl p-4'>
        HrushiPay
      </div>
      <div className='flex p-5 mr-6 '>
        <div className='text-2xl mr-4 p-2'>Hello, User</div>
        <div className='w-12 h-12 text-2xl bg-white rounded-full flex justify-center '>
          <div className='flex flex-col justify-center '>
            U
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppBar
