import NewItemsNavbar from '../NewItemsNavbar'
import NewItemsListItem from '../NewItemsListItem'
import DownIcon from '../../../../Assets/Icons/Down.svg'
import PlacedItemSeparatingLine from '../../../../Assets/Icons/PlacedItemSeparatingLine.svg'
import { useState, useEffect } from 'react'
import useNewItemsSelected from './NewItemsListViewModel'

type NewItemsListProps = {
    viewAll?: boolean | null;
    setViewAll?: React.Dispatch<React.SetStateAction<boolean>> | null
}

const NewItemsList = ({viewAll = null, setViewAll}: NewItemsListProps) => {
    const {
        screenHeight, setScreenHeight, handleViewAll
    } = useNewItemsSelected({viewAll, setViewAll})
  return (
    <div className='w-full flex flex-col gap-y-[4px]'>
        <NewItemsNavbar />
        {
            viewAll != null && screenHeight < 750 && viewAll
            ?
            <div className='relative flex flex-col gap-y-[4px]'>
                <div className='z-10 cursor-pointer absolute flex justify-center items-center bg-white bg-opacity-80 top-0 bottom-0 left-0 right-0'
                    onClick={() => handleViewAll()}
                >
                    <div className='bg-[#C3DAFF] pt-[8px] pe-[16px] pb-[8px] ps-[16px] flex justify-center rounded-[15px] items-center gap-x-[4px]'>
                        <span className='font-poppins text-[10px] leading-[15px] font-normal '>View All</span>
                        <img src={DownIcon} />
                    </div>
                </div>
                <NewItemsListItem 
                    itemName='Water Bottle'
                    itemCount={1}
                />
            </div>
            :
            <div className='flex flex-col max-h-[150px] overflow-y-scroll tall:max-h-[150px]'>
                <NewItemsListItem 
                    itemName='Water Bottle'
                    itemCount={1}
                />
                <img src={PlacedItemSeparatingLine} />
                <NewItemsListItem
                    itemName='Fry Mutton Biryani'
                    itemCount={1}
                />
                <img src={PlacedItemSeparatingLine} />
                <NewItemsListItem
                    itemName='Veg Salads'
                    itemCount={55}
                />
                <img src={PlacedItemSeparatingLine} />
                <NewItemsListItem
                    itemName='Veg Salads'
                    itemCount={9}
                />
                <img src={PlacedItemSeparatingLine} />
            </div>
        }
        
        
    </div>
  )
}

export default NewItemsList
