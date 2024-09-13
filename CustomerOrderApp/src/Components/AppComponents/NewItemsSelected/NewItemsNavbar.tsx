import React from 'react'

const NewItemsNavbar = () => {
  return (
    <div className='mt-[16px] w-full flex items-center pt-[4px] pe-[24px] pb-[4px] ps-[20px] bg-[#DDEBFF]'>
        <span className='font-poppins font-medium text-[12px] leading-[18px] flex-1'>New Item</span>
        <div className='w-[187px] flex items-center'>
            <span className='font-poppins font-medium text-[12px] leading-[18px] w-[121px] text-center'>Count</span>
            <span className='font-poppins flex-1 text-right font-medium text-[12px] leading-[18px]'>Price</span>
        </div>
    </div>
  )
}

export default NewItemsNavbar
