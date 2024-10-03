import React from 'react'
import { useAppDispatch, useAppSelector } from '../../State/hooks'
import { FloorType } from '../../State/Slices/floorSlice'
import { selectFloor } from '../../State/Slices/floorSlice'

const Floor = ({floor}: {floor: FloorType}) => {
    const currentFloor = useAppSelector(state => state.floor.currentFloor)
    const dispatch = useAppDispatch()
    return (
        currentFloor == floor
        ?
        <div className='font-opensans cursor-pointer font-normal text-CustomBrand-300 border-b-[1px] border-b-CustomBrand-300'>
            {floor == '1'?'1st Floor':floor == '2'?'2nd Floor':'3rd Floor'}
        </div>
        :
        <div className='font-opensans cursor-pointer font-normal text-[#808080]'
            onClick={() => dispatch(selectFloor(floor))}
        >
            {floor == '1'?'1st Floor':floor == '2'?'2nd Floor':'3rd Floor'}
        </div>
    )
}
const FloorNavbar = () => {
    
  return (
    <div className='flex gap-x-[24px] text-nowrap text-[16px]'>
        <Floor floor = '1' />
        <Floor floor = '2' />
        <Floor floor = '3' />
    </div>
  )
}

export default FloorNavbar
