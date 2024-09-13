import React, { useState } from 'react'
import WatterBottleImage from '../../../Assets/Food Images/WaterBottle.png'
import VegIcon from '../../../Assets/Icons/Veg.svg'
import TickIcon from '../../../Assets/Icons/Tick.svg'
import InfoIcon from '../../../Assets/Icons/Info.svg'
import NonVegIcon from '../../../Assets/Icons/NonVeg.svg'
import VeganIcon from '../../../Assets/Icons/Vegan.svg'
import EggIcon from '../../../Assets/Icons/Egg.svg'

type FoodItemProps = {
  setStartPosition: any;
}
const FoodItem = ({setStartPosition}: FoodItemProps) => {
  const [selected, setSelected] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const clickX = e.clientX;
    const clickY = e.clientY;

    setStartPosition({ top: clickY, left: clickX });

};
  return (
    <div className='flex flex-col'>
        <div className={`relative w-[100px] h-[100px] ${selected?'border-[#E1E1E1]':''} relative flex justify-center items-center rounded-[10px] border-[1px] border-[#E1E1E1]
                        hover:border-[#3B82F6] cursor-pointer`}
            onClick={() => setSelected(!selected)}
        >
            <div className={`${!selected?'hidden':''} absolute w-[18px] h-[18px] rounded-tl-[10px] rounded-br-[10px] -translate-x-[1px] flex justify-center items-center -translate-y-[1px] top-0 left-0 bg-[#3B82F6]`}
            >
              <img src={TickIcon} />
            </div>
            <img src={VegIcon} className='absolute w-[12px] h-[12px] top-[8px] right-[8px]' />
            <img src={WatterBottleImage} className='w-[74px] h-[74px]' />
        </div>
        <div className='flex flex-col cursor-pointer'
          onClick={(e) => handleClick(e)}
        >
          <span className='font-poppins font-normal text-[12px] leading-[18px]'>
              Watter Bottle
          </span>
          <div className='flex justify-between'>
            <div className='flex'>
              <span className='font-poppins font-normal text-[10px] leading-[18px] self-end opacity-50 me-[2px]'>(500ml)</span>
              <img src={InfoIcon} />
              </div> 
              <span className='font-poppins font-semibold text-[14px] leading-[18px]'>29/-</span>
          </div>
        </div>
        
    </div>
  )
}

export default FoodItem
