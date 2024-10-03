import NoteIcon from '../../Assets/Icons/Note.svg'
import DineInIcon from '../../Assets/Icons/Dine-in.svg'
import { useState } from 'react'

const FoodPlaceOrder = () => {
    const [takeaway, setTakeaway] = useState(false)
  return (
    <div className='absolute bottom-[20px] w-[365px] flex flex-col gap-y-[16px]'>
        <div className='flex gap-x-[9px] items-center justify-center'>
            <img src={NoteIcon} />
            <span className='font-opensans font-semibold text-[12px] leading-[16px]'>
                Add Special Request
            </span>
        </div>
        <div className='flex gap-x-[15px] items-center justify-center'>
            <span className={`font-poppins font-normal text-[14px] leading-[21px] ${takeaway?'text-[#3B82F6]':''}`}>Takeaway</span>
            <div className={`cursor-pointer w-[48px] rounded-[92px]  pt-[3px] ps-[4px] pb-[3px] pe-[4px] flex ${!takeaway?'bg-[#3B82F6] justify-end':'bg-amber-400 justify-start'}`}
                onClick={() => setTakeaway(!takeaway)}
            >
                <div className='rounded-[50%] p-[1px] w-[22px] h-[22px] bg-white '>
                    <img src={DineInIcon} className='rounded-[50%]'/>
                </div>
            </div>
            <span className={`font-poppins font-normal text-[14px] leading-[21px] ${!takeaway?'text-[#3B82F6]':''}`}>Dine in</span>

        </div>
        <div className='w-full text-center fontButtonDefault bg-gradient-to-r from-[#3B82F6] to-[#0053DB] cursor-pointer rounded-[8px] p-[8px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover active:shadow-none'
        >
            Place Order
        </div>
      
    </div>
  )
}

export default FoodPlaceOrder 
